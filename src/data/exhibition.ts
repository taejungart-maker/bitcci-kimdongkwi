export interface Artwork {
  id: number;
  artist: string;
  title: string;
  material: string;
  size: string;
  year: string;
  image: string;
  description: string;
  clipPath?: string;
  maxWidth?: string;
  maxHeight?: string;
  darkBg?: boolean;
  bgTheme?: 'green' | 'purple';
}

export interface ExhibitionData {
  title: string;
  titleEn: string;
  subtitle: string;
  subtitleEn: string;
  period: string;
  venue: string;
  opening: string;
  organizer: string;
  organizerContact: string;
  poster: string;
  foreword: string;
  forewordAuthor: string;
  artists: string[];
  artworks: Artwork[];
}

export const exhibition: ExhibitionData = {
  title: "김동귀 개인전",
  titleEn: "Kim Dong-Gwi Solo Exhibition",
  subtitle: "색동목, 시간의 결을 짓다",
  subtitleEn: "Saekdongmok: Layers of Time",
  period: "2026년 5월 6일 — 5월 11일",
  venue: "인사아트센터 경남갤러리",
  opening: "(오프닝 일시 — 추후 업데이트)",
  organizer: "(주최/기획 — 추후 업데이트)",
  organizerContact: "",
  poster: "artworks/1.jpg",

  foreword: `색동목, 한국의 결을 빚다.

김동귀 작가는 우리 곁에서 사라져가는 한국 고유의 색채와 결을 화폭과 가구 위에 되살려 온 작가입니다. '색동목 안료'라는 자신만의 재료를 통해, 작가는 달항아리의 둥근 침묵, 차그릇의 따뜻한 손길, 노을과 일출의 시간, 한국의 미를 빚어내는 창호와 단청, 그리고 자연의 결과 파동을 화면 위에 담아냅니다.

이번 서울 전시에서는 회화 33점과 색동목 가구 6점을 통해 김동귀 작가가 평생 천착해 온 한국적 미학의 지층을 한자리에서 만나볼 수 있습니다. 달항아리의 여백, 한국의 미가 머무는 건축의 결, 그리고 반가사유의 깊이까지 — 작가의 손에서 색동목은 단순한 재료를 넘어 한국 전통의 호흡을 잇는 매개가 됩니다.

이 전시는 빠르게 달려가는 시대 속에서, 잠시 멈추어 우리의 결과 빛을 들여다보는 자리입니다.

※ 본 서문은 시안용 초안입니다. 작가 본인 서문 또는 전시기획자 서문이 확정되는 대로 업데이트됩니다.`,

  forewordAuthor: "전시기획·글 | (추후 업데이트)",

  artists: [
    "김동귀"
  ],

  artworks: [
    {
      id: 1,
      artist: "김동귀",
      title: "달항아리 1",
      material: "색동목 안료",
      size: "162×112",
      year: "2026",
      image: "artworks/1.jpg",
      description: "",
      maxHeight: "calc(100vh - 350px)"
    },
    {
      id: 2,
      artist: "김동귀",
      title: "달항아리 2",
      material: "색동목 안료",
      size: "82×82",
      year: "2026",
      image: "artworks/2.jpg",
      description: "",
      maxHeight: "calc(100vh - 350px)"
    },
    {
      id: 3,
      artist: "김동귀",
      title: "달항아리 3",
      material: "색동목 안료",
      size: "60×60",
      year: "2026",
      image: "artworks/3.jpg",
      description: "",
      maxHeight: "calc(100vh - 350px)"
    },
    {
      id: 4,
      artist: "김동귀",
      title: "달항아리 4",
      material: "색동목 안료",
      size: "60×60",
      year: "2026",
      image: "artworks/4.jpg",
      description: "",
      maxHeight: "calc(100vh - 350px)"
    },
    {
      id: 5,
      artist: "김동귀",
      title: "달항아리 5",
      material: "색동목 안료",
      size: "60×60",
      year: "2026",
      image: "artworks/5.jpg",
      description: "",
      maxHeight: "calc(100vh - 350px)"
    },
    {
      id: 6,
      artist: "김동귀",
      title: "달항아리 6",
      material: "색동목 안료",
      size: "60×60",
      year: "2026",
      image: "artworks/6.jpg",
      description: "",
      maxHeight: "calc(100vh - 350px)"
    },
    {
      id: 7,
      artist: "김동귀",
      title: "달항아리 7",
      material: "색동목 안료",
      size: "60×60",
      year: "2026",
      image: "artworks/7.jpg",
      description: "",
      maxHeight: "calc(100vh - 350px)"
    },
    {
      id: 8,
      artist: "김동귀",
      title: "차그릇 1",
      material: "색동목 안료",
      size: "38×38",
      year: "2026",
      image: "artworks/8.jpg",
      description: "",
      maxHeight: "calc(100vh - 350px)"
    },
    {
      id: 9,
      artist: "김동귀",
      title: "차그릇 2",
      material: "색동목 안료",
      size: "38×38",
      year: "2026",
      image: "artworks/9.jpg",
      description: "",
      maxHeight: "calc(100vh - 350px)"
    },
    {
      id: 10,
      artist: "김동귀",
      title: "노을 1",
      material: "색동목 안료",
      size: "30×120",
      year: "2026",
      image: "artworks/10.jpg",
      description: "",
      maxHeight: "calc(100vh - 350px)"
    },
    {
      id: 11,
      artist: "김동귀",
      title: "일출1",
      material: "색동목 안료",
      size: "30×120",
      year: "2026",
      image: "artworks/11.jpg",
      description: "",
      maxHeight: "calc(100vh - 350px)"
    },
    {
      id: 12,
      artist: "김동귀",
      title: "노을 2",
      material: "색동목 안료",
      size: "132×92",
      year: "2026",
      image: "artworks/12.jpg",
      description: "",
      maxHeight: "calc(100vh - 350px)"
    },
    {
      id: 13,
      artist: "김동귀",
      title: "일출 2",
      material: "색동목 안료",
      size: "50×180",
      year: "2026",
      image: "artworks/13.jpg",
      description: "",
      maxHeight: "calc(100vh - 350px)"
    },
    {
      id: 14,
      artist: "김동귀",
      title: "노을 3",
      material: "색동목 안료",
      size: "35×35",
      year: "2026",
      image: "artworks/14.jpg",
      description: "",
      maxHeight: "calc(100vh - 350px)"
    },
    {
      id: 15,
      artist: "김동귀",
      title: "노을 4",
      material: "색동목 안료",
      size: "35×35",
      year: "2026",
      image: "artworks/15.jpg",
      description: "",
      maxHeight: "calc(100vh - 350px)"
    },
    {
      id: 16,
      artist: "김동귀",
      title: "노을 5",
      material: "색동목 안료",
      size: "35×35",
      year: "2026",
      image: "artworks/16.jpg",
      description: "",
      maxHeight: "calc(100vh - 350px)"
    },
    {
      id: 17,
      artist: "김동귀",
      title: "비오는 날",
      material: "색동목 안료",
      size: "35×35",
      year: "2026",
      image: "artworks/17.jpg",
      description: "",
      maxHeight: "calc(100vh - 350px)"
    },
    {
      id: 18,
      artist: "김동귀",
      title: "한국의 미 -창호",
      material: "색동목 안료",
      size: "50×70",
      year: "2026",
      image: "artworks/18.jpg",
      description: "",
      maxHeight: "calc(100vh - 350px)"
    },
    {
      id: 19,
      artist: "김동귀",
      title: "한국의 미 창호",
      material: "색동목 안료",
      size: "50×70",
      year: "2026",
      image: "artworks/19.jpg",
      description: "",
      maxHeight: "calc(100vh - 350px)"
    },
    {
      id: 20,
      artist: "김동귀",
      title: "한국의 미-창호",
      material: "색동목 안료",
      size: "35×45",
      year: "2026",
      image: "artworks/20.jpg",
      description: "",
      maxHeight: "calc(100vh - 350px)"
    },
    {
      id: 21,
      artist: "김동귀",
      title: "한국의 미- 단청",
      material: "색동목 안료",
      size: "60×60",
      year: "2026",
      image: "artworks/21.jpg",
      description: "",
      maxHeight: "calc(100vh - 350px)"
    },
    {
      id: 22,
      artist: "김동귀",
      title: "한국의 미 -건축",
      material: "색동목 안료",
      size: "45×45",
      year: "2026",
      image: "artworks/22.jpg",
      description: "",
      maxHeight: "calc(100vh - 350px)"
    },
    {
      id: 23,
      artist: "김동귀",
      title: "한국의 미 -건축",
      material: "색동목 안료",
      size: "60×60",
      year: "2026",
      image: "artworks/23.jpg",
      description: "",
      maxHeight: "calc(100vh - 350px)"
    },
    {
      id: 24,
      artist: "김동귀",
      title: "결",
      material: "색동목 안료",
      size: "50×70",
      year: "2026",
      image: "artworks/24.jpg",
      description: "",
      maxHeight: "calc(100vh - 350px)"
    },
    {
      id: 25,
      artist: "김동귀",
      title: "빗살",
      material: "색동목 안료",
      size: "50×70",
      year: "2026",
      image: "artworks/25.jpg",
      description: "",
      maxHeight: "calc(100vh - 350px)"
    },
    {
      id: 26,
      artist: "김동귀",
      title: "관심",
      material: "색동목 안료",
      size: "50×70",
      year: "2026",
      image: "artworks/26.jpg",
      description: "",
      maxHeight: "calc(100vh - 350px)"
    },
    {
      id: 27,
      artist: "김동귀",
      title: "파동",
      material: "색동목 안료",
      size: "50×70",
      year: "2026",
      image: "artworks/27.jpg",
      description: "",
      maxHeight: "calc(100vh - 350px)"
    },
    {
      id: 28,
      artist: "김동귀",
      title: "파동 1",
      material: "색동목 안료",
      size: "120×80",
      year: "2026",
      image: "artworks/28.jpg",
      description: "",
      maxHeight: "calc(100vh - 350px)"
    },
    {
      id: 29,
      artist: "김동귀",
      title: "파동 2",
      material: "색동목 안료",
      size: "60×180",
      year: "2026",
      image: "artworks/29.jpg",
      description: "",
      maxHeight: "calc(100vh - 350px)"
    },
    {
      id: 30,
      artist: "김동귀",
      title: "지리산",
      material: "색동목 안료",
      size: "45×60",
      year: "2026",
      image: "artworks/30.jpg",
      description: "",
      maxHeight: "calc(100vh - 350px)"
    },
    {
      id: 31,
      artist: "김동귀",
      title: "반가사유",
      material: "색동목 안료",
      size: "72×53",
      year: "2026",
      image: "artworks/31.jpg",
      description: "",
      maxHeight: "calc(100vh - 350px)"
    },
    {
      id: 32,
      artist: "김동귀",
      title: "반가사유",
      material: "색동목 안료",
      size: "82×60",
      year: "2026",
      image: "artworks/32.jpg",
      description: "",
      maxHeight: "calc(100vh - 350px)"
    },
    {
      id: 33,
      artist: "김동귀",
      title: "여인",
      material: "색동목 안료",
      size: "50×70",
      year: "2026",
      image: "artworks/33.jpg",
      description: "",
      maxHeight: "calc(100vh - 350px)"
    },
    {
      id: 34,
      artist: "김동귀",
      title: "색동목 머릿장",
      material: "색동목 호두나무, 오동나무, 백동",
      size: "95×41×80",
      year: "2026",
      image: "artworks/34.jpg",
      description: "",
      maxHeight: "calc(100vh - 350px)",
      darkBg: true
    },
    {
      id: 35,
      artist: "김동귀",
      title: "색동목 서안",
      material: "색동목 오동나무",
      size: "100×40×42",
      year: "2026",
      image: "artworks/35.jpg",
      description: "",
      maxHeight: "calc(100vh - 350px)",
      darkBg: true
    },
    {
      id: 36,
      artist: "김동귀",
      title: "색동목 탁자",
      material: "색동목",
      size: "200×85×72",
      year: "2026",
      image: "artworks/36.jpg",
      description: "",
      maxHeight: "calc(100vh - 350px)",
      darkBg: true
    },
    {
      id: 37,
      artist: "김동귀",
      title: "색동목 장의자",
      material: "색동목",
      size: "200×40×42",
      year: "2026",
      image: "artworks/37.jpg",
      description: "",
      maxHeight: "calc(100vh - 350px)",
      darkBg: true
    },
    {
      id: 38,
      artist: "김동귀",
      title: "색동목 탁자장",
      material: "색동목 호도나무 오동나무 무쇠",
      size: "94×40×110",
      year: "2026",
      image: "artworks/38.jpg",
      description: "",
      maxHeight: "calc(100vh - 350px)",
      darkBg: true
    },
    {
      id: 39,
      artist: "김동귀",
      title: "색동목 좌등",
      material: "색동목, 랭가스 오동남, 백동",
      size: "35×35×110",
      year: "2026",
      image: "artworks/39.jpg",
      description: "",
      maxHeight: "calc(100vh - 350px)",
      darkBg: true
    }
  ]
};
