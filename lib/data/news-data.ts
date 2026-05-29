// Types for different content categories
export type NewsItem = {
  id: string
  title: string
  date: string // Format: YYYY.MM.DD
  category: string
  summary: string
  image: string
  link: string
}

export type LectureItem = {
  id: string
  title: string
  date: string
  summary: string
  image: string
  link: string
  location: string
  speaker: string
}

export type PressItem = {
  id: string
  title: string
  date: string
  source: string
  url: string
  image: string
  summary: string
}

export type VideoItem = {
  id: string
  title: string
  date: string
  thumbnail: string
  youtubeId: string
  description: string
}

export type GalleryItem = {
  id: string
  title: string
  date: string
  coverImage: string
  imageCount: number
  description: string
}

export type BookMovieItem = {
  id: string
  type: "book" | "movie"
  title: string
  author?: string
  director?: string
  publishedDate?: string
  releaseDate?: string
  coverImage: string
  description: string
}

export type ThankYouLetterItem = {
  id: string
  title: string
  author: string
  date: string
  category: string
  image: string
  excerpt: string
}

// Helper function to sort items by date (newest first)
export function sortByDateDesc<T extends { date: string }>(items: T[]): T[] {
  return [...items].sort((a, b) => {
    // Convert date strings (YYYY.MM.DD) to Date objects for comparison
    const dateA = new Date(a.date.replace(/\./g, "-"))
    const dateB = new Date(b.date.replace(/\./g, "-"))
    return dateB.getTime() - dateA.getTime()
  })
}

