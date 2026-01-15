"use client"

import { useState } from "react"
import WeChatQRBox from "./WeChatQRBox"
import { useLanguage } from "@/components/LanguageProvider"

export default function ReadyToTalk() {
    const { language, translations } = useLanguage()
    const copy = translations[language]
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
                message: copy.readyToTalk.form.success
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
                        : copy.readyToTalk.form.error
            })
        } finally {
            setIsSubmitting(false)
        }
    }

    return (
        <section id="contact" className="bg-white py-16">
            <div className="mx-auto max-w-6xl px-6">
                <div className="grid gap-12 lg:grid-cols-2 lg:items-start">
					{/* Left Column: Direct Contact */}
					<div>
						<h2 className="font-heading text-3xl font-bold text-slate-900">
							{typeof copy.readyToTalk.leftTitle === "object" ? (
								<>
									{copy.readyToTalk.leftTitle.part1}
									<span className="text-primary-red">{copy.readyToTalk.leftTitle.highlight1}</span>
								</>
							) : (
								copy.readyToTalk.leftTitle
							)}
						</h2>
						<p className="mt-4 text-sm leading-relaxed text-slate-600">
							{copy.readyToTalk.leftCopy}
						</p>

						{/* QR Code Box */}
						<WeChatQRBox />
					</div>

					{/* Right Column: Contact Form */}
					<div>
						<h2 className="font-heading text-3xl font-bold text-slate-900">
							{typeof copy.readyToTalk.rightTitle === "object" ? (
								<>
									{copy.readyToTalk.rightTitle.part1}
									<span className="text-primary-red">{copy.readyToTalk.rightTitle.highlight1}</span>
									{copy.readyToTalk.rightTitle.part2}
								</>
							) : (
								copy.readyToTalk.rightTitle
							)}
						</h2>
                        <p className="mt-4 text-sm leading-relaxed text-slate-600">
                            {copy.readyToTalk.rightCopy}{" "}
                            <a
                                href="mailto:hello@pixaventures.com"
                                className="text-primary-red hover:text-primary-redDark underline"
                            >
                                hello@pixaventures.com
                            </a>
                            {language === "zh" ? "。" : "."}
                        </p>

                        <form onSubmit={handleSubmit} className="mt-8 space-y-5">
                            <div>
                                <label
                                    htmlFor="name"
                                    className="mb-2 block text-sm font-medium text-slate-900"
                                >
                                    {copy.readyToTalk.form.name}{" "}
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
                                    {copy.readyToTalk.form.email}{" "}
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
                                    {copy.readyToTalk.form.wechat}
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
                                    {copy.readyToTalk.form.message}{" "}
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
                                className="w-full cursor-pointer rounded bg-slate-900 px-6 py-3 text-sm font-semibold tracking-[0.2em] text-white uppercase transition-colors hover:bg-slate-800 disabled:cursor-not-allowed disabled:opacity-50"
                            >
                                {isSubmitting
                                    ? copy.readyToTalk.form.sending
                                    : copy.readyToTalk.form.submit}
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    )
}
