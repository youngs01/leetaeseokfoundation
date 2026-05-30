"use client"

import type React from "react"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Checkbox } from "@/components/ui/checkbox"
import { Textarea } from "@/components/ui/textarea"
import { ArrowLeft } from "lucide-react"

export default function OneTimeDonationPage() {
  const router = useRouter()
  const [selectedAmount, setSelectedAmount] = useState<string>("10000")
  const [customAmount, setCustomAmount] = useState<string>("")
  const [donorInfo, setDonorInfo] = useState({
    name: "",
    phone: "",
    email: "",
    message: "",
    address: "",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    window.open(
      "https://mrmweb.hsit.co.kr/v2/?server=WtSZ7Ky71d8XPjUJAVzyGQ==&action=once2",
      "_blank",
      "noopener,noreferrer",
    )
  }

  return (
    <main className="min-h-screen bg-gray-50 py-12">
      <div className="container mx-auto px-4">
        <Button variant="ghost" className="mb-8 flex items-center gap-2" onClick={() => router.push("/donation")}>
          <ArrowLeft className="h-4 w-4" />
          후원 페이지로 돌아가기
        </Button>

        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-10">
            <h1 className="text-3xl font-bold text-primary mb-4">일시 후원하기</h1>
            <p className="text-muted-foreground">일시 후원으로 이태석재단의 사업에 도움을 주세요</p>
          </div>

          <form onSubmit={handleSubmit}>
            <Card className="mb-8">
              <CardHeader>
                <CardTitle>후원 금액 선택</CardTitle>
                <CardDescription>후원하실 금액을 선택하거나 직접 입력해주세요</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-6">
                  {["10000", "30000", "50000", "100000"].map((amount) => (
                    <Button
                      key={amount}
                      type="button"
                      variant={selectedAmount === amount ? "default" : "outline"}
                      className="h-16"
                      onClick={() => {
                        setSelectedAmount(amount)
                        setCustomAmount("")
                      }}
                    >
                      {Number.parseInt(amount).toLocaleString()}원
                    </Button>
                  ))}
                </div>

                <div className="flex flex-col space-y-2">
                  <Label htmlFor="customAmount">직접 입력</Label>
                  <div className="flex items-center">
                    <Input
                      id="customAmount"
                      type="number"
                      placeholder="금액을 입력해주세요"
                      value={customAmount}
                      onChange={(e) => {
                        setCustomAmount(e.target.value)
                        setSelectedAmount("")
                      }}
                      className="rounded-r-none"
                    />
                    <div className="bg-muted px-3 py-2 border border-l-0 border-input rounded-r-md">원</div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="mb-8">
              <CardHeader>
                <CardTitle>후원자 정보</CardTitle>
                <CardDescription>후원자 정보를 입력해주세요</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="name">
                      이름 <span className="text-red-500">*</span>
                    </Label>
                    <Input
                      id="name"
                      required
                      value={donorInfo.name}
                      onChange={(e) => setDonorInfo({ ...donorInfo, name: e.target.value })}
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="phone">
                      연락처 <span className="text-red-500">*</span>
                    </Label>
                    <Input
                      id="phone"
                      type="tel"
                      required
                      value={donorInfo.phone}
                      onChange={(e) => setDonorInfo({ ...donorInfo, phone: e.target.value })}
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="email">
                    이메일 <span className="text-red-500">*</span>
                  </Label>
                  <Input
                    id="email"
                    type="email"
                    required
                    value={donorInfo.email}
                    onChange={(e) => setDonorInfo({ ...donorInfo, email: e.target.value })}
                  />
                  <p className="text-xs text-muted-foreground">후원 내역 및 소식이 이메일로 발송됩니다</p>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="address">주소</Label>
                  <Input
                    id="address"
                    value={donorInfo.address}
                    onChange={(e) => setDonorInfo({ ...donorInfo, address: e.target.value })}
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message">응원 메시지</Label>
                  <Textarea
                    id="message"
                    placeholder="응원 메시지를 남겨주세요"
                    value={donorInfo.message}
                    onChange={(e) => setDonorInfo({ ...donorInfo, message: e.target.value })}
                  />
                </div>
              </CardContent>
            </Card>

            <Card className="mb-8">
              <CardHeader>
                <CardTitle>개인정보 수집 및 이용 동의</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="border rounded-md p-4 bg-gray-50 text-sm h-40 overflow-y-auto">
                  <p className="mb-2 font-medium">개인정보 수집 및 이용 동의 (필수)</p>
                  <p>이태석재단은 일시 후원 및 기부금 영수증 발급을 위해 아래와 같이 개인정보를 수집·이용합니다.</p>
                  <p className="mt-2">1. 수집항목: 이름, 연락처, 이메일, 주소</p>
                  <p>2. 수집목적: 일시 후원 관리, 기부금 영수증 발급, 후원 관련 안내</p>
                  <p>3. 보유기간: 후원일로부터 5년간 보관 후 파기</p>
                  <p className="mt-2">동의를 거부할 수 있으며, 동의 거부 시 일시 후원이 제한될 수 있습니다.</p>
                </div>

                <div className="flex items-start space-x-2">
                  <Checkbox id="terms" required />
                  <Label htmlFor="terms" className="text-sm">
                    개인정보 수집 및 이용에 동의합니다 (필수)
                  </Label>
                </div>

                <div className="flex items-start space-x-2">
                  <Checkbox id="marketing" />
                  <Label htmlFor="marketing" className="text-sm">
                    이태석재단의 소식 및 후원 안내 이메일 수신에 동의합니다 (선택)
                  </Label>
                </div>
              </CardContent>
              <CardFooter>
                <Button
                  type="button"
                  className="w-full"
                  disabled={!selectedAmount && !customAmount}
                  onClick={() =>
                    window.open(
                      "https://mrmweb.hsit.co.kr/v2/?server=WtSZ7Ky71d8XPjUJAVzyGQ==&action=once2",
                      "_blank",
                      "noopener,noreferrer",
                    )
                  }
                >
                  {Number.parseInt(selectedAmount || customAmount || "0").toLocaleString()}원 일시 후원하기
                </Button>
              </CardFooter>
            </Card>
          </form>
        </div>
      </div>
    </main>
  )
}
