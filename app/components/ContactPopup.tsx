"use client"

import { useState, useEffect, useMemo, useCallback } from "react"
import Image from "next/image"
import WeChatQRBox from "./WeChatQRBox"
import { useLanguage } from "@/components/LanguageProvider"

interface ContactPopupProps {
    phoneNumber?: string
}

export default function ContactPopup({
    phoneNumber = "+8613162908096"
}: ContactPopupProps) {
    const { language } = useLanguage()
    const [mounted, setMounted] = useState(false)
    const [isOpen, setIsOpen] = useState(false) // For mobile chatbot
    const [showContactPopup, setShowContactPopup] = useState(false) // For desktop contact popup
    const [showWeChatPopup, setShowWeChatPopup] = useState(false)
    const [showFreeReportForm, setShowFreeReportForm] = useState(false)
    const [formData, setFormData] = useState({
        phone: "",
        message: ""
    })
    const [freeReportData, setFreeReportData] = useState({
        website: ""
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

    const handleChange = useCallback(
        (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
            const { name, value } = e.target
            setFormData((prev) => ({
                ...prev,
                [name]: value
            }))
            setSubmitStatus((prev) => {
                if (prev.type) {
                    return { type: null, message: "" }
                }
                return prev
            })
        },
        []
    )

    const handleSubmit = useCallback(async (e: React.FormEvent) => {
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
    }, [formData, language])

    const handlePhoneClick = useCallback(() => {
        window.location.href = `tel:${phoneNumber}`
    }, [phoneNumber])

    const handleWeChatClick = useCallback(() => {
        setShowWeChatPopup(true)
    }, [])

    const handleEmailClick = useCallback(() => {
        setShowContactPopup(true)
    }, [])

    const handleFreeReportClick = useCallback(() => {
        setShowFreeReportForm(true)
    }, [])

    const handleFreeReportChange = useCallback(
        (e: React.ChangeEvent<HTMLInputElement>) => {
            setFreeReportData({ website: e.target.value })
        },
        []
    )

    const handleFreeReportSubmit = useCallback(
        async (e: React.FormEvent) => {
            e.preventDefault()
            setIsSubmitting(true)
            setSubmitStatus({ type: null, message: "" })

            try {
                const normalizedWebsite = freeReportData.website.trim().startsWith("http")
                    ? freeReportData.website.trim()
                    : `https://${freeReportData.website.trim()}`

                const response = await fetch("/api/send-email", {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json"
                    },
                    body: JSON.stringify({
                        name: "Free Report Request",
                        email: "not provided",
                        message: `Free Report Request\nWebsite: ${normalizedWebsite}`,
                        validateEmail: false
                    })
                })

                const data = await response.json()

                if (!response.ok) {
                    throw new Error(data.error || "Failed to submit request")
                }

                setSubmitStatus({
                    type: "success",
                    message:
                        language === "zh"
                            ? "请求已提交！我们会尽快与您联系。"
                            : "Request submitted! We'll contact you soon."
                })

                setFreeReportData({ website: "" })
                setShowFreeReportForm(false)
            } catch (error) {
                setSubmitStatus({
                    type: "error",
                    message:
                        error instanceof Error
                            ? error.message
                            : language === "zh"
                                ? "提交失败，请稍后再试。"
                                : "Failed to submit. Please try again."
                })
            } finally {
                setIsSubmitting(false)
            }
        },
        [freeReportData, language]
    )

    // Mobile drawer view - memoized to prevent recreation on each render
    const mobileDrawer = useMemo(
        () =>
            !mounted ? null : (
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
            ),
        [mounted, language, handlePhoneClick, handleWeChatClick, setIsOpen]
    )

    // Desktop vertical sidebar - memoized to prevent recreation on each render
    const desktopSidebar = useMemo(() => {
        if (!mounted) return null
        return (
            <div className="fixed right-4 top-1/2 z-50 hidden -translate-y-1/2 md:block">
                {/* White box with 3 icons */}
                <div className="mb-3 flex flex-col items-center gap-2 rounded-l-lg bg-white p-2 shadow-lg">
                    {/* Free Report Button */}
                    <button
                        onClick={handleFreeReportClick}
                        className="flex flex-col items-center gap-1 rounded p-2 transition-colors hover:bg-gray-50"
                        aria-label="Free Report"
                    >
                        <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gray-100">
                            <svg
                                className="h-5 w-5 text-gray-700"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                                />
                            </svg>
                        </div>
                        <span className="text-[10px] font-medium text-gray-700">
                            {language === "zh" ? "立即体验" : "Free Report"}
                        </span>
                    </button>

                    {/* Email/Contact Button */}
                    <button
                        onClick={handleEmailClick}
                        className="flex flex-col items-center gap-1 rounded p-2 transition-colors hover:bg-gray-50"
                        aria-label="Contact"
                    >
                        <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gray-100">
                            <svg
                                className="h-5 w-5 text-gray-700"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                                />
                            </svg>
                        </div>
                        <span className="text-[10px] font-medium text-gray-700">
                            {language === "zh" ? "购买咨询" : "Contact"}
                        </span>
                    </button>

                    {/* Phone Button */}
                    <button
                        onClick={handlePhoneClick}
                        className="flex flex-col items-center gap-1 rounded p-2 transition-colors hover:bg-gray-50"
                        aria-label="Call"
                    >
                        <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gray-100">
                            <svg
                                className="h-5 w-5 text-gray-700"
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
                        </div>
                        <span className="text-[10px] font-medium text-gray-700">
                            {language === "zh" ? "销售热线" : "Call"}
                        </span>
                    </button>
                </div>

                {/* Profile Image Section - Outside the white box */}
                <div className="flex flex-col items-center gap-1.5">
                    <button
                        onClick={handleWeChatClick}
                        className="relative h-12 w-12 overflow-hidden rounded-full transition-transform hover:scale-105"
                        aria-label="WeChat QR"
                    >
                        <Image
                            src="/images/about/contact.jpeg"
                            alt={language === "zh" ? "专属顾问" : "Exclusive Consultant"}
                            fill
                            className="object-cover"
                        />
                    </button>
                    <span className="rounded bg-gray-100 px-2 py-0.5 text-[10px] font-medium text-gray-700">
                        {language === "zh" ? "专属顾问" : "Consultant"}
                    </span>
                </div>
            </div>
        )
    }, [
        mounted,
        language,
        handleFreeReportClick,
        handleEmailClick,
        handlePhoneClick,
        handleWeChatClick
    ])

    // Desktop contact popup (triggered from email button)
    const desktopContactPopup = useMemo(() => {
        if (!mounted || !showContactPopup) return null
        return (
            <div className="fixed bottom-6 right-6 z-50 hidden w-96 overflow-hidden rounded-lg border border-gray-200 bg-white shadow-2xl md:block">
                {/* Header */}
                <div className="relative flex items-center justify-between bg-primary-navy px-4 py-3">
                    <h3 className="font-semibold text-white">
                        {language === "zh" ? "联系我们" : "Contact Us"}
                    </h3>
                    <button
                        onClick={() => setShowContactPopup(false)}
                        className="rounded p-1.5 text-white transition-colors hover:bg-white/20"
                        aria-label="Close"
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
                                className={`rounded px-3 py-2 text-sm ${submitStatus.type === "success"
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
    }, [
        mounted,
        showContactPopup,
        language,
        formData,
        submitStatus,
        isSubmitting,
        handleChange,
        handleSubmit,
        setShowContactPopup
    ])

    // Free Report Form Modal
    const freeReportForm = useMemo(() => {
        if (!mounted || !showFreeReportForm) return null
        return (
            <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4">
                <div className="relative w-full max-w-md rounded-lg bg-white p-6 shadow-xl">
                    <button
                        onClick={() => setShowFreeReportForm(false)}
                        className="absolute right-4 top-4 rounded p-1.5 text-gray-400 transition-colors hover:bg-gray-100 hover:text-gray-600"
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
                    <h3 className="mb-4 text-xl font-semibold text-gray-900">
                        {language === "zh" ? "免费报告" : "Free Report"}
                    </h3>
                    <p className="mb-4 text-sm text-gray-600">
                        {language === "zh"
                            ? "请提交您的网站，我们将为您生成免费的SEO报告。"
                            : "Submit your website and we'll generate a free SEO report for you."}
                    </p>
                    <form onSubmit={handleFreeReportSubmit} className="space-y-4">
                        <div>
                            <label
                                htmlFor="free-report-website"
                                className="mb-1 block text-sm font-medium text-gray-700"
                            >
                                {language === "zh" ? "网站地址" : "Website URL"}{" "}
                                <span className="text-red-500">*</span>
                            </label>
                            <input
                                type="text"
                                id="free-report-website"
                                name="website"
                                required
                                value={freeReportData.website}
                                onChange={handleFreeReportChange}
                                placeholder={
                                    language === "zh"
                                        ? "例如: example.com"
                                        : "e.g., example.com"
                                }
                                className="w-full rounded border border-gray-300 px-3 py-2 text-sm focus:border-primary-red focus:outline-none focus:ring-1 focus:ring-primary-red"
                            />
                        </div>

                        {submitStatus.type && (
                            <div
                                className={`rounded px-3 py-2 text-sm ${submitStatus.type === "success"
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
                                    ? "提交中..."
                                    : "Submitting..."
                                : language === "zh"
                                    ? "提交"
                                    : "Submit"}
                        </button>
                    </form>
                </div>
            </div>
        )
    }, [
        mounted,
        showFreeReportForm,
        language,
        freeReportData,
        submitStatus,
        isSubmitting,
        handleFreeReportChange,
        handleFreeReportSubmit,
        setShowFreeReportForm
    ])

    // Mobile full-screen chatbot view - memoized to prevent recreation on each render
    const mobileChatbot = useMemo(
        () =>
            !mounted || !isOpen ? null : (
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
                                        className="w-full rounded border border-gray-300 px-3 py-2 text-base focus:border-primary-red focus:outline-none focus:ring-1 focus:ring-primary-red"
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
                                        className="w-full resize-y rounded border border-gray-300 px-3 py-2 text-base focus:border-primary-red focus:outline-none focus:ring-1 focus:ring-primary-red"
                                    />
                                </div>

                                {submitStatus.type && (
                                    <div
                                        className={`rounded px-3 py-2 text-sm ${submitStatus.type === "success"
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
            ),
        [
            mounted,
            isOpen,
            language,
            formData,
            submitStatus,
            isSubmitting,
            handleChange,
            handleSubmit,
            setIsOpen
        ]
    )

    // Don't render anything until mounted to prevent hydration mismatch
    if (!mounted) {
        return null
    }

    return (
        <>
            {/* Desktop Vertical Sidebar */}
            {desktopSidebar}

            {/* Desktop Contact Popup (triggered from email button) */}
            {desktopContactPopup}

            {/* Free Report Form Modal */}
            {freeReportForm}

            {/* Mobile Drawer */}
            {mobileDrawer}

            {/* Mobile Full-screen Chatbot */}
            {mobileChatbot}

            {/* WeChat Popup */}
            {showWeChatPopup && (
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
