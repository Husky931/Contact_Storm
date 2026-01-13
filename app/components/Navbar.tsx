export default function Navbar() {
    return (
        <>
            <div className="bg-(--brand-navy) text-white">
                <div className="mx-auto flex max-w-6xl flex-col gap-2 px-6 py-2 text-sm tracking-[0.2em] uppercase sm:flex-row sm:items-center sm:justify-between">
                    <div className="flex flex-wrap items-center gap-3 text-white/80">
                        <a
                            href="tel:+8613162908096"
                            className="transition hover:text-white"
                        >
                            Call us: +86 131 6290 8096
                        </a>
                        <span className="hidden h-3 w-px bg-white/20 sm:block" />
                        <a
                            href="tel:+13073026778"
                            className="transition hover:text-white"
                        >
                            Call us: +1 307 302 6778
                        </a>
                        <span className="hidden h-3 w-px bg-white/20 sm:block" />
                        <a
                            href="mailto:hello@pixaventures.com"
                            className="transition hover:text-white"
                        >
                            Email: hello@PixaVentures.com
                        </a>
                    </div>

                    <div className="flex items-center justify-start gap-2 text-sm tracking-[0.2em] text-white/80 uppercase sm:justify-center">
                        <span className="transition hover:text-white">
                            Contact on WeChat
                        </span>
                        <svg
                            viewBox="0 0 24 24"
                            className="h-4 w-4"
                            fill="currentColor"
                        >
                            <path d="M12 2C6.5 2 2 5.7 2 10.3c0 2.6 1.6 5 4.1 6.6L5 21l4.3-2.3c.9.2 1.8.3 2.7.3 5.5 0 10-3.7 10-8.3S17.5 2 12 2zm-3 7.2c-.6 0-1-.4-1-1s.4-1 1-1 1 .4 1 1-.4 1-1 1zm6 0c-.6 0-1-.4-1-1s.4-1 1-1 1 .4 1 1-.4 1-1 1z" />
                        </svg>
                    </div>
                </div>
            </div>

            <header className="bg-white shadow-sm">
                <div className="mx-auto flex max-w-6xl flex-col items-center gap-4 px-6 py-5">
                    {/* WECHAT ICON
                    <div className="flex items-center justify-center">
                        <span className="flex h-7 w-7 items-center justify-center rounded-full border border-slate-200 text-slate-600">
                            <svg
                                viewBox="0 0 24 24"
                                className="h-4 w-4"
                                fill="currentColor"
                            >
                                <path d="M12 2C6.5 2 2 5.7 2 10.3c0 2.6 1.6 5 4.1 6.6L5 21l4.3-2.3c.9.2 1.8.3 2.7.3 5.5 0 10-3.7 10-8.3S17.5 2 12 2zm-3 7.2c-.6 0-1-.4-1-1s.4-1 1-1 1 .4 1 1-.4 1-1 1zm6 0c-.6 0-1-.4-1-1s.4-1 1-1 1 .4 1 1-.4 1-1 1z" />
                            </svg>
                        </span>
                    </div> */}

                    <nav className="flex flex-wrap items-center justify-center gap-x-6 gap-y-3 text-base font-semibold text-slate-700">
                        {[
                            "Home",
                            "About",
                            "Services",
                            "Work",
                            "Insights",
                            "Studio",
                            "Contact"
                        ].map((item) => (
                            <a
                                key={item}
                                href="#"
                                className="transition hover:text-(--brand-red)"
                            >
                                {item}
                            </a>
                        ))}
                    </nav>
                </div>
            </header>
        </>
    )
}
