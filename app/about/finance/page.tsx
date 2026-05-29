import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

const financialData = {
  year: 2024,
  income: {
    donations: 1200000000,
    grants: 800000000,
    investments: 150000000,
    others: 50000000,
  },
  expenses: {
    programs: {
      education: 600000000,
      medical: 450000000,
      humanitarian: 400000000,
      others: 150000000,
    },
    operations: {
      personnel: 250000000,
      administrative: 150000000,
      marketing: 100000000,
    },
  },
}

export default function FinancePage() {
  const totalIncome = Object.values(financialData.income).reduce((a, b) => a + b, 0)
  const totalProgramExpenses = Object.values(financialData.expenses.programs).reduce((a, b) => a + b, 0)
  const totalOperationExpenses = Object.values(financialData.expenses.operations).reduce((a, b) => a + b, 0)
  const totalExpenses = totalProgramExpenses + totalOperationExpenses

  return (
    <main>
      {/* Hero Section */}
      <section className="relative">
        <div className="absolute inset-0 z-0">
          <Image
            src="/placeholder.svg?height=600&width=1920"
            alt="재무현황"
            fill
            className="object-cover brightness-50"
            priority
          />
        </div>
        <div className="container relative z-10 mx-auto px-4 py-20 md:py-24 text-white">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="mb-6 text-4xl font-bold leading-tight md:text-5xl">재무현황</h1>
            <p className="mb-8 text-lg md:text-xl">투명한 재정 운영으로 신뢰받는 이태석재단이 되겠습니다</p>
          </div>
        </div>
      </section>

      {/* Financial Overview Section */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-12 text-center text-primary">{financialData.year}년도 재무 현황</h2>

            {/* Summary Cards */}
            <div className="grid gap-6 md:grid-cols-3 mb-12">
              <Card className="bg-primary text-primary-foreground">
                <CardContent className="p-6">
                  <h3 className="text-lg font-bold mb-2">총 수입</h3>
                  <p className="text-2xl font-bold">{(totalIncome / 100000000).toFixed(1)}억원</p>
                </CardContent>
              </Card>
              <Card className="bg-primary text-primary-foreground">
                <CardContent className="p-6">
                  <h3 className="text-lg font-bold mb-2">총 지출</h3>
                  <p className="text-2xl font-bold">{(totalExpenses / 100000000).toFixed(1)}억원</p>
                </CardContent>
              </Card>
              <Card className="bg-primary text-primary-foreground">
                <CardContent className="p-6">
                  <h3 className="text-lg font-bold mb-2">사업비 비율</h3>
                  <p className="text-2xl font-bold">{((totalProgramExpenses / totalExpenses) * 100).toFixed(1)}%</p>
                </CardContent>
              </Card>
            </div>

            {/* Income Section */}
            <div className="mb-16">
              <h3 className="text-2xl font-bold mb-6 text-primary">수입 내역</h3>
              <Card>
                <CardContent className="p-6">
                  <div className="space-y-4">
                    <div className="flex justify-between items-center">
                      <span className="font-medium">후원금</span>
                      <span>{(financialData.income.donations / 100000000).toFixed(1)}억원</span>
                    </div>
                    <div className="w-full bg-muted rounded-full h-2">
                      <div
                        className="bg-primary rounded-full h-2"
                        style={{
                          width: `${(financialData.income.donations / totalIncome) * 100}%`,
                        }}
                      />
                    </div>

                    <div className="flex justify-between items-center">
                      <span className="font-medium">보조금</span>
                      <span>{(financialData.income.grants / 100000000).toFixed(1)}억원</span>
                    </div>
                    <div className="w-full bg-muted rounded-full h-2">
                      <div
                        className="bg-primary rounded-full h-2"
                        style={{
                          width: `${(financialData.income.grants / totalIncome) * 100}%`,
                        }}
                      />
                    </div>

                    <div className="flex justify-between items-center">
                      <span className="font-medium">투자수���</span>
                      <span>{(financialData.income.investments / 100000000).toFixed(1)}억원</span>
                    </div>
                    <div className="w-full bg-muted rounded-full h-2">
                      <div
                        className="bg-primary rounded-full h-2"
                        style={{
                          width: `${(financialData.income.investments / totalIncome) * 100}%`,
                        }}
                      />
                    </div>

                    <div className="flex justify-between items-center">
                      <span className="font-medium">기타수입</span>
                      <span>{(financialData.income.others / 100000000).toFixed(1)}억원</span>
                    </div>
                    <div className="w-full bg-muted rounded-full h-2">
                      <div
                        className="bg-primary rounded-full h-2"
                        style={{
                          width: `${(financialData.income.others / totalIncome) * 100}%`,
                        }}
                      />
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Expenses Section */}
            <div className="mb-16">
              <h3 className="text-2xl font-bold mb-6 text-primary">지출 내역</h3>
              <div className="space-y-8">
                {/* Program Expenses */}
                <Card>
                  <CardContent className="p-6">
                    <h4 className="text-xl font-bold mb-4">사업비</h4>
                    <div className="space-y-4">
                      <div className="flex justify-between items-center">
                        <span className="font-medium">교육 사업</span>
                        <span>{(financialData.expenses.programs.education / 100000000).toFixed(1)}억원</span>
                      </div>
                      <div className="w-full bg-muted rounded-full h-2">
                        <div
                          className="bg-primary rounded-full h-2"
                          style={{
                            width: `${(financialData.expenses.programs.education / totalExpenses) * 100}%`,
                          }}
                        />
                      </div>

                      <div className="flex justify-between items-center">
                        <span className="font-medium">의료 지원</span>
                        <span>{(financialData.expenses.programs.medical / 100000000).toFixed(1)}억원</span>
                      </div>
                      <div className="w-full bg-muted rounded-full h-2">
                        <div
                          className="bg-primary rounded-full h-2"
                          style={{
                            width: `${(financialData.expenses.programs.medical / totalExpenses) * 100}%`,
                          }}
                        />
                      </div>

                      <div className="flex justify-between items-center">
                        <span className="font-medium">인도적 지원</span>
                        <span>{(financialData.expenses.programs.humanitarian / 100000000).toFixed(1)}억원</span>
                      </div>
                      <div className="w-full bg-muted rounded-full h-2">
                        <div
                          className="bg-primary rounded-full h-2"
                          style={{
                            width: `${(financialData.expenses.programs.humanitarian / totalExpenses) * 100}%`,
                          }}
                        />
                      </div>

                      <div className="flex justify-between items-center">
                        <span className="font-medium">기타 사업비</span>
                        <span>{(financialData.expenses.programs.others / 100000000).toFixed(1)}억원</span>
                      </div>
                      <div className="w-full bg-muted rounded-full h-2">
                        <div
                          className="bg-primary rounded-full h-2"
                          style={{
                            width: `${(financialData.expenses.programs.others / totalExpenses) * 100}%`,
                          }}
                        />
                      </div>
                    </div>
                  </CardContent>
                </Card>

                {/* Operation Expenses */}
                <Card>
                  <CardContent className="p-6">
                    <h4 className="text-xl font-bold mb-4">운영비</h4>
                    <div className="space-y-4">
                      <div className="flex justify-between items-center">
                        <span className="font-medium">인건비</span>
                        <span>{(financialData.expenses.operations.personnel / 100000000).toFixed(1)}억원</span>
                      </div>
                      <div className="w-full bg-muted rounded-full h-2">
                        <div
                          className="bg-primary rounded-full h-2"
                          style={{
                            width: `${(financialData.expenses.operations.personnel / totalExpenses) * 100}%`,
                          }}
                        />
                      </div>

                      <div className="flex justify-between items-center">
                        <span className="font-medium">관리비</span>
                        <span>
                          {(financialData.expenses.operations.administrative / 100000000).toFixed(1)}
                          억원
                        </span>
                      </div>
                      <div className="w-full bg-muted rounded-full h-2">
                        <div
                          className="bg-primary rounded-full h-2"
                          style={{
                            width: `${(financialData.expenses.operations.administrative / totalExpenses) * 100}%`,
                          }}
                        />
                      </div>

                      <div className="flex justify-between items-center">
                        <span className="font-medium">홍보비</span>
                        <span>{(financialData.expenses.operations.marketing / 100000000).toFixed(1)}억원</span>
                      </div>
                      <div className="w-full bg-muted rounded-full h-2">
                        <div
                          className="bg-primary rounded-full h-2"
                          style={{
                            width: `${(financialData.expenses.operations.marketing / totalExpenses) * 100}%`,
                          }}
                        />
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>

            {/* Financial Reports Section */}
            <div className="text-center">
              <h3 className="text-2xl font-bold mb-6 text-primary">상세 재무제표</h3>
              <p className="text-muted-foreground mb-8">이태석재단의 상세한 재무제표를 확인하실 수 있습니다.</p>
              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <Button size="lg" className="transition-all duration-300 hover:scale-105">
                  재무제표 다운로드
                </Button>
                <Button variant="outline" size="lg" className="transition-all duration-300 hover:scale-105">
                  감사보고서 다운로드
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Transparency Section */}
      <section className="py-16 md:py-24 bg-muted">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">재정 운영 원칙</h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto mb-12">
            이태석재단은 투명한 재정 운영을 통해 후원자님들의 소중한 후원금이 올바르게 사용될 수 있도록 최선을 다하고
            있습니다.
          </p>
          <div className="grid gap-6 md:grid-cols-3">
            <Card>
              <CardContent className="p-6">
                <div className="h-12 w-12 rounded-full bg-primary/10 text-primary mx-auto mb-4 flex items-center justify-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M12 22a10 10 0 1 0 0-20 10 10 0 0 0 0 20Z" />
                    <path d="m9 12 2 2 4-4" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-2">투명성</h3>
                <p className="text-muted-foreground">
                  모든 재정 운영 내역을 투명하게 공개하고, 정기적인 외부 감사를 실시합니다.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <div className="h-12 w-12 rounded-full bg-primary/10 text-primary mx-auto mb-4 flex items-center justify-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M21 8V5a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v3" />
                    <path d="M21 16v3a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-3" />
                    <path d="M4 12h16" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-2">효율성</h3>
                <p className="text-muted-foreground">
                  후원금이 최대한 효율적으로 사용될 수 있도록 운영비를 절감하고 있습니다.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <div className="h-12 w-12 rounded-full bg-primary/10 text-primary mx-auto mb-4 flex items-center justify-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1 0-5H20" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-2">책임성</h3>
                <p className="text-muted-foreground">
                  모든 재정 사용에 대해 엄격한 내부 통제와 책임 체계를 갖추고 있습니다.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </main>
  )
}
