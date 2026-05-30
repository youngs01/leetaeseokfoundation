"use client"

import { useState } from "react"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import * as z from "zod"
import { format } from "date-fns"
import { ko } from "date-fns/locale"
import { CalendarIcon, Loader2, CheckCircle2 } from "lucide-react"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Calendar } from "@/components/ui/calendar"
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { toast } from "@/hooks/use-toast"

const formSchema = z.object({
  name: z.string().min(2, {
    message: "이름은 2자 이상이어야 합니다.",
  }),
  organization: z.string().min(2, {
    message: "기관/단체명은 2자 이상이어야 합니다.",
  }),
  email: z.string().email({
    message: "유효한 이메일 주소를 입력해주세요.",
  }),
  phone: z.string().min(10, {
    message: "유효한 전화번호를 입력해주세요.",
  }),
  preferredDate: z.date({
    required_error: "희망 날짜를 선택해주세요.",
  }),
  attendees: z.string().min(1, {
    message: "예상 참석자 수를 입력해주세요.",
  }),
  location: z.string().min(2, {
    message: "장소를 입력해주세요.",
  }),
  contactMethod: z.enum(["email", "phone"], {
    required_error: "연락 방법을 선택해주세요.",
  }),
  message: z.string().min(10, {
    message: "문의 내용은 10자 이상이어야 합니다.",
  }),
})

type FormValues = z.infer<typeof formSchema>

export default function LectureInquiryClient() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSuccess, setIsSuccess] = useState(false)

  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      organization: "",
      email: "",
      phone: "",
      attendees: "",
      location: "",
      contactMethod: "email",
      message: "",
    },
  })

  async function onSubmit(data: FormValues) {
    setIsSubmitting(true)

    try {
      // 실제 구현에서는 서버로 데이터를 전송합니다
      console.log(data)

      // 이메일 전송 시뮬레이션
      await new Promise((resolve) => setTimeout(resolve, 1500))

      // 성공 상태로 변경
      setIsSuccess(true)
      toast({
        title: "문의가 접수되었습니다",
        description: "빠른 시일 내에 답변 드리겠습니다.",
      })

      // 폼 초기화
      form.reset()
    } catch (error) {
      console.error("Form submission error:", error)
      toast({
        title: "문의 접수 실패",
        description: "문제가 발생했습니다. 다시 시도해주세요.",
        variant: "destructive",
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <>
      {isSuccess ? (
        <div className="text-center py-12">
          <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-green-100 text-green-600 mb-6">
            <CheckCircle2 className="h-10 w-10" />
          </div>
          <h3 className="text-2xl font-bold mb-4">문의가 접수되었습니다</h3>
          <p className="text-muted-foreground mb-8 max-w-md mx-auto">
            이태석 재단에 강연 문의를 보내주셔서 감사합니다. 담당자가 검토 후 빠른 시일 내에 답변 드리겠습니다.
          </p>
          <Button onClick={() => setIsSuccess(false)} size="lg">
            새 문의 작성하기
          </Button>
        </div>
      ) : (
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>
                      이름 <span className="text-red-500">*</span>
                    </FormLabel>
                    <FormControl>
                      <Input placeholder="홍길동" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="organization"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>
                      기관/단체명 <span className="text-red-500">*</span>
                    </FormLabel>
                    <FormControl>
                      <Input placeholder="OO학교" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>
                      이메일 <span className="text-red-500">*</span>
                    </FormLabel>
                    <FormControl>
                      <Input placeholder="example@example.com" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="phone"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>
                      연락처 <span className="text-red-500">*</span>
                    </FormLabel>
                    <FormControl>
                      <Input placeholder="010-1234-5678" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="preferredDate"
                render={({ field }) => (
                  <FormItem className="flex flex-col">
                    <FormLabel>
                      희망 날짜 <span className="text-red-500">*</span>
                    </FormLabel>
                    <Popover>
                      <PopoverTrigger asChild>
                        <FormControl>
                          <Button
                            type="button"
                            variant={"outline"}
                            className={cn("w-full pl-3 text-left font-normal", !field.value && "text-muted-foreground")}
                          >
                            {field.value ? format(field.value, "PPP", { locale: ko }) : <span>날짜 선택</span>}
                            <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                          </Button>
                        </FormControl>
                      </PopoverTrigger>
                      <PopoverContent className="w-auto p-0" align="start">
                        <Calendar
                          mode="single"
                          selected={field.value}
                          onSelect={(date) => {
                            if (date) field.onChange(date)
                          }}
                          disabled={(date) => date < new Date()}
                          locale={ko}
                          initialFocus
                        />
                      </PopoverContent>
                    </Popover>
                    <FormDescription>희망하시는 강연 날짜를 선택해주세요.</FormDescription>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="attendees"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>
                      예상 참석자 수 <span className="text-red-500">*</span>
                    </FormLabel>
                    <FormControl>
                      <Input placeholder="50명" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="location"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>
                      장소 <span className="text-red-500">*</span>
                    </FormLabel>
                    <FormControl>
                      <Input placeholder="서울시 OO구 OO동" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="contactMethod"
                render={({ field }) => (
                  <FormItem className="space-y-3">
                    <FormLabel>
                      선호하는 연락 방법 <span className="text-red-500">*</span>
                    </FormLabel>
                    <FormControl>
                      <RadioGroup
                        onValueChange={field.onChange}
                        defaultValue={field.value}
                        className="flex flex-col space-y-1"
                      >
                        <FormItem className="flex items-center space-x-3 space-y-0">
                          <FormControl>
                            <RadioGroupItem value="email" />
                          </FormControl>
                          <FormLabel className="font-normal">이메일</FormLabel>
                        </FormItem>
                        <FormItem className="flex items-center space-x-3 space-y-0">
                          <FormControl>
                            <RadioGroupItem value="phone" />
                          </FormControl>
                          <FormLabel className="font-normal">전화</FormLabel>
                        </FormItem>
                      </RadioGroup>
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>

            <FormField
              control={form.control}
              name="message"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>
                    문의 내용 <span className="text-red-500">*</span>
                  </FormLabel>
                  <FormControl>
                    <Textarea
                      placeholder="강연 주제, 시간 등 자세한 내용을 입력해주세요."
                      className="min-h-[150px]"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <div className="text-center pt-4">
              <Button type="submit" disabled={isSubmitting} size="lg" className="min-w-[200px]">
                {isSubmitting ? (
                  <>
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                    제출 중...
                  </>
                ) : (
                  "문의하기"
                )}
              </Button>
            </div>
          </form>
        </Form>
      )}
    </>
  )
}
