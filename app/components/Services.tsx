import Image from "next/image"

const services = [
    {
        title: "Product Discovery",
        text: "User research, positioning, and validation that de-risks launches.",
        image: "/images/service-1.jpg"
    },
    {
        title: "Experience Design",
        text: "Wireframes, UI systems, and interaction design that feel premium.",
        image: "/images/service-2.jpg"
    },
    {
        title: "Web Development",
        text: "High-performing websites, portals, and dashboards built to scale.",
        image: "/images/service-3.jpg"
    },
    {
        title: "Platform Engineering",
        text: "Cloud architecture, CI/CD, and infrastructure automation.",
        image: "/images/service-4.jpg"
    },
    {
        title: "Growth Optimization",
        text: "Experimentation, analytics, and conversion-focused improvements.",
        image: "/images/service-5.jpg"
    },
    {
        title: "Digital Strategy",
        text: "Multi-channel planning that connects product, brand, and GTM.",
        image: "/images/service-6.jpg"
    }
]

export default function Services() {
    return (
        <section className="bg-background py-16">
            <div className="mx-auto max-w-6xl px-6">
                <div className="text-center">
                    <p className="text-primary-red text-xs font-semibold tracking-[0.4em] uppercase">
                        Agency Services
                    </p>
                    <h2 className="font-heading mt-4 text-3xl text-slate-900">
                        Agency Services
                    </h2>
                </div>
                <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                    {services.map((service) => (
                        <div
                            key={service.title}
                            className="overflow-hidden rounded bg-white shadow"
                        >
                            <Image
                                src={service.image}
                                alt={service.title}
                                width={640}
                                height={420}
                                className="h-44 w-full object-cover"
                            />
                            <div className="p-6">
                                <h3 className="font-heading text-xl text-slate-900">
                                    {service.title}
                                </h3>
                                <p className="mt-3 text-sm text-slate-600">
                                    {service.text}
                                </p>
                                <a
                                    href="#"
                                    className="text-primary-red mt-5 inline-flex items-center gap-2 text-xs font-semibold tracking-[0.3em] uppercase"
                                >
                                    Read More
                                    <span className="text-base">+</span>
                                </a>
                            </div>
                        </div>
                    ))}
                </div>
                <div className="mt-10 flex justify-center">
                    <a
                        href="#"
                        className="bg-primary-red rounded px-8 py-3 text-xs font-semibold tracking-[0.3em] text-white uppercase"
                    >
                        View All Services
                    </a>
                </div>
            </div>
        </section>
    )
}
