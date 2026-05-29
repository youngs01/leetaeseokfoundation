'use client'
import { useRouter } from "next/navigation"
import DonateForm from "@/components/donate/donate-form"

export default function DonatePage() {
  const router = useRouter()

  return (
    <div className="max-w-2xl mx-auto py-12">
      <h1 className="text-2xl font-bold mb-4">후원하기</h1>
      <p className="mb-6">소중한 후원으로 이태석 신부님의 정신을 이어나가주세요.</p>
      <DonateForm />
    </div>
  )
}
