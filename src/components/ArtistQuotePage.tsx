import { motion } from 'motion/react';

export default function ArtistQuotePage() {
  return (
    <div className="w-full h-full bg-white flex items-center justify-center px-8 py-12 relative overflow-hidden">
      {/* 배경 장식 - 미세한 색동목 톤 그라데이션 */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            'radial-gradient(ellipse at center, rgba(124,106,173,0.04) 0%, transparent 70%)',
        }}
      />

      {/* 좌상단 - 큰 여는 따옴표 */}
      <motion.div
        initial={{ opacity: 0, scale: 0.7, y: -10 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 1.2, ease: 'easeOut' }}
        className="absolute top-[18%] left-[10%] md:left-[15%]"
        style={{
          fontFamily: "'Noto Serif', serif",
          fontSize: 'clamp(80px, 14vw, 140px)',
          color: '#7c6aad',
          opacity: 0.18,
          lineHeight: 1,
          fontWeight: 700,
        }}
      >
        “
      </motion.div>

      {/* 메인 컨텐츠 */}
      <div className="relative z-10 max-w-2xl mx-auto text-center flex flex-col items-center px-4">
        {/* 인용구 - 한 줄씩 등장 (자연스러운 의미 단위 2줄) */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5, ease: 'easeOut' }}
          className="text-[17px] md:text-[22px] text-gray-700 leading-[2.2] tracking-wide break-keep mb-3"
          style={{
            fontFamily: "'Noto Serif', 'Noto Sans KR', serif",
            fontStyle: 'italic',
          }}
        >
          색동목 안료로 한국 고유의 결과 빛을 빚어내며,
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1.3, ease: 'easeOut' }}
          className="text-[17px] md:text-[22px] text-gray-700 leading-[2.2] tracking-wide break-keep"
          style={{
            fontFamily: "'Noto Serif', 'Noto Sans KR', serif",
            fontStyle: 'italic',
          }}
        >
          전통의 호흡을 오늘에 잇는다.
        </motion.p>

        {/* 가는 라인 - 좌우로 그려짐 */}
        <motion.div
          initial={{ width: 0 }}
          animate={{ width: '64px' }}
          transition={{ duration: 1.4, delay: 2.1, ease: 'easeOut' }}
          className="h-[1px] bg-[#7c6aad]/40 my-12"
        />

        {/* 작가 사인 (한글만) */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 2.6 }}
          className="text-[18px] text-gray-800 tracking-[0.4em] font-bold"
          style={{ fontFamily: "'Noto Sans KR', sans-serif" }}
        >
          김 동 귀
        </motion.p>

        {/* 보라색 도장 점 */}
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 3.1, ease: 'backOut' }}
          className="mt-5 w-2 h-2 rounded-full"
          style={{ backgroundColor: '#7c6aad' }}
        />
      </div>

      {/* 우하단 - 큰 닫는 따옴표 */}
      <motion.div
        initial={{ opacity: 0, scale: 0.7, y: 10 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 1.2, delay: 1.8, ease: 'easeOut' }}
        className="absolute bottom-[12%] right-[10%] md:right-[15%]"
        style={{
          fontFamily: "'Noto Serif', serif",
          fontSize: 'clamp(80px, 14vw, 140px)',
          color: '#7c6aad',
          opacity: 0.18,
          lineHeight: 1,
          fontWeight: 700,
        }}
      >
        ”
      </motion.div>

      {/* 하단 부제 (한글) */}
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.4 }}
        transition={{ duration: 1, delay: 3.4 }}
        className="absolute bottom-6 left-1/2 -translate-x-1/2 text-[11px] text-gray-400 tracking-[0.5em] whitespace-nowrap"
        style={{ fontFamily: "'Noto Sans KR', sans-serif" }}
      >
        작 가 의 말
      </motion.p>
    </div>
  );
}
