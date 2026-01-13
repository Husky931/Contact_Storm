import Hero from "../components/Hero"
import HeroHighlights from "../components/HeroHighlights"
import About from "../components/About"
import Section4 from "../components/Section4"
import Services from "../components/Services"
import ReadyToTalk from "../components/ReadyToTalk"
import FoundedBy from "@/components/FoundedBy"
import Locations from "@/components/Locations"

export default function Home() {
    return (
        <div className="bg-background text-text min-h-screen">
            <main>
                <Hero />
                <HeroHighlights />
                <About />
                <Section4 />
                <Services />
                <ReadyToTalk />
                <FoundedBy />
                <Locations />
            </main>
        </div>
    )
}
