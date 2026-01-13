import Image from "next/image"

export default function Navbar() {
    return (
        <>
            <div className="bg-(--brand-navy) text-white">
                <div className="mx-auto flex max-w-6xl flex-col gap-2 px-6 py-2 text-xs tracking-[0.2em] uppercase sm:flex-row sm:items-center sm:justify-between">
                    <div className="flex flex-wrap items-center gap-3 text-white/80">
                        <span>Call us: +86 131 6290 8096</span>
                        <span className="hidden h-3 w-px bg-white/20 sm:block" />
                        <span>Email: hello@PixaVentures.com</span>
                    </div>
                    <div className="flex items-center gap-3">
                        <a
                            href="#"
                            className="flex items-center justify-center"
                            aria-label="WeChat"
                        >
                            <Image
                                src="/icons/wechat.svg"
                                alt="WeChat"
                                width={36}
                                height={36}
                                priority
                            />
                        </a>
                    </div>
                </div>
            </div>

            <header className="bg-white shadow-sm">
                <div className="mx-auto flex max-w-6xl flex-col items-center gap-6 px-6 py-5 lg:flex-row lg:justify-between">
                    <div className="flex items-center gap-3">
                        <span className="flex h-7 w-7 items-center justify-center rounded-full border border-white/30 text-white/80">
                            <svg
                                viewBox="0 0 24 24"
                                className="h-4 w-4"
                                fill="currentColor"
                            >
                                <path d="M12 2C6.5 2 2 5.7 2 10.3c0 2.6 1.6 5 4.1 6.6L5 21l4.3-2.3c.9.2 1.8.3 2.7.3 5.5 0 10-3.7 10-8.3S17.5 2 12 2zm-3 7.2c-.6 0-1-.4-1-1s.4-1 1-1 1 .4 1 1-.4 1-1 1zm6 0c-.6 0-1-.4-1-1s.4-1 1-1 1 .4 1 1-.4 1-1 1z" />
                            </svg>
                        </span>
                    </div>
                    <nav className="flex flex-wrap items-center justify-center gap-6 text-sm font-semibold text-slate-700">
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
                        <a
                            href="#"
                            className="rounded-full bg-(--brand-red) px-5 py-2 text-xs font-semibold tracking-[0.2em] text-white uppercase"
                        >
                            Start a Project
                        </a>
                    </nav>
                </div>
            </header>
        </>
    )
}
