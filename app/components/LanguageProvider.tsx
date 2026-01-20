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
    const [language, setLanguageState] = useState<Language>(() => {
        if (typeof window === "undefined") return "en"
        const stored = window.localStorage.getItem("language")
        return (stored === "en" || stored === "zh") ? stored : "en"
    })

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
