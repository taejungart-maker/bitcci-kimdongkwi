import { motion } from 'motion/react';

const BASE = import.meta.env.BASE_URL;

const photos = [
  { id: 1,  caption: '작품과 마주한 자리' },
  { id: 2,  caption: '결을 빚는 손길' },
  { id: 3,  caption: '한 점, 한 점, 시간이 쌓이다' },
  { id: 4,  caption: '인사아트센터 경남갤러리 — 색동목전' },
  { id: 5,  caption: '전통의 호흡, 가구로 이어지다' },
  { id: 6,  caption: '직접 마주하는 결의 순간' },
  { id: 7,  caption: '결을 마주보다' },
  { id: 8,  caption: '시선이 머문 자리' },
  { id: 9,  caption: '색동의 흐름' },
  { id: 10, caption: '작품 사이에서' },
  { id: 11, caption: '색동의 호흡' },
  { id: 12, caption: '색동의 시간이 깃든 자리' },
  { id: 13, caption: '한 점 한 점 빚어내는 손' },
  { id: 14, caption: '전시의 한가운데서' },
];

export default function ArtistPhotosPage() {
  return (
    <div className="w-full h-full bg-[#f5f1e6] relative overflow-hidden">
      <div
        className="absolute inset-0 overflow-y-auto px-6 py-14 z-10"
        style={{ touchAction: 'pan-y pinch-zoom' }}
      >
        <div className="max-w-3xl mx-auto pb-20">
          {/* Header */}
          <header className="text-center pt-2 pb-10">
            <motion.div
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <h1
                className="text-2xl md:text-3xl font-light text-[#1a1a1a] mb-2 tracking-[0.2em]"
                style={{ fontFamily: "'Noto Serif KR', serif" }}
              >
                작가의 시간
              </h1>
              <p
                className="text-[12px] tracking-[0.3em] text-[#7a6e5d]"
                style={{ fontFamily: "'Montserrat', sans-serif" }}
              >
                30 Years of Hands
              </p>
              <div className="w-12 h-[1px] bg-[#7a6e5d]/40 mx-auto mt-5" />
            </motion.div>
          </header>

          {/* 사진 그리드 — 2열 (모바일 1열) */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-7">
            {photos.map((p, i) => (
              <motion.figure
                key={p.id}
                initial={{ opacity: 0, y: 14 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.05 * i, ease: 'easeOut' }}
                className="flex flex-col"
              >
                <div className="relative overflow-hidden rounded-sm shadow-md bg-white">
                  <img
                    src={`${BASE}photos/${p.id}.jpg?v=2`}
                    alt={p.caption}
                    className="w-full h-auto block"
                    loading="lazy"
                  />
                </div>
                <figcaption
                  className="text-[13.5px] text-[#3a3a3a] tracking-[0.05em] mt-3 italic text-center px-2 leading-relaxed"
                  style={{ fontFamily: "'Noto Serif KR', serif" }}
                >
                  {p.caption}
                </figcaption>
              </motion.figure>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
