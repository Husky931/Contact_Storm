"use client"

import Link from "next/link"
import { useLanguage } from "@/components/LanguageProvider"

export default function Navigation() {
    const { language, translations } = useLanguage()
    const copy = translations[language]
    const navItems = [
        { label: copy.nav.home, href: "/" },
        { label: copy.nav.brochure, href: "/brochure" },
        { label: copy.nav.reports, href: "/reports" },
        { label: copy.nav.insights, href: "/insights" },
        { label: copy.nav.contact, href: "/contact" }
    ]

    return (
        <header className="no-print bg-white shadow-sm">
            <div className="mx-auto flex max-w-6xl flex-col items-center gap-4 px-6 py-5">
                <nav className="flex flex-wrap items-center justify-center gap-x-6 gap-y-3 text-base font-semibold text-slate-700">
                    {navItems.map((item) => (
                        <Link
                            key={item.label}
                            href={item.href}
                            className="hover:text-primary-red cursor-pointer transition"
                        >
                            {item.label}
                        </Link>
                    ))}
                </nav>
            </div>
        </header>
    )
}
