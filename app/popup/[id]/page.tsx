import { notFound } from "next/navigation"
import PopupDetailContent from "@/components/popup-detail-content"
import PopupDetailImage from "@/components/popup-detail-image"
import PopupDetailTitle from "@/components/popup-detail-title"
import { PageTemplate } from "@/components/page-template"
import { getPopupById } from "@/lib/popup-data"

export default async function PopupDetailPage({ params }: { params: { id: string } }) {
  const { id } = await params
  const popup = getPopupById(id)

  if (!popup) {
    notFound()
  }

  const downloadFiles = popup.downloadFiles ?? []

  return (
    <div className="container mx-auto px-4 py-12">
      <PageTemplate description={popup.summary}>
        <div className="grid gap-10 lg:grid-cols-[2fr_1fr]">
          <div className="space-y-10">
            <PopupDetailTitle popup={popup} />

            <div className="overflow-hidden rounded-[32px] border border-slate-200 bg-slate-100 shadow-sm">
              <div className="w-full overflow-hidden bg-white">
                <PopupDetailImage popup={popup} />
              </div>
            </div>

            <div className="grid gap-6">
              <PopupDetailContent popup={popup} />
            </div>
          </div>

          <aside className="rounded-[32px] border border-slate-200 bg-slate-50 p-6 shadow-sm">
            <h2 className="text-xl font-bold mb-4">관련 내용</h2>
            <div className="space-y-3">
              {popup.relatedLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="block rounded-2xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-700 transition hover:bg-slate-100"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </aside>
        </div>
      </PageTemplate>
    </div>
  )
}
