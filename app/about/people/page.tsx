import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { getGoogleDriveImageUrl } from "@/lib/image-utils"

export default function PeoplePage() {
  return (
    <div>
      <main>
        {/* Hero Section */}
        <section className="relative overflow-hidden">
          <div className="absolute inset-0 z-0">
            <Image
              src="/placeholder.svg?height=1080&width=1920"
              alt="함께하는 사람들"
              fill
              className="object-cover brightness-[0.35] scale-105"
              priority
            />
          </div>
          <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-black/40 z-[1]" />
          <div className="container relative z-10 mx-auto px-4 py-24 md:py-32 text-white">
            <div className="max-w-3xl mx-auto text-center">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-white/70 mb-4">Our People</p>
              <h1 className="mb-6 text-4xl font-bold leading-tight md:text-5xl lg:text-6xl text-balance">
                함께하는 사람들
              </h1>
              <p className="text-lg md:text-xl text-white/80 leading-relaxed max-w-2xl mx-auto">
                이태석 신부님의 정신을 이어받아 함께 걸어가는 이태석재단의 구성원들을 소개합니다
              </p>
            </div>
          </div>
        </section>

        {/* Board of Directors Section */}
        <section className="py-16 md:py-24">
          <div className="container mx-auto px-4">
            <div className="text-center mb-14">
              <p className="text-sm font-semibold uppercase tracking-widest text-primary mb-3">Board of Directors</p>
              <h2 className="text-3xl font-bold text-foreground md:text-4xl">이사회</h2>
              <div className="mx-auto mt-4 h-1 w-16 rounded-full bg-primary" />
            </div>
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
              <PersonCard
                name="구수환"
                position="이사장"
                image={getGoogleDriveImageUrl("10GMnhB4xagFONy7Ukt4cpsTsNhM5liRm")}
                description="前 KBS PD, <울지마톤즈>, <부활> 감독"
              />
              <PersonCard
                name="이태선"
                position="고문"
                image={getGoogleDriveImageUrl("13eJTMIvjBNRSOp9nlHsdIxlQqyD3LpoP")}
                description="이태석 신부님 유가족 대표"
              />
              <PersonCard
                name="Lars Olof Thorell"
                position="고문"
                image={getGoogleDriveImageUrl("1zFMTuAH7DQNZWcT_ZFDcA_eHg5sobJCc")}
                description="스웨덴 5선의원"
              />
              <PersonCard
                name="Steven Schwager"
                position="고문"
                image={getGoogleDriveImageUrl("1NjNGc_G9pXN2CAIPYJVfxTDnSK9xK304")}
                description="코넬대학교 명예교수"
              />
              <PersonCard
                name="Mogens Godballe"
                position="고문"
                image={getGoogleDriveImageUrl("1Hc565IIg_MftucD-X-XW8OhWxkq79XR5")}
                description="덴마크 Nordfyns 자유학교장"
              />
              <PersonCard
                name="한오석"
                position="이사"
                image={getGoogleDriveImageUrl("1X033E7W5-5usT0LETawG5SLmwJPRS4-y")}
                description="보건학 박사"
              />
              <PersonCard
                name="김대원"
                position="이사"
                image={getGoogleDriveImageUrl("1eUF9u8MkIbQiaKLKtemlLIJPX7goWS99")}
                description="법무법인 이헌 대표 변호사"
              />
              <PersonCard
                name="장진혁"
                position="이사"
                image={getGoogleDriveImageUrl("1x-FwzyXDd9FCAJPDUxZjlSSxRD6Y-LQk")}
                description="의료법인 한양의료재단 이사장"
              />
              <PersonCard
                name="김영호"
                position="이사"
                image={getGoogleDriveImageUrl("1MqvhfRsMJ-wX3fb1BTVbTdk94WiSSByp")}
                description="드림켐 대표"
              />
              <PersonCard
                name="구진성"
                position="이사"
                image={getGoogleDriveImageUrl("12g98PBzRYbvPvd1wlTnPJPR8sDTaHk0C")}
                description="이태석 리더십 아카데미 대표"
              />
              <PersonCard
                name="윤석준"
                position="후원이사"
                image={getGoogleDriveImageUrl("1XaCg8MSqvDGlWFGtZbgRaa7BZWDh-Zbe")}
                description="㈜ 중헌제약 대표이사"
              />
            </div>
          </div>
        </section>

        {/* Staff Section */}
        <section className="py-16 md:py-24 bg-muted/50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-14">
              <p className="text-sm font-semibold uppercase tracking-widest text-primary mb-3">Secretariat</p>
              <h2 className="text-3xl font-bold text-foreground md:text-4xl">사무국</h2>
              <div className="mx-auto mt-4 h-1 w-16 rounded-full bg-primary" />
            </div>
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              <PersonCard
                name="이소영"
                position="사무국장"
                image="/placeholder.svg?height=400&width=300"
                description="재단의 전반적인 운영 총괄"
              />
              <PersonCard
                name="정경미"
                position="교육사업국장"
                image="/placeholder.svg?height=400&width=300"
                description="참 배움터 대표"
              />
              <PersonCard
                name="권혁수"
                position="희망나눔국장"
                image="/placeholder.svg?height=400&width=300"
                description="한국차문화교육원 이사"
              />
              <PersonCard
                name="김종갑"
                position="홍보국장"
                image="/placeholder.svg?height=400&width=300"
                description="SBS 보도국 시민사회부 VJ"
              />
              <PersonCard
                name="김성미"
                position="미디어국장"
                image="/placeholder.svg?height=400&width=300"
                description="울지마톤즈 촬영감독"
              />
              <PersonCard
                name="조정관"
                position="현장지원국장"
                image="/placeholder.svg?height=400&width=300"
                description="울지마톤즈, 부활 제작팀"
              />
              <PersonCard
                name="이강윤"
                position="대외협력국장"
                image="/placeholder.svg?height=400&width=300"
                description="울지마톤즈, 부활 제작팀"
              />
              <PersonCard
                name="구교철"
                position="해외사업국장"
                image="/placeholder.svg?height=400&width=300"
                description="해외사업 총괄"
              />
              
            </div>
          </div>
        </section>

        {/* Advisory Board Section */}
        <section className="py-16 md:py-24">
          <div className="container mx-auto px-4">
            <div className="text-center mb-14">
              <p className="text-sm font-semibold uppercase tracking-widest text-primary mb-3">Global Chapters</p>
              <h2 className="text-3xl font-bold text-foreground md:text-4xl">해외지부</h2>
              <div className="mx-auto mt-4 h-1 w-16 rounded-full bg-primary" />
            </div>
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              <PersonCard
                name="구교산"
                position="미국 지부장"
                image={getGoogleDriveImageUrl("1cTnltq4uc_Q8TG7Ua5dopKQalZSuvgA4")}
                description="미국 지부"
              />
              <PersonCard
                name="Garang L. Deng"
                position="남수단 지부장"
                image={getGoogleDriveImageUrl("1eJWFNRWV-ultrR734m6Zl67kk2nZq8nU")}
                description="남수단 지부"
              />
              <PersonCard
                name="Armen Melikyan"
                position="우크라이나 지부장"
                image={getGoogleDriveImageUrl("19AQMqBjmh_-dbWVRiQbuCd5XKAbCHisG")}
                description="우크라이나 지부"
              />
            </div>
          </div>
        </section>

        {/* Join Us Section */}
        <section className="relative py-20 md:py-28 overflow-hidden">
          <div className="absolute inset-0 bg-primary" />
          <div className="absolute inset-0 opacity-10">
            <div className="absolute -top-24 -right-24 w-96 h-96 rounded-full border border-white/20" />
            <div className="absolute -bottom-16 -left-16 w-72 h-72 rounded-full border border-white/20" />
          </div>
          <div className="container relative z-10 mx-auto px-4 text-center text-primary-foreground">
            <h2 className="text-3xl font-bold mb-4 md:text-4xl text-balance">함께 해주세요</h2>
            <p className="text-lg max-w-2xl mx-auto mb-10 text-primary-foreground/80 leading-relaxed">
              이태석 신부의 정신을 이어받아 함께 걸어갈 동반자를 찾고 있습니다. 여러분의 관심과 참여가 이태석 신부의
              정신을 이어가는 소중한 힘이 됩니다.
            </p>
            <Button
              asChild
              size="lg"
              className="bg-white text-primary hover:bg-white/90 font-semibold px-8 rounded-full shadow-lg transition-all duration-300 hover:scale-105 hover:shadow-xl"
            >
              <Link href="/about/contact">문의하기</Link>
            </Button>
          </div>
        </section>
      </main>
    </div>
  )
}

