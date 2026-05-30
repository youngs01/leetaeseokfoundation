import Hero from "@/components/hero"
import QuickLinks from "@/components/quick-links"
import FeaturedPrograms from "@/components/featured-programs"
import NewsSection from "@/components/news-section"

export default function Home() {
  return (
    <main className="flex-1" role="main">
      <Hero />
      <QuickLinks />
      <FeaturedPrograms />
      <NewsSection />
    </main>
  )
}
