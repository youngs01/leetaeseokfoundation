import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import Link from "next/link"

export default function SupportPage() {
  return (
    <div className="container mx-auto py-10">
      <Card className="w-full max-w-3xl mx-auto">
        <CardHeader>
          <CardTitle>후원하기</CardTitle>
          <CardDescription>저희 프로젝트를 후원해주셔서 감사합니다.</CardDescription>
        </CardHeader>
        <CardContent className="grid gap-4">
          <div className="grid gap-2">
            <Button className="w-full bg-[#0088cc] text-white hover:bg-[#006699]" asChild>
              <Link href="/support/regular">정기 후원하기</Link>
            </Button>
            <Button className="w-full bg-[#0088cc] text-white hover:bg-[#006699]" asChild>
              <Link href="/support/history">납부내역 확인</Link>
            </Button>
          </div>
          <Separator />
          <div className="grid gap-2">
            <p>후원해주신 금액은 프로젝트 개발 및 유지보수에 사용됩니다.</p>
            <p>문의사항은 이메일 또는 전화로 연락주시면 친절하게 안내해드리겠습니다.</p>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
