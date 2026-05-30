import Link from "next/link"
import { User, Building2, MapPin, Mail, BookOpen } from "lucide-react"

const quickLinks = [
  {
    title: "이태석 신부",
    description: "이태석 신부님의 삶과 철학",
    icon: <User className="h-10 w-10" />,
    href: "/father-lee",
  },
  {
    title: "우리재단",
    description: "이태석재단의 비전과 미션",
    icon: <Building2 className="h-10 w-10" />,
    href: "/about/foundation",
  },
  {
    title: "찾아오시는 길",
    description: "재단 방문 안내",
    icon: <MapPin className="h-10 w-10" />,
    href: "/about/location",
  },
  {
    title: "문의하기",
    description: "문의 및 제안사항",
    icon: <Mail className="h-10 w-10" />,
    href: "/about/contact",
  },
  {
    title: "강연 문의하기",
    description: "강연 일정 및 신청",
    icon: <BookOpen className="h-10 w-10" />,
    href: "/lecture-inquiry",
  },
]

export default function QuickLinks() {
  return (
    <section className="py-12 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-6">
          {quickLinks.map((link) => (
            <Link
              key={link.title}
              href={link.href}
              className="group flex flex-col items-center text-center p-6 rounded-lg border border-muted bg-white transition-all duration-300 hover:border-primary hover:shadow-md hover:-translate-y-1"
            >
              <div className="mb-4 text-primary transition-transform duration-300 group-hover:scale-110">
                {link.icon}
              </div>
              <h3 className="text-lg font-bold mb-1">{link.title}</h3>
              <p className="text-sm text-muted-foreground">{link.description}</p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
