export default function Navbar() {
    return (
        <>
            <div className="bg-[var(--brand-navy)] text-white">
                <div className="mx-auto flex max-w-6xl flex-col gap-2 px-6 py-2 text-xs uppercase tracking-[0.2em] sm:flex-row sm:items-center sm:justify-between">
                    <div className="flex flex-wrap items-center gap-3 text-white/80">
                        <span>Call us: +01 2323 7328 90</span>
                        <span className="hidden h-3 w-px bg-white/20 sm:block" />
                        <span>Email: hello@eversource.com</span>
                    </div>
                    <div className="flex items-center gap-3">
                        {["f", "t", "in"].map((label) => (
                            <span
                                key={label}
                                className="flex h-7 w-7 items-center justify-center rounded-full border border-white/30 text-[10px] font-semibold text-white/80"
                            >
                                {label}
                            </span>
                        ))}
                    </div>
                </div>
            </div>

            <header className="bg-white shadow-sm">
                <div className="mx-auto flex max-w-6xl flex-col items-center gap-6 px-6 py-5 lg:flex-row lg:justify-between">
                    <div className="flex items-center gap-4">
                        <div className="flex h-12 w-12 items-center justify-center rounded bg-[var(--brand-red)] text-white">
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
                            <p className="font-heading text-xl font-semibold text-slate-900">
                                Eversource
                            </p>
                            <p className="text-xs uppercase tracking-[0.3em] text-slate-500">
                                Digital Studio
                            </p>
                        </div>
                    </div>
                    <nav className="flex flex-wrap items-center justify-center gap-6 text-sm font-semibold text-slate-700">
                        {["Home", "About", "Services", "Work", "Insights", "Studio", "Contact"].map(
                            (item) => (
                                <a
                                    key={item}
                                    href="#"
                                    className="transition hover:text-[var(--brand-red)]"
                                >
                                    {item}
                                </a>
                            )
                        )}
                        <a
                            href="#"
                            className="rounded-full bg-[var(--brand-red)] px-5 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-white"
                        >
                            Start a Project
                        </a>
                    </nav>
                </div>
            </header>
        </>
    )
}