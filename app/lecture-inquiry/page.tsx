import type { Metadata } from "next"
import LectureInquiryClient from "@/components/lecture-inquiry/lecture-inquiry-client"
import { Mail, Phone, CalendarIcon } from "lucide-react"

export const metadata: Metadata = {
  title: "강연 문의하기 - 이태석재단",
  description: "이태석 신부님의 삶과 철학을 알리는 강연에 관심이 있으신가요? 강연 문의 양식을 작성해주세요.",
}

export default function LectureInquiryPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <section className="relative w-full bg-blue-900 py-20 md:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center text-white">
            <h1 className="mb-6 text-4xl font-bold leading-tight md:text-5xl">강연 문의하기</h1>
            <p className="mb-8 text-lg md:text-xl">
              이태석 신부님의 삶과 철학을 알리는 강연에 관심이 있으신가요?
              <br />
              아래 양식을 작성하시면 담당자가 빠른 시일 내에 연락드립니다.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 flex-grow">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
              <div className="bg-blue-50 p-6 rounded-lg text-center">
                <Mail className="h-10 w-10 text-blue-600 mx-auto mb-4" />
                <h3 className="text-lg font-bold mb-2">이메일 문의</h3>
                <p className="text-gray-600">smlietonj@gmail.com</p>
                <p className="text-sm text-gray-500 mt-2">평일 10:00 - 18:00</p>
              </div>
              <div className="bg-blue-50 p-6 rounded-lg text-center">
                <Phone className="h-10 w-10 text-blue-600 mx-auto mb-4" />
                <h3 className="text-lg font-bold mb-2">전화 문의</h3>
                <p className="text-gray-600">02-595-9093</p>
                <p className="text-sm text-gray-500 mt-2">평일 10:00 - 18:00</p>
              </div>
              <div className="bg-blue-50 p-6 rounded-lg text-center">
                <CalendarIcon className="h-10 w-10 text-blue-600 mx-auto mb-4" />
                <h3 className="text-lg font-bold mb-2">처리 기간</h3>
                <p className="text-gray-600">접수 후 3일 이내</p>
                <p className="text-sm text-gray-500 mt-2">영업일 기준</p>
              </div>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-sm border border-gray-100">
              <h2 className="text-2xl font-bold mb-6 text-center">강연 문의 양식</h2>
              <LectureInquiryClient />
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
