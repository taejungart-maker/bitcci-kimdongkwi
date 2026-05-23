// 작가의 시간 페이지 사진 17장 교체 (페이지 3)
// 소스: E:\김동귀 작가님\김동귀 작가님
// 대상: public/photos/1.jpg ~ 17.jpg (기존 15장 덮어쓰기 + 16, 17 추가)

const fs = require('fs');
const path = require('path');
const sharp = require('sharp');

const SRC = 'E:/김동귀 작가님/김동귀 작가님';
const DEST = path.join(__dirname, '..', 'public', 'photos');

const SOURCES = [
  '1.jpg', '2.jpg', '3.jpg', '4.jpg', '5.jpg', '6.jpg',
  '8.jpg', '9.jpg', '10.jpg', '11.jpg', '12.jpg', '13.jpg',
  '14.jpg', '15.jpg', '16.jpg', '17.jpg', '18.jpg',
];

if (!fs.existsSync(DEST)) fs.mkdirSync(DEST, { recursive: true });

(async () => {
  let totalBefore = 0, totalAfter = 0;
  for (let i = 0; i < SOURCES.length; i++) {
    const srcPath = path.join(SRC, SOURCES[i]);
    const destPath = path.join(DEST, `${i + 1}.jpg`);

    if (!fs.existsSync(srcPath)) {
      console.error(`❌ 소스 없음: ${srcPath}`);
      continue;
    }

    const beforeBytes = fs.statSync(srcPath).size;
    totalBefore += beforeBytes;

    await sharp(srcPath)
      .rotate()
      .resize({ width: 1200, withoutEnlargement: true })
      .jpeg({ quality: 82, mozjpeg: true })
      .toFile(destPath);

    const afterBytes = fs.statSync(destPath).size;
    totalAfter += afterBytes;

    console.log(`  ${SOURCES[i]} → ${i + 1}.jpg : ${(beforeBytes/1024).toFixed(0)}KB → ${(afterBytes/1024).toFixed(0)}KB`);
  }
  console.log(`\n✅ ${SOURCES.length}장 완료: ${(totalBefore/1024/1024).toFixed(2)}MB → ${(totalAfter/1024/1024).toFixed(2)}MB`);
})();
