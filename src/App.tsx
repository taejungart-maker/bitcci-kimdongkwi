import { useState, useRef, useEffect, useMemo } from 'react';
import { GlobalErrorBoundary } from './components/GlobalErrorBoundary';
import CoverPage from './components/CoverPage';
import ArtistBioPage from './components/ArtistBioPage';
import ArtistAchievementsPage from './components/ArtistAchievementsPage';
import ArtworkPage from './components/ArtworkPage';
import EndingPage from './components/EndingPage';
import { exhibition } from './data/exhibition';

// cover + poster + foreword + artworks + ending
const TOTAL_PAGES = 4 + exhibition.artworks.length;

export default function App() {
  return (
    <GlobalErrorBoundary>
      <AppContent />
    </GlobalErrorBoundary>
  );
}

function AppContent() {
  const [currentPage, setCurrentPage] = useState(0);
  const currentTranslate = useRef(0);
  const prevTranslate = useRef(0);
  const startX = useRef(0);
  const startY = useRef(0);
  const startTime = useRef(0);
  const isDragging = useRef(false);
  const isScrolling = useRef(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const audioRef = useRef<HTMLAudioElement | HTMLVideoElement | null>(null);
  const bgmRef = useRef<HTMLAudioElement | null>(null);
  const [bgmPlaying, setBgmPlaying] = useState(false);

  // 50페이지+ 성능 최적화: 현재 페이지 기준 앞뒤 2페이지만 렌더링
  const RENDER_RANGE = 2;
  const isVisible = (index: number) => Math.abs(currentPage - index) <= RENDER_RANGE;

  // 현재 페이지의 배경색 계산 (페이지 인디케이터 스타일링용)
  // 작품 페이지 모두 흰 배경으로 통일했으므로 표지·엔딩만 어두움
  const currentBgIsDark = useMemo(() => {
    if (currentPage === 0) return true; // cover
    if (currentPage === TOTAL_PAGES - 1) return true; // ending
    return false; // 작가 약력·경력·작품 페이지 모두 흰 배경
  }, [currentPage]);

  // Initialize BGM + page flip sound
  useEffect(() => {
    const base = import.meta.env.BASE_URL;

    // BGM: mp3 (모든 브라우저 호환)
    const bgm = new Audio(`${base}bgm.mp3`);
    bgm.loop = true;
    bgm.volume = 0.3;
    bgm.preload = 'auto';
    bgmRef.current = bgm;

    // Page flip sound
    const sfx = document.createElement('video');
    sfx.src = 'https://raw.githubusercontent.com/taejungart-maker/0213/main/sound/20260302_book%20sound.mov';
    sfx.volume = 0.7;
    sfx.preload = 'auto';
    sfx.playsInline = true;
    sfx.style.display = 'none';
    document.body.appendChild(sfx);
    audioRef.current = sfx;

    // 첫 터치: BGM 재생 시도 + 효과음 활성화
    const onFirstInteraction = () => {
      if (bgmRef.current) {
        bgmRef.current.play().then(() => {
          setBgmPlaying(true);
        }).catch((err) => {
          console.error('BGM play failed:', err);
        });
      }
      if (audioRef.current) {
        audioRef.current.play().then(() => {
          audioRef.current?.pause();
          (audioRef.current as HTMLMediaElement).currentTime = 0;
        }).catch(() => {});
      }
      document.removeEventListener('touchstart', onFirstInteraction);
      document.removeEventListener('click', onFirstInteraction);
    };

    document.addEventListener('touchstart', onFirstInteraction);
    document.addEventListener('click', onFirstInteraction);

    return () => {
      if (bgmRef.current) { bgmRef.current.pause(); bgmRef.current = null; }
      if (audioRef.current) { audioRef.current.pause(); document.body.removeChild(sfx); audioRef.current = null; }
      document.removeEventListener('touchstart', onFirstInteraction);
      document.removeEventListener('click', onFirstInteraction);
    };
  }, []);

  const toggleBgm = (e: React.MouseEvent | React.TouchEvent) => {
    e.stopPropagation();
    if (!bgmRef.current) return;
    if (bgmPlaying) {
      bgmRef.current.pause();
      setBgmPlaying(false);
    } else {
      bgmRef.current.play().then(() => setBgmPlaying(true)).catch(() => {});
    }
  };

  // Play sound on page change
  useEffect(() => {
    const playSound = async () => {
      if (audioRef.current && currentPage !== 0) {
        try {
          audioRef.current.currentTime = 0;
          await audioRef.current.play();
        } catch { /* blocked by browser */ }
      }
    };
    playSound();
  }, [currentPage]);

  // Keyboard Navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowLeft') handlePrevious();
      else if (e.key === 'ArrowRight') handleNext();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [currentPage]);

  const handlePrevious = () => {
    if (currentPage > 0) setCurrentPage(prev => prev - 1);
  };

  const handleNext = () => {
    if (currentPage < TOTAL_PAGES - 1) setCurrentPage(prev => prev + 1);
  };

  // Touch handlers
  const handleTouchStart = (e: React.TouchEvent) => {
    if (e.touches.length > 1) { isDragging.current = false; return; }
    isDragging.current = true;
    isScrolling.current = false;
    startX.current = e.touches[0].clientX;
    startY.current = e.touches[0].clientY;
    currentTranslate.current = 0;
    prevTranslate.current = 0;
    startTime.current = Date.now();
    if (containerRef.current) containerRef.current.style.transition = 'none';
  };

  const handleMouseDown = (e: React.MouseEvent) => {
    isDragging.current = true;
    startX.current = e.clientX;
    currentTranslate.current = 0;
    prevTranslate.current = 0;
    startTime.current = Date.now();
    if (containerRef.current) containerRef.current.style.transition = 'none';
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    // 두 손가락이면 핀치 줌 허용
    if (e.touches.length >= 2) { isDragging.current = false; return; }
    if (!isDragging.current) return;
    if (isScrolling.current) return;

    const currentX = e.touches[0].clientX;
    const currentY = e.touches[0].clientY;
    const diffX = currentX - startX.current;
    const diffY = currentY - startY.current;

    if (Math.abs(diffX) < 40 && Math.abs(diffY) < 40) return;

    if (Math.abs(diffY) > Math.abs(diffX)) {
      isScrolling.current = true;
      return;
    }

    if (e.cancelable) e.preventDefault();
    currentTranslate.current = diffX;

    if (containerRef.current) {
      containerRef.current.style.transform = `translate3d(calc(-${currentPage * 100}% + ${diffX}px), 0, 0)`;
    }
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging.current) return;
    const diff = e.clientX - startX.current;
    currentTranslate.current = diff;
    if (containerRef.current) {
      containerRef.current.style.transform = `translate3d(calc(-${currentPage * 100}% + ${diff}px), 0, 0)`;
    }
  };

  const handleDragEnd = () => {
    if (isScrolling.current) { isScrolling.current = false; isDragging.current = false; return; }
    if (!isDragging.current) return;
    isDragging.current = false;

    const movedBy = currentTranslate.current;
    const duration = Date.now() - startTime.current;
    const velocity = Math.abs(movedBy) / duration;
    const isFastSwipe = velocity > 0.5;

    if (containerRef.current) containerRef.current.style.transition = '';

    if (Math.abs(movedBy) < 5) { currentTranslate.current = 0; return; }

    if ((movedBy < -50 || (movedBy < -30 && isFastSwipe)) && currentPage < TOTAL_PAGES - 1) {
      setCurrentPage(prev => prev + 1);
    } else if ((movedBy > 50 || (movedBy > 30 && isFastSwipe)) && currentPage > 0) {
      setCurrentPage(prev => prev - 1);
    } else {
      if (containerRef.current) containerRef.current.style.transform = '';
    }

    currentTranslate.current = 0;
    prevTranslate.current = 0;
  };

  const handleMouseLeave = () => { if (isDragging.current) handleDragEnd(); };

  const [showControls, setShowControls] = useState(false);
  const hideTimer = useRef<ReturnType<typeof setTimeout>>(undefined);

  const flashControls = () => {
    setShowControls(true);
    clearTimeout(hideTimer.current);
    hideTimer.current = setTimeout(() => setShowControls(false), 1000);
  };

  useEffect(() => { flashControls(); }, [currentPage]);

  return (
    <div
      className="size-full flex items-center justify-center bg-white relative overflow-hidden"
      onClick={flashControls}
      onTouchStart={flashControls}
    >
      {/* Page Container */}
      <div
        className="w-full h-full flex will-change-transform transition-transform duration-600 ease-[cubic-bezier(0.23,1,0.32,1)]"
        style={{
          transform: `translateX(-${currentPage * 100}%)`,
          touchAction: 'pan-y pinch-zoom',
        }}
        ref={containerRef}
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleDragEnd}
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={handleDragEnd}
        onMouseLeave={handleMouseLeave}
      >
        {/* Page 1: Cover */}
        <div className="w-full h-full flex-shrink-0">
          {isVisible(0) && <CoverPage />}
        </div>

        {/* Page 2: 작가 약력 */}
        <div className="w-full h-full flex-shrink-0 flex items-center justify-center">
          {isVisible(1) && <ArtistBioPage />}
        </div>

        {/* Page 3: 전시·수상·경력 */}
        <div className="w-full h-full flex-shrink-0 flex items-center justify-center">
          {isVisible(2) && <ArtistAchievementsPage />}
        </div>

        {/* Artwork Pages */}
        {exhibition.artworks.map((artwork, index) => {
          const pageIndex = index + 3;
          // darkBg가 아닌 작품은 홀짝으로 녹색/보라색 배경 자동 배정
          const themed = {
            ...artwork,
            bgTheme: artwork.darkBg ? undefined : (artwork.bgTheme ?? (index % 2 === 0 ? 'green' as const : 'purple' as const)),
          };
          return (
            <div key={artwork.id} className="w-full h-full flex-shrink-0">
              {isVisible(pageIndex) && <ArtworkPage artwork={themed} />}
            </div>
          );
        })}

        {/* Ending Page */}
        <div className="w-full h-full flex-shrink-0">
          {isVisible(TOTAL_PAGES - 1) && <EndingPage />}
        </div>
      </div>

      {/* BGM Toggle Button */}
      <button
        onClick={toggleBgm}
        onTouchEnd={(e) => { e.preventDefault(); toggleBgm(e); }}
        className={`absolute top-5 right-5 z-50 w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300 ${
          currentBgIsDark
            ? 'bg-white/15 backdrop-blur-sm text-white/70 hover:bg-white/25'
            : 'bg-black/8 backdrop-blur-sm text-gray-600 hover:bg-black/15'
        }`}
      >
        {bgmPlaying ? (
          <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5" />
            <path d="M15.54 8.46a5 5 0 0 1 0 7.07" />
            <path d="M19.07 4.93a10 10 0 0 1 0 14.14" />
          </svg>
        ) : (
          <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5" />
            <line x1="23" y1="9" x2="17" y2="15" />
            <line x1="17" y1="9" x2="23" y2="15" />
          </svg>
        )}
      </button>

      {/* Page Indicator - 배경에 맞춰 색상 변경 */}
      <div
        className={`absolute bottom-6 left-1/2 -translate-x-1/2 z-50 px-4 py-1.5 rounded-full shadow-sm transition-all duration-500 ${
          showControls ? 'opacity-80' : 'opacity-0'
        } ${
          currentBgIsDark
            ? 'bg-white/15 backdrop-blur-sm'
            : 'bg-black/8 backdrop-blur-sm'
        }`}
        style={{ fontFamily: "'Montserrat', sans-serif" }}
      >
        <span className={`text-sm font-medium tracking-widest ${
          currentBgIsDark ? 'text-white/70' : 'text-gray-600'
        }`}>
          {currentPage + 1} / {TOTAL_PAGES}
        </span>
      </div>
    </div>
  );
}
