import Hero from "../components/Hero"
import HeroHighlights from "../components/HeroHighlights"
import About from "../components/About"
import Section4 from "../components/Section4"
import Services from "../components/Services"
import Industries from "../components/Industries"

export default function Home() {
    return (
        <div className="min-h-screen bg-(--background) text-(--foreground)">
            <main>
                <Hero />
                <HeroHighlights />
                <About />
                <Section4 />
                <Services />
                {/* <Strategy /> */}
                <Industries />
            </main>
        </div>
    )
}
