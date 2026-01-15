"use client"

import WeChatQRPopup from "../WeChatQRPopup"
import { useLanguage } from "@/components/LanguageProvider"

export default function TopBar() {
    const { language, setLanguage, translations } = useLanguage()
    const copy = translations[language]
    return (
        <div className="bg-primary-navy no-print sticky top-0 z-50 text-white">
            <div className="mx-auto flex max-w-6xl flex-col gap-2 px-6 py-2 text-sm tracking-[0.2em] uppercase sm:flex-row sm:items-center sm:justify-between">
                <div className="flex flex-wrap items-center gap-3 text-white/80">
                    <a
                        href="tel:+8613162908096"
                        className="transition hover:text-white"
                    >
                        {copy.topBar.callUs} +86 131 6290 8096
                    </a>
                    <span className="hidden h-3 w-px bg-white/20 sm:block" />
                    <a
                        href="mailto:hello@pixaventures.com"
                        className="transition hover:text-white"
                    >
                        {copy.topBar.email} hello@pixaventures.com
                    </a>
                </div>

                <div className="flex items-center gap-4">
                    <div className="flex items-center gap-2 text-xs tracking-[0.2em] text-white/70 uppercase">
                        <span className="sr-only">
                            {copy.topBar.languageLabel}
                        </span>
                        <button
                            type="button"
                            onClick={() => setLanguage("en")}
                            className={`cursor-pointer rounded px-2 py-1 transition ${
                                language === "en"
                                    ? "bg-white/20 text-white"
                                    : "text-white/60 hover:text-white"
                            }`}
                            aria-pressed={language === "en"}
                        >
                            EN
                        </button>
                        <span className="text-white/40">/</span>
                        <button
                            type="button"
                            onClick={() => setLanguage("zh")}
                            className={`cursor-pointer rounded px-2 py-1 transition ${
                                language === "zh"
                                    ? "bg-white/20 text-white"
                                    : "text-white/60 hover:text-white"
                            }`}
                            aria-pressed={language === "zh"}
                        >
                            中文
                        </button>
                    </div>
                    <WeChatQRPopup
                        trigger={
                            <div className="flex items-center justify-start gap-2 text-sm tracking-[0.2em] text-white/80 uppercase transition hover:text-white sm:justify-center">
                                <span>{copy.topBar.wechat}</span>
                                <svg
                                    viewBox="0 0 24 24"
                                    className="h-4 w-4"
                                    fill="currentColor"
                                >
                                    <path d="M12 2C6.5 2 2 5.7 2 10.3c0 2.6 1.6 5 4.1 6.6L5 21l4.3-2.3c.9.2 1.8.3 2.7.3 5.5 0 10-3.7 10-8.3S17.5 2 12 2zm-3 7.2c-.6 0-1-.4-1-1s.4-1 1-1 1 .4 1 1-.4 1-1 1zm6 0c-.6 0-1-.4-1-1s.4-1 1-1 1 .4 1 1-.4 1-1 1z" />
                                </svg>
                            </div>
                        }
                    />
                </div>
            </div>
        </div>
    )
}
