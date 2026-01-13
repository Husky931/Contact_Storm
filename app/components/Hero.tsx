import Image from "next/image"

export default function Hero() {
    return (
        <section className="relative overflow-hidden bg-slate-900 text-white">
            <Image
                src="/images/hero.jpg"
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
                            Development & Growth
                        </p>
                        <h1 className="font-heading mt-5 text-4xl leading-tight font-semibold text-white md:text-5xl">
                            Helping companies grow
                        </h1>

                        <p className="mt-5 max-w-xl text-base text-white/80 md:text-lg">
                            We can help yor company grow with AI automation, SEO
                            growth, paid ads, app development or custom
                            solutions.
                        </p>
                        <div className="mt-8 flex flex-wrap gap-4">
                            <a
                                href="#"
                                className="bg-primary-main hover:bg-primary-navy/90 rounded px-6 py-3 text-sm font-semibold tracking-[0.2em] text-white uppercase transition-colors"
                            >
                                Explore Services
                            </a>
                            <a
                                href="#"
                                className="rounded border border-white/60 px-6 py-3 text-sm font-semibold tracking-[0.2em] text-white uppercase"
                            >
                                Book a Strategy Call
                            </a>
                        </div>
                        <div className="mt-10 flex flex-wrap items-center gap-6 text-xs font-semibold tracking-[0.4em] text-white/70 uppercase">
                            <span>Apps Developmemnt</span>
                            <span>System automation through AI</span>
                            <span>Ads and online advertising</span>
                            <span>SEO growth</span>
                        </div>
                    </div>

                    <div className="rounded bg-white/95 p-6 text-slate-800 shadow-xl">
                        <p className="text-xs font-semibold tracking-[0.3em] text-primary-red uppercase">
                            Project Brief
                        </p>
                        <h3 className="font-heading mt-3 text-2xl text-slate-900">
                            Tell us about your build
                        </h3>
                        <form className="mt-5 space-y-4 text-sm">
                            <input
                                className="w-full rounded border border-slate-200 px-4 py-2"
                                placeholder="Project goal"
                            />
                            <input
                                className="w-full rounded border border-slate-200 px-4 py-2"
                                placeholder="Target launch date"
                            />
                            <select className="w-full rounded border border-slate-200 px-4 py-2 text-slate-500">
                                <option>Engagement type</option>
                                <option>Product strategy</option>
                                <option>Design + development</option>
                                <option>Growth optimization</option>
                            </select>
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
