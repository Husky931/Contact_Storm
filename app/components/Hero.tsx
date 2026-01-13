"use client"

import { useState } from "react"
import Image from "next/image"
import { useLanguage } from "@/components/LanguageProvider"

export default function Hero() {
    const { language, translations } = useLanguage()
    const copy = translations[language]
    const [formData, setFormData] = useState({
        name: "",
        serviceNeeded: "",
        productCategory: "",
        targetMarket: "",
        salesChannels: "",
        challenge: "",
        contact: ""
    })
    const [isSubmitting, setIsSubmitting] = useState(false)
    const [submitStatus, setSubmitStatus] = useState<{
        type: "success" | "error" | null
        message: string
    }>({ type: null, message: "" })

    const handleChange = (
        e: React.ChangeEvent<
            HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
        >
    ) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        })
        // Clear status when user starts typing
        if (submitStatus.type) {
            setSubmitStatus({ type: null, message: "" })
        }
    }

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()
        setIsSubmitting(true)
        setSubmitStatus({ type: null, message: "" })

        try {
            // Validate required fields
            if (!formData.name || !formData.contact) {
                throw new Error(copy.hero.form.errors.missingFields)
            }

            // Build message from form fields
            const messageParts = []
            if (formData.serviceNeeded) {
                messageParts.push(`Service Needed: ${formData.serviceNeeded}`)
            }
            if (formData.productCategory) {
                messageParts.push(
                    `Product Category / Industry: ${formData.productCategory}`
                )
            }
            if (formData.targetMarket) {
                messageParts.push(`Target Market: ${formData.targetMarket}`)
            }
            if (formData.salesChannels) {
                messageParts.push(
                    `Current Sales Channels: ${formData.salesChannels}`
                )
            }
            if (formData.challenge) {
                messageParts.push(`Main Challenge: ${formData.challenge}`)
            }

            const message =
                messageParts.join("\n\n") || "Project brief submission"

            // Prepare data for API
            const apiData: {
                name: string
                email: string
                wechatId?: string
                message: string
                validateEmail: boolean
            } = {
                name: formData.name.trim(),
                email: formData.contact.trim(),
                message: message,
                validateEmail: false // Skip email validation for Hero form
            }

            const response = await fetch("/api/send-email", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(apiData)
            })

            const data = await response.json()

            if (!response.ok) {
                const errorMsg =
                    data.error ||
                    `Failed to send email (Status: ${response.status})`
                throw new Error(errorMsg)
            }

            // Success
            setSubmitStatus({
                type: "success",
                message: copy.hero.form.success
            })

            // Reset form
            setFormData({
                name: "",
                serviceNeeded: "",
                productCategory: "",
                targetMarket: "",
                salesChannels: "",
                challenge: "",
                contact: ""
            })
        } catch (error) {
            setSubmitStatus({
                type: "error",
                message:
                    error instanceof Error
                        ? error.message
                        : copy.hero.form.errors.generic
            })
        } finally {
            setIsSubmitting(false)
        }
    }

    return (
        <section className="relative overflow-hidden bg-slate-900 text-white">
            <Image
                src="/images/industry-1.jpg"
                alt={copy.hero.imageAlt}
                fill
                className="object-cover"
                priority
            />
            <div className="absolute inset-0 bg-linear-to-r from-slate-950/90 via-slate-900/75 to-slate-900/30" />
            <div className="relative mx-auto max-w-6xl px-6 py-20 lg:py-28">
                <div className="grid gap-12 lg:grid-cols-[1.3fr_0.9fr] lg:items-center">
                    <div>
                        <p className="text-sm tracking-[0.5em] text-white/70 uppercase">
                            {copy.hero.tag}
                        </p>
                        <h1 className="font-heading mt-5 text-4xl leading-tight font-semibold text-white md:text-5xl">
                            {copy.hero.title}
                        </h1>

                        <p className="mt-5 max-w-xl text-base text-white/80 md:text-lg">
                            {copy.hero.description}
                        </p>

                        <p className="mt-4 max-w-xl text-sm text-white/70">
                            {copy.hero.subtext}
                        </p>
                        <div className="mt-8 flex flex-wrap gap-4">
                            <a
                                href="#services"
                                className="bg-primary-main hover:bg-primary-navy/90 rounded px-6 py-3 text-sm font-semibold tracking-[0.2em] text-white uppercase transition-colors"
                            >
                                {copy.hero.ctas.primary}
                            </a>
                            <a
                                href="#contact"
                                className="rounded border border-white/60 px-6 py-3 text-sm font-semibold tracking-[0.2em] text-white uppercase transition-colors hover:bg-white/10"
                            >
                                {copy.hero.ctas.secondary}
                            </a>
                        </div>
                        <div className="mt-10 flex flex-wrap items-center gap-6 text-xs font-semibold tracking-[0.4em] text-white/70 uppercase">
                            {copy.hero.highlights.map((highlight) => (
                                <span key={highlight}>{highlight}</span>
                            ))}
                        </div>
                    </div>

                    <div className="rounded bg-white/95 p-6 text-slate-800 shadow-xl">
                        <p className="text-primary-red text-xs font-semibold tracking-[0.3em] uppercase">
                            {copy.hero.form.badge}
                        </p>
                        <h3 className="font-heading mt-3 text-2xl text-slate-900">
                            {copy.hero.form.title}
                        </h3>
                        <form
                            onSubmit={handleSubmit}
                            className="mt-5 space-y-4 text-sm"
                        >
                            <input
                                type="text"
                                name="name"
                                required
                                value={formData.name}
                                onChange={handleChange}
                                className="w-full rounded border border-slate-200 px-4 py-2"
                                placeholder={copy.hero.form.placeholders.name}
                            />
                            <select
                                name="serviceNeeded"
                                value={formData.serviceNeeded}
                                onChange={handleChange}
                                className="w-full rounded border border-slate-200 px-4 py-2 text-slate-500"
                            >
                                <option value="">
                                    {copy.hero.form.placeholders.service}
                                </option>
                                {copy.hero.form.serviceOptions.map((option) => (
                                    <option key={option}>{option}</option>
                                ))}
                            </select>
                            <input
                                type="text"
                                name="productCategory"
                                value={formData.productCategory}
                                onChange={handleChange}
                                className="w-full rounded border border-slate-200 px-4 py-2"
                                placeholder={
                                    copy.hero.form.placeholders.product
                                }
                            />
                            <select
                                name="targetMarket"
                                value={formData.targetMarket}
                                onChange={handleChange}
                                className="w-full rounded border border-slate-200 px-4 py-2 text-slate-500"
                            >
                                <option value="">
                                    {copy.hero.form.placeholders.targetMarket}
                                </option>
                                {copy.hero.form.targetMarkets.map((market) => (
                                    <option key={market}>{market}</option>
                                ))}
                            </select>
                            <input
                                type="text"
                                name="salesChannels"
                                value={formData.salesChannels}
                                onChange={handleChange}
                                className="w-full rounded border border-slate-200 px-4 py-2"
                                placeholder={
                                    copy.hero.form.placeholders.salesChannels
                                }
                            />
                            <input
                                type="text"
                                name="challenge"
                                value={formData.challenge}
                                onChange={handleChange}
                                className="w-full rounded border border-slate-200 px-4 py-2"
                                placeholder={
                                    copy.hero.form.placeholders.challenge
                                }
                            />
                            <input
                                type="text"
                                name="contact"
                                required
                                value={formData.contact}
                                onChange={handleChange}
                                className="w-full rounded border border-slate-200 px-4 py-2"
                                placeholder={
                                    copy.hero.form.placeholders.contact
                                }
                            />

                            {submitStatus.type && (
                                <div
                                    className={`rounded px-4 py-2 text-xs ${
                                        submitStatus.type === "success"
                                            ? "bg-green-50 text-green-700"
                                            : "bg-red-50 text-red-700"
                                    }`}
                                >
                                    {submitStatus.message}
                                </div>
                            )}

                            <button
                                type="submit"
                                disabled={isSubmitting}
                                className="bg-primary-main hover:bg-primary-navy/90 w-full rounded px-4 py-3 text-xs font-semibold tracking-[0.3em] text-white uppercase transition-colors disabled:cursor-not-allowed disabled:opacity-50"
                            >
                                {isSubmitting
                                    ? copy.hero.form.submit.sending
                                    : copy.hero.form.submit.idle}
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    )
}
