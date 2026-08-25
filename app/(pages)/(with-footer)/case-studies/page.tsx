import type { Metadata } from "next"
import CaseStudiesHero from "@/components/CaseStudiesHero"
import CaseStudiesList from "@/components/CaseStudiesList"
import CaseStudiesProof from "@/components/CaseStudiesProof"
import CaseStudiesCta from "@/components/CaseStudiesCta"

export const metadata: Metadata = {
    title: "Case Studies",
    description:
        "Three representative ChatGPT Ads engagements, the numbers behind them, and the live beta account we run them from."
}

export default function CaseStudiesPage() {
    return (
        <div className="bg-background text-text min-h-screen">
            <main>
                <CaseStudiesHero />
                <CaseStudiesList />
                <CaseStudiesProof />
                <CaseStudiesCta />
            </main>
        </div>
    )
}
