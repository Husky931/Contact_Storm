import Hero from "../components/Hero"
import HeroHighlights from "../components/HeroHighlights"
import About from "../components/About"
import Section4 from "../components/Section4"
import Services from "../components/Services"
import ReadyToTalk from "../components/ReadyToTalk"
import FoundedBy from "@/components/FoundedBy"

export default function Home() {
    return (
        <div className="min-h-screen bg-(--background) text-(--foreground)">
            <main>
                <Hero />
                <HeroHighlights />
                <About />
                <Section4 />
                <Services />
                <ReadyToTalk />
                <FoundedBy />
            </main>
        </div>
    )
}
