import Hero from "@/components/Hero"
import HeroHighlights from "@/components/HeroHighlights"
import About from "@/components/About"
import Section4 from "@/components/Section4"
import Specialization from "@/components/Specialization"
import ReadyToTalk from "@/components/ReadyToTalk"
import FoundedBy from "@/components/FoundedBy"
import Locations from "@/components/Locations"
import HowWeHelp from "@/components/HowWeHelp"
import AiSearchOptimization from "@/components/AiSearchOptimization"
import Slide14 from "@/(pages)/brochure/components/slide-14"
import "@/(pages)/brochure/brochure-2.css"

export default function Home() {
    return (
        <div className="bg-background text-text min-h-screen">
            <main>
                <Hero />
                <HeroHighlights />
                <About />
                <Specialization />
                <Section4 />
                <Slide14 />
                <AiSearchOptimization />
                <FoundedBy />
                <HowWeHelp />
                <ReadyToTalk />
                <Locations />
            </main>
        </div>
    )
}
