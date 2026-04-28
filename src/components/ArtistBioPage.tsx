import { motion } from 'motion/react';

export default function ArtistBioPage() {
  return (
    <div
      className="w-full h-full bg-white overflow-y-auto px-6 py-12"
      style={{ touchAction: 'pan-y pinch-zoom' }}
    >
      <div className="max-w-2xl mx-auto flex flex-col gap-8 pb-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: 'easeOut' }}
          className="flex flex-col gap-8"
        >
          {/* Header */}
          <header className="text-center">
            <p
              className="text-xs tracking-[0.4em] text-gray-400 mb-3 uppercase"
              style={{ fontFamily: "'Montserrat', sans-serif" }}
            >
              Artist
            </p>
            <h1
              className="text-3xl md:text-4xl font-bold text-gray-800 mb-2 tracking-wider"
              style={{ fontFamily: "'Noto Sans KR', sans-serif" }}
            >
              김동귀
            </h1>
            <p
              className="text-sm tracking-[0.3em] text-gray-500"
              style={{ fontFamily: "'Montserrat', sans-serif" }}
            >
              KIM DONG-KWI
            </p>
            <div className="w-12 h-[1px] bg-gray-300 mx-auto mt-6"></div>
          </header>

          {/* 학력 */}
          <section className="flex flex-col gap-3">
            <h2
              className="text-sm tracking-[0.25em] text-[#7c6aad] font-bold"
              style={{ fontFamily: "'Noto Sans KR', sans-serif" }}
            >
              학력
            </h2>
            <p
              className="text-[15px] text-gray-700 leading-relaxed"
              style={{ fontFamily: "'Noto Sans KR', sans-serif" }}
            >
              동아대학교 대학원 졸업
            </p>
          </section>

          {/* 무형문화재 */}
          <section className="flex flex-col gap-3">
            <h2
              className="text-sm tracking-[0.25em] text-[#7c6aad] font-bold"
              style={{ fontFamily: "'Noto Sans KR', sans-serif" }}
            >
              무형문화재
            </h2>
            <p
              className="text-[15px] text-gray-700 leading-relaxed"
              style={{ fontFamily: "'Noto Sans KR', sans-serif" }}
            >
              경상남도 무형문화재 제29호
              <br />
              <span className="text-gray-500">소목장 (목상감)</span>
            </p>
          </section>

          {/* 현재 활동 */}
          <section className="flex flex-col gap-3">
            <h2
              className="text-sm tracking-[0.25em] text-[#7c6aad] font-bold"
              style={{ fontFamily: "'Noto Sans KR', sans-serif" }}
            >
              현재 활동
            </h2>
            <ul
              className="text-[15px] text-gray-700 leading-[2] flex flex-col gap-1"
              style={{ fontFamily: "'Noto Sans KR', sans-serif" }}
            >
              <li>경상국립대학교 인테리어재료공학과 명예교수</li>
              <li>웅석공방 대표</li>
              <li>김동귀목조형 연구소장</li>
            </ul>
          </section>

          {/* 작가 노트 (시안) */}
          <section className="mt-4 pt-6 border-t border-gray-200">
            <p
              className="text-[14px] text-gray-500 leading-[2] text-center break-keep"
              style={{
                fontFamily: "'Noto Serif', 'Noto Sans KR', serif",
                fontStyle: 'italic',
              }}
            >
              "색동목 안료로 한국 고유의 결과 빛을 빚어내며,
              <br />
              전통의 호흡을 오늘에 잇는다."
            </p>
            <div className="w-8 h-[1px] bg-gray-300 mx-auto mt-6"></div>
          </section>
        </motion.div>
      </div>
    </div>
  );
}