// Sample data for Foundation News
export const foundationNews: NewsItem[] = [
  {
    id: "1",
    title: "이태석재단, 수단 톤즈 지역 의약품 지원 사업 시작",
    date: "2023.12.15",
    category: "foundation",
    summary:
      "이태석재단이 수단 톤즈 지역에 의약품 지원 사업을 시작했습니다. 이번 사업은 이태석 신부가 생전에 활동했던 지역에 지속적인 의료 지원을 제공하기 위한 것입니다.",
    image: "https://example.com/images/news/foundation-tonj-medical-support.jpg",
    link: "/news/foundation/1",
  },
  {
    id: "2",
    title: "영화 '부활', 바티칸 특별 상영회 성황리에 마쳐",
    date: "2023.11.20",
    category: "foundation",
    summary:
      "이태석 신부의 삶을 다룬 영화 '부활'이 바티칸에서 특별 상영회를 성황리에 마쳤습니다. 프란치스코 교황을 비롯한 바티칸 관계자들이 참석하여 이태석 신부의 삶과 업적을 기렸습니다.",
    image: "https://example.com/images/news/resurrection-vatican-screening.jpg",
    link: "/news/foundation/2",
  },
  {
    id: "3",
    title: "2024년 이태석 장학생 선발 결과 발표",
    date: "2023.10.05",
    category: "foundation",
    summary:
      "2024년 이태석 장학생 선발 결과가 발표되었습니다. 총 30명의 학생들이 선발되어 학업을 이어갈 수 있게 되었습니다.",
    image: "https://example.com/images/news/scholarship-announcement-2024.jpg",
    link: "/news/foundation/3",
  },
  {
    id: "4",
    title: "이태석 신부 13주기 추모 미사 거행",
    date: "2023.01.14",
    category: "foundation",
    summary:
      "이태석 신부 선종 13주기를 맞아 추모 미사가 거행되었습니다. 많은 신자들과 이태석 신부를 기억하는 사람들이 참석하여 그의 삶과 정신을 기렸습니다.",
    image: "https://example.com/images/news/memorial-mass-13th.jpg",
    link: "/news/foundation/4",
  },
  {
    id: "5",
    title: "이태석재단, 우크라이나 난민 지원 사업 확대",
    date: "2023.06.10",
    category: "foundation",
    summary:
      "이태석재단이 우크라이나 난민 지원 사업을 확대합니다. 의약품, 식량, 생필품 등을 지원하여 전쟁으로 고통받는 우크라이나 국민들에게 도움을 전할 예정입니다.",
    image: "https://example.com/images/news/ukraine-support-expansion.jpg",
    link: "/news/foundation/5",
  },
  {
    id: "6",
    title: "이태석재단, 후원자 감사 행사 개최",
    date: "2023.08.30",
    category: "foundation",
    summary:
      "이태석재단이 후원자들을 위한 감사 행사를 개최했습니다. 이 행사에서는 재단의 활동 성과를 공유하고, 후원자들의 지속적인 관심과 지원에 감사의 마음을 전했습니다.",
    image: "https://example.com/images/news/donor-appreciation-event.jpg",
    link: "/news/foundation/6",
  },
  {
    id: "7",
    title: "'이태석재단 장학생 의사 6명 배출'",
    date: "2025.02.22",
    category: "foundation",
    summary:
      "이태석재단의 지원을 받은 남수단 학생 7명이 2025년 2월 22일(토요일) 주바대학교를 졸업했다. 이들 중 6명은 의대를 졸업해 의료 현장에 첫발을 내디뎠으며, 1명은 컴퓨터공학을 전공했다. 이태석 신부의 뜻을 이어받아 설립된 이태석재단은 남수단 내 교육 및 의료 발전을 위해 다양한 지원을 해오고 있다. 특히 이번 졸업생들은 이태석재단의 장학금과 학업 지원을 통해 대학 교육을 마칠 수 있었으며, 앞으로 남수단의 의료 및 기술 분야에서 중요한 역할을 할 것으로 기대된다. 남수단은 오랜 내전과 빈곤으로 인해 의료 인력이 절대적으로 부족한 상황이다. 의사 한 명당 수만 명의 환자를 담당해야 하는 현실에서, 이번 졸업생들의 배출은 남수단 의료 환경 개선에 중요한 전환점이 될 전망이다. 이태석재단은 유망한 학생들을 선발하여 대학 학업을 위한 장학금과 생활 지원을 제공해왔다. 2020년부터 현재까지 총 49명의 학생이 이 장학 프로그램을 통해 학업을 이어가고 있으며 이들 중 상당수가 의학을 전공해 의료 인력 양성에 기여하고 있다. 졸업식 당일, 이태석리더십스쿨(교장: 구진성) 학생들과 관계자들이 참석해 졸업생들을 축하했다. 이날 주바대학교 교정은 4,000여 명의 졸업생들과 가족들의 환호성으로 가득 찼으며, 졸업생들은 가난과 빈곤을 이겨낸 값진 성취에 대한 감격을 나눴다.",
    image: "https://lh3.googleusercontent.com/d/1n00WrRq0MX_-Ji1sLQ3W92piarE9KVFQ",
    link: "/news/foundation/6",
  },
]

