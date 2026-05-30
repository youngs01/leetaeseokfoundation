"use client"

import type React from "react"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Checkbox } from "@/components/ui/checkbox"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { ArrowLeft, AlertCircle, Download } from "lucide-react"
import { useToast } from "@/hooks/use-toast"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"

export default function RegularDonationPage() {
  const router = useRouter()
  const { toast } = useToast()
  const [selectedAmount, setSelectedAmount] = useState<string>("10000")
  const [customAmount, setCustomAmount] = useState<string>("")
  const [paymentDay, setPaymentDay] = useState<string>("1")
  const [paymentMethod, setPaymentMethod] = useState<string>("account")
  const [receiptNeeded, setReceiptNeeded] = useState<string>("yes")
  const [idNumberType, setIdNumberType] = useState<string>("resident")
  const [isMinor, setIsMinor] = useState<boolean>(false)
  const [donorInfo, setDonorInfo] = useState({
    name: "",
    phone: "",
    email: "",
    address: "",
    idNumber: "",
    idNumberFront: "",
    gender: "",
    guardianName: "",
    guardianRelation: "",
    guardianPhone: "",
    bank: "",
    accountNumber: "",
    accountHolder: "",
    cardCompany: "",
    cardNumber: "",
    cardHolder: "",
    cardExpiry: {
      month: "",
      year: "",
    },
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    window.open(
      "https://mrmweb.hsit.co.kr/v2/?server=WtSZ7Ky71d8XPjUJAVzyGQ==&action=join",
      "_blank",
      "noopener,noreferrer",
    )
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
    <main className="min-h-screen bg-gray-50 py-12">
      <div className="container mx-auto px-4">
        <Button variant="ghost" className="mb-8 flex items-center gap-2" onClick={() => router.push("/donation")}>
          <ArrowLeft className="h-4 w-4" />
          후원 페이지로 돌아가기
        </Button>

        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-10">
            <h1 className="text-3xl font-bold text-primary mb-4">정기 후원하기</h1>
            <p className="text-muted-foreground">
              매월 정기적인 후원으로 이태석재단의 지속적인 사업 운영에 도움을 주세요
            </p>
          </div>

          <Alert className="mb-8 border-green-200 bg-green-50 text-green-800">
            <AlertCircle className="h-4 w-4 text-green-600" />
            <AlertTitle>정기 후원 안내</AlertTitle>
            <AlertDescription>
              정기 후원은 매월 지정하신 날짜에 자동으로 후원금이 출금되는 방식입니다. 계좌이체 또는 신용카드를 통해
              편리하게 후원하실 수 있습니다.
            </AlertDescription>
          </Alert>

          <form onSubmit={handleSubmit}>
            <Card className="mb-8">
              <CardHeader>
                <CardTitle>후원 회원 정보</CardTitle>
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
                      휴대전화 <span className="text-red-500">*</span>
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
                  <Label htmlFor="address">
                    주소 <span className="text-red-500">*</span>
                  </Label>
                  <Input
                    id="address"
                    required
                    value={donorInfo.address}
                    onChange={(e) => setDonorInfo({ ...donorInfo, address: e.target.value })}
                  />
                  <p className="text-xs text-muted-foreground">우편물 수령이 가능한 도로명 주소 기입</p>
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
                </div>

                <div className="space-y-2">
                  <Label>기부금 영수증</Label>
                  <RadioGroup
                    value={receiptNeeded}
                    onValueChange={setReceiptNeeded}
                    className="flex flex-col space-y-2"
                  >
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="yes" id="receipt-yes" />
                      <Label htmlFor="receipt-yes" className="flex items-center gap-2">
                        예
                      </Label>
                      {receiptNeeded === "yes" && (
                        <div className="flex items-center ml-4 space-x-2">
                          <RadioGroup
                            value={idNumberType}
                            onValueChange={setIdNumberType}
                            className="flex items-center space-x-4"
                          >
                            <div className="flex items-center space-x-2">
                              <RadioGroupItem value="resident" id="resident-id" />
                              <Label htmlFor="resident-id">주민등록번호</Label>
                            </div>
                            <div className="flex items-center space-x-2">
                              <RadioGroupItem value="business" id="business-id" />
                              <Label htmlFor="business-id">사업자등록번호</Label>
                            </div>
                          </RadioGroup>
                        </div>
                      )}
                    </div>

                    {receiptNeeded === "yes" && idNumberType === "resident" && (
                      <div className="flex items-center space-x-2 ml-6">
                        <Input
                          placeholder="주민번호 앞자리"
                          className="w-32"
                          value={donorInfo.idNumberFront}
                          onChange={(e) => setDonorInfo({ ...donorInfo, idNumberFront: e.target.value })}
                        />
                        <span>/</span>
                        <Select
                          value={donorInfo.gender}
                          onValueChange={(value) => setDonorInfo({ ...donorInfo, gender: value })}
                        >
                          <SelectTrigger className="w-24">
                            <SelectValue placeholder="성별" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="1">1</SelectItem>
                            <SelectItem value="2">2</SelectItem>
                            <SelectItem value="3">3</SelectItem>
                            <SelectItem value="4">4</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    )}

                    {receiptNeeded === "yes" && idNumberType === "business" && (
                      <div className="flex items-center space-x-2 ml-6">
                        <Input
                          placeholder="사업자등록번호"
                          value={donorInfo.idNumber}
                          onChange={(e) => setDonorInfo({ ...donorInfo, idNumber: e.target.value })}
                        />
                      </div>
                    )}

                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="no" id="receipt-no" />
                      <Label htmlFor="receipt-no">아니오</Label>
                    </div>
                  </RadioGroup>
                </div>

                <div className="space-y-2 border-t pt-4">
                  <div className="flex items-center space-x-2">
                    <Checkbox
                      id="isMinor"
                      checked={isMinor}
                      onCheckedChange={(checked) => setIsMinor(checked as boolean)}
                    />
                    <Label htmlFor="isMinor">만 14세 미만의 경우, 법정대리인의 동의가 꼭 필요합니다.</Label>
                  </div>

                  {isMinor && (
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4">
                      <div className="space-y-2">
                        <Label htmlFor="guardianName">법정대리인 성함</Label>
                        <Input
                          id="guardianName"
                          value={donorInfo.guardianName}
                          onChange={(e) => setDonorInfo({ ...donorInfo, guardianName: e.target.value })}
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="guardianRelation">관계</Label>
                        <Input
                          id="guardianRelation"
                          value={donorInfo.guardianRelation}
                          onChange={(e) => setDonorInfo({ ...donorInfo, guardianRelation: e.target.value })}
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="guardianPhone">법정대리인 연락처</Label>
                        <Input
                          id="guardianPhone"
                          value={donorInfo.guardianPhone}
                          onChange={(e) => setDonorInfo({ ...donorInfo, guardianPhone: e.target.value })}
                        />
                      </div>
                    </div>
                  )}
                </div>
              </CardContent>
            </Card>

            <Card className="mb-8">
              <CardHeader>
                <CardTitle>후원 방법</CardTitle>
                <CardDescription>후원 방법을 선택해주세요</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <RadioGroup
                  value={paymentMethod}
                  onValueChange={setPaymentMethod}
                  className="grid grid-cols-1 md:grid-cols-2 gap-4"
                >
                  <div
                    className={`border rounded-lg p-4 ${paymentMethod === "account" ? "border-primary" : "border-muted"}`}
                  >
                    <div className="flex items-center space-x-2 mb-4">
                      <RadioGroupItem value="account" id="account" />
                      <Label htmlFor="account" className="text-lg font-medium">
                        계좌이체
                      </Label>
                    </div>

                    {paymentMethod === "account" && (
                      <div className="space-y-4">
                        <div className="space-y-2">
                          <Label htmlFor="bank">은행명</Label>
                          <Select
                            value={donorInfo.bank}
                            onValueChange={(value) => setDonorInfo({ ...donorInfo, bank: value })}
                          >
                            <SelectTrigger>
                              <SelectValue placeholder="은행을 선택해주세요" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="kb">국민은행</SelectItem>
                              <SelectItem value="shinhan">신한은행</SelectItem>
                              <SelectItem value="woori">우리은행</SelectItem>
                              <SelectItem value="hana">하나은행</SelectItem>
                              <SelectItem value="nh">농협은행</SelectItem>
                              <SelectItem value="ibk">기업은행</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>

                        <div className="space-y-2">
                          <Label htmlFor="accountNumber">계좌번호</Label>
                          <Input
                            id="accountNumber"
                            placeholder="'-' 없이 입력해주세요"
                            value={donorInfo.accountNumber}
                            onChange={(e) => setDonorInfo({ ...donorInfo, accountNumber: e.target.value })}
                          />
                        </div>

                        <div className="space-y-2">
                          <Label htmlFor="accountHolder">예금주 명</Label>
                          <Input
                            id="accountHolder"
                            value={donorInfo.accountHolder}
                            onChange={(e) => setDonorInfo({ ...donorInfo, accountHolder: e.target.value })}
                          />
                        </div>

                        <div className="space-y-2">
                          <Label>출금일</Label>
                          <div className="flex items-center space-x-4">
                            <div className="flex items-center space-x-2">
                              <input
                                type="radio"
                                id="day-1"
                                name="paymentDay"
                                value="1"
                                checked={paymentDay === "1"}
                                onChange={() => setPaymentDay("1")}
                                className="h-4 w-4"
                              />
                              <Label htmlFor="day-1">1일</Label>
                            </div>
                            <div className="flex items-center space-x-2">
                              <input
                                type="radio"
                                id="day-25"
                                name="paymentDay"
                                value="25"
                                checked={paymentDay === "25"}
                                onChange={() => setPaymentDay("25")}
                                className="h-4 w-4"
                              />
                              <Label htmlFor="day-25">25일</Label>
                            </div>
                          </div>
                        </div>

                        <div className="flex items-center space-x-2 mt-4">
                          <Checkbox id="redebitConsent" />
                          <Label htmlFor="redebitConsent" className="text-sm">
                            출금일에 계좌잔액 부족으로 미출금 시, 1일 → 10일, 25일 → 다음 달 10일 재출금 됩니다.
                          </Label>
                        </div>
                      </div>
                    )}
                  </div>

                  <div
                    className={`border rounded-lg p-4 ${paymentMethod === "card" ? "border-primary" : "border-muted"}`}
                  >
                    <div className="flex items-center space-x-2 mb-4">
                      <RadioGroupItem value="card" id="card" />
                      <Label htmlFor="card" className="text-lg font-medium">
                        카드
                      </Label>
                    </div>

                    {paymentMethod === "card" && (
                      <div className="space-y-4">
                        <div className="space-y-2">
                          <Label htmlFor="cardCompany">카드사</Label>
                          <Select
                            value={donorInfo.cardCompany}
                            onValueChange={(value) => setDonorInfo({ ...donorInfo, cardCompany: value })}
                          >
                            <SelectTrigger>
                              <SelectValue placeholder="카드사를 선택해주세요" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="samsung">삼성카드</SelectItem>
                              <SelectItem value="shinhan">신한카드</SelectItem>
                              <SelectItem value="kb">국민카드</SelectItem>
                              <SelectItem value="hyundai">현대카드</SelectItem>
                              <SelectItem value="lotte">롯데카드</SelectItem>
                              <SelectItem value="bc">BC카드</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>

                        <div className="space-y-2">
                          <Label htmlFor="cardNumber">카드번호</Label>
                          <Input
                            id="cardNumber"
                            placeholder="'-' 없이 입력해주세요"
                            value={donorInfo.cardNumber}
                            onChange={(e) => setDonorInfo({ ...donorInfo, cardNumber: e.target.value })}
                          />
                        </div>

                        <div className="space-y-2">
                          <Label htmlFor="cardExpiry">유효기간</Label>
                          <div className="flex items-center space-x-2">
                            <Select
                              value={donorInfo.cardExpiry.month}
                              onValueChange={(value) =>
                                setDonorInfo({
                                  ...donorInfo,
                                  cardExpiry: { ...donorInfo.cardExpiry, month: value },
                                })
                              }
                            >
                              <SelectTrigger className="w-24">
                                <SelectValue placeholder="월" />
                              </SelectTrigger>
                              <SelectContent>
                                {Array.from({ length: 12 }, (_, i) => i + 1).map((month) => (
                                  <SelectItem key={month} value={month.toString().padStart(2, "0")}>
                                    {month}월
                                  </SelectItem>
                                ))}
                              </SelectContent>
                            </Select>
                            <span>/</span>
                            <Select
                              value={donorInfo.cardExpiry.year}
                              onValueChange={(value) =>
                                setDonorInfo({
                                  ...donorInfo,
                                  cardExpiry: { ...donorInfo.cardExpiry, year: value },
                                })
                              }
                            >
                              <SelectTrigger className="w-24">
                                <SelectValue placeholder="년" />
                              </SelectTrigger>
                              <SelectContent>
                                {Array.from({ length: 10 }, (_, i) => new Date().getFullYear() + i).map((year) => (
                                  <SelectItem key={year} value={year.toString().slice(-2)}>
                                    {year}년
                                  </SelectItem>
                                ))}
                              </SelectContent>
                            </Select>
                          </div>
                        </div>

                        <div className="space-y-2">
                          <Label htmlFor="cardHolder">카드 소유주 명</Label>
                          <Input
                            id="cardHolder"
                            value={donorInfo.cardHolder}
                            onChange={(e) => setDonorInfo({ ...donorInfo, cardHolder: e.target.value })}
                          />
                        </div>
                      </div>
                    )}
                  </div>
                </RadioGroup>

                <div className="space-y-2 pt-4">
                  <Label htmlFor="donationAmount">후원금액</Label>
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
                  <p>
                    회원관리, 후원회비 관리, 회원서비스 및 후원 확대를 위해 성명, 생년월일, 성별, 휴대전화번호, 주소,
                    이메일, 후원정보(계좌이체 : 은행명, 계좌번호, 예금주명, 생년월일 또는 사업자등록번호 / 신용카드 :
                    카드사, 카드번호, 유효기간, 카드주명, 생년월일) 등을 수집 및 이용합니다.
                  </p>
                  <p className="mt-2">
                    주민등록번호는 소득세법 제160조의 3 및 소득세법시행령 제209조의 3, 법인세법 제112조의 2 및 법인세법
                    시행령 제155조의 2(기부금영수증 발급명세의 작성·보관 의무 등)에 의거해 수집하며, 기부금영수증 발급을
                    위한 국세청 신고용으로만 이용됩니다.
                  </p>
                </div>

                <div className="border rounded-md p-4 bg-gray-50 text-sm h-40 overflow-y-auto">
                  <p className="mb-2 font-medium">개인정보 취급위탁 동의 (필수)</p>
                  <p>
                    기부금 출금 및 관리 등의 기부처리이행을 위해 휴먼소프트웨어(MRM), 한국신용평가정보(주), 금융결제원,
                    나이스페이먼츠(주)과 기부금액 증액 및 이메일, 뉴스레터, 우편물 및 문자 발송을 위해
                    휴먼소프트웨어(MRM)를 이용하고 있습니다.
                  </p>
                </div>

                <div className="border rounded-md p-4 bg-gray-50 text-sm h-40 overflow-y-auto">
                  <p className="mb-2 font-medium">CMS 약관 (필수)</p>
                  <p>
                    제1조 (목적) 본 약관의 목적은 후원회원이 CMS서비스를 이용함에 있어 필요한 제반 사항을 정하는 데
                    있다.
                  </p>
                  <p>
                    제2조 (서비스의 범위) 「사단법인 이태석 재단(이하 이태석 재단)」이 제공하는 후원금 CMS 자동이체의
                    범위는 CMS 자동이체 동의 회원으로부터 받는 기부금을 후원회원의 자동이체 신청계좌에서 자동 출금하여
                    이태석 재단의 지정 계좌로 입금하는 서비스이다.
                  </p>
                  <p>제3조 (CMS 이용신청 및 변경)</p>
                  <p>
                    1) 귀하는 후원회원 신청 사전에 CMS 자동이체 약관에 동의해야 하며, 자동이체거래에 변경, 해지 등의
                    신청을 할 때에는 다음 절차에 따라 처리한다.
                  </p>
                  <p>2) 자동이체 변경, 해지</p>
                  <p>
                    ① 이태석 재단은 후원회원으로부터 자동이체를 변경하거나 해지 등의 요청 사항을 받지 않는 한 후원을
                    지속하는 것으로 간주, 별다른 통보 없이 CMS를 계속 실시한다.
                  </p>
                  <p>
                    ② 후원회원은 이체계좌번호를 변경하거나 후원을 해지할 경우 이태석 재단 담당자를 통한 본인확인 절차를
                    거쳐야 한다.
                  </p>
                  <p>제4조 (이체 예정일)</p>
                  <p>1) 이체 예정일은 매월 1일, 25일로 한다.</p>
                  <p>2) 단, 후원회원의 \</p>
                </div>

                <div className="flex items-start space-x-2">
                  <Checkbox id="terms" required />
                  <Label htmlFor="terms" className="text-sm">
                    개인정보 수집 및 이용에 동의합니다 (필수)
                  </Label>
                </div>

                <div className="flex items-start space-x-2">
                  <Checkbox id="cmsTerms" required />
                  <Label htmlFor="cmsTerms" className="text-sm">
                    개인정보 취급위탁에 동의합니다 (필수)
                  </Label>
                </div>

                <div className="flex items-start space-x-2">
                  <Checkbox id="marketing" />
                  <Label htmlFor="marketing" className="text-sm">
                    이태석재단의 소식 및 후원 안내 이메일 수신에 동의합니다 (선택)
                  </Label>
                </div>
              </CardContent>
              <CardFooter className="flex flex-row gap-4">
                <Button
                  className="flex-1"
                  onClick={() =>
                    window.open(
                      "https://mrmweb.hsit.co.kr/v2/?server=WtSZ7Ky71d8XPjUJAVzyGQ==&action=join",
                      "_blank",
                      "noopener,noreferrer",
                    )
                  }
                >
                  정기 후원하기 (매월 {Number.parseInt(selectedAmount || customAmount || "0").toLocaleString()}원)
                </Button>
                <Button variant="outline" className="flex items-center gap-2" onClick={downloadForm}>
                  <Download className="h-4 w-4" />
                  신청서 다운로드
                </Button>
              </CardFooter>
            </Card>
          </form>
        </div>
      </div>
    </main>
  )
}
