"use client"

import { useEffect, useRef, useState } from "react"
import Link from "next/link"
import WeChatQRPopup from "./WeChatQRPopup"
import ModalPopup from "./ModalPopup"
import { useLanguage } from "@/components/LanguageProvider"

export default function Footer() {
    const { language, translations } = useLanguage()
    const copy = translations[language]
    const [auditEmail, setAuditEmail] = useState("")
    const [auditWebsite, setAuditWebsite] = useState("")
    const [auditHoneypot, setAuditHoneypot] = useState("")
    const [isSubmitting, setIsSubmitting] = useState(false)
    const [cooldownUntil, setCooldownUntil] = useState<number | null>(null)
    const [submitStatus, setSubmitStatus] = useState<{
        type: "success" | "error" | null
        message: string
    }>({ type: null, message: "" })
    const cooldownMs = 5 * 60 * 1000
    const cooldownStorageKey = "auditCooldownUntil"
    const isOnCooldown = cooldownUntil !== null && Date.now() < cooldownUntil

    // #region agent log
    const loggedRender = useRef(false)
    if (typeof window !== "undefined" && !loggedRender.current) {
        loggedRender.current = true
        fetch("http://127.0.0.1:7246/ingest/38583c81-b757-438c-8b6f-1daff8948ae7", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
                hypothesisId: "D",
                location: "Footer.tsx",
                message: "Footer first client render",
                data: { language, cooldownUntil },
                timestamp: Date.now()
            })
        }).catch(() => { })
    }
    // #endregion

    const handleAuditEmailChange = (
        event: React.ChangeEvent<HTMLInputElement>
    ) => {
        setAuditEmail(event.target.value)
        if (submitStatus.type) {
            setSubmitStatus({ type: null, message: "" })
        }
    }

    const handleAuditWebsiteChange = (
        event: React.ChangeEvent<HTMLInputElement>
    ) => {
        setAuditWebsite(event.target.value)
        if (submitStatus.type) {
            setSubmitStatus({ type: null, message: "" })
        }
    }

    const handleAuditHoneypotChange = (
        event: React.ChangeEvent<HTMLInputElement>
    ) => {
        setAuditHoneypot(event.target.value)
    }

    useEffect(() => {
        const storedCooldown =
            typeof window !== "undefined"
                ? window.localStorage.getItem(cooldownStorageKey)
                : null
        if (storedCooldown) {
            const parsed = Number(storedCooldown)
            if (!Number.isNaN(parsed)) {
                setCooldownUntil(parsed)
            }
        }
    }, [])

    const handleAuditSubmit = async (event: React.FormEvent) => {
        event.preventDefault()
        setIsSubmitting(true)
        setSubmitStatus({ type: null, message: "" })

        try {
            if (isOnCooldown) {
                throw new Error(copy.footer.audit.errors.cooldown)
            }

            if (auditHoneypot) {
                throw new Error(copy.footer.audit.errors.generic)
            }

            if (!auditEmail.trim() || !auditWebsite.trim()) {
                throw new Error(copy.footer.audit.errors.missingEmail)
            }

            const normalizedWebsite = auditWebsite.trim().startsWith("http")
                ? auditWebsite.trim()
                : `https://${auditWebsite.trim()}`

            const response = await fetch("/api/send-email", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    name: copy.footer.audit.formName,
                    email: auditEmail.trim(),
                    message: `${copy.footer.audit.message}\nWebsite: ${normalizedWebsite}`
                })
            })

            const data = await response.json()

            if (!response.ok) {
                const errorMsg =
                    data.error ||
                    `Failed to send email (Status: ${response.status})`
                throw new Error(errorMsg)
            }

            setSubmitStatus({
                type: "success",
                message: copy.footer.audit.success
            })
            setAuditEmail("")
            setAuditWebsite("")
            setAuditHoneypot("")
            const nextCooldown = Date.now() + cooldownMs
            setCooldownUntil(nextCooldown)
            if (typeof window !== "undefined") {
                window.localStorage.setItem(
                    cooldownStorageKey,
                    String(nextCooldown)
                )
            }
        } catch (error) {
            setSubmitStatus({
                type: "error",
                message:
                    error instanceof Error
                        ? error.message
                        : copy.footer.audit.errors.generic
            })
        } finally {
            setIsSubmitting(false)
        }
    }

    return (
        <footer className="bg-primary-main no-print text-white">
            <div className="mx-auto px-6 py-16 lg:px-16">
                {/* Full width wrapper, content aligned to the right */}
                <div className="flex w-full justify-evenly">
                    <div className="grid w-full max-w-6xl gap-16 md:grid-cols-2 md:gap-32 lg:gap-48">
                        {/* Left Section */}
                        <div className="flex flex-col">
                            <div className="space-y-10">
                                <h2 className="max-w-[520px] text-3xl leading-tight font-bold md:text-4xl lg:text-5xl">
                                    {copy.footer.title}
                                </h2>

                                <Link
                                    href="/contact"
                                    className="text-primary-main inline-flex w-full max-w-md cursor-pointer items-center justify-center rounded-md bg-white px-8 py-4 text-base font-semibold transition-opacity hover:opacity-90"
                                >
                                    {copy.footer.cta}
                                </Link>
                            </div>
                        </div>

                        {/* Right Section */}
                        <div className="flex flex-col justify-between">
                            <div className="max-w-[360px] space-y-6">
                                <div>
                                    <p className="text-base font-semibold md:text-lg">
                                        {copy.footer.audit.title}
                                    </p>
                                    <p className="mt-2 text-sm leading-relaxed text-white/80 md:text-base">
                                        {copy.footer.audit.subtext}
                                    </p>
                                </div>
                            </div>
                            <p className="mt-6 text-xs text-white/70 md:text-sm">
                                {copy.footer.businessLicense}
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}
