export default function Footer() {
    return (
        <footer className="bg-brand-navy text-white">
            <div className="mx-auto grid max-w-6xl gap-8 px-6 py-12 md:grid-cols-[1.2fr_1fr_1fr]">
                <div>
                    <div className="flex items-center gap-4">
                        <div className="bg-brand-red flex h-12 w-12 items-center justify-center rounded text-white">
                            <svg
                                viewBox="0 0 24 24"
                                className="h-6 w-6"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="2"
                            >
                                <path d="M4 12h16" />
                                <path d="M12 4v16" />
                            </svg>
                        </div>
                        <div>
                            <p className="font-heading text-xl font-semibold">
                                PixaVentures
                            </p>
                            <p className="text-xs tracking-[0.3em] text-white/70 uppercase">
                                Development agency
                            </p>
                        </div>
                    </div>
                    <p className="mt-4 text-sm text-white/70">
                        Building digital products through strategy, design, and
                        engineering.
                    </p>
                </div>
                <div className="space-y-3 text-sm text-white/70">
                    <p className="font-semibold tracking-[0.3em] text-white uppercase">
                        Company
                    </p>
                    <a href="#" className="block">
                        About
                    </a>
                    <a href="#" className="block">
                        Services
                    </a>
                    <a href="#" className="block">
                        Careers
                    </a>
                    <a href="#" className="block">
                        Contact
                    </a>
                </div>
                <div className="space-y-3 text-sm text-white/70">
                    <p className="font-semibold tracking-[0.3em] text-white uppercase">
                        Newsletter
                    </p>
                    <p>
                        Sign up to receive product insights and studio updates.
                    </p>
                    <div className="mt-4 flex overflow-hidden rounded bg-white">
                        <input
                            className="w-full px-4 py-2 text-sm text-slate-700"
                            placeholder="Email address"
                        />
                        <button className="bg-brand-red px-4 text-xs font-semibold tracking-[0.3em] text-white uppercase">
                            Join
                        </button>
                    </div>
                    <div className="mt-4 flex items-center gap-3">
                        {["f", "t", "in"].map((label) => (
                            <span
                                key={label}
                                className="flex h-8 w-8 items-center justify-center rounded-full border border-white/30 text-xs font-semibold text-white/70"
                            >
                                {label}
                            </span>
                        ))}
                    </div>
                </div>
            </div>
            <div className="border-t border-white/10">
                <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-3 px-6 py-4 text-xs tracking-[0.3em] text-white/50 uppercase sm:flex-row">
                    <span>Copyright 2024 PixaVentures Digital</span>
                    <span>All Rights Reserved</span>
                </div>
            </div>
        </footer>
    )
}
