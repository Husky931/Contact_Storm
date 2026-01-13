"use client"

import Image from "next/image"
import WeChatQRPopup from "./WeChatQRPopup"

export default function About() {
    return (
        <section className="bg-white py-16">
            <div className="mx-auto grid max-w-6xl gap-12 px-6 lg:grid-cols-[1fr_1.1fr] lg:items-center">
                <div className="relative">
                    <div className="grid gap-4 md:grid-cols-2">
                        <Image
                            src="/images/mooncake.jpg"
                            alt="Strategist at desk"
                            width={520}
                            height={520}
                            className="h-64 w-full rounded object-cover shadow"
                        />
                        <Image
                            src="/images/chinese_businessmen.webp"
                            alt="Team meeting"
                            width={520}
                            height={520}
                            className="h-64 w-full rounded object-cover shadow"
                        />
                    </div>
                    {/* <Link href="/insights"></Link> */}
                    <Image
                        src="/images/factory.webp"
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
                            Factories Served
                        </p>
                    </div>
                </div>
                <div>
                    <p className="text-primary-red text-xs font-semibold tracking-[0.4em] uppercase">
                        Built for Manufacturers
                    </p>
                    <h2 className="font-heading mt-4 text-3xl text-slate-900">
                        A bilingual diverse team bridging{" "}
                        <span className="text-primary-red">
                            Chinese manufacturing
                        </span>{" "}
                        with{" "}
                        <span className="text-primary-red">global markets</span>
                    </h2>
                    <p className="mt-4 text-sm leading-relaxed text-slate-600">
                        We are a bilingual, diverse team (Chinese, European,
                        American) that understands both factory realities and
                        Western buyer mind and expectations. That makes our ad
                        creative, Amazon strategy, and websites convert much
                        better.
                    </p>
                    <div className="mt-6 space-y-3 text-sm text-slate-700">
                        {[
                            "Western buyer mindset applied to ads and listings",
                            "Amazon, paid social, Shopify, and SEO execution in-house",
                            "Conversion-focused website redesign"
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
                    <WeChatQRPopup
                        trigger={
                            <a
                                href="#"
                                className="bg-primary-navy hover:bg-primary-navy/90 mt-8 inline-flex items-center gap-3 rounded px-6 py-6 text-sm font-semibold tracking-[0.3em] text-white uppercase transition-colors"
                            >
                                Contact Us
                            </a>
                        }
                    />
                </div>
            </div>
        </section>
    )
}
