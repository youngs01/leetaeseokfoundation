"use client"

import type React from "react"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Checkbox } from "@/components/ui/checkbox"
import { MapPin, Phone, Printer, Mail, Clock } from "lucide-react"

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    inquiryType: "general",
    message: "",
    agreeToTerms: false,
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleRadioChange = (value: string) => {
    setFormData((prev) => ({ ...prev, inquiryType: value }))
  }

  const handleCheckboxChange = (checked: boolean) => {
    setFormData((prev) => ({ ...prev, agreeToTerms: checked }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // In a real application, you would send this data to your server
    console.log("Form submitted:", formData)
    alert("문의가 접수되었습니다. 빠른 시일 내에 답변 드리겠습니다.")
    setFormData({
      name: "",
      email: "",
      phone: "",
      inquiryType: "general",
      message: "",
      agreeToTerms: false,
    })
  }

  return (
    <main>
      {/* Hero Section */}
      <section className="relative">
        <div className="absolute inset-0 z-0">
          <Image
            src="/placeholder.svg?height=600&width=1920"
            alt="문의하기"
            fill
            className="object-cover brightness-50"
            priority
          />
        </div>
        <div className="container relative z-10 mx-auto px-4 py-20 md:py-24 text-white">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="mb-6 text-4xl font-bold leading-tight md:text-5xl">문의하기</h1>
            <p className="mb-8 text-lg md:text-xl">
              이태석재단에 대한 문의사항이나 제안이 있으시면 언제든지 연락주세요
            </p>
          </div>
        </div>
      </section>

      {/* Contact Form & Info Section */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="grid gap-12 md:grid-cols-2">
            {/* Contact Form */}
            <div>
              <h2 className="text-3xl font-bold mb-6 text-primary">문의 양식</h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="space-y-2">
                  <Label htmlFor="name">이름 *</Label>
                  <Input
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="이름을 입력하세요"
                    required
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="email">이메일 *</Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="이메일을 입력하세요"
                    required
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="phone">연락처</Label>
                  <Input
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="연락처를 입력하세요"
                  />
                </div>

                <div className="space-y-2">
                  <Label>문의 유형 *</Label>
                  <RadioGroup
                    value={formData.inquiryType}
                    onValueChange={handleRadioChange}
                    className="flex flex-col space-y-1"
                  >
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="general" id="general" />
                      <Label htmlFor="general">일반 문의</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="donation" id="donation" />
                      <Label htmlFor="donation">후원 문의</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="volunteer" id="volunteer" />
                      <Label htmlFor="volunteer">봉사 문의</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="partnership" id="partnership" />
                      <Label htmlFor="partnership">협력 제안</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="other" id="other" />
                      <Label htmlFor="other">기타</Label>
                    </div>
                  </RadioGroup>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message">문의 내용 *</Label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="문의 내용을 입력하세요"
                    rows={5}
                    required
                  />
                </div>

                <div className="flex items-start space-x-2">
                  <Checkbox
                    id="terms"
                    checked={formData.agreeToTerms}
                    onCheckedChange={handleCheckboxChange}
                    required
                  />
                  <div className="grid gap-1.5 leading-none">
                    <Label
                      htmlFor="terms"
                      className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                    >
                      개인정보 수집 및 이용에 동의합니다 *
                    </Label>
                    <p className="text-sm text-muted-foreground">
                      입력하신 개인정보는 문의 답변을 위해서만 사용되며, 답변 완료 후 삭제됩니다.
                    </p>
                  </div>
                </div>

                <Button type="submit" className="w-full" disabled={!formData.agreeToTerms}>
                  문의하기
                </Button>
              </form>
            </div>

            {/* Contact Info */}
            <div>
              <h2 className="text-3xl font-bold mb-6 text-primary">연락처 정보</h2>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <MapPin className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-bold mb-1">주소</h3>
                    <p className="text-muted-foreground">서울시 영동포구 국회대로 62길 15, 광복회관 8층</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <Phone className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-bold mb-1">전화</h3>
                    <p className="text-muted-foreground">02-595-9093</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <Printer className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-bold mb-1">팩스</h3>
                    <p className="text-muted-foreground">02-6339-3390</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <Mail className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-bold mb-1">이메일</h3>
                    <p className="text-muted-foreground">smiletonj@gmail.com</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <Clock className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-bold mb-1">업무시간</h3>
                    <p className="text-muted-foreground">평일 10:00 - 18:00 (점심시간 12:30 - 13:30)</p>
                    <p className="text-muted-foreground">주말 및 공휴일 휴무</p>
                  </div>
                </div>
              </div>

              <div className="mt-12">
                <h3 className="text-xl font-bold mb-6">찾아오시는 길</h3>
                <div className="bg-muted rounded-lg overflow-hidden">
                  <div className="aspect-video relative">
                    <iframe
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3164.6598972093!2d126.91732687677395!3d37.52497652970583!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x357c9f3a0d5f8f31%3A0x8d5e6b0c0c0c0c0c!2s15%20Gukhoe-daero%2062-gil%2C%20Yeongdeungpo-gu%2C%20Seoul!5e0!3m2!1sen!2skr!4v1615971479256!5m2!1sen!2skr"
                      width="100%"
                      height="100%"
                      style={{ border: 0, position: "absolute", top: 0, left: 0, width: "100%", height: "100%" }}
                      allowFullScreen=""
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                      title="이태석재단 위치"
                    ></iframe>
                  </div>
                </div>
                <Button asChild className="mt-4 w-full">
                  <Link href="/about/location">상세 위치 안내</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 md:py-24 bg-muted">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center text-primary">자주 묻는 질문</h2>

          <div className="max-w-3xl mx-auto space-y-6">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold mb-2">후원은 어떻게 할 수 있나요?</h3>
              <p className="text-muted-foreground">
                홈페이지의 '후원 참여하기' 버튼을 통해 정기 후원 또는 일시 후원에 참여하실 수 있습니다. 또한
                전화(02-595-9093)로 문의하시면 상세한 안내를 받으실 수 있습니다.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold mb-2">봉사활동에 참여하고 싶어요.</h3>
              <p className="text-muted-foreground">
                이태석재단에서는 다양한 봉사활동 기회를 제공하고 있습니다. 문의 양식을 통해 '봉사 문의'를 선택하여
                신청하시면 담당자가 연락드립니다.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold mb-2">후원금은 어떻게 사용되나요?</h3>
              <p className="text-muted-foreground">
                후원금은 이태석재단의 다양한 사업(교육, 의료, 인도적 지원 등)에 사용됩니다. 후원금 사용 내역은 매년
                재정보고서를 통해 투명하게 공개됩니다.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold mb-2">기업 후원도 가능한가요?</h3>
              <p className="text-muted-foreground">
                네, 기업 후원도 가능합니다. 기업의 사회공헌 활동과 연계한 다양한 협력 방안을 제안해 드립니다. 문의
                양식을 통해 '협력 제안'을 선택하여 문의해 주세요.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold mb-2">후원 영수증은 어떻게 받을 수 있나요?</h3>
              <p className="text-muted-foreground">
                이태석재단은 지정기부금 단체로, 후원하신 금액에 대해 기부금 영수증을 발행해 드립니다. 후원 시 입력하신
                이메일로 영수증이 발송되며, 홈페이지 마이페이지에서도 확인 가능합니다.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
