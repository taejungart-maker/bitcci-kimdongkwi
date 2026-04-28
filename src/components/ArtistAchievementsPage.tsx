import { motion } from 'motion/react';

export default function ArtistAchievementsPage() {
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
              Career & Awards
            </p>
            <h1
              className="text-2xl md:text-3xl font-bold text-gray-800 tracking-wider"
              style={{ fontFamily: "'Noto Sans KR', sans-serif" }}
            >
              전시·수상·경력
            </h1>
            <div className="w-12 h-[1px] bg-gray-300 mx-auto mt-5"></div>
          </header>

          {/* 전시 */}
          <section className="flex flex-col gap-3">
            <h2
              className="text-sm tracking-[0.25em] text-[#7c6aad] font-bold"
              style={{ fontFamily: "'Noto Sans KR', sans-serif" }}
            >
              전시
            </h2>
            <ul
              className="text-[15px] text-gray-700 leading-[1.9] flex flex-col gap-1"
              style={{ fontFamily: "'Noto Sans KR', sans-serif" }}
            >
              <li>개인전 26회</li>
              <li className="text-gray-500 text-[14px] pl-2">
                — 진주, 마산, 울산, 서울, 일본, 독일(뮌헨) 외
              </li>
              <li>단체전·초대전 다수</li>
            </ul>
          </section>

          {/* 수상 */}
          <section className="flex flex-col gap-3">
            <h2
              className="text-sm tracking-[0.25em] text-[#7c6aad] font-bold"
              style={{ fontFamily: "'Noto Sans KR', sans-serif" }}
            >
              수상
            </h2>
            <ul
              className="text-[15px] text-gray-700 leading-[1.9] flex flex-col gap-2"
              style={{ fontFamily: "'Noto Sans KR', sans-serif" }}
            >
              <li>
                <span className="text-gray-500 mr-3 inline-block w-[80px]">1995</span>
                전국공예품경진대회 대상
              </li>
              <li>
                <span className="text-gray-500 mr-3 inline-block w-[80px]">1990–1999</span>
                대한민국 미술대전 연 10회 입선·수상
              </li>
              <li>
                <span className="text-gray-500 mr-3 inline-block w-[80px]">1999</span>
                대한민국미술대전 우수상
              </li>
              <li>
                <span className="text-gray-500 mr-3 inline-block w-[80px]">—</span>
                한국공예가협회상
              </li>
              <li>
                <span className="text-gray-500 mr-3 inline-block w-[80px]">—</span>
                경상남도 미술대전 추천작가상·초대작가상·미술인상
              </li>
            </ul>
          </section>

          {/* 경력 */}
          <section className="flex flex-col gap-3">
            <h2
              className="text-sm tracking-[0.25em] text-[#7c6aad] font-bold"
              style={{ fontFamily: "'Noto Sans KR', sans-serif" }}
            >
              경력
            </h2>
            <ul
              className="text-[15px] text-gray-700 leading-[1.9] flex flex-col gap-1"
              style={{ fontFamily: "'Noto Sans KR', sans-serif" }}
            >
              <li>대한민국미술대전 심사위원·운영위원 역임</li>
              <li>한국미술협회 공예분과 이사</li>
              <li>대한민국 미술대전 초대작가</li>
            </ul>
          </section>

          {/* 마무리 안내 */}
          <section className="mt-2 pt-6 border-t border-gray-200">
            <p
              className="text-[12px] text-gray-400 text-center"
              style={{ fontFamily: "'Noto Sans KR', sans-serif" }}
            >
              ※ 본 약력은 시안용 초안입니다. 작가 본인 확인 후 최종 업데이트됩니다.
            </p>
          </section>
        </motion.div>
      </div>
    </div>
  );
}