function PersonCard({
  name,
  position,
  image,
  description,
}: {
  name: string
  position: string
  image: string
  description: string
}) {
  return (
    <div className="group relative">
      <div className="relative overflow-hidden rounded-2xl bg-card shadow-sm ring-1 ring-border/50 transition-all duration-500 hover:shadow-xl hover:ring-primary/20 hover:-translate-y-1">
        {/* Photo */}
        <div className="aspect-[4/5] relative overflow-hidden">
          <Image
            src={image || "/placeholder.svg?height=400&width=300"}
            alt={name}
            fill
            className="object-cover transition-transform duration-700 group-hover:scale-105"
            unoptimized={image.includes("drive.google.com")}
          />
          {/* Gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/0 to-transparent" />
          {/* Position badge */}
          <div className="absolute top-4 left-4">
            <span className="inline-flex items-center rounded-full bg-primary/90 px-3 py-1 text-xs font-semibold text-primary-foreground backdrop-blur-sm">
              {position}
            </span>
          </div>
          {/* Name overlay at bottom */}
          <div className="absolute bottom-0 left-0 right-0 p-5">
            <h3 className="text-xl font-bold text-white tracking-tight">{name}</h3>
            <p className="text-sm text-white/80 mt-1 leading-relaxed">{description}</p>
          </div>
        </div>
      </div>
    </div>
  )
}
