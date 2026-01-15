"use client"

import { useEffect, useState } from "react"
import WeChatQRPopup from "./WeChatQRPopup"
import { useLanguage } from "@/components/LanguageProvider"

interface FloatingFixButtonProps {
    domain: string
}

export default function FloatingFixButton({ domain }: FloatingFixButtonProps) {
    const { language, translations } = useLanguage()
    const copy = translations[language]
    const [animationCycle, setAnimationCycle] = useState(0)

    useEffect(() => {
        const interval = setInterval(() => {
            setAnimationCycle((prev) => prev + 1)
        }, 3000) // Every 3 seconds

        return () => clearInterval(interval)
    }, [])

    const text = copy.wechat.floatingButton.text
    const letters = text.split("")
    const messageText = copy.wechat.floatingButton.message(domain)

    // Format message to make Gligor bold
    const formatMessage = (msg: string) => {
        const parts = msg.split("Gligor")
        if (parts.length === 1) {
            return <span>{msg}</span>
        }
        return (
            <span>
                {parts.map((part, index, array) => {
                    if (index === array.length - 1) return part
                    return (
                        <span key={index}>
                            {part}
                            <span className="font-bold">Gligor</span>
                        </span>
                    )
                })}
            </span>
        )
    }

    // Determine animation class based on cycle (increases intensity)
    const getAnimationClass = () => {
        const cycleIndex = animationCycle % 3
        switch (cycleIndex) {
            case 0:
                return "animate-slide-right"
            case 1:
                return "animate-slide-right-2"
            case 2:
                return "animate-slide-right-3"
            default:
                return "animate-slide-right"
        }
    }

    return (
        <div className="fixed top-1/4 right-6 z-40 cursor-pointer md:right-8">
            <WeChatQRPopup
                message={formatMessage(messageText)}
                trigger={
                    <button
                        className="bg-primary-red hover:bg-primary-red/90 flex items-center gap-3 rounded px-6 py-4 text-sm font-semibold text-white shadow-lg transition-all hover:shadow-xl focus:ring-0 focus:outline-none active:outline-none md:px-8 md:py-4 md:text-base"
                        aria-label="Let's fix this - Contact via WeChat"
                    >
                        <span className="flex">
                            {letters.map((letter, index) => (
                                <span
                                    key={`${letter}-${index}-${animationCycle}`}
                                    className={`inline-block ${getAnimationClass()}`}
                                    style={{
                                        animationDelay: `${index * 0.05}s`
                                    }}
                                >
                                    {letter === " " ? "\u00A0" : letter}
                                </span>
                            ))}
                        </span>
                        <svg
                            viewBox="0 0 24 24"
                            className="h-5 w-5 fill-white md:h-6 md:w-6"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path d="M8.691 2.188C3.891 2.188 0 5.476 0 9.53c0 2.212 1.17 4.203 3.002 5.55a.59.59 0 0 1 .213.665l-.39 1.48c-.019.07-.048.141-.048.213 0 .163.13.295.29.295a.326.326 0 0 0 .167-.054l1.903-1.114a.864.864 0 0 1 .717-.098 10.16 10.16 0 0 0 2.837.403c.276 0 .543-.027.811-.05-.857-2.578.157-4.972 1.932-6.446 1.703-1.415 3.882-1.98 5.853-1.838-.576-3.583-4.196-6.348-8.597-6.348zM5.785 5.991c.642 0 1.162.529 1.162 1.18a1.17 1.17 0 0 1-1.162 1.178A1.17 1.17 0 0 1 4.623 7.17c0-.651.52-1.18 1.162-1.18zm5.813 0c.642 0 1.162.529 1.162 1.18a1.17 1.17 0 0 1-1.162 1.178 1.17 1.17 0 0 1-1.162-1.178c0-.651.52-1.18 1.162-1.18zm5.34 2.867c-2.455 0-4.515 1.893-4.84 4.396-.002.012-.002.024-.002.036 0 .012 0 .024.002.036.325 2.503 2.385 4.396 4.84 4.396a4.888 4.888 0 0 0 2.613-.74.59.59 0 0 1 .636-.022l1.658.969a.295.295 0 0 0 .29-.001.295.295 0 0 0 .14-.245.295.295 0 0 0-.048-.159l-.39-1.478a.59.59 0 0 1 .226-.665c1.704-1.28 2.78-3.18 2.78-5.31 0-2.503-2.01-4.533-4.487-4.533zm-2.613 4.533a1.17 1.17 0 0 1-1.162-1.178c0-.651.52-1.18 1.162-1.18.642 0 1.162.529 1.162 1.18a1.17 1.17 0 0 1-1.162 1.178zm2.613 0a1.17 1.17 0 0 1-1.162-1.178c0-.651.52-1.18 1.162-1.18.642 0 1.162.529 1.162 1.18a1.17 1.17 0 0 1-1.162 1.178z" />
                        </svg>
                    </button>
                }
            />
        </div>
    )
}
