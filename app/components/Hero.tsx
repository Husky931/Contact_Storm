import Image from "next/image"

export default function Hero() {
    return (
        <section className="relative overflow-hidden bg-slate-900 text-white">
            <Image
                src="/images/industry-1.jpg"
                alt="Digital strategy team reviewing product roadmap"
                fill
                className="object-cover"
                priority
            />
            <div className="absolute inset-0 bg-linear-to-r from-slate-950/90 via-slate-900/75 to-slate-900/30" />
            <div className="relative mx-auto max-w-6xl px-6 py-20 lg:py-28">
                <div className="grid gap-12 lg:grid-cols-[1.3fr_0.9fr] lg:items-center">
                    <div>
                        <p className="text-sm tracking-[0.5em] text-white/70 uppercase">
                            Overseas Buyer Growth
                        </p>
                        <h1 className="font-heading mt-5 text-4xl leading-tight font-semibold text-white md:text-5xl">
                            We help Chinese manufacturers win overseas buyers.
                        </h1>

                        <p className="mt-5 max-w-xl text-base text-white/80 md:text-lg">
                            Reach customers in Europe, North America, Middle
                            Eastern and beyond. O
                        </p>

                        <p className="mt-4 max-w-xl text-sm text-white/70">
                            Bilingual, diverse team (Chinese, European,
                            American) with Western buyer insight for ads, Amazon
                            listings, and conversion-focused websites.
                        </p>
                        <p className="mt-3 text-sm text-white/60">
                            帮助中国制造商获取海外客户
                        </p>
                        <div className="mt-8 flex flex-wrap gap-4">
                            <a
                                href="#services"
                                className="bg-primary-main hover:bg-primary-navy/90 rounded px-6 py-3 text-sm font-semibold tracking-[0.2em] text-white uppercase transition-colors"
                            >
                                Explore Services
                            </a>
                            <a
                                href="#contact"
                                className="rounded border border-white/60 px-6 py-3 text-sm font-semibold tracking-[0.2em] text-white uppercase transition-colors hover:bg-white/10"
                            >
                                Book a Strategy Call
                            </a>
                        </div>
                        <div className="mt-10 flex flex-wrap items-center gap-6 text-xs font-semibold tracking-[0.4em] text-white/70 uppercase">
                            <span>Amazon PPC & Marketplace Growth</span>
                            <span>Shopify</span>
                            <span>Leads</span>
                            <span>
                                Paid social ads (Meta, Instagram, TikTok)
                            </span>
                            <span>SEO for export buyers</span>
                            <span>Conversion-first website redesign</span>
                        </div>
                    </div>

                    <div className="rounded bg-white/95 p-6 text-slate-800 shadow-xl">
                        <p className="text-primary-red text-xs font-semibold tracking-[0.3em] uppercase">
                            Project Brief
                        </p>
                        <h3 className="font-heading mt-3 text-2xl text-slate-900">
                            Tell us about your export goals
                        </h3>
                        <form className="mt-5 space-y-4 text-sm">
                            <select className="w-full rounded border border-slate-200 px-4 py-2 text-slate-500">
                                <option>What do you need help with?</option>
                                <option>Amazon Ads & Optimization</option>
                                <option>
                                    Social Media Ads (Facebook, Instagram,
                                    TikTok)
                                </option>
                                <option>SEO & Organic Growth</option>
                                <option>Website Redesign</option>
                                <option>Social Media Management</option>
                                <option>Multiple Services</option>
                            </select>
                            <input
                                className="w-full rounded border border-slate-200 px-4 py-2"
                                placeholder="Product category / Industry"
                            />
                            <select className="w-full rounded border border-slate-200 px-4 py-2 text-slate-500">
                                <option>Target market</option>
                                <option>Europe</option>
                                <option>North America</option>
                                <option>Middle East</option>
                                <option>Multiple Regions</option>
                                <option>Other</option>
                            </select>
                            <input
                                className="w-full rounded border border-slate-200 px-4 py-2"
                                placeholder="Current sales channels"
                            />
                            <input
                                className="w-full rounded border border-slate-200 px-4 py-2"
                                placeholder="Main challenge (optional)"
                            />

                            <button className="bg-primary-main hover:bg-primary-navy/90 w-full rounded px-4 py-3 text-xs font-semibold tracking-[0.3em] text-white uppercase transition-colors">
                                Submit Brief
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    )
}
