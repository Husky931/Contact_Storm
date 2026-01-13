import Image from "next/image"

const industries = [
    {
        title: "SaaS & Platforms",
        text: "Launch new features faster with scalable product builds.",
        image: "/images/industry-1.jpg",
    },
    {
        title: "Retail & Commerce",
        text: "Omnichannel experiences built to grow conversion and loyalty.",
        image: "/images/industry-2.jpg",
    },
    {
        title: "Professional Services",
        text: "Digital tools that streamline operations and client delivery.",
        image: "/images/industry-3.jpg",
    },
]

export default function Industries() {
    return (
        <section className="bg-(--background) py-16">
            <div className="mx-auto max-w-6xl px-6">
                <div className="text-center">
                    <p className="text-xs font-semibold uppercase tracking-[0.4em] text-(--brand-red)">
                        Explore by Industry
                    </p>
                    <h2 className="font-heading mt-4 text-3xl text-slate-900">
                        Explore by Industry
                    </h2>
                </div>
                <div className="mt-10 grid gap-6 md:grid-cols-3">
                    {industries.map((industry) => (
                        <article
                            key={industry.title}
                            className="overflow-hidden rounded bg-white shadow"
                        >
                            <Image
                                src={industry.image}
                                alt={industry.title}
                                width={640}
                                height={420}
                                className="h-44 w-full object-cover"
                            />
                            <div className="p-6">
                                <h3 className="font-heading text-xl text-slate-900">
                                    {industry.title}
                                </h3>
                                <p className="mt-3 text-sm text-slate-600">{industry.text}</p>
                                <a
                                    href="#"
                                    className="mt-5 inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.3em] text-(--brand-red)"
                                >
                                    Learn More
                                    <span className="text-base">+</span>
                                </a>
                            </div>
                        </article>
                    ))}
                </div>
            </div>
        </section>
    )
}