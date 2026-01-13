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

    const handleChange = (
        e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
    ) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault()
        // Handle form submission here
        console.log("Form submitted:", formData)
    }

    return (
        <section className="bg-white py-16">
            <div className="mx-auto max-w-6xl px-6">
                <div className="grid gap-12 lg:grid-cols-2 lg:items-start">
                    {/* Left Column: Direct Contact */}
                    <div>
                        <h2 className="font-heading text-3xl font-bold text-slate-900">
                            Ready to{" "}
                            <span className="text-(--brand-red)">Talk?</span>
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
                            <span className="text-(--brand-red)">
                                Contact Us
                            </span>{" "}
                            through Our Form?
                        </h2>
                        <p className="mt-4 text-sm leading-relaxed text-slate-600">
                            Feel free to tell us about your project or just say
                            hi! You can also contact us at{" "}
                            <a
                                href="mailto:hello@pixaventures.com"
                                className="hover:text-primary-redDark text-(--brand-red) underline"
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

                            <button
                                type="submit"
                                className="w-full rounded bg-slate-900 px-6 py-3 text-sm font-semibold tracking-[0.2em] text-white uppercase transition-colors hover:bg-slate-800"
                            >
                                Submit
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    )
}
