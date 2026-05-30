"use client"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import ContentEditor from "@/components/admin/content-editor"

export default function ContentAdminPage() {
  // This would typically save to a database or API
  const handleSaveContent = (contentType: string, content: any[]) => {
    console.log(`Saving ${contentType} content:`, content)
    // In a real application, you would save this to your backend
    alert(`${contentType} 콘텐츠가 저장되었습니다.`)
  }

  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold mb-8">콘텐츠 관리</h1>

      <Tabs defaultValue="foundation">
        <TabsList className="grid grid-cols-7 w-full max-w-4xl mb-8">
          <TabsTrigger value="foundation">재단 소식</TabsTrigger>
          <TabsTrigger value="lecture">강연 소식</TabsTrigger>
          <TabsTrigger value="press">언론 보도</TabsTrigger>
          <TabsTrigger value="video">영상</TabsTrigger>
          <TabsTrigger value="gallery">갤러리</TabsTrigger>
          <TabsTrigger value="books-movies">책/영화</TabsTrigger>
          <TabsTrigger value="letter">감사 편지</TabsTrigger>
        </TabsList>

        <TabsContent value="foundation">
          <ContentEditor contentType="foundation" onSave={(content) => handleSaveContent("foundation", content)} />
        </TabsContent>

        <TabsContent value="lecture">
          <ContentEditor contentType="lecture" onSave={(content) => handleSaveContent("lecture", content)} />
        </TabsContent>

        <TabsContent value="press">
          <ContentEditor contentType="press" onSave={(content) => handleSaveContent("press", content)} />
        </TabsContent>

        <TabsContent value="video">
          <ContentEditor contentType="video" onSave={(content) => handleSaveContent("video", content)} />
        </TabsContent>

        <TabsContent value="gallery">
          <ContentEditor contentType="gallery" onSave={(content) => handleSaveContent("gallery", content)} />
        </TabsContent>

        <TabsContent value="books-movies">
          <ContentEditor contentType="books-movies" onSave={(content) => handleSaveContent("books-movies", content)} />
        </TabsContent>

        <TabsContent value="letter">
          <ContentEditor contentType="letter" onSave={(content) => handleSaveContent("letter", content)} />
        </TabsContent>
      </Tabs>

      <div className="mt-12 border-t pt-8">
        <h2 className="text-xl font-bold mb-4">콘텐츠 관리 안내</h2>
        <div className="prose max-w-none">
          <p>
            이 페이지에서는 재단 소식, 강연 소식, 언론 보도, 영상, 갤러리, 책/영화 소개, 후원 감사 편지 등의 콘텐츠를
            관리할 수 있습니다.
          </p>
          <p>각 탭을 클릭하여 해당 콘텐츠 유형의 항목을 추가, 수정, 삭제할 수 있습니다.</p>
          <h3>콘텐츠 관리 방법</h3>
          <ol>
            <li>
              <strong>새 항목 추가</strong>: '새 항목 추가' 버튼을 클릭하여 새로운 콘텐츠를 추가합니다.
            </li>
            <li>
              <strong>항목 수정</strong>: 목록에서 '수정' 버튼을 클릭하여 기존 콘텐츠를 수정합니다.
            </li>
            <li>
              <strong>항목 삭제</strong>: 목록에서 '삭제' 버튼을 클릭하여 콘텐츠를 삭제합니다.
            </li>
          </ol>
          <p>
            <strong>참고</strong>: 내용(HTML) 필드에는 HTML 태그를 사용하여 서식을 적용할 수 있습니다. 예를 들어,
            &lt;p&gt;, &lt;h3&gt;, &lt;blockquote&gt; 등의 태그를 사용할 수 있습니다.
          </p>
        </div>
      </div>
    </div>
  )
}
