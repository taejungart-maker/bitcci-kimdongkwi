export default function PosterPage() {
  return (
    <div
      className="w-full h-full flex-shrink-0 flex items-center justify-center"
      style={{ backgroundColor: '#f5f1ec' }}
    >
      <p
        className="text-center leading-relaxed tracking-wide font-bold"

        style={{
          fontFamily: "'Noto Sans KR', sans-serif",
          fontSize: '24px',
          color: '#2a2a2a',
        }}
      >
        한국의 결, <span style={{ fontSize: '28px', color: '#7c6aad' }}>색동목</span>으로 잇다
        <br />
        <span style={{ fontSize: '18px', color: '#666', fontWeight: 400 }}>
          김동귀 작가의 빛과 침묵
        </span>
      </p>
    </div>
  );
}
