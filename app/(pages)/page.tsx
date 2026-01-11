import Hero from "../components/Hero"
import HeroHighlights from "../components/HeroHighlights"
import About from "../components/About"
import Services from "../components/Services"
import Strategy from "../components/Strategy"
import Industries from "../components/Industries"

export default function Home() {
    return (
        <div className="min-h-screen bg-[var(--background)] text-[var(--foreground)]">
            <main>
                <Hero />
                <HeroHighlights />
                <About />
                <Services />
                <Strategy />
                <Industries />
            </main>
        </div>
    )
}