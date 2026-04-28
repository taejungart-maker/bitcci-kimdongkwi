import { motion } from 'motion/react';
import { exhibition } from '../data/exhibition';

export default function EndingPage() {
  return (
    <div className="w-full h-full relative overflow-hidden">
      {/* 배경 이미지 - 작업실 (흐림 + 어둠) */}
      <motion.div
        initial={{ scale: 1.1, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 2.5, ease: 'easeOut' }}
        className="absolute inset-0"
      >
        <img
          src={`${import.meta.env.BASE_URL}atelier.jpg`}
          alt="웅석공방 작업실"
          className="w-full h-full object-cover"
          style={{
            filter: 'blur(2.5px) brightness(0.45) saturate(0.8)',
            transform: 'scale(1.05)',
          }}
        />
        {/* 어두운 그라데이션 오버레이 (텍스트 가독성 + 깊이감) */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/55 via-black/35 to-black/85" />
        {/* 미세한 비네팅 (가장자리 어둡게) */}
        <div
          className="absolute inset-0"
          style={{
            background:
              'radial-gradient(ellipse at center, transparent 30%, rgba(0,0,0,0.5) 100%)',
          }}
        />
      </motion.div>

      {/* 컨텐츠 */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2, delay: 0.3, ease: 'easeOut' }}
        className="relative z-10 w-full h-full flex items-center justify-center px-8"
      >
        <div className="text-center max-w-md">
          {/* Thank you 라벨 */}
          <motion.p
            initial={{ opacity: 0, letterSpacing: '0.6em' }}
            animate={{ opacity: 0.6, letterSpacing: '0.4em' }}
            transition={{ duration: 1.5, delay: 0.5 }}
            className="text-white text-xs uppercase mb-7"
            style={{ fontFamily: "'Montserrat', sans-serif" }}
          >
            Thank You
          </motion.p>

          {/* 메인 타이틀 */}
          <motion.h2
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 1 }}
            className="text-white font-bold mb-2 tracking-wide"
            style={{ fontFamily: "'Noto Sans KR', sans-serif" }}
          >
            <span className="text-xl block opacity-80 mb-1">김동귀 작가의</span>
            <span className="text-4xl md:text-5xl">공방으로의 초대</span>
          </motion.h2>

          {/* 영문 부제 */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.5 }}
            transition={{ duration: 1, delay: 1.5 }}
            className="text-white text-[11px] tracking-[0.5em] uppercase mt-4"
            style={{ fontFamily: "'Montserrat', sans-serif" }}
          >
            Atelier · Ungseok
          </motion.p>

          {/* 가는 라인 */}
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: '48px' }}
            transition={{ duration: 1.2, delay: 1.8 }}
            className="h-[1px] bg-white/30 mx-auto my-8"
          />

          {/* 공방 정보 */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 2 }}
            className="text-white/55 text-[13px] tracking-wider mb-6"
            style={{ fontFamily: "'Noto Sans KR', sans-serif" }}
          >
            웅석공방 · 김동귀목조형 연구소
            <br />
            <span className="text-white/35 text-[11px]">경상남도 산청 · 진주</span>
          </motion.p>

          {/* 전시 정보 */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 2.3 }}
            className="text-white/40 text-[12px] space-y-1 mb-8"
            style={{ fontFamily: "'Noto Sans KR', sans-serif" }}
          >
            <p>{exhibition.period}</p>
            <p>{exhibition.venue}</p>
          </motion.div>

          {/* 시그니처 인용 */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.5, delay: 2.6 }}
          >
            <div className="w-6 h-[1px] bg-white/20 mx-auto mb-5" />
            <p
              className="text-white/55 text-[13px] tracking-wider"
              style={{
                fontFamily: "'Noto Serif', 'Noto Sans KR', serif",
                fontStyle: 'italic',
              }}
            >
              "색동목에 깃든 한국의 결"
            </p>
          </motion.div>
        </div>
      </motion.div>

      {/* 하단 우측 작은 출처 */}
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.3 }}
        transition={{ duration: 1, delay: 3 }}
        className="absolute bottom-4 right-5 text-white text-[10px] tracking-[0.2em]"
        style={{ fontFamily: "'Montserrat', sans-serif" }}
      >
        UNGSEOK ATELIER, SANCHEONG
      </motion.p>
    </div>
  );
}
