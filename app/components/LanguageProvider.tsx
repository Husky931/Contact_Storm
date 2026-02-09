"use client"

import {
    createContext,
    useContext,
    useEffect,
    useMemo,
    useState
} from "react"
import { Language, translations } from "@/lib/i18n"

interface LanguageContextValue {
    language: Language
    setLanguage: (language: Language) => void
    translations: typeof translations
}

const LanguageContext = createContext<LanguageContextValue | null>(null)

export function LanguageProvider({
    children
}: {
    children: React.ReactNode
}) {
    const [language, setLanguageState] = useState<Language>("en")

    useEffect(() => {
        const stored = window.localStorage.getItem("language")
        if (stored === "en" || stored === "zh") setLanguageState(stored)
    }, [])

    // #region agent log
    if (typeof window !== "undefined") {
        const stored = window.localStorage.getItem("language")
        fetch("http://127.0.0.1:7246/ingest/38583c81-b757-438c-8b6f-1daff8948ae7", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
                hypothesisId: "A",
                location: "LanguageProvider.tsx",
                message: "language on render",
                data: { language, storedInLs: stored, isServer: false },
                timestamp: Date.now()
            })
        }).catch(() => { })
    }
    // #endregion

    useEffect(() => {
        document.documentElement.lang =
            language === "zh" ? "zh-CN" : "en"
    }, [language])

    const setLanguage = (nextLanguage: Language) => {
        setLanguageState(nextLanguage)
        window.localStorage.setItem("language", nextLanguage)
    }

    const value = useMemo(
        () => ({ language, setLanguage, translations }),
        [language]
    )

    return (
        <LanguageContext.Provider value={value}>
            {children}
        </LanguageContext.Provider>
    )
}

export function useLanguage() {
    const context = useContext(LanguageContext)
    if (!context) {
        throw new Error("useLanguage must be used within LanguageProvider")
    }
    return context
}
