import { motion } from 'motion/react';

const noteLines = [
  '나는 나무를 주로 다루지만, 결국 시간에 대해 작업한다.',
  '색동목은 나에게 재료가 아니라 시간이 쌓이는 구조다.',
  '나무의 결은 이미 지나온 시간의 흔적이고,',
  '나는 그 위에 또 다른 시간을 겹쳐 올린다.',
  '',
  '달항아리는 완성된 형태가 아니라',
  '끊임없이 생성되는 존재로 바라본다.',
  '',
  '노을과 일출은 색의 흐름을 통해',
  '시간의 이동과 감정의 흔적을 담는다.',
  '',
  '전통의 구조와 리듬은 재현이 아니라',
  '새로운 결로 다시 구성된다.',
  '',
  '나의 작업은',
  '무엇을 제작할까 라기보다',
  '어떻게 시간과 결을 쌓는가에 대한 과정이다.',
];

export default function ArtistNotePage() {
  return (
    <div
      className="w-full h-full bg-white overflow-y-auto px-6 py-12 relative"
      style={{ touchAction: 'pan-y pinch-zoom' }}
    >
      {/* 미세한 색감 그라데이션 배경 */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            'radial-gradient(ellipse at center, rgba(124,106,173,0.04) 0%, transparent 70%)',
        }}
      />

      <div className="max-w-2xl mx-auto flex flex-col items-center pb-16 relative z-10">
        {/* 상단 라벨 - 작가 노트 */}
        <motion.h1
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.3 }}
          className="text-[18px] md:text-[20px] text-gray-700 tracking-[0.4em] mt-4 mb-2"
          style={{ fontFamily: "'Noto Sans KR', sans-serif", fontWeight: 500 }}
        >
          작 가 노 트
        </motion.h1>

        {/* 가는 라인 */}
        <motion.div
          initial={{ width: 0 }}
          animate={{ width: '40px' }}
          transition={{ duration: 1, delay: 0.6 }}
          className="h-[1px] bg-[#7c6aad]/40 mb-12"
        />

        {/* 본문 - 한 줄씩 페이드 인 */}
        <div className="flex flex-col items-center gap-0">
          {noteLines.map((line, i) => {
            // 빈 줄은 간격용
            if (line === '') {
              return <div key={i} className="h-4" aria-hidden />;
            }
            return (
              <motion.p
                key={i}
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.8,
                  delay: 1.2 + i * 0.15,
                  ease: 'easeOut',
                }}
                className="text-[15.5px] md:text-[17px] text-gray-700 leading-[2.1] tracking-wide break-keep text-center"
                style={{
                  fontFamily: "'Noto Serif KR', 'Noto Serif', 'Noto Sans KR', serif",
                  fontWeight: 300,
                }}
              >
                {line}
              </motion.p>
            );
          })}
        </div>

        {/* 가는 라인 */}
        <motion.div
          initial={{ width: 0 }}
          animate={{ width: '40px' }}
          transition={{ duration: 1.2, delay: 4.5 }}
          className="h-[1px] bg-[#7c6aad]/40 mt-12 mb-6"
        />

        {/* 서명 */}
        <motion.div
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 4.8 }}
          className="flex flex-col items-center gap-2"
        >
          <div className="flex items-center justify-center gap-3">
            <span className="text-[#7c6aad]/40 text-[14px] font-light">—</span>
            <span
              className="text-[18px] md:text-[20px] text-gray-800 tracking-[0.2em]"
              style={{
                fontFamily: "'Noto Serif KR', 'Noto Serif', serif",
                fontWeight: 500,
              }}
            >
              김 동 귀
            </span>
            <span className="text-[#7c6aad]/40 text-[14px] font-light">—</span>
          </div>
        </motion.div>

        {/* 보라색 도장 점 */}
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 5.2, ease: 'backOut' }}
          className="mt-5 w-2 h-2 rounded-full"
          style={{ backgroundColor: '#7c6aad' }}
        />
      </div>
    </div>
  );
}
