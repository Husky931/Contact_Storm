import Hero from "@/components/Hero"
import About from "@/components/About"
import ChatGptAds from "@/components/ChatGptAds"
import ChatGptAdsProof from "@/components/ChatGptAdsProof"
import ChatGptAdsServices from "@/components/ChatGptAdsServices"
import Pricing from "@/components/Pricing"
import ReadyToTalk from "@/components/ReadyToTalk"
import FoundedBy from "@/components/FoundedBy"
import Locations from "@/components/Locations"
import "@/(pages)/brochure/brochure-2.css"
import Slide7HomePage from "./BrochureComponents/Slide7HomePage"

export default function Home() {
    return (
        <div className="bg-background text-text min-h-screen">
            <main>
                <Hero />
                <About />
                <ChatGptAds />
                <ChatGptAdsProof />
                <ChatGptAdsServices />
                <Slide7HomePage />
                <FoundedBy />
                <Pricing />
                <ReadyToTalk />
                <Locations />
            </main>
        </div>
    )
}
