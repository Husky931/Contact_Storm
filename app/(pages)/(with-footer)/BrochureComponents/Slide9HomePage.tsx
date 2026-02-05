import Image from "next/image"
import { BRAND_NAVY, BRAND_RED } from "@/(pages)/brochure/constants"

const DEMAND_SERVICES = [
    { title: "AIO (AI Optimization)", body: "Position your content as the top answer in AI chatbot responses (ChatGPT, Perplexity, Gemini, Grok). Be the answer when customers ask so your brand shows up where decisions are made." },
    { title: "Classic SEO", body: "Optimization for Google, Bing, Yandex and other traditional search engines. Traditional search still drives significant traffic—we make sure you’re found on every major engine." },
    { title: "AEO (Answer Engine Optimization)", body: "Optimize for voice and search queries like 'Who makes...?' to capture conversational searches. Capture the growing voice and question-based search market and stay ahead of the curve." },
    { title: "GEO (Geographic Targeting)", body: "Target users by location, culture, and local search intent for maximum relevance. Reach the right people in the right place and connect with audiences where they are." },
    { title: "AI Snippet Optimization", body: "Ensure your brand appears in AI-generated summaries and featured snippets. Show up in AI summaries and answer boxes so you get visibility in the new search landscape." },
    { title: "Voice Search Ready", body: "Content optimized for voice assistants and natural language queries. We optimize for how people actually search today—spoken, long-tail, and conversational." }
]

export default function Slide9HomePage() {

    return (
        <section
            className="brochure-page-2 flex flex-col bg-white px-4 py-8 text-[#1b2737] sm:px-8 md:px-16 md:py-14 border-b border-gray-200"
            style={{ pageBreakAfter: "always" }}
        >

            {/* Centered content — larger type, image, grid */}

            <div className="mt-8 flex flex-1 flex-col justify-center gap-8 lg:flex-row lg:items-center lg:gap-x-20 lg:mt-12">
                {/* Left side — takes more width */}
                <div className="flex-1 flex flex-col items-center text-center justify-center">
                    <h2
                        className="brochure-serif text-4xl font-normal leading-tight tracking-tight sm:text-5xl"
                        style={{ color: BRAND_NAVY }}
                    >
                        SEO for <span style={{ color: BRAND_RED }}>the AI</span>
                        <br />
                        Era
                    </h2>
                    <p className="mt-5 max-w-2xl text-lg font-bold leading-snug text-[#1b2737] sm:text-xl">
                        Optimize for AI models, voice engines, and the new reality of customer search
                    </p>
                    <div className="mt-8 flex justify-center">
                        <Image
                            src="/brochure/slide_9.png"
                            alt=""
                            width={480}
                            height={200}
                            className="h-auto w-full max-w-md object-contain"
                        />
                    </div>
                </div>

                {/* Right side — services grid */}
                <div className="flex-3 mt-0 grid grid-cols-1 gap-y-8 gap-x-12 sm:grid-cols-2 md:gap-y-20 lg:grid-cols-3">
                    {DEMAND_SERVICES.map((item) => (
                        <div key={item.title} className="flex flex-col">
                            <h3 className="text-base font-bold leading-snug text-[#1b2737] sm:text-lg">
                                {item.title}
                            </h3>
                            <p className="mt-2 text-sm leading-relaxed font-serif text-gray-600 sm:text-base">
                                {item.body}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}
