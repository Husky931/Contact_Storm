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
import LeadGenSoft from "@/components/LeadGenSoft"
import Slide14 from "@/(pages)/brochure/components/slide-14"
import "@/(pages)/brochure/brochure-2.css"
import Slide7 from "@/(pages)/brochure/components/slide-7"
import Slide8 from "@/(pages)/brochure/components/slide-8"
import Slide9 from "@/(pages)/brochure/components/slide-9"
import Slide10 from "@/(pages)/brochure/components/slide-10"
import Slide11 from "@/(pages)/brochure/components/slide-11"

export default function Home() {
    return (
        <div className="bg-background text-text min-h-screen">
            <main>
                <Hero />
                <HeroHighlights />
                <About />
                <Specialization />
                <Section4 />
                <section>
                    Our Lead Generation software
                </section>
                <Slide14 />
                <LeadGenSoft />
                <AiSearchOptimization />
                <Slide7 />
                <Slide8 />
                <Slide9 />
                <Slide10 />
                <Slide11 />
                <FoundedBy />
                <HowWeHelp />
                <ReadyToTalk />
                <Locations />
            </main>
        </div>
    )
}