// Sample data for Lecture News
export const lectureNews: LectureItem[] = [
  {
    id: "1",
    title: "이태석 신부 특별 강연회 개최",
    date: "2023.03.20",
    summary:
      "이태석 신부의 삶과 철학에 대한 특별 강연회가 개최되었습니다. 이태석 신부와 함께 활동했던 동료들이 강연자로 나서 그의 삶과 정신을 나누었습니다.",
    image: "https://example.com/images/lectures/special-lecture-event.jpg",
    link: "/news/lectures/1",
    location: "서울 광복회관 대강당",
    speaker: "김영수 신부",
  },
  {
    id: "2",
    title: "이태석 신부의 의료 봉사 정신 강연",
    date: "2023.05.15",
    summary:
      "이태석 신부의 의료 봉사 정신에 대한 강연이 의과대학생들을 대상으로 진행되었습니다. 이태석 신부의 의사로서의 삶과 봉사 정신을 통해 미래 의료인들에게 영감을 전했습니다.",
    image: "https://example.com/images/lectures/medical-service-lecture.jpg",
    link: "/news/lectures/2",
    location: "부산대학교 의과대학",
    speaker: "박지영 교수",
  },
  {
    id: "3",
    title: "이태석 신부 정신 계승 포럼",
    date: "2023.07.10",
    summary:
      "이태석 신부의 정신을 계승하고 발전시키기 위한 포럼이 개최되었습니다. 다양한 분야의 전문가들이 참여하여 이태석 신부의 정신을 현대 사회에 어떻게 적용할 수 있는지 논의했습니다.",
    image: "https://example.com/images/lectures/legacy-forum.jpg",
    link: "/news/lectures/3",
    location: "서울 프레스센터",
    speaker: "다양한 분야 전문가 패널",
  },
  {
    id: "4",
    title: "청소년을 위한 이태석 신부 이야기",
    date: "2023.09.05",
    summary:
      "청소년들을 대상으로 이태석 신부�� 삶������� 정신을 소개하는 강연이 진행되었습니다. 이태석 신부의 삶을 통해 청소년들에게 꿈과 희망, 그리고 나눔의 가치를 전했습니다.",
    image: "https://example.com/images/lectures/youth-lecture.jpg",
    link: "/news/lectures/4",
    location: "서울 청소년센터",
    speaker: "이민호 작가",
  },
  {
    id: "5",
    title: "이태석 신부와 아프리카 선교",
    date: "2024.10.20",
    summary:
      "이태석 신부의 아프리카 선교 활동에 대한 강연이 개최되었습니다. 이태석 신부가 수단 톤즈 지역에서 펼친 선교 활동과 그 영향에 대해 심도 있게 다루었습니다.",
    image: "https://example.com/images/lectures/africa-mission-lecture.jpg",
    link: "/news/lectures/5",
    location: "천주교 서울대교구 교육관",
    speaker: "정수연 신부",
  },
  {
    id: "6",
    title: "이태석 신부의 음악 교육 철학",
    date: "2025.11.15",
    summary:
      "이태석 신부가 톤즈 지역 아이들에게 음악을 가르친 교육 철학에 대한 강연이 열렸습니다. '톤즈의 아이들' 브라스밴드 창단과 음악을 통한 희망 전파에 대한 이야기를 나누었습니다.",
    image: "https://example.com/images/lectures/music-education-philosophy.jpg",
    link: "/news/lectures/6",
    location: "서울예술대학교",
    speaker: "최준호 교수",
  },
]

