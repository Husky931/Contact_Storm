import Image from "next/image"
import Link from "next/link"

const services = [
    {
        title: "Amazon PPC & Marketplace",
        text: "Optimize listings, run Amazon ads, and improve conversion rates for factory-owned stores.",
        image: "/images/service-1.jpg"
    },
    {
        title: "Paid Social Advertising",
        text: "Meta, Instagram, and TikTok campaigns built for overseas buyers and lead quality.",
        image: "/images/service-3.jpg"
    },
    {
        title: "SEO & Organic Growth",
        text: "Get found by buyers searching for your products. We optimize your website and content to rank higher in Google searches across your target markets, driving qualified leads organically.",
        image: "/images/service-2.jpg"
    },
    {
        title: "Social Media Growth",
        text: "Build your brand presence on international platforms. We create content that speaks to Western customers, manage your accounts, and grow your following with engaged buyers.",
        image: "/images/service-5.jpg"
    },
    {
        title: "Modern Website Redesign",
        text: "Your website is often the first impression. We redesign with proven conversion principles, bilingual support, and trust-building elements that Western buyers expect. Higher conversion rates guaranteed.",
        image: "/images/service-4.jpg"
    },
    {
        title: "Leads generation",
        text: "We find and vent qualified leads suitable for your products and business.",
        image: "/images/service-6.jpg"
    }
]

export default function Services() {
    return (
        <section id="services" className="bg-background py-16">
            <div className="mx-auto max-w-6xl px-6">
                <div className="text-center">
                    <p className="text-primary-red text-xs font-semibold tracking-[0.4em] uppercase">
                        Growth Services
                    </p>
                    <h2 className="font-heading mt-4 text-3xl text-slate-900">
                        Everything needed to reach overseas buyers{" "}
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
                                <Link
                                    href="/insights"
                                    className="text-primary-red mt-5 inline-flex items-center gap-2 text-xs font-semibold tracking-[0.3em] uppercase"
                                >
                                    Read More
                                    <span className="text-base">+</span>
                                </Link>
                            </div>
                        </div>
                    ))}
                </div>
                <div className="mt-10 flex justify-center">
                    <Link
                        href="#contact"
                        className="bg-primary-red hover:bg-primary-red/90 rounded px-8 py-3 text-xs font-semibold tracking-[0.3em] text-white uppercase transition-colors"
                    >
                        Book A Strategy Call
                    </Link>
                </div>
            </div>
        </section>
    )
}
