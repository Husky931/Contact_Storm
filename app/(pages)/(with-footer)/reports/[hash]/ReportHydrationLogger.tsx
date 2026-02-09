"use client"

import { useEffect } from "react"
import { useLanguage } from "@/components/LanguageProvider"

interface ReportHydrationLoggerProps {
    analyzedAt?: string
}

export default function ReportHydrationLogger({ analyzedAt }: ReportHydrationLoggerProps) {
    const { language } = useLanguage()

    // #region agent log
    useEffect(() => {
        const clientDate = analyzedAt ? new Date(analyzedAt).toLocaleString() : undefined
        fetch("http://127.0.0.1:7246/ingest/38583c81-b757-438c-8b6f-1daff8948ae7", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
                hypothesisId: "B",
                location: "reports/[hash]/ReportHydrationLogger.tsx",
                message: "report page hydrated",
                data: { language, clientDate, page: "reports" },
                timestamp: Date.now()
            })
        }).catch(() => { })
    }, [analyzedAt, language])
    // #endregion

    return null
}
