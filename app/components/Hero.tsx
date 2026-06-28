"use client"

import Image from "next/image"
import { useLanguage } from "@/components/LanguageProvider"

const DOT_PATTERN =
    "radial-gradient(circle, var(--color-primary-slate) 1.4px, transparent 1.4px)"

export default function Hero() {
    const { language, translations } = useLanguage()
    const copy = translations[language]

    return (
        <section className="relative overflow-hidden bg-linear-to-b from-white via-background to-background">
            <div className="mx-auto grid max-w-6xl items-center gap-12 px-6 py-16 lg:grid-cols-2 lg:gap-16 lg:py-24">
                {/* Left: copy */}
                <div className="max-w-xl">
                    <p className="text-primary-blue font-heading text-sm font-semibold tracking-wide sm:text-base">
                        {copy.hero.kicker}
                    </p>
                    <h1 className="font-heading text-primary-navy mt-4 text-4xl leading-[1.1] font-bold sm:text-5xl lg:text-6xl">
                        {copy.hero.title}
                    </h1>
                    <p className="text-text/75 mt-6 text-base leading-relaxed sm:text-lg">
                        {copy.hero.description}
                    </p>

                    <ul className="mt-6 space-y-3">
                        {copy.hero.bullets.map((bullet) => (
                            <li
                                key={bullet}
                                className="text-text/90 flex items-start gap-3 text-base sm:text-lg"
                            >
                                <svg
                                    className="text-primary-red mt-1 size-5 shrink-0"
                                    viewBox="0 0 20 20"
                                    fill="currentColor"
                                    aria-hidden="true"
                                >
                                    <path
                                        fillRule="evenodd"
                                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.7-9.3a1 1 0 00-1.4-1.4L9 10.6 7.7 9.3a1 1 0 00-1.4 1.4l2 2a1 1 0 001.4 0l4-4z"
                                        clipRule="evenodd"
                                    />
                                </svg>
                                <span>{bullet}</span>
                            </li>
                        ))}
                    </ul>

                    <a
                        href="#contact"
                        className="bg-primary-red hover:bg-primary-redDark mt-8 inline-flex items-center justify-center rounded-full px-8 py-3.5 text-base font-semibold text-white shadow-lg shadow-primary-red/20 transition-colors"
                    >
                        {copy.hero.cta}
                    </a>
                </div>

                {/* Right: circular image with floating UI */}
                <div className="relative mx-auto aspect-square w-full max-w-[480px]">
                    {/* dotted decorations */}
                    <span
                        className="absolute -top-2 left-2 h-20 w-24 opacity-30"
                        style={{
                            backgroundImage: DOT_PATTERN,
                            backgroundSize: "14px 14px"
                        }}
                        aria-hidden="true"
                    />
                    <span
                        className="absolute -bottom-2 right-0 h-24 w-28 opacity-30"
                        style={{
                            backgroundImage: DOT_PATTERN,
                            backgroundSize: "14px 14px"
                        }}
                        aria-hidden="true"
                    />

                    {/* circular photo */}
                    <div className="absolute inset-0 overflow-hidden rounded-full shadow-2xl ring-1 ring-black/5">
                        <Image
                            src="/images/industry-1.jpg"
                            alt={copy.hero.imageAlt}
                            fill
                            className="object-cover"
                            priority
                        />
                    </div>

                    {/* AI search / prompt pill */}
                    <div className="absolute top-6 left-1/2 flex w-[88%] -translate-x-1/4 items-center gap-2 rounded-full bg-white px-4 py-2.5 shadow-xl ring-1 ring-black/5">
                        <svg
                            className="text-primary-blue size-4 shrink-0"
                            viewBox="0 0 24 24"
                            fill="currentColor"
                            aria-hidden="true"
                        >
                            <path d="M12 2l1.6 4.4L18 8l-4.4 1.6L12 14l-1.6-4.4L6 8l4.4-1.6L12 2zM5 14l.9 2.5L8.5 17l-2.6.9L5 20l-.9-2.1L1.5 17l2.6-.5L5 14z" />
                        </svg>
                        <span className="text-text/60 truncate text-sm">
                            Recommend aluminium manufactures from China
                        </span>
                        <span className="bg-primary-red ml-auto grid size-7 shrink-0 place-items-center rounded-full">
                            <svg
                                className="size-3.5 text-white"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="2.5"
                                aria-hidden="true"
                            >
                                <circle cx="11" cy="11" r="7" />
                                <path d="M21 21l-4-4" strokeLinecap="round" />
                            </svg>
                        </span>
                    </div>

                    {/* chat badge (ask) */}
                    <div className="bg-primary-blue absolute top-[26%] -left-3 grid size-12 place-items-center rounded-full shadow-lg">
                        <svg
                            className="size-6 text-white"
                            viewBox="0 0 24 24"
                            fill="currentColor"
                            aria-hidden="true"
                        >
                            <path d="M4 4h16a2 2 0 012 2v9a2 2 0 01-2 2H9l-5 4V6a2 2 0 012-2z" />
                        </svg>
                    </div>

                    {/* cart badge (buy) */}
                    <div className="bg-primary-red absolute top-[52%] -right-3 grid size-12 place-items-center rounded-full shadow-lg">
                        <svg
                            className="size-6 text-white"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            aria-hidden="true"
                        >
                            <circle cx="9" cy="20" r="1.5" />
                            <circle cx="18" cy="20" r="1.5" />
                            <path
                                d="M2 3h3l2.4 12.2a1 1 0 001 .8h9.2a1 1 0 001-.8L21 7H6"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            />
                        </svg>
                    </div>

                    {/* product cards (the AI-recommended answer) */}
                    <div className="absolute -bottom-3 left-0 flex gap-3">
                        <ProductCard
                            emoji="🕶️"
                            name="Sunglasses"
                            price="$120.00"
                            sponsored
                        />
                        <ProductCard emoji="⌚" name="Watch" price="$450.00" />
                    </div>
                </div>
            </div>
        </section>
    )
}

function ProductCard({
    emoji,
    name,
    price,
    sponsored = false
}: {
    emoji: string
    name: string
    price: string
    sponsored?: boolean
}) {
    return (
        <div className="w-32 rounded-2xl bg-white p-3 shadow-xl ring-1 ring-black/5">
            <div className="flex items-center gap-2">
                <span className="bg-primary-blue/10 grid size-9 shrink-0 place-items-center rounded-lg text-lg">
                    {emoji}
                </span>
                <div className="min-w-0">
                    <p className="text-text truncate text-sm font-semibold">
                        {name}
                    </p>
                    <p className="text-text/60 text-xs">{price}</p>
                </div>
            </div>
            {sponsored && (
                <span className="text-primary-blue bg-primary-blue/10 mt-2 inline-block rounded px-1.5 py-0.5 text-[10px] font-semibold tracking-wide uppercase">
                    AI pick
                </span>
            )}
            <button className="border-primary-red text-primary-red hover:bg-primary-red mt-2 w-full rounded-lg border py-1.5 text-xs font-semibold transition-colors hover:text-white">
                Add to cart
            </button>
        </div>
    )
}
