"use client"

import { useEffect, useState } from "react"
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
    const isOnCooldown =
        cooldownUntil !== null && Date.now() < cooldownUntil

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
        <footer className="bg-primary-main text-white">
            <div className="mx-auto px-6 py-16 lg:px-16">
                {/* Full width wrapper, content aligned to the right */}
                <div className="flex w-full justify-evenly">
                    <div className="grid w-full max-w-6xl gap-14 md:grid-cols-3 lg:gap-12">
                        {/* Left Section */}
                        <div className="flex flex-col">
                            <div className="space-y-10">
                                <h2 className="max-w-[520px] text-3xl leading-tight font-bold md:text-4xl lg:text-5xl">
                                    {copy.footer.title}
                                </h2>

                                <Link
                                    href="/contact"
                                    className="text-primary-main inline-flex w-full max-w-md items-center justify-center rounded-md bg-white px-8 py-4 text-base font-semibold transition-opacity hover:opacity-90"
                                >
                                    {copy.footer.cta}
                                </Link>
                            </div>
                        </div>

                        {/* Middle Section (Services) */}
                        <div className="flex flex-col items-center text-center">
                            <h3 className="text-base font-semibold underline underline-offset-8 md:text-lg">
                                {copy.footer.servicesTitle}
                            </h3>

                            <ul className="mt-6 space-y-3 text-sm text-white/90 md:text-base">
                                {copy.footer.services.map((service) => (
                                    <li key={service}>{service}</li>
                                ))}
                            </ul>
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

                                <ModalPopup
                                    trigger={
                                        <a
                                            href="#"
                                            className="inline-flex items-center gap-3 text-sm font-bold transition-opacity hover:opacity-80 md:text-base"
                                        >
                                            {copy.footer.audit.cta}{" "}
                                            <span aria-hidden>→</span>
                                        </a>
                                    }
                                >
                                    <div className="bg-linear-to-r from-slate-950 via-slate-900 to-slate-800 px-6 py-5 text-white sm:px-8">
                                        <p className="text-xs font-semibold tracking-[0.4em] text-white/70 uppercase">
                                            {copy.footer.audit.title}
                                        </p>
                                        <p className="mt-2 text-sm text-white/75">
                                            {copy.footer.audit.subtext}
                                        </p>
                                    </div>
                                    <div className="space-y-4 px-6 py-6 text-slate-700 sm:px-8">
                                        <form
                                            onSubmit={handleAuditSubmit}
                                            className="space-y-3"
                                        >
                                            <input
                                                type="email"
                                                name="auditEmail"
                                                value={auditEmail}
                                                onChange={handleAuditEmailChange}
                                                placeholder={
                                                    copy.footer.audit.placeholder
                                                }
                                                className="w-full rounded border border-slate-200 px-4 py-2 text-sm"
                                                required
                                            />
                                            <input
                                                type="text"
                                                name="auditWebsite"
                                                value={auditWebsite}
                                                onChange={handleAuditWebsiteChange}
                                                placeholder={
                                                    copy.footer.audit.websitePlaceholder
                                                }
                                                className="w-full rounded border border-slate-200 px-4 py-2 text-sm"
                                                required
                                                inputMode="url"
                                            />
                                            <input
                                                type="text"
                                                name="companyFax"
                                                value={auditHoneypot}
                                                onChange={handleAuditHoneypotChange}
                                                className="hidden"
                                                tabIndex={-1}
                                                autoComplete="off"
                                            />
                                            {submitStatus.type && (
                                                <div
                                                    className={`rounded px-4 py-2 text-xs ${
                                                        submitStatus.type ===
                                                        "success"
                                                            ? "bg-green-50 text-green-700"
                                                            : "bg-red-50 text-red-700"
                                                    }`}
                                                >
                                                    {submitStatus.message}
                                                </div>
                                            )}
                                            <button
                                                type="submit"
                                                disabled={isSubmitting || isOnCooldown}
                                                className="bg-primary-red hover:bg-primary-red/90 w-full rounded px-4 py-3 text-xs font-semibold tracking-[0.3em] text-white uppercase transition-colors disabled:cursor-not-allowed disabled:opacity-50"
                                            >
                                                {isSubmitting
                                                    ? copy.footer.audit.sending
                                                    : copy.footer.audit.cta}
                                            </button>
                                        </form>
                                        <p className="text-xs text-slate-500">
                                            {copy.footer.audit.note}
                                        </p>
                                    </div>
                                </ModalPopup>
                            </div>

                            <div className="mt-12 flex items-center gap-6 md:mt-0">
                                <WeChatQRPopup
                                    trigger={
                                        <a
                                            href="#"
                                            className="flex h-12 w-12 items-center justify-center rounded-full bg-white transition-opacity hover:opacity-90"
                                            aria-label="WeChat"
                                        >
                                            <svg
                                                viewBox="0 0 24 24"
                                                className="fill-primary-red-dark h-6 w-6"
                                                xmlns="http://www.w3.org/2000/svg"
                                            >
                                                <path d="M8.691 2.188C3.891 2.188 0 5.476 0 9.53c0 2.212 1.17 4.203 3.002 5.55a.59.59 0 0 1 .213.665l-.39 1.48c-.019.07-.048.141-.048.213 0 .163.13.295.29.295a.326.326 0 0 0 .167-.054l1.903-1.114a.864.864 0 0 1 .717-.098 10.16 10.16 0 0 0 2.837.403c.276 0 .543-.027.811-.05-.857-2.578.157-4.972 1.932-6.446 1.703-1.415 3.882-1.98 5.853-1.838-.576-3.583-4.196-6.348-8.597-6.348zM5.785 5.991c.642 0 1.162.529 1.162 1.18a1.17 1.17 0 0 1-1.162 1.178A1.17 1.17 0 0 1 4.623 7.17c0-.651.52-1.18 1.162-1.18zm5.813 0c.642 0 1.162.529 1.162 1.18a1.17 1.17 0 0 1-1.162 1.178 1.17 1.17 0 0 1-1.162-1.178c0-.651.52-1.18 1.162-1.18zm5.34 2.867c-2.455 0-4.515 1.893-4.84 4.396-.002.012-.002.024-.002.036 0 .012 0 .024.002.036.325 2.503 2.385 4.396 4.84 4.396a4.888 4.888 0 0 0 2.613-.74.59.59 0 0 1 .636-.022l1.658.969a.295.295 0 0 0 .29-.001.295.295 0 0 0 .14-.245.295.295 0 0 0-.048-.159l-.39-1.478a.59.59 0 0 1 .226-.665c1.704-1.28 2.78-3.18 2.78-5.31 0-2.503-2.01-4.533-4.487-4.533zm-2.613 4.533a1.17 1.17 0 0 1-1.162-1.178c0-.651.52-1.18 1.162-1.18.642 0 1.162.529 1.162 1.18a1.17 1.17 0 0 1-1.162 1.178zm2.613 0a1.17 1.17 0 0 1-1.162-1.178c0-.651.52-1.18 1.162-1.18.642 0 1.162.529 1.162 1.18a1.17 1.17 0 0 1-1.162 1.178z" />
                                            </svg>
                                        </a>
                                    }
                                />

                                <a
                                    href="#"
                                    className="flex h-12 w-12 items-center justify-center rounded-full bg-white transition-opacity hover:opacity-90"
                                    aria-label="LinkedIn"
                                >
                                    <span className="text-primary-red-dark text-lg font-bold">
                                        in
                                    </span>
                                </a>

                                <a
                                    href="#"
                                    className="flex h-12 w-12 items-center justify-center rounded-full bg-white transition-opacity hover:opacity-90"
                                    aria-label="Facebook"
                                >
                                    <span className="text-primary-red-dark text-lg font-bold">
                                        f
                                    </span>
                                </a>

                                <a
                                    href="#"
                                    className="flex h-12 w-12 items-center justify-center rounded-full bg-white transition-opacity hover:opacity-90"
                                    aria-label="YouTube"
                                >
                                    <svg
                                        viewBox="0 0 24 24"
                                        className="fill-primary-red-dark h-6 w-6"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                                    </svg>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}
