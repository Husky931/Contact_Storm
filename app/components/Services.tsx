import Image from "next/image"

const services = [
    {
        title: "AI Automation",
        text: "Streamline your business processes with intelligent automation solutions that save time and increase efficiency.",
        image: "/images/service-1.jpg"
    },
    {
        title: "SEO Growth",
        text: "Boost your online visibility and drive organic traffic with strategic SEO optimization and content marketing.",
        image: "/images/service-2.jpg"
    },
    {
        title: "Paid Ads",
        text: "Maximize your ROI with targeted advertising campaigns across multiple platforms that drive conversions.",
        image: "/images/service-3.jpg"
    },
    {
        title: "App development",
        text: "Build powerful mobile and web applications that engage users and deliver exceptional experiences.",
        image: "/images/service-4.jpg"
    },
    {
        title: "Consulting",
        text: "Get expert guidance and strategic insights to help your business grow and achieve its goals.",
        image: "/images/service-5.jpg"
    },
    {
        title: "Custom Solutions",
        text: "Tailored technology solutions designed specifically for your unique business needs and challenges.",
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
                                    href="/insights"
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
                        href="/insights"
                        className="bg-primary-red rounded px-8 py-3 text-xs font-semibold tracking-[0.3em] text-white uppercase"
                    >
                        View Our Insights
                    </a>
                </div>
            </div>
        </section>
    )
}
