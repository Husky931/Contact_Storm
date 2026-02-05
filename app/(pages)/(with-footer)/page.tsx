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
import "@/(pages)/brochure/brochure-2.css"
import Slide7HomePage from "./BrochureComponents/Slide7HomePage"
import Slide8HomePage from "./BrochureComponents/Slide8HomePage"
import Slide9HomePage from "./BrochureComponents/Slide9HomePage"
import Slide10HomePage from "./BrochureComponents/Slide10HomePage"
import Slide11HomePage from "./BrochureComponents/Slide11HomePage"
import Slide14HomePage from "./BrochureComponents/Slide14HomePage"

export default function Home() {
    return (
        <div className="bg-background text-text min-h-screen">
            <main>
                <Hero />
                <HeroHighlights />
                <About />
                <Specialization />
                <Section4 />
                <Slide14HomePage />
                <AiSearchOptimization />
                <Slide7HomePage />
                <Slide8HomePage />
                <Slide9HomePage />
                <Slide10HomePage />
                <Slide11HomePage />
                <FoundedBy />
                <HowWeHelp />
                <ReadyToTalk />
                <Locations />
            </main>
        </div>
    )
}
