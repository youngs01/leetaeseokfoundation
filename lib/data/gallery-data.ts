import type { GalleryItem } from "./content-types"

const galleryData: GalleryItem[] = [
  {
    id: "1",
    title: "수단 톤즈 지원 활동",
    date: "2023.12.01", // Changed from "2023.12" to "2023.12.01"
    category: "gallery",
    summary: "수단 톤즈 지역 의료 지원 및 교육 활동 현장",
    image: "/placeholder.svg?height=400&width=600",
    imageCount: 15,
    content: `
      <p>이태석재단이 수단 톤즈 지역에서 진행한 의료 지원 및 교육 활동 현장을 담은 사진들입니다. 이태석 신부가 생전에 활동했던 지역에서 그의 정신을 이어받아 진행되는 다양한 지원 활동을 확인할 수 있습니다.</p>
      
      <p>특히, 톤즈 병원의 운영 현황과 현지 의료진 교육 프로그램, 그리고 학교 지원 사업 등 이태석재단의 주요 활동을 생생하게 보여줍니다.</p>
    `,
    images: [
      {
        id: "1-1",
        src: "/placeholder.svg?height=800&width=1200&text=Gallery+Image+1",
        alt: "톤즈 병원 전경",
        description: "이태석 신부가 설립한 톤즈 병원의 현재 모습",
      },
      {
        id: "1-2",
        src: "/placeholder.svg?height=800&width=1200&text=Gallery+Image+2",
        alt: "의료 지원 활동",
        description: "현지 주민들에게 의료 서비스를 제공하는 모습",
      },
      // Add more images as needed
    ],
  },
  {
    id: "2",
    title: "이태석 장학생 수여식",
    date: "2023.11.15", // Changed from "2023.11" to "2023.11.15"
    category: "gallery",
    summary: "2024년 이태석 장학생 장학금 수여식",
    image: "/placeholder.svg?height=400&width=600",
    imageCount: 20,
    featured: true,
    content: `
      <p>2024년 이태석 장학생 장학금 수여식 현장을 담은 사진들입니다. 이태석 신부의 교육에 대한 열정과 사랑을 이어받아 진행되는 장학 사업의 의미 있는 순간들을 확인할 수 있습니다.</p>
      
      <p>이태석 장학생으로 선발된 학생들은 학비와 생활비를 지원받으며, 이태석 신부의 정신을 배우고 실천할 수 있는 다양한 프로그램에도 참여하게 됩니다.</p>
    `,
    images: [
      {
        id: "2-1",
        src: "/placeholder.svg?height=800&width=1200&text=Gallery+Image+1",
        alt: "장학금 수여식 단체 사진",
        description: "2024년 이태석 장학생들과 재단 관계자들의 단체 사진",
      },
      {
        id: "2-2",
        src: "/placeholder.svg?height=800&width=1200&text=Gallery+Image+2",
        alt: "장학증서 수여 장면",
        description: "장학생에게 장학증서를 수여하는 모습",
      },
      // Add more images as needed
    ],
  },
  // Add more gallery items as needed
]

export default galleryData
