"use client"

import { useState } from "react"
import Image from "next/image"
import { useLanguage } from "@/components/LanguageProvider"
import WeChatQRPopup from "./WeChatQRPopup"
import ModalPopup from "./ModalPopup"

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
        <section className="relative overflow-hidden bg-background-dark-lighter text-text-dark">
            <Image
                src="/images/industry-1.jpg"
                alt={copy.hero.imageAlt}
                fill
                className="object-cover"
                priority
            />
            <div className="absolute inset-0 bg-linear-to-r from-background-dark-deep/90 via-background-dark-lighter/75 to-background-dark-lighter/30" />
            <div className="relative mx-auto max-w-6xl px-6 py-20 lg:py-28">
                <div className="grid gap-12 lg:grid-cols-[1.3fr_0.9fr] lg:items-center">
                    <div>
                        <p className="text-sm tracking-[0.5em] text-text-dark/70 uppercase">
                            {copy.hero.tag}
                        </p>
                        <h1 className="font-heading mt-5 text-4xl leading-tight font-semibold text-text-dark md:text-5xl">
                            {copy.hero.title}
                        </h1>

                        <p className="mt-5 max-w-xl text-base text-text-dark/80 md:text-lg">
                            {copy.hero.description}
                        </p>

                        <p className="mt-4 max-w-xl text-sm text-text-dark/70">
                            {copy.hero.subtext}
                        </p>
                        <div className="mt-8 flex flex-wrap items-center gap-4">
                            <ModalPopup
                                trigger={
                                    <a
                                        href="#services"
                                        className="bg-primary-main hover:bg-primary-navy/90 rounded px-6 py-3 text-sm font-semibold tracking-[0.2em] text-text-dark uppercase transition-colors"
                                    >
                                        {copy.hero.ctas.primary}
                                    </a>
                                }
                            >
                                <div className="bg-linear-to-r from-background-dark-deep via-background-dark-lighter to-primary-slate px-6 py-5 text-text-dark sm:px-8">
                                    <p className="text-xs font-semibold tracking-[0.4em] text-text-dark/70 uppercase">
                                        {copy.hero.servicesPopup.kicker}
                                    </p>
                                    <h3 className="font-heading mt-2 text-2xl">
                                        {copy.hero.servicesPopup.title}
                                    </h3>
                                    <p className="mt-2 text-sm text-text-dark/75">
                                        {copy.hero.servicesPopup.subtitle}
                                    </p>
                                </div>
                                <div className="grid gap-6 px-6 py-6 text-sm text-primary-slate sm:grid-cols-2 sm:px-8 sm:py-8">
                                    <div className="rounded-xl border border-background-grey2 bg-background-grey1/80 p-4 shadow-sm">
                                        <p className="text-primary-red text-xs font-semibold tracking-[0.3em] uppercase">
                                            {copy.hero.servicesPopup.servicesTitle}
                                        </p>
                                        <ul className="mt-4 space-y-2">
                                            {copy.hero.servicesPopup.services.map(
                                                (service) => (
                                                    <li
                                                        key={service}
                                                        className="flex items-start gap-2 text-primary-slate"
                                                    >
                                                        <span className="bg-primary-red mt-1 h-2 w-2 rounded-full" />
                                                        <span>{service}</span>
                                                    </li>
                                                )
                                            )}
                                        </ul>
                                    </div>
                                    <div className="rounded-xl border border-background-grey2 bg-background-white p-4 shadow-sm">
                                        <p className="text-primary-red text-xs font-semibold tracking-[0.3em] uppercase">
                                            {copy.hero.servicesPopup.clientsTitle}
                                        </p>
                                        <div className="mt-4 flex flex-wrap gap-2">
                                            {copy.hero.servicesPopup.clients.map(
                                                (client) => (
                                                    <span
                                                        key={client}
                                                        className="rounded-full border border-background-grey2 bg-background-grey1 px-3 py-1 text-xs font-semibold text-primary-slate"
                                                    >
                                                        {client}
                                                    </span>
                                                )
                                            )}
                                        </div>
                                    </div>
                                </div>
                            </ModalPopup>
                            <WeChatQRPopup
                                message={copy.wechat.heroMessage}
                                trigger={
                                    <a
                                        href="#contact"
                                        className="inline-flex items-center gap-3 rounded border border-text-dark/60 px-6 py-3 text-sm font-semibold tracking-[0.2em] text-text-dark uppercase transition-colors hover:bg-text-dark/10"
                                    >
                                        {copy.hero.ctas.secondary}
                                        <svg
                                            viewBox="0 0 24 24"
                                            className="h-5 w-5 fill-text-dark"
                                            xmlns="http://www.w3.org/2000/svg"
                                            aria-hidden="true"
                                        >
                                            <path d="M8.691 2.188C3.891 2.188 0 5.476 0 9.53c0 2.212 1.17 4.203 3.002 5.55a.59.59 0 0 1 .213.665l-.39 1.48c-.019.07-.048.141-.048.213 0 .163.13.295.29.295a.326.326 0 0 0 .167-.054l1.903-1.114a.864.864 0 0 1 .717-.098 10.16 10.16 0 0 0 2.837.403c.276 0 .543-.027.811-.05-.857-2.578.157-4.972 1.932-6.446 1.703-1.415 3.882-1.98 5.853-1.838-.576-3.583-4.196-6.348-8.597-6.348zM5.785 5.991c.642 0 1.162.529 1.162 1.18a1.17 1.17 0 0 1-1.162 1.178A1.17 1.17 0 0 1 4.623 7.17c0-.651.52-1.18 1.162-1.18zm5.813 0c.642 0 1.162.529 1.162 1.18a1.17 1.17 0 0 1-1.162 1.178 1.17 1.17 0 0 1-1.162-1.178c0-.651.52-1.18 1.162-1.18zm5.34 2.867c-2.455 0-4.515 1.893-4.84 4.396-.002.012-.002.024-.002.036 0 .012 0 .024.002.036.325 2.503 2.385 4.396 4.84 4.396a4.888 4.888 0 0 0 2.613-.74.59.59 0 0 1 .636-.022l1.658.969a.295.295 0 0 0 .29-.001.295.295 0 0 0 .14-.245.295.295 0 0 0-.048-.159l-.39-1.478a.59.59 0 0 1 .226-.665c1.704-1.28 2.78-3.18 2.78-5.31 0-2.503-2.01-4.533-4.487-4.533zm-2.613 4.533a1.17 1.17 0 0 1-1.162-1.178c0-.651.52-1.18 1.162-1.18.642 0 1.162.529 1.162 1.18a1.17 1.17 0 0 1-1.162 1.178zm2.613 0a1.17 1.17 0 0 1-1.162-1.178c0-.651.52-1.18 1.162-1.18.642 0 1.162.529 1.162 1.18a1.17 1.17 0 0 1-1.162 1.178z" />
                                        </svg>
                                    </a>
                                }
                            />
                        </div>
                        <div className="mt-10 flex flex-wrap items-center gap-6 text-xs font-semibold tracking-[0.4em] text-text-dark/70 uppercase">
                            {copy.hero.highlights.map((highlight) => (
                                <span key={highlight}>{highlight}</span>
                            ))}
                        </div>
                    </div>

                    <div className="rounded bg-background-white/95 p-6 text-primary-main shadow-xl">
                        <p className="text-primary-red text-xs font-semibold tracking-[0.3em] uppercase">
                            {copy.hero.form.badge}
                        </p>
                        <h3 className="font-heading mt-3 text-2xl text-primary-main">
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
                                className="w-full rounded border border-gray-300 px-4 py-2 focus:border-primary-red focus:outline-none focus:ring-1 focus:ring-primary-red"
                                placeholder={copy.hero.form.placeholders.name}
                            />
                            <select
                                name="serviceNeeded"
                                value={formData.serviceNeeded}
                                onChange={handleChange}
                                className="w-full rounded border border-gray-300 px-4 py-2 text-primary-slate focus:border-primary-red focus:outline-none focus:ring-1 focus:ring-primary-red"
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
                                className="w-full rounded border border-gray-300 px-4 py-2 focus:border-primary-red focus:outline-none focus:ring-1 focus:ring-primary-red"
                                placeholder={
                                    copy.hero.form.placeholders.product
                                }
                            />
                            <select
                                name="targetMarket"
                                value={formData.targetMarket}
                                onChange={handleChange}
                                className="w-full rounded border border-gray-300 px-4 py-2 text-primary-slate focus:border-primary-red focus:outline-none focus:ring-1 focus:ring-primary-red"
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
                                className="w-full rounded border border-gray-300 px-4 py-2 focus:border-primary-red focus:outline-none focus:ring-1 focus:ring-primary-red"
                                placeholder={
                                    copy.hero.form.placeholders.salesChannels
                                }
                            />
                            <input
                                type="text"
                                name="challenge"
                                value={formData.challenge}
                                onChange={handleChange}
                                className="w-full rounded border border-gray-300 px-4 py-2 focus:border-primary-red focus:outline-none focus:ring-1 focus:ring-primary-red"
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
                                className="w-full rounded border border-gray-300 px-4 py-2 focus:border-primary-red focus:outline-none focus:ring-1 focus:ring-primary-red"
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
                                className="bg-primary-main hover:bg-primary-navy/90 w-full rounded px-4 py-3 text-xs font-semibold tracking-[0.3em] text-text-dark uppercase transition-colors disabled:cursor-not-allowed disabled:opacity-50"
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