// Sample data for Press Coverage
export const pressNews: PressItem[] = [
  {
    id: "1",
    title: "이태석재단, 아프리카 의료 지원 사업 확대 계획 발표",
    date: "2025.02.15",
    source: "한국일보",
    url: "https://example.com/article1",
    image: "https://example.com/images/press/africa-medical-support-expansion.jpg",
    summary:
      "이태석재단이 아프리카 지역 의료 지원 사업 확대 계획을 발표했다. 2025년부터 케냐와 에티오피아로 의료 지원을 확대할 예정이다.",
  },
  {
    id: "2",
    title: "영화 '부활', 바티칸 특별 상영회 개최... 프란치스코 교황 참석",
    date: "2024.11.22",
    source: "동아일보",
    url: "https://example.com/article2",
    image: "https://example.com/images/press/resurrection-vatican-pope.jpg",
    summary:
      "이태석 신부의 삶을 다룬 영화 '부활'이 바티칸에서 특별 상영회를 가졌다. 프란치스코 교황을 비롯한 바티칸 관계자들이 참석하여 이태석 신부의 삶과 업적을 기렸다.",
  },
  {
    id: "3",
    title: "이태석재단, 2025년 장학생 선발 결과 발표",
    date: "2025.01.10",
    source: "조선일보",
    url: "https://example.com/article3",
    image: "https://example.com/images/press/scholarship-2025-announcement.jpg",
    summary: "이태석재단이 2025년 장학생 50명을 선발했다고 발표했다. 올해는 특히 의학 계열 지원자가 크게 증가했다.",
  },
  {
    id: "4",
    title: "이태석 장학생, 봉사활동 참여 후기 공모전 개최",
    date: "2024.10.01",
    source: "중앙일보",
    url: "https://example.com/article4",
    image: "https://example.com/images/press/volunteer-essay-contest.jpg",
    summary:
      "이태석재단이 장학생들의 봉사활동 참여 후기 공모전을 개최한다. 수상자에게는 상금과 함께 해외 봉사활동 기회가 제공��다.",
  },
  {
    id: "5",
    title: "다큐멘터리 '울지마 톤즈' 10주년 기념 특별 상영",
    date: "2024.05.15",
    source: "경향신문",
    url: "https://example.com/article5",
    image: "https://example.com/images/press/dont-cry-tonj-10th-anniversary.jpg",
    summary:
      "이태석 신부의 삶을 다룬 다큐멘터리 '울지마 톤즈'가 개봉 10주년을 맞아 특별 상영된다. 상영 수익금은 이태석재단에 기부될 예정이다.",
  },
  {
    id: "6",
    title: "이태석재단, 남수단 학교 건립 지원 위한 모금 캠페인",
    date: "2024.06.05",
    source: "서울신문",
    url: "https://example.com/article6",
    image: "https://example.com/images/press/south-sudan-school-fundraising.jpg",
    summary:
      "이태석재단이 남수단 학교 건립 지원을 위한 모금 캠페인을 시작한다. 교육 환경 개선을 통해 남수단 어린이들의 미래를 지원할 계획이다.",
  },
]

// Sample data for Videos
export const videoItems: VideoItem[] = [
  {
    id: "1",
    title: "이태석 신부의 삶을 담은 다큐멘터리",
    date: "2023.12.15",
    thumbnail: "https://example.com/images/videos/documentary-thumbnail.jpg",
    youtubeId: "example1",
    description: "이태석 신부의 생애와 봉사 활동을 담은 다큐멘터리입니다.",
  },
  {
    id: "2",
    title: "톤즈의 아이들 브라스밴드 연주 영상",
    date: "2023.11.20",
    thumbnail: "https://example.com/images/videos/brass-band-performance.jpg",
    youtubeId: "example2",
    description: "이태석 신부가 가르친 톤즈의 아이들 브라스밴드의 감동적인 연주 모습입니다.",
  },
  {
    id: "3",
    title: "이태석재단 수단 톤즈 지원 사업 현장",
    date: "2023.10.05",
    thumbnail: "https://example.com/images/videos/tonj-support-project.jpg",
    youtubeId: "example3",
    description: "이태석재단이 수단 톤즈 지역에서 진행하는 의료 및 교육 지원 사업 현장을 담은 영상입니다.",
  },
  {
    id: "4",
    title: "이태석 장학생 수여식 현장",
    date: "2023.09.15",
    thumbnail: "https://example.com/images/videos/scholarship-ceremony.jpg",
    youtubeId: "example4",
    description: "2024년 이태석 장학생 장학금 수여식 현장을 담은 영상입니다.",
  },
  {
    id: "5",
    title: "영화 '부활' 바티칸 상영회 하이라이트",
    date: "2023.11.25",
    thumbnail: "https://example.com/images/videos/resurrection-vatican-highlights.jpg",
    youtubeId: "example5",
    description: "이태석 신부의 삶을 다룬 영화 '부활'의 바티칸 특별 상영회 현장을 담은 영상입니다.",
  },
  {
    id: "6",
    title: "이태석 신부 13주기 추모 미사",
    date: "2023.01.14",
    thumbnail: "https://example.com/images/videos/memorial-mass-video.jpg",
    youtubeId: "example6",
    description: "이태석 신부 선종 13주기를 맞아 거행된 추모 미사 현장을 담은 영상입니다.",
  },
]

