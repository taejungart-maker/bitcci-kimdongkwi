import { useState, useRef, useEffect } from 'react';
import { motion } from 'motion/react';
import type { Artwork } from "../data/exhibition";

interface ArtworkPageProps {
  artwork: Artwork;
}

export default function ArtworkPage({ artwork }: ArtworkPageProps) {
  const clipPath = artwork.clipPath || "inset(0% 0% 0% 0%)";
  const maxWidth = artwork.maxWidth || '85vw';
  const maxHeight = artwork.maxHeight || '42vh';

  const scrollRef = useRef<HTMLDivElement>(null);
  const [canScroll, setCanScroll] = useState(false);
  const [scrolledToBottom, setScrolledToBottom] = useState(false);

  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;
    const check = () => {
      setCanScroll(el.scrollHeight > el.clientHeight + 4);
    };
    check();
    window.addEventListener('resize', check);
    return () => window.removeEventListener('resize', check);
  }, [artwork.description]);

  const handleScroll = () => {
    const el = scrollRef.current;
    if (!el) return;
    setScrolledToBottom(el.scrollTop + el.clientHeight >= el.scrollHeight - 10);
  };

  // 색상 팔레트 - 순수 흰 배경 시범 (darkBg 옵션 무시)
  const bgBase = '#ffffff';
  const bgGradient = '#ffffff';
  const textPrimary = '#1a1a2e';
  const textSecondary = '#4a4560';
  const textDesc = '#3d3852';
  const accentColor = '#7c6aad';
  const dividerBg = '#b8a8cc';

  return (
    <div
      className="w-full h-full flex flex-col"
      style={{ background: bgGradient }}
    >
      {/* Artwork Image - 그림자로 입체감 */}
      <motion.div
        initial={{ opacity: 0, scale: 0.97 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        className="flex items-center justify-center shrink-0 px-4 pt-7 pb-4"
      >
        <img
          src={`${import.meta.env.BASE_URL}${artwork.image}`}
          alt={artwork.title}
          className="h-auto object-contain"
          style={{
            clipPath,
            maxWidth,
            maxHeight,
            width: 'auto',
            boxShadow: '0 8px 32px rgba(0,0,0,0.12), 0 2px 8px rgba(0,0,0,0.06)',
          }}
          loading="lazy"
        />
      </motion.div>

      {/* Caption */}
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.25 }}
        className="w-full text-center shrink-0 px-5 pt-1 pb-1"
      >
        {/* 작가명 (작게, 위) */}
        {artwork.artist && (
          <p
            className="text-[12px] tracking-[0.5em] mb-3 opacity-70"
            style={{ fontFamily: "'Noto Sans KR', sans-serif", color: textPrimary }}
          >
            {artwork.artist}
          </p>
        )}
        {/* 제목 (인용구 스타일 - Noto Serif italic, 강조) */}
        <p
          className="text-[19px] md:text-[21px] leading-relaxed mb-3 whitespace-pre-line tracking-wide"
          style={{
            fontFamily: "'Noto Serif', 'Noto Sans KR', serif",
            fontStyle: 'italic',
            color: textPrimary,
          }}
        >
          {artwork.title}
        </p>
        {/* 보라 라인 (인용구 페이지와 통일) */}
        <div
          className="w-8 h-[1px] mx-auto mb-3"
          style={{ backgroundColor: accentColor, opacity: 0.5 }}
        />
        {/* 재료 / 크기 / 연도 (한글, 차분한 톤) */}
        <p
          className="text-[12.5px] leading-relaxed tracking-wider"
          style={{
            fontFamily: "'Noto Sans KR', sans-serif",
            color: textSecondary,
            opacity: 0.7,
          }}
        >
          {artwork.material} · {artwork.size} · {artwork.year}
        </p>
      </motion.div>

      {/* Description */}
      {artwork.description ? (
        <div className="flex-1 relative min-h-0">
          <div
            ref={scrollRef}
            onScroll={handleScroll}
            className="absolute inset-0 overflow-y-auto px-6 pb-20"
            style={{ touchAction: 'pan-y pinch-zoom' }}
          >
            <div className="max-w-lg mx-auto pt-3">
              <div
                className="w-10 h-[1.5px] mx-auto mb-5 rounded-full"
                style={{ backgroundColor: dividerBg }}
              />
              <p
                className="text-[15px] leading-[2] text-center break-keep whitespace-pre-line"
                style={{
                  fontFamily: "'Noto Sans KR', sans-serif",
                  color: textDesc,
                  letterSpacing: '0.01em',
                }}
              >
                {artwork.description.split('\n').map((line, i) => {
                  const isSmall = line.startsWith('생걸') || line.startsWith('............');
                  return (
                    <span key={i}>
                      {i > 0 && '\n'}
                      {isSmall ? <span style={{ fontSize: '11px' }}>{line}</span> : line}
                    </span>
                  );
                })}
              </p>
            </div>
          </div>

          {/* 스크롤 힌트 */}
          {canScroll && !scrolledToBottom && (
            <div
              className="absolute bottom-0 left-0 right-0 h-16 pointer-events-none"
              style={{
                background: `linear-gradient(to bottom, transparent, ${bgBase})`,
              }}
            />
          )}
        </div>
      ) : (
        <div className="flex-1" />
      )}
    </div>
  );
}
