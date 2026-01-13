import Link from "next/link"

const navItems = [
    { label: "Home", href: "/" },
    { label: "Reports", href: "/reports" },
    { label: "Insights", href: "/insights" },
    { label: "Contact", href: "/contact" }
]

export default function Navigation() {
    return (
        <header className="bg-white shadow-sm">
            <div className="mx-auto flex max-w-6xl flex-col items-center gap-4 px-6 py-5">
                <nav className="flex flex-wrap items-center justify-center gap-x-6 gap-y-3 text-base font-semibold text-slate-700">
                    {navItems.map((item) => (
                        <Link
                            key={item.label}
                            href={item.href}
                            className="transition hover:text-(--brand-red)"
                        >
                            {item.label}
                        </Link>
                    ))}
                </nav>
            </div>
        </header>
    )
}
