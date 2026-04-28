import { motion } from 'motion/react';

export default function ArtistBioPage() {
  return (
    <div
      className="w-full h-full bg-white overflow-y-auto px-6 py-12"
      style={{ touchAction: 'pan-y pinch-zoom' }}
    >
      <div className="max-w-2xl mx-auto flex flex-col gap-7 pb-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: 'easeOut' }}
          className="flex flex-col gap-7"
        >
          {/* Header */}
          <header className="text-center">
            <h1
              className="text-3xl md:text-4xl font-bold text-gray-800 tracking-wider"
              style={{ fontFamily: "'Noto Sans KR', sans-serif" }}
            >
              김동귀
            </h1>
            <div className="w-12 h-[1px] bg-[#7c6aad]/40 mx-auto mt-6"></div>
          </header>

          {/* 학력 & 직책 */}
          <section className="flex flex-col gap-2">
            <h2
              className="text-sm tracking-[0.25em] text-[#7c6aad] font-bold"
              style={{ fontFamily: "'Noto Sans KR', sans-serif" }}
            >
              학력 · 직책
            </h2>
            <ul
              className="text-[15px] text-gray-700 leading-[1.9] flex flex-col gap-1"
              style={{ fontFamily: "'Noto Sans KR', sans-serif" }}
            >
              <li>동아대학교 대학원 졸업</li>
              <li>경상남도 무형문화재 제29호 소목장 (목상감)</li>
              <li>경상국립대학교 명예교수</li>
              <li>웅석공방 대표 · 김동귀목조형 연구소장</li>
            </ul>
          </section>

          {/* 주요 경력 */}
          <section className="flex flex-col gap-2">
            <h2
              className="text-sm tracking-[0.25em] text-[#7c6aad] font-bold"
              style={{ fontFamily: "'Noto Sans KR', sans-serif" }}
            >
              주요 경력
            </h2>
            <ul
              className="text-[15px] text-gray-700 leading-[1.9] flex flex-col gap-1"
              style={{ fontFamily: "'Noto Sans KR', sans-serif" }}
            >
              <li>개인전 25회 (국내외)</li>
              <li>대한민국미술대전 초대작가</li>
              <li>대한민국미술대전 운영위원·심사위원 역임</li>
              <li>대한민국 공예품대전 심사위원장</li>
              <li>국제 차문화대전 심사위원</li>
            </ul>
          </section>

          {/* 주요 수상 */}
          <section className="flex flex-col gap-2">
            <h2
              className="text-sm tracking-[0.25em] text-[#7c6aad] font-bold"
              style={{ fontFamily: "'Noto Sans KR', sans-serif" }}
            >
              주요 수상
            </h2>
            <ul
              className="text-[15px] text-gray-700 leading-[1.9] flex flex-col gap-1.5"
              style={{ fontFamily: "'Noto Sans KR', sans-serif" }}
            >
              <li>
                <span className="text-gray-500 mr-3 inline-block w-[80px]">1995</span>
                전국공예품경진대회 대상
              </li>
              <li>
                <span className="text-gray-500 mr-3 inline-block w-[80px]">1997</span>
                통상산업부장관상
              </li>
              <li>
                <span className="text-gray-500 mr-3 inline-block w-[80px]">1990–1999</span>
                대한민국미술대전 연 10회 수상
              </li>
              <li>
                <span className="text-gray-500 mr-3 inline-block w-[80px]">2004</span>
                한국공예가협회상
              </li>
              <li>
                <span className="text-gray-500 mr-3 inline-block w-[80px]">—</span>
                경상남도문화상 (조형예술)
              </li>
              <li>
                <span className="text-gray-500 mr-3 inline-block w-[80px]">—</span>
                경상남도 미술대전 추천·초대작가상, 경남미술인상
              </li>
            </ul>
          </section>

          {/* 국제 초대전 */}
          <section className="flex flex-col gap-2">
            <h2
              className="text-sm tracking-[0.25em] text-[#7c6aad] font-bold"
              style={{ fontFamily: "'Noto Sans KR', sans-serif" }}
            >
              국제 초대전
            </h2>
            <p
              className="text-[15px] text-gray-700 leading-[1.9]"
              style={{ fontFamily: "'Noto Sans KR', sans-serif" }}
            >
              대만 · 미국(KCDA, 하와이) · 일본(이타미시립공예관) · 캐나다 ·
              에스토니아(미술협회) · 청주공예비엔날레 · 진주공예비엔날레 ·
              동아시아 3국 초대전 · 한국공예가협회전 · 전통공예명문전 외
            </p>
          </section>

          {/* 학술 · 저서 · 특허 */}
          <section className="flex flex-col gap-2">
            <h2
              className="text-sm tracking-[0.25em] text-[#7c6aad] font-bold"
              style={{ fontFamily: "'Noto Sans KR', sans-serif" }}
            >
              학술 · 저서 · 특허
            </h2>
            <ul
              className="text-[15px] text-gray-700 leading-[1.9] flex flex-col gap-1"
              style={{ fontFamily: "'Noto Sans KR', sans-serif" }}
            >
              <li>
                <span className="text-gray-500 mr-2">논문</span>
                15편 (소목장·전통가구·문화재 복원 연구)
              </li>
              <li>
                <span className="text-gray-500 mr-2">저서</span>
                《경남의 무형문화재》《목상감의 역사와 기술》외 4권
              </li>
              <li>
                <span className="text-gray-500 mr-2">특허</span>
                가구용무늬목 판재 외 9건
              </li>
            </ul>
          </section>

          {/* 문화재 복원 */}
          <section className="flex flex-col gap-2">
            <h2
              className="text-sm tracking-[0.25em] text-[#7c6aad] font-bold"
              style={{ fontFamily: "'Noto Sans KR', sans-serif" }}
            >
              문화재 복원
            </h2>
            <ul
              className="text-[15px] text-gray-700 leading-[1.9] flex flex-col gap-1"
              style={{ fontFamily: "'Noto Sans KR', sans-serif" }}
            >
              <li>국립고궁박물관 소장 직기</li>
              <li>성균관 대성전 제례용 제기(豊)</li>
              <li>남명탄신 500주년 기념 선비문화축제 (성성자·경의검·신명사도)</li>
            </ul>
          </section>

          {/* 작품 소장 */}
          <section className="flex flex-col gap-2">
            <h2
              className="text-sm tracking-[0.25em] text-[#7c6aad] font-bold"
              style={{ fontFamily: "'Noto Sans KR', sans-serif" }}
            >
              작품 소장
            </h2>
            <p
              className="text-[15px] text-gray-700 leading-[1.9]"
              style={{ fontFamily: "'Noto Sans KR', sans-serif" }}
            >
              대한민국 정부 미술품 · 국립산림과학원 · 경상남도 산림수목원 · 경상국립대학교 외
            </p>
          </section>

        </motion.div>
      </div>
    </div>
  );
}
