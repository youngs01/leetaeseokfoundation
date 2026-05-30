"use client"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import {
  CreditCard,
  CalendarClock,
  FileText,
  GraduationCap,
  Heart,
  Stethoscope,
  HelpCircle,
  Copy,
  Check,
  Download,
} from "lucide-react"
import { useState } from "react"
import { useToast } from "@/hooks/use-toast"

export default function DonationPage() {
  const { toast } = useToast()
  const [copied, setCopied] = useState(false)

  const accountNumber = "67210104220646"
  const bankName = "국민은행"

  const copyToClipboard = () => {
    navigator.clipboard.writeText(accountNumber)
    setCopied(true)
    toast({
      title: "계좌번호가 복사되었습니다",
      description: "국민은행 67210104220646",
    })

    setTimeout(() => setCopied(false), 2000)
  }

  const downloadForm = () => {
    // PDF 파일 다운로드 링크 생성
    const link = document.createElement("a")
    link.href = "/forms/이태석재단_정기후원신청서.pdf" // 실제 PDF 파일 경로
    link.download = "이태석재단_정기후원신청서.pdf"
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)

    toast({
      title: "정기 후원 신청서 다운로드 완료",
      description: "작성 후 이메일(smiletonj@gmail.com)로 보내주세요.",
    })
  }

  return (
    <main className="min-h-screen">
      {/* 히어로 섹션 */}
      <section className="bg-primary text-white py-16 md:py-24">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-3xl md:text-4xl font-bold mb-4">후원 참여</h1>
          <p className="text-lg md:text-xl max-w-2xl mx-auto">
            여러분의 소중한 후원은 이태석 신부님의 정신을 이어받아 소외된 이웃들에게 희망을 전하는 데 사용됩니다
          </p>
        </div>
      </section>

      {/* 후원 방법 안내 */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-12">후원 방법 안내</h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="flex items-center gap-3">
                  <div className="bg-primary/10 p-2 rounded-full">
                    <CreditCard className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle>일시 후원</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  한 번의 후원으로 이태석재단의 다양한 사업을 지원할 수 있습니다.
                </p>
              </CardContent>
              <CardFooter>
                <Button asChild variant="outline" className="w-full border-primary text-primary hover:bg-primary/10">
                  <a
                    href="https://mrmweb.hsit.co.kr/v2/?server=WtSZ7Ky71d8XPjUJAVzyGQ==&action=once2"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    일시 후원하기
                  </a>
                </Button>
              </CardFooter>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="flex items-center gap-3">
                  <div className="bg-primary/10 p-2 rounded-full">
                    <CalendarClock className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle>정기 후원</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  매월 정기적인 후원으로 이태석재단의 지속적인 사업 운영에 도움을 주세요.
                </p>
              </CardContent>
              <CardFooter className="flex flex-col gap-2">
                <Button asChild variant="outline" className="w-full border-primary text-primary hover:bg-primary/10">
                  <a
                    href="https://mrmweb.hsit.co.kr/v2/?server=WtSZ7Ky71d8XPjUJAVzyGQ==&action=join"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    정기 후원하기
                  </a>
                </Button>
                <Button
                  variant="ghost"
                  className="w-full flex items-center justify-center gap-2 text-primary hover:bg-primary/5"
                  onClick={downloadForm}
                >
                  <Download className="h-4 w-4" />
                  정기 후원 신청서 다운로드
                </Button>
              </CardFooter>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="flex items-center gap-3">
                  <div className="bg-primary/10 p-2 rounded-full">
                    <FileText className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle>납부내역/영수증</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">후원 납부내역을 확인하고 기부금 영수증을 발급받으세요.</p>
              </CardContent>
              <CardFooter>
                <Button asChild variant="outline" className="w-full border-primary text-primary hover:bg-primary/10">
                  <a
                    href="https://mrmweb.hsit.co.kr/v2/?server=WtSZ7Ky71d8XPjUJAVzyGQ==&action=receipt"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    납부내역 확인
                  </a>
                </Button>
              </CardFooter>
            </Card>
          </div>
        </div>
      </section>

      {/* 후원이 만드는 변화 */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-12">후원이 만드는 변화</h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto mb-12">
            <div className="bg-white p-6 rounded-lg shadow-sm text-center">
              <div className="bg-blue-50 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <GraduationCap className="h-8 w-8 text-blue-500" />
              </div>
              <h3 className="text-xl font-bold mb-2">교육 지원</h3>
              <p className="text-muted-foreground">
                소외된 지역의 아이들에게 교육 기회를 제공하고 장학금을 지원합니다.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm text-center">
              <div className="bg-red-50 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Stethoscope className="h-8 w-8 text-red-500" />
              </div>
              <h3 className="text-xl font-bold mb-2">의료 지원</h3>
              <p className="text-muted-foreground">의료 서비스에 접근하기 어려운 지역에 의료 지원을 제공합니다.</p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm text-center">
              <div className="bg-green-50 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Heart className="h-8 w-8 text-green-500" />
              </div>
              <h3 className="text-xl font-bold mb-2">인도적 지원</h3>
              <p className="text-muted-foreground">재난과 위기 상황에 처한 이들에게 긴급 구호와 지원을 제공합니다.</p>
            </div>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-sm max-w-2xl mx-auto">
            <h3 className="text-xl font-bold mb-4 text-center">후원 계좌 안내</h3>
            <div className="flex items-center justify-center gap-4 mb-4">
              <span className="text-lg font-medium">{bankName}</span>
              <span className="text-lg font-medium">{accountNumber}</span>
              <button
                onClick={copyToClipboard}
                className="bg-gray-100 p-2 rounded-full hover:bg-gray-200 transition-colors"
                aria-label="계좌번호 복사"
              >
                {copied ? <Check className="h-5 w-5 text-green-500" /> : <Copy className="h-5 w-5" />}
              </button>
            </div>
            <p className="text-center text-muted-foreground">예금주: 사단법인 이태석재단</p>
          </div>
        </div>
      </section>

      {/* 자주 묻는 질문 */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="flex items-center gap-3 justify-center mb-8">
            <HelpCircle className="h-6 w-6 text-primary" />
            <h2 className="text-2xl md:text-3xl font-bold text-center">자주 묻는 질문</h2>
          </div>

          <div className="max-w-3xl mx-auto">
            <Accordion type="single" collapsible className="w-full">
              <AccordionItem value="item-1">
                <AccordionTrigger>후원금은 어떻게 사용되나요?</AccordionTrigger>
                <AccordionContent>
                  후원금은 이태석재단의 교육 지원, 의료 지원, 인도적 지원 등 다양한 사업에 사용됩니다. 모든 후원금 사용
                  내역은 재단 홈페이지와 연간 보고서를 통해 투명하게 공개됩니다.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-2">
                <AccordionTrigger>기부금 영수증은 어떻게 발급받나요?</AccordionTrigger>
                <AccordionContent>
                  후원 시 입력하신 이메일로 기부금 영수증이 자동 발송됩니다. 별도로 영수증이 필요하신 경우, 재단
                  사무국(02-1234-5678)으로 연락주시면 발급해 드립니다.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-3">
                <AccordionTrigger>정기 후원은 언제든지 중단할 수 있나요?</AccordionTrigger>
                <AccordionContent>
                  네, 정기 후원은 언제든지 중단하실 수 있습니다. 재단 사무국으로 연락주시거나 마이페이지에서 직접
                  해지하실 수 있습니다.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-4">
                <AccordionTrigger>후원금은 세금 공제가 가능한가요?</AccordionTrigger>
                <AccordionContent>
                  네, 이태석재단은 지정기부금단체로 등록되어 있어 개인의 경우 소득금액의 30% 한도 내에서, 법인의 경우
                  소득금액의 10% 한도 내에서 세금 공제 혜택을 받으실 수 있습니다.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-5">
                <AccordionTrigger>해외에서도 후원이 가능한가요?</AccordionTrigger>
                <AccordionContent>
                  네, 해외에서도 후원이 가능합니다. 해외 송금을 원하시는 경우 재단 사무국으로 연락주시면 자세한 안내를
                  도와드리겠습니다.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </div>
      </section>
    </main>
  )
}
