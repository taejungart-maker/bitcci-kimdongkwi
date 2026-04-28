import { motion } from 'motion/react';
import { exhibition } from '../data/exhibition';

export default function CoverPage() {
  return (
    <div className="w-full h-full bg-[#0a0a0a] flex flex-col items-center justify-center relative overflow-hidden">
      {/* 글씨 없는 원본 그림을 배경으로 크게 */}
      <motion.div
        initial={{ opacity: 0, scale: 1.08 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 2, ease: "easeOut" }}
        className="absolute inset-0"
      >
        <img
          src={`${import.meta.env.BASE_URL}artworks/1.jpg`}
          alt={exhibition.title}
          className="w-full h-full object-cover opacity-75"
          loading="eager"
        />
        {/* Gradient overlay for text readability */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-black/30" />
      </motion.div>

      {/* Title overlay - 중앙 배치 */}
      <div className="relative z-10 text-center px-8">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.0 }}
          className="text-white/90 text-xs tracking-[0.3em] mb-5"
          style={{ fontFamily: "'Montserrat', sans-serif" }}
        >
          {exhibition.period}
        </motion.p>
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 1.5 }}
          className="text-white text-3xl md:text-4xl font-bold tracking-wide mb-4"
          style={{ fontFamily: "'Noto Sans KR', sans-serif" }}
        >
          {exhibition.title}
        </motion.h1>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 2.2 }}
          className="text-white/80 text-sm tracking-[0.2em] mb-8"
          style={{ fontFamily: "'Noto Sans KR', sans-serif" }}
        >
          {exhibition.venue.split('(')[0].trim()}
        </motion.p>

        {/* 출품 작가 - 한 명씩 등장 */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 3.5 }}
          className="text-white/70 text-xs tracking-[0.2em] mb-3"
          style={{ fontFamily: "'Noto Sans KR', sans-serif" }}
        >
          출품 작가
        </motion.p>
        <div className="flex flex-wrap justify-center gap-x-1.5 gap-y-1 max-w-sm mx-auto">
          {exhibition.artists.map((artist, i) => (
            <motion.span
              key={artist}
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.8,
                delay: 4 + i * 0.15,
                ease: "easeOut",
              }}
              className="text-white/80 text-[14px] tracking-wide"
              style={{ fontFamily: "'Noto Sans KR', sans-serif" }}
            >
              {artist}{i < exhibition.artists.length - 1 ? ',' : ''}
            </motion.span>
          ))}
        </div>
      </div>

      {/* Swipe hint */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: [0, 0.6, 0] }}
        transition={{ duration: 2, delay: 8, repeat: Infinity, repeatDelay: 1 }}
        className="absolute bottom-10 text-white/50 text-xs tracking-[0.4em]"
        style={{ fontFamily: "'Noto Sans KR', sans-serif" }}
      >
        넘 겨 보 기  →
      </motion.div>
    </div>
  );
}
