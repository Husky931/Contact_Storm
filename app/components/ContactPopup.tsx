"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import WeChatQRBox from "./WeChatQRBox"
import { useLanguage } from "@/components/LanguageProvider"

interface ContactPopupProps {
    phoneNumber?: string
}

export default function ContactPopup({
    phoneNumber = "+8613162908096"
}: ContactPopupProps) {
    const { language, translations } = useLanguage()
    const copy = translations[language]
    const [mounted, setMounted] = useState(false)
    const [isOpen, setIsOpen] = useState(false)
    const [showWeChatPopup, setShowWeChatPopup] = useState(false)
    const [formData, setFormData] = useState({
        phone: "",
        message: ""
    })
    const [isSubmitting, setIsSubmitting] = useState(false)
    const [submitStatus, setSubmitStatus] = useState<{
        type: "success" | "error" | null
        message: string
    }>({ type: null, message: "" })

    // Set mounted state and initialize desktop popup as open
    useEffect(() => {
        setMounted(true)
        // Check if we're on desktop and set initial state
        if (typeof window !== "undefined" && window.innerWidth >= 768) {
            setIsOpen(true)
        }
    }, [])

    // Prevent body scroll when popup is open on mobile
    useEffect(() => {
        if (typeof window === "undefined") return
        if (isOpen && window.innerWidth < 768) {
            document.body.style.overflow = "hidden"
        } else {
            document.body.style.overflow = "unset"
        }
        return () => {
            document.body.style.overflow = "unset"
        }
    }, [isOpen])

    const handleChange = (
        e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
    ) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        })
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
                body: JSON.stringify({
                    name: "Website Visitor",
                    email: formData.phone || "not provided",
                    message: formData.message,
                    validateEmail: false
                })
            })

            const data = await response.json()

            if (!response.ok) {
                throw new Error(data.error || "Failed to send message")
            }

            setSubmitStatus({
                type: "success",
                message:
                    language === "zh"
                        ? "消息已发送！我们会尽快与您联系。"
                        : "Message sent! We'll contact you soon."
            })

            setFormData({ phone: "", message: "" })
        } catch (error) {
            setSubmitStatus({
                type: "error",
                message:
                    error instanceof Error
                        ? error.message
                        : language === "zh"
                          ? "发送失败，请稍后再试。"
                          : "Failed to send. Please try again."
            })
        } finally {
            setIsSubmitting(false)
        }
    }

    const handlePhoneClick = () => {
        window.location.href = `tel:${phoneNumber}`
    }

    const handleWeChatClick = () => {
        setShowWeChatPopup(true)
    }

    // Mobile drawer view
    const MobileDrawer = () => (
        <div className="fixed bottom-0 left-0 right-0 z-50 md:hidden">
            <div className="flex items-center justify-around border-t border-gray-200 bg-white px-4 py-3 shadow-lg">
                {/* Message Icon */}
                <button
                    onClick={() => setIsOpen(true)}
                    className="flex flex-col items-center gap-1 text-gray-600 transition-colors hover:text-primary-red"
                    aria-label="Send Message"
                >
                    <svg
                        className="h-6 w-6"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
                        />
                    </svg>
                    <span className="text-xs">
                        {language === "zh" ? "留言" : "Message"}
                    </span>
                </button>

                {/* Phone Icon */}
                <button
                    onClick={handlePhoneClick}
                    className="flex flex-col items-center gap-1 text-gray-600 transition-colors hover:text-primary-red"
                    aria-label="Call"
                >
                    <svg
                        className="h-6 w-6"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                        />
                    </svg>
                    <span className="text-xs">
                        {language === "zh" ? "电话" : "Call"}
                    </span>
                </button>

                {/* WeChat Icon */}
                <button
                    onClick={handleWeChatClick}
                    className="flex flex-col items-center gap-1 text-gray-600 transition-colors hover:text-primary-red"
                    aria-label="WeChat"
                >
                    <Image
                        src="/icons/wechat.svg"
                        alt="WeChat"
                        width={24}
                        height={24}
                        className="h-6 w-6"
                    />
                    <span className="text-xs">
                        {language === "zh" ? "微信" : "WeChat"}
                    </span>
                </button>
            </div>
        </div>
    )

    // Desktop chatbot popup view
    const DesktopChatbot = () => {
        if (!isOpen) {
            return (
                <button
                    onClick={() => setIsOpen(true)}
                    className="fixed bottom-6 right-6 z-50 hidden h-14 w-14 items-center justify-center rounded-full bg-primary-navy shadow-lg transition-all hover:scale-110 hover:shadow-xl md:flex"
                    aria-label="Open Chat"
                >
                    <svg
                        className="h-7 w-7 text-white"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
                        />
                    </svg>
                </button>
            )
        }

        return (
            <div className="fixed bottom-6 right-6 z-50 hidden w-96 overflow-hidden rounded-lg border border-gray-200 bg-white shadow-2xl md:block">
                {/* Header */}
                <div className="flex items-center justify-between bg-primary-navy px-4 py-3">
                    <div className="flex items-center gap-3">
                        {/* Minimize Icon (X) on left */}
                        <button
                            onClick={() => setIsOpen(false)}
                            className="rounded p-1.5 text-white transition-colors hover:bg-white/20"
                            aria-label="Minimize"
                        >
                            <svg
                                className="h-5 w-5"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M6 18L18 6M6 6l12 12"
                                />
                            </svg>
                        </button>
                    </div>
                    <div className="flex items-center gap-3">
                        {/* Call Icon - Bigger */}
                        <button
                            onClick={handlePhoneClick}
                            className="rounded p-2 text-white transition-colors hover:bg-white/20"
                            aria-label="Call"
                        >
                            <svg
                                className="h-7 w-7"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                                />
                            </svg>
                        </button>

                        {/* WeChat Icon - Bigger */}
                        <button
                            onClick={handleWeChatClick}
                            className="rounded p-2 text-white transition-colors hover:bg-white/20"
                            aria-label="WeChat"
                        >
                            <Image
                                src="/icons/wechat.svg"
                                alt="WeChat"
                                width={28}
                                height={28}
                                className="h-7 w-7"
                            />
                        </button>
                    </div>
                </div>

                {/* Form Content */}
                <div className="p-6">
                    <h4 className="mb-2 text-center text-lg font-semibold text-gray-900">
                        {language === "zh" ? "填写留言" : "Leave a Message"}
                    </h4>
                    <p className="mb-4 text-center text-sm text-gray-600">
                        {language === "zh"
                            ? "为了节省您的时间，请留下您的联系方式和遇到的问题，我们将尽快和您联系。"
                            : "To save your time, please leave your contact information and the problems you encountered, and we will contact you as soon as possible."}
                    </p>

                    <form onSubmit={handleSubmit} className="space-y-4">
                        <div>
                            <label
                                htmlFor="popup-phone"
                                className="mb-1 block text-sm font-medium text-gray-700"
                            >
                                {language === "zh" ? "手机" : "Phone"}{" "}
                                <span className="text-red-500">*</span>
                            </label>
                            <input
                                type="text"
                                id="popup-phone"
                                name="phone"
                                required
                                value={formData.phone}
                                onChange={handleChange}
                                placeholder={
                                    language === "zh" ? "请填写" : "Please fill in"
                                }
                                className="w-full rounded border border-gray-300 px-3 py-2 text-sm focus:border-primary-red focus:outline-none focus:ring-1 focus:ring-primary-red"
                            />
                        </div>

                        <div>
                            <label
                                htmlFor="popup-message"
                                className="mb-1 block text-sm font-medium text-gray-700"
                            >
                                {language === "zh" ? "留言" : "Message"}{" "}
                                <span className="text-red-500">*</span>
                            </label>
                            <textarea
                                id="popup-message"
                                name="message"
                                required
                                rows={4}
                                value={formData.message}
                                onChange={handleChange}
                                placeholder={
                                    language === "zh" ? "请填写" : "Please fill in"
                                }
                                className="w-full resize-y rounded border border-gray-300 px-3 py-2 text-sm focus:border-primary-red focus:outline-none focus:ring-1 focus:ring-primary-red"
                            />
                        </div>

                        {submitStatus.type && (
                            <div
                                className={`rounded px-3 py-2 text-sm ${
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
                            className="w-full rounded bg-primary-navy px-4 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-primary-slate disabled:cursor-not-allowed disabled:opacity-50"
                        >
                            {isSubmitting
                                ? language === "zh"
                                  ? "发送中..."
                                  : "Sending..."
                                : language === "zh"
                                  ? "发送"
                                  : "Send"}
                        </button>
                    </form>

                    <p className="mt-4 text-center text-xs text-gray-500">
                        {language === "zh"
                            ? "七鱼提供服务支持"
                            : "Service support provided"}
                    </p>
                </div>
            </div>
        )
    }

    // Mobile full-screen chatbot view
    const MobileChatbot = () => {
        if (!isOpen) return null

        return (
            <div className="fixed inset-0 z-50 bg-black/50 md:hidden">
                <div className="flex h-full flex-col bg-white">
                    {/* Header */}
                    <div className="flex items-center justify-between border-b border-gray-200 bg-primary-navy px-4 py-3">
                        <h3 className="font-semibold text-white">
                            {language === "zh" ? "联系我们" : "Contact Us"}
                        </h3>
                        <button
                            onClick={() => setIsOpen(false)}
                            className="rounded p-1.5 text-white transition-colors hover:bg-white/20"
                            aria-label="Close"
                        >
                            <svg
                                className="h-6 w-6"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M6 18L18 6M6 6l12 12"
                                />
                            </svg>
                        </button>
                    </div>

                    {/* Form Content */}
                    <div className="flex-1 overflow-y-auto p-6">
                        <h4 className="mb-2 text-center text-lg font-semibold text-gray-900">
                            {language === "zh" ? "填写留言" : "Leave a Message"}
                        </h4>
                        <p className="mb-4 text-center text-sm text-gray-600">
                            {language === "zh"
                                ? "为了节省您的时间，请留下您的联系方式和遇到的问题，我们将尽快和您联系。"
                                : "To save your time, please leave your contact information and the problems you encountered, and we will contact you as soon as possible."}
                        </p>

                        <form onSubmit={handleSubmit} className="space-y-4">
                            <div>
                                <label
                                    htmlFor="mobile-popup-phone"
                                    className="mb-1 block text-sm font-medium text-gray-700"
                                >
                                    {language === "zh" ? "手机" : "Phone"}{" "}
                                    <span className="text-red-500">*</span>
                                </label>
                                <input
                                    type="text"
                                    id="mobile-popup-phone"
                                    name="phone"
                                    required
                                    value={formData.phone}
                                    onChange={handleChange}
                                    placeholder={
                                        language === "zh" ? "请填写" : "Please fill in"
                                    }
                                    className="w-full rounded border border-gray-300 px-3 py-2 text-sm focus:border-primary-red focus:outline-none focus:ring-1 focus:ring-primary-red"
                                />
                            </div>

                            <div>
                                <label
                                    htmlFor="mobile-popup-message"
                                    className="mb-1 block text-sm font-medium text-gray-700"
                                >
                                    {language === "zh" ? "留言" : "Message"}{" "}
                                    <span className="text-red-500">*</span>
                                </label>
                                <textarea
                                    id="mobile-popup-message"
                                    name="message"
                                    required
                                    rows={6}
                                    value={formData.message}
                                    onChange={handleChange}
                                    placeholder={
                                        language === "zh" ? "请填写" : "Please fill in"
                                    }
                                    className="w-full resize-y rounded border border-gray-300 px-3 py-2 text-sm focus:border-primary-red focus:outline-none focus:ring-1 focus:ring-primary-red"
                                />
                            </div>

                            {submitStatus.type && (
                                <div
                                    className={`rounded px-3 py-2 text-sm ${
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
                                className="w-full rounded bg-primary-navy px-4 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-primary-slate disabled:cursor-not-allowed disabled:opacity-50"
                            >
                                {isSubmitting
                                    ? language === "zh"
                                      ? "发送中..."
                                      : "Sending..."
                                    : language === "zh"
                                      ? "发送"
                                      : "Send"}
                            </button>
                        </form>

                        <p className="mt-4 text-center text-xs text-gray-500">
                            {language === "zh"
                                ? "七鱼提供服务支持"
                                : "Service support provided"}
                        </p>
                    </div>
                </div>
            </div>
        )
    }

    // Prevent hydration mismatch by not rendering until mounted
    if (!mounted) {
        return null
    }

    return (
        <>
            {/* Desktop Chatbot - only render after mount to prevent hydration issues */}
            {mounted && <DesktopChatbot />}

            {/* Mobile Drawer */}
            {mounted && <MobileDrawer />}

            {/* Mobile Full-screen Chatbot */}
            {mounted && <MobileChatbot />}

            {/* WeChat Popup */}
            {mounted && showWeChatPopup && (
                <div
                    className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4"
                    onClick={() => setShowWeChatPopup(false)}
                >
                    <div
                        className="relative w-full max-w-md rounded-lg bg-white p-6 shadow-xl"
                        onClick={(e) => e.stopPropagation()}
                    >
                        <button
                            onClick={() => setShowWeChatPopup(false)}
                            className="absolute top-4 right-4 cursor-pointer text-gray-400 transition-colors hover:text-gray-600"
                            aria-label="Close"
                        >
                            <svg
                                className="h-6 w-6"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M6 18L18 6M6 6l12 12"
                                />
                            </svg>
                        </button>
                        <WeChatQRBox />
                    </div>
                </div>
            )}
        </>
    )
}
