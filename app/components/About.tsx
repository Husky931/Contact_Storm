import Image from "next/image"

export default function About() {
    return (
        <section className="bg-white py-16">
            <div className="mx-auto grid max-w-6xl gap-12 px-6 lg:grid-cols-[1fr_1.1fr] lg:items-center">
                <div className="relative">
                    <div className="grid gap-4 md:grid-cols-2">
                        <Image
                            src="/images/about-1.jpg"
                            alt="Strategist at desk"
                            width={520}
                            height={520}
                            className="h-64 w-full rounded object-cover shadow"
                        />
                        <Image
                            src="/images/about-2.jpg"
                            alt="Team meeting"
                            width={520}
                            height={520}
                            className="h-64 w-full rounded object-cover shadow"
                        />
                    </div>
                    {/* <Link href="/insights"></Link> */}
                    <Image
                        src="/images/about-3.jpg"
                        alt="Office collaboration"
                        width={840}
                        height={560}
                        className="mt-4 h-48 w-full rounded object-cover shadow"
                    />
                    <div className="bg-primary-red absolute -bottom-6 left-6 rounded px-6 py-5 text-white shadow-lg">
                        <p className="font-heading text-3xl font-semibold">
                            150+
                        </p>
                        <p className="text-xs tracking-[0.3em] uppercase">
                            Clients Served
                        </p>
                    </div>
                </div>
                <div>
                    <p className="text-primary-red text-xs font-semibold tracking-[0.4em] uppercase">
                        About Us
                    </p>
                    <h2 className="font-heading mt-4 text-3xl text-slate-900">
                        Development agency based in{" "}
                        <span className="text-primary-red">Shanghai</span> with
                        global delivery teams
                    </h2>
                    <p className="mt-4 text-sm leading-relaxed text-slate-600">
                        We blend product strategy, design, and engineering to
                        help brands launch modern platforms. From roadmap to
                        release, we stay accountable to measurable impact.
                    </p>
                    <div className="mt-6 space-y-3 text-sm text-slate-700">
                        {[
                            "Strategic workshops and product roadmaps",
                            "Design systems and scalable builds"
                        ].map((item) => (
                            <div key={item} className="flex items-center gap-3">
                                <span className="bg-primary-red flex h-8 w-8 items-center justify-center rounded-full text-white">
                                    <svg
                                        viewBox="0 0 24 24"
                                        className="h-4 w-4"
                                        fill="none"
                                        stroke="currentColor"
                                        strokeWidth="3"
                                    >
                                        <path d="m5 13 4 4L19 7" />
                                    </svg>
                                </span>
                                <span>{item}</span>
                            </div>
                        ))}
                    </div>
                    <a
                        href="/insights"
                        className="bg-primary-navy mt-8 inline-flex items-center gap-3 rounded px-6 py-3 text-xs font-semibold tracking-[0.3em] text-white uppercase"
                    >
                        Learn More
                        <span className="text-lg">+</span>
                    </a>
                </div>
            </div>
        </section>
    )
}
