import type { NewsItem } from "@/types/news"

// 뉴스 데이터
const newsData: Record<string, NewsItem[]> = {
  foundation: [
    {
      id: "1",
      title: "2023년 이태석 신부 기념재단 장학생 선발 결과",
      summary: "2023년 이태석 신부 기념재단 장학생 선발 결과를 발표합니다.",
      content: `
        <p>2023년 이태석 신부 기념재단 장학생 선발 결과를 발표합니다.</p>
        <p>많은 지원자 중에서 엄격한 심사를 거쳐 총 20명의 장학생을 선발하였습니다.</p>
        <p>선발된 장학생들에게는 개별 연락을 드릴 예정입니다.</p>
        <p>앞으로도 이태석 신부의 정신을 이어받아 사회에 공헌하는 인재로 성장하길 바랍니다.</p>
      `,
      date: "2023-03-15",
      thumbnail: "/images/news/scholarship.jpg",
      category: "foundation",
    },
    {
      id: "2",
      title: "이태석 신부 기념재단 10주년 기념행사 개최",
      summary: "이태석 신부 기념재단 설립 10주년을 맞아 기념행사를 개최합니다.",
      content: `
        <p>이태석 신부 기념재단 설립 10주년을 맞아 기념행사를 개최합니다.</p>
        <p>일시: 2023년 5월 20일 오후 2시</p>
        <p>장소: 부산 수영구 문화회관 대강당</p>
        <p>많은 참석 부탁드립니다.</p>
      `,
      date: "2023-04-10",
      thumbnail: "/images/news/anniversary.jpg",
      category: "foundation",
    },
  ],
  media: [
    {
      id: "1",
      title: "이태석 신부 다큐멘터리 KBS 방영 예정",
      summary: "이태석 신부의 삶을 다룬 다큐멘터리가 KBS에서 방영될 예정입니다.",
      content: `
        <p>이태석 신부의 삶을 다룬 다큐멘터리가 KBS에서 방영될 예정입니다.</p>
        <p>방영일: 2023년 6월 15일 저녁 9시</p>
        <p>채널: KBS 1TV</p>
        <p>많은 시청 바랍니다.</p>
      `,
      date: "2023-05-20",
      thumbnail: "/images/news/documentary.jpg",
      category: "media",
    },
    {
      id: "2",
      title: '부산일보 "이태석 신부의 나눔 정신" 특집 기사',
      summary: "부산일보에서 이태석 신부의 나눔 정신을 조명하는 특집 기사가 게재되었습니다.",
      content: `
        <p>부산일보에서 이태석 신부의 나눔 정신을 조명하는 특집 기사가 게재되었습니다.</p>
        <p>기사 제목: "이태석 신부의 나눔 정신, 그 후 10년"</p>
        <p>게재일: 2023년 4월 5일</p>
        <p>많은 관심 부탁드립니다.</p>
      `,
      date: "2023-04-05",
      thumbnail: "/images/news/newspaper.jpg",
      category: "media",
    },
  ],
  notice: [
    {
      id: "1",
      title: "2023년 하반기 이태석 신부 기념재단 자원봉사자 모집",
      summary: "2023년 하반기 이태석 신부 기념재단 자원봉사자를 모집합니다.",
      content: `
        <p>2023년 하반기 이태석 신부 기념재단 자원봉사자를 모집합니다.</p>
        <p>모집기간: 2023년 7월 1일 ~ 7월 15일</p>
        <p>활동기간: 2023년 8월 ~ 12월</p>
        <p>지원방법: 홈페이지 지원 양식 작성</p>
        <p>많은 지원 바랍니다.</p>
      `,
      date: "2023-06-20",
      thumbnail: "/images/news/volunteer.jpg",
      category: "notice",
    },
    {
      id: "2",
      title: "이태석 신부 기념재단 사무실 이전 안내",
      summary: "이태석 신부 기념재단 사무실이 이전됩니다.",
      content: `
        <p>이태석 신부 기념재단 사무실이 이전됩니다.</p>
        <p>이전일: 2023년 5월 1일</p>
        <p>새 주소: 부산광역시 수영구 광안해변로 123, 5층</p>
        <p>업무는 이전 당일에도 정상적으로 진행됩니다.</p>
      `,
      date: "2023-04-20",
      thumbnail: "/images/news/office.jpg",
      category: "notice",
    },
  ],
}

// 카테고리 정보
export const categories = [
  { id: "foundation", title: "재단소식" },
  { id: "media", title: "언론보도" },
  { id: "notice", title: "공지사항" },
]

// 유효한 카테고리인지 확인
export function isValidCategory(category: string): boolean {
  return categories.some((c) => c.id === category)
}

// 카테고리 제목 가져오기
export function getCategoryTitle(category: string): string {
  const foundCategory = categories.find((c) => c.id === category)
  return foundCategory ? foundCategory.title : "활동소식"
}

// 모든 뉴스 항목 가져오기
export function getAllNews(): NewsItem[] {
  return Object.values(newsData).flat()
}

// 카테고리별 뉴스 항목 가져오기
export function getNewsByCategory(category: string): NewsItem[] {
  return newsData[category] || []
}

// ID로 특정 뉴스 항목 가져오기
export function getNewsById(category: string, id: string): NewsItem | undefined {
  return newsData[category]?.find((item) => item.id === id)
}
