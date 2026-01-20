import Hero from "../components/Hero"
import HeroHighlights from "../components/HeroHighlights"
import About from "../components/About"
import Section4 from "../components/Section4"
// import Services from "../components/Services"
import Specialization from "../components/Specialization"
import ReadyToTalk from "../components/ReadyToTalk"
import FoundedBy from "@/components/FoundedBy"
import Locations from "@/components/Locations"
import HowWeHelp from "@/components/HowWeHelp"
import AiSearchOptimization from "@/components/AiSearchOptimization"

export default function Home() {
    return (
        <div className="bg-background text-text min-h-screen">
            <main>
                <Hero />
                <HeroHighlights />
                <About />
                <Specialization />
                <Section4 />
                <AiSearchOptimization />
                {/* <Services /> */}
                <HowWeHelp />
                <ReadyToTalk />
                <FoundedBy />
                <Locations />
            </main>
        </div>
    )
}
