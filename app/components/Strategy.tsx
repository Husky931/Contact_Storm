const strategyItems = [
    {
        title: "Strategy to Shipping",
        text: "Clear product direction, prioritized roadmaps, and rapid delivery.",
    },
    {
        title: "Design + Engineering",
        text: "Unified teams that translate insight into polished experiences.",
    },
    {
        title: "Quality & Performance",
        text: "Resilient builds, fast load times, and scalable architecture.",
    },
]

export default function Strategy() {
    return (
        <section className="bg-white py-16">
            <div className="mx-auto max-w-6xl px-6">
                <p className="text-center text-xs font-semibold uppercase tracking-[0.4em] text-(--brand-red)">
                    Digital Strategy
                </p>
                <h2 className="font-heading mt-4 text-center text-3xl text-slate-900">
                    We help businesses grow through digital strategy
                </h2>
                <div className="mt-10 grid gap-6 md:grid-cols-3">
                    {strategyItems.map((item) => (
                        <div
                            key={item.title}
                            className="rounded border border-slate-200 bg-white p-6 shadow-sm"
                        >
                            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-(--brand-red) text-white">
                                <svg
                                    viewBox="0 0 24 24"
                                    className="h-6 w-6"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth="2"
                                >
                                    <path d="M12 2v20" />
                                    <path d="M5 9l7-7 7 7" />
                                </svg>
                            </div>
                            <h3 className="font-heading mt-5 text-xl text-slate-900">
                                {item.title}
                            </h3>
                            <p className="mt-3 text-sm text-slate-600">{item.text}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}