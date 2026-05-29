"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { useToast } from "@/hooks/use-toast"

export default function DonateForm() {
  const { toast } = useToast()
  const [amount, setAmount] = useState(10000)
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [message, setMessage] = useState("")
  const [loading, setLoading] = useState(false)

  async function submit(e: React.FormEvent) {
    e.preventDefault()
    setLoading(true)
    try {
      const res = await fetch("/api/donations", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ amount, name, email, message }),
      })
      if (!res.ok) throw new Error("Failed")
      toast({ title: "후원 감사합니다", description: "후원 접수가 완료되었습니다." })
      setAmount(10000)
      setName("")
      setEmail("")
      setMessage("")
    } catch (err) {
      toast({ title: "후원 실패", description: "문제가 발생했습니다. 다시 시도해주세요.", variant: "destructive" })
    } finally {
      setLoading(false)
    }
  }

  return (
    <form onSubmit={submit} className="space-y-4">
      <div>
        <label className="block text-sm font-medium mb-1">이름</label>
        <Input
          type="text"
          placeholder="이름"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
      </div>
      <div>
        <label className="block text-sm font-medium mb-1">이메일</label>
        <Input
          type="email"
          placeholder="이메일"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
      </div>
      <div>
        <label className="block text-sm font-medium mb-1">후원 금액 (원)</label>
        <Input
          type="number"
          placeholder="10,000"
          value={amount}
          onChange={(e) => setAmount(Number(e.target.value))}
          required
        />
      </div>
      <div>
        <label className="block text-sm font-medium mb-1">메시지 (선택사항)</label>
        <Textarea
          placeholder="후원 시 비치될 메시지"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          rows={3}
        />
      </div>
      <Button type="submit" className="w-full" disabled={loading}>
        {loading ? "처리중..." : "후원하기"}
      </Button>
    </form>
  )
}
