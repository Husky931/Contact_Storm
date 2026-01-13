import Image from "next/image"

const pillars = [
    {
        title: "Mixed, bilingual team",
        text: "Chinese, European, and American strategists align factory reality with Western buyer expectations."
    },
    {
        title: "Ad-first demand generation",
        text: "Amazon PPC, Meta, Instagram, and TikTok campaigns tuned for export buyers."
    },
    {
        title: "SEO and social growth",
        text: "Long-term visibility through export-focused SEO and consistent social channel growth."
    },
    {
        title: "Conversion-ready websites",
        text: "Modern redesigns that highlight MOQ, certifications, and lead-time to earn trust fast."
    }
]

export default function Specialization() {
    return (
        <section className="bg-slate-950 py-16 text-white">
            <div className="mx-auto grid max-w-6xl gap-12 px-6 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
                <div>
                    <p className="text-primary-red text-xs font-semibold tracking-[0.4em] uppercase">
                        Why Factories Choose Us
                    </p>
                    <h2 className="font-heading mt-4 text-3xl">
                        Built for Chinese manufacturers selling overseas
                    </h2>
                    <p className="mt-3 text-sm text-white/70">
                        懂中国制造，也懂海外买家
                    </p>
                    <p className="mt-4 text-sm leading-relaxed text-white/70">
                        We specialize in turning factory strengths into clear,
                        buyer-friendly offers. Our foreign-led, mixed team
                        builds the ad creative and storefronts that Western
                        customers trust.
                    </p>
                    <div className="mt-8 grid gap-4 sm:grid-cols-2">
                        {pillars.map((pillar) => (
                            <div
                                key={pillar.title}
                                className="rounded-lg border border-white/10 bg-white/5 p-5"
                            >
                                <h3 className="font-heading text-base font-semibold">
                                    {pillar.title}
                                </h3>
                                <p className="mt-2 text-sm text-white/70">
                                    {pillar.text}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
                <div className="relative">
                    <Image
                        src="/images/service-5.jpg"
                        alt="Global marketing team planning export campaigns"
                        width={520}
                        height={640}
                        className="h-full w-full rounded-xl object-cover shadow-xl"
                    />
                </div>
            </div>
        </section>
    )
}