// Sample data for Gallery
export const galleryItems: GalleryItem[] = [
  {
    id: "1",
    title: "수단 톤즈 지원 활동",
    date: "2023.12",
    coverImage: "https://example.com/images/gallery/tonj-support-cover.jpg",
    imageCount: 15,
    description: "수단 톤즈 지역 의료 지원 및 교육 활동 현장",
  },
  {
    id: "2",
    title: "이태석 장학생 수여식",
    date: "2023.11",
    coverImage: "https://example.com/images/gallery/scholarship-ceremony-cover.jpg",
    imageCount: 20,
    description: "2024년 이태석 장학생 장학금 수여식",
  },
  {
    id: "3",
    title: "우크라이나 난민 지원 활동",
    date: "2023.10",
    coverImage: "https://example.com/images/gallery/ukraine-support-cover.jpg",
    imageCount: 18,
    description: "우크라이나 난민을 위한 의약품 및 생필품 지원 활동",
  },
  {
    id: "4",
    title: "한센인 마을 방문",
    date: "2023.09",
    coverImage: "https://example.com/images/gallery/hansen-village-cover.jpg",
    imageCount: 12,
    description: "한센인 마을 의료 봉사 및 주거 환경 개선 활동",
  },
  {
    id: "5",
    title: "이태석 리더십 학교 캠프",
    date: "2023.08",
    coverImage: "https://example.com/images/gallery/leadership-school-camp-cover.jpg",
    imageCount: 25,
    description: "2023년 여름 이태석 리더십 학교 캠프 활동",
  },
  {
    id: "6",
    title: "영화 '부활' 바티칸 상영회",
    date: "2023.11",
    coverImage: "https://example.com/images/gallery/resurrection-vatican-cover.jpg",
    imageCount: 30,
    description: "영화 '부활' 바티칸 특별 상영회 현장",
  },
]

// Sample data for Books/Movies
export const bookMovieItems: BookMovieItem[] = [
  {
    id: "1",
    type: "book",
    title: "울지마 톤즈",
    author: "김성태",
    publishedDate: "2010",
    coverImage: "https://example.com/images/books/dont-cry-tonj-book.jpg",
    description:
      "이태석 신부의 삶과 수단 톤즈에서의 활동을 담은 책입니다. 의사이자 사제로서 아프리카 오지에서 헌신적인 봉사를 펼친 이태석 신부의 감동적인 이야기를 담고 있습니다.",
  },
  {
    id: "2",
    type: "movie",
    title: "부활",
    director: "김성태",
    releaseDate: "2023",
    coverImage: "https://example.com/images/movies/resurrection-movie.jpg",
    description:
      "이태석 신부의 삶을 다룬 영화로, 수단 톤즈에서의 활동과 그의 헌신적인 봉사 정신을 감동적으로 그려낸 작품입니다.",
  },
  {
    id: "3",
    type: "book",
    title: "사랑은 사람을 춤추게 한다",
    author: "이민호",
    publishedDate: "2015",
    coverImage: "https://example.com/images/books/love-makes-people-dance.jpg",
    description:
      "이태석 신부의 어록과 일기를 모은 책으로, 그의 삶의 철학과 사랑의 메시지를 담고 있습니다. 이태석 신부가 남긴 글을 통해 그의 정신을 느낄 수 있는 책입니다.",
  },
  {
    id: "4",
    type: "book",
    title: "톤즈의 아이��",
    author: "박지영",
    publishedDate: "2018",
    coverImage: "https://example.com/images/books/children-of-tonj.jpg",
    description:
      "이태석 신부가 수단 톤즈에서 가르친 아이들의 이야기를 담은 책입니다. 음악을 통해 희망을 전한 이태석 신부와 톤즈 아이들의 감동적인 이야기를 담고 있습니다.",
  },
  {
    id: "5",
    type: "movie",
    title: "울지마 톤즈",
    director: "구수환",
    releaseDate: "2010",
    coverImage: "https://example.com/images/movies/dont-cry-tonj-movie.jpg",
    description:
      "이태석 신부의 삶을 다룬 다큐멘터리 영화로, 수단 톤즈에서의 활동과 그의 선종까지의 여정을 담고 있습니다. 많은 사람들에게 감동과 영감을 준 작품입니다.",
  },
  {
    id: "6",
    type: "book",
    title: "이태석의 선물",
    author: "정수연",
    publishedDate: "2020",
    coverImage: "https://example.com/images/books/lee-tae-seoks-gift.jpg",
    description:
      "이태석 신부의 삶이 현대 사회에 주는 메시지와 의미를 담은 책입니다. 이태석 신부의 삶을 통해 우리가 배울 수 있는 가치와 교훈을 담고 있습니다.",
  },
]

