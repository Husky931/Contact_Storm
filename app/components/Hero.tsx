"use client"

import { useState } from "react"
import Image from "next/image"

export default function Hero() {
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
                throw new Error("Name and contact information are required.")
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
                message:
                    "Thank you! Your project brief has been submitted successfully."
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
                        : "An error occurred. Please try again later."
            })
        } finally {
            setIsSubmitting(false)
        }
    }

    return (
        <section className="relative overflow-hidden bg-slate-900 text-white">
            <Image
                src="/images/industry-1.jpg"
                alt="Digital strategy team reviewing product roadmap"
                fill
                className="object-cover"
                priority
            />
            <div className="absolute inset-0 bg-linear-to-r from-slate-950/90 via-slate-900/75 to-slate-900/30" />
            <div className="relative mx-auto max-w-6xl px-6 py-20 lg:py-28">
                <div className="grid gap-12 lg:grid-cols-[1.3fr_0.9fr] lg:items-center">
                    <div>
                        <p className="text-sm tracking-[0.5em] text-white/70 uppercase">
                            Overseas Buyer Growth
                        </p>
                        <h1 className="font-heading mt-5 text-4xl leading-tight font-semibold text-white md:text-5xl">
                            We help Chinese manufacturers win overseas buyers.
                        </h1>

                        <p className="mt-5 max-w-xl text-base text-white/80 md:text-lg">
                            Reach customers in Europe, North America, Middle
                            Eastern and beyond. O
                        </p>

                        <p className="mt-4 max-w-xl text-sm text-white/70">
                            Bilingual, diverse team (Chinese, European,
                            American) with Western buyer insight for ads, Amazon
                            listings, and conversion-focused websites.
                        </p>
                        <p className="mt-3 text-sm text-white/60">
                            帮助中国制造商获取海外客户
                        </p>
                        <div className="mt-8 flex flex-wrap gap-4">
                            <a
                                href="#services"
                                className="bg-primary-main hover:bg-primary-navy/90 rounded px-6 py-3 text-sm font-semibold tracking-[0.2em] text-white uppercase transition-colors"
                            >
                                Explore Services
                            </a>
                            <a
                                href="#contact"
                                className="rounded border border-white/60 px-6 py-3 text-sm font-semibold tracking-[0.2em] text-white uppercase transition-colors hover:bg-white/10"
                            >
                                Book a Strategy Call
                            </a>
                        </div>
                        <div className="mt-10 flex flex-wrap items-center gap-6 text-xs font-semibold tracking-[0.4em] text-white/70 uppercase">
                            <span>Amazon PPC & Marketplace Growth</span>
                            <span>Shopify</span>
                            <span>Leads</span>
                            <span>
                                Paid social ads (Meta, Instagram, TikTok)
                            </span>
                            <span>SEO for export buyers</span>
                            <span>Conversion-first website redesign</span>
                        </div>
                    </div>

                    <div className="rounded bg-white/95 p-6 text-slate-800 shadow-xl">
                        <p className="text-primary-red text-xs font-semibold tracking-[0.3em] uppercase">
                            Project Brief
                        </p>
                        <h3 className="font-heading mt-3 text-2xl text-slate-900">
                            Tell us about your export goals
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
                                placeholder="Your Name *"
                            />
                            <select
                                name="serviceNeeded"
                                value={formData.serviceNeeded}
                                onChange={handleChange}
                                className="w-full rounded border border-slate-200 px-4 py-2 text-slate-500"
                            >
                                <option value="">
                                    What do you need help with?
                                </option>
                                <option>Amazon Ads & Optimization</option>
                                <option>
                                    Social Media Ads (Facebook, Instagram,
                                    TikTok)
                                </option>
                                <option>SEO & Organic Growth</option>
                                <option>Website Redesign</option>
                                <option>Social Media Management</option>
                                <option>Multiple Services</option>
                            </select>
                            <input
                                type="text"
                                name="productCategory"
                                value={formData.productCategory}
                                onChange={handleChange}
                                className="w-full rounded border border-slate-200 px-4 py-2"
                                placeholder="Product category / Industry"
                            />
                            <select
                                name="targetMarket"
                                value={formData.targetMarket}
                                onChange={handleChange}
                                className="w-full rounded border border-slate-200 px-4 py-2 text-slate-500"
                            >
                                <option value="">Target market</option>
                                <option>Europe</option>
                                <option>North America</option>
                                <option>Middle East</option>
                                <option>Multiple Regions</option>
                                <option>Other</option>
                            </select>
                            <input
                                type="text"
                                name="salesChannels"
                                value={formData.salesChannels}
                                onChange={handleChange}
                                className="w-full rounded border border-slate-200 px-4 py-2"
                                placeholder="Current sales channels"
                            />
                            <input
                                type="text"
                                name="challenge"
                                value={formData.challenge}
                                onChange={handleChange}
                                className="w-full rounded border border-slate-200 px-4 py-2"
                                placeholder="Main challenge (optional)"
                            />
                            <input
                                type="text"
                                name="contact"
                                required
                                value={formData.contact}
                                onChange={handleChange}
                                className="w-full rounded border border-slate-200 px-4 py-2"
                                placeholder="Email / WeChat ID / Phone Number *"
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
                                    ? "Submitting..."
                                    : "Submit Brief"}
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    )
}
