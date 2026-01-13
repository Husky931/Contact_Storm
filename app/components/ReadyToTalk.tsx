"use client"

import { useState } from "react"
import WeChatQRBox from "./WeChatQRBox"

export default function ReadyToTalk() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        wechatId: "",
        message: ""
    })
    const [isSubmitting, setIsSubmitting] = useState(false)
    const [submitStatus, setSubmitStatus] = useState<{
        type: "success" | "error" | null
        message: string
    }>({ type: null, message: "" })

    const handleChange = (
        e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
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
            const response = await fetch("/api/send-email", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(formData)
            })

            const data = await response.json()

            if (!response.ok) {
                // Show the actual error message from the server
                const errorMsg =
                    data.error ||
                    `Failed to send email (Status: ${response.status})`
                throw new Error(errorMsg)
            }

            // Success
            setSubmitStatus({
                type: "success",
                message: "Thank you! Your message has been sent successfully."
            })

            // Reset form
            setFormData({
                name: "",
                email: "",
                wechatId: "",
                message: ""
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
        <section className="bg-white py-16">
            <div className="mx-auto max-w-6xl px-6">
                <div className="grid gap-12 lg:grid-cols-2 lg:items-start">
                    {/* Left Column: Direct Contact */}
                    <div>
                        <h2 className="font-heading text-3xl font-bold text-slate-900">
                            Ready to{" "}
                            <span className="text-primary-red">Talk?</span>
                        </h2>
                        <p className="mt-4 text-sm leading-relaxed text-slate-600">
                            Scan the QR code and share your issue.
                        </p>

                        {/* QR Code Box */}
                        <WeChatQRBox />
                    </div>

                    {/* Right Column: Contact Form */}
                    <div>
                        <h2 className="font-heading text-3xl font-bold text-slate-900">
                            Or prefer to{" "}
                            <span className="text-primary-red">Contact Us</span>{" "}
                            through Our Form?
                        </h2>
                        <p className="mt-4 text-sm leading-relaxed text-slate-600">
                            Feel free to tell us about your project or just say
                            hi! You can also contact us at{" "}
                            <a
                                href="mailto:hello@pixaventures.com"
                                className="hover:text-primary-redDark text-primary-red underline"
                            >
                                hello@pixaventures.com
                            </a>
                            .
                        </p>

                        <form
                            onSubmit={handleSubmit}
                            className="mt-8 space-y-5"
                        >
                            <div>
                                <label
                                    htmlFor="name"
                                    className="mb-2 block text-sm font-medium text-slate-900"
                                >
                                    Your Name{" "}
                                    <span className="text-red-500">*</span>
                                </label>
                                <input
                                    type="text"
                                    id="name"
                                    name="name"
                                    required
                                    value={formData.name}
                                    onChange={handleChange}
                                    className="focus:border-primary-red focus:ring-primary-red w-full rounded border border-slate-200 bg-white px-4 py-2.5 text-sm text-slate-900 focus:ring-1 focus:outline-none"
                                />
                            </div>

                            <div>
                                <label
                                    htmlFor="email"
                                    className="mb-2 block text-sm font-medium text-slate-900"
                                >
                                    Email Address{" "}
                                    <span className="text-red-500">*</span>
                                </label>
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    required
                                    value={formData.email}
                                    onChange={handleChange}
                                    className="focus:border-primary-red focus:ring-primary-red w-full rounded border border-slate-200 bg-white px-4 py-2.5 text-sm text-slate-900 focus:ring-1 focus:outline-none"
                                />
                            </div>

                            <div>
                                <label
                                    htmlFor="wechatId"
                                    className="mb-2 block text-sm font-medium text-slate-900"
                                >
                                    WeChat ID
                                </label>
                                <input
                                    type="text"
                                    id="wechatId"
                                    name="wechatId"
                                    value={formData.wechatId}
                                    onChange={handleChange}
                                    className="focus:border-primary-red focus:ring-primary-red w-full rounded border border-slate-200 bg-white px-4 py-2.5 text-sm text-slate-900 focus:ring-1 focus:outline-none"
                                />
                            </div>

                            <div>
                                <label
                                    htmlFor="message"
                                    className="mb-2 block text-sm font-medium text-slate-900"
                                >
                                    Message{" "}
                                    <span className="text-red-500">*</span>
                                </label>
                                <textarea
                                    id="message"
                                    name="message"
                                    required
                                    rows={5}
                                    value={formData.message}
                                    onChange={handleChange}
                                    className="focus:border-primary-red focus:ring-primary-red w-full resize-y rounded border border-slate-200 bg-white px-4 py-2.5 text-sm text-slate-900 focus:ring-1 focus:outline-none"
                                />
                            </div>

                            {submitStatus.type && (
                                <div
                                    className={`rounded px-4 py-3 text-sm ${
                                        submitStatus.type === "success"
                                            ? "border border-green-200 bg-green-50 text-green-800"
                                            : "border border-red-200 bg-red-50 text-red-800"
                                    }`}
                                >
                                    {submitStatus.message}
                                </div>
                            )}

                            <button
                                type="submit"
                                disabled={isSubmitting}
                                className="w-full rounded bg-slate-900 px-6 py-3 text-sm font-semibold tracking-[0.2em] text-white uppercase transition-colors hover:bg-slate-800 disabled:cursor-not-allowed disabled:opacity-50"
                            >
                                {isSubmitting ? "Sending..." : "Submit"}
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    )
}