// Sample data for Thank You Letters
export const thankYouLetters: ThankYouLetterItem[] = [
  {
    id: "1",
    title: "이태석 장학금이 제 꿈을 이루게 해주었습니다",
    author: "김지원",
    date: "2023.12.15",
    category: "장학생",
    image: "https://example.com/images/letters/scholarship-dream-letter.jpg",
    excerpt:
      "이태석재단의 장학금 덕분에 의대 공부를 계속할 수 있었고, 이제 저도 이태석 신부님처럼 의사가 되어 어려운 이웃을 돕고 싶습니다.",
  },
  {
    id: "2",
    title: "톤즈의 아이들에게 희망이 되어주셔서 감사합니다",
    author: "John Smith",
    date: "2023.11.20",
    category: "해외사업",
    image: "https://example.com/images/letters/tonj-children-hope-letter.jpg",
    excerpt:
      "이태석재단의 ��원으�� 톤즈 지역 아이들이 더 나은 교육을 받을 수 있게 되었습니다. 이태석 신부님의 사랑이 여전히 이어지고 있음을 느낍니다.",
  },
  {
    id: "3",
    title: "한센인 마을에 새 희망을 주셔서 감사합니다",
    author: "박영수",
    date: "2023.10.10",
    category: "국내사업",
    image: "https://example.com/images/letters/hansen-village-hope-letter.jpg",
    excerpt:
      "이태석재단의 지원으로 한센인 마을의 주거 환경이 크게 개선되었습니다. 주민들의 건강과 삶의 질이 향상되어 정말 감사드립니다.",
  },
  {
    id: "4",
    title: "우크라이나 난민들에게 전해주신 따뜻한 마음",
    author: "Maria Kovalenko",
    date: "2023.09.05",
    category: "해외사업",
    image: "https://example.com/images/letters/ukraine-refugees-letter.jpg",
    excerpt:
      "전쟁으로 모든 것을 잃은 우리에게 이태석재단이 보내주신 도움은 큰 위로가 되었습니다. 한국에서 보내주신 따뜻한 마음에 진심으로 감사드립니다.",
  },
  {
    id: "5",
    title: "이태석 리더십 학교를 통해 배운 소중한 가치",
    author: "이수진",
    date: "2023.08.20",
    category: "장학생",
    image: "https://example.com/images/letters/leadership-school-values-letter.jpg",
    excerpt:
      "이태석 리더십 학교에서 배운 나눔과 봉사의 가치는 제 인생을 변화시켰습니다. 이태석 신부님의 정신을 이어받아 저도 세상에 기여하는 사람이 되겠습니다.",
  },
  {
    id: "6",
    title: "의약품 지원으로 새 삶을 얻었습니다",
    author: "최병철",
    date: "2023.07.15",
    category: "국내사업",
    image: "https://example.com/images/letters/medical-support-letter.jpg",
    excerpt:
      "경제적 어려움으로 필요한 약을 구하지 못했는데, 이태석재단의 의약품 지원 덕분에 건강을 되찾을 수 있었습니다. 진심으로 감사드립니다.",
  },
]
