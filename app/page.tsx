import { Header } from "@/components/header"
import { HeroSection } from "@/components/hero-section"
import { ProgramsSection } from "@/components/programs-section"
import { MissionSection } from "@/components/mission-section"
import { FounderSection } from "@/components/founder-section"
import { FundersSection } from "@/components/funders-section"
import { StoriesSection } from "@/components/stories-section"
import { CallToActionSection } from "@/components/call-to-action-section"
import { Footer } from "@/components/footer"

export default function HomePage() {
  return (
    <main className="min-h-screen">
      <Header />
      <HeroSection />
      <ProgramsSection />
      <MissionSection />
      <FounderSection />
      <FundersSection />
      {/* <StoriesSection /> */}
      <CallToActionSection />
      <Footer />
    </main>
  )
}
