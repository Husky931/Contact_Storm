"use client"

import { useState } from "react"
import WeChatQRBox from "./WeChatQRBox"

interface WeChatQRPopupProps {
    trigger: React.ReactNode
    message?: string
}

export default function WeChatQRPopup({
    trigger,
    message
}: WeChatQRPopupProps) {
    const [isOpen, setIsOpen] = useState(false)

    const handleTriggerClick = (e: React.MouseEvent) => {
        e.preventDefault()
        setIsOpen(true)
    }

    const handleClose = () => {
        setIsOpen(false)
    }

    const handleBackdropClick = (e: React.MouseEvent<HTMLDivElement>) => {
        if (e.target === e.currentTarget) {
            handleClose()
        }
    }

    return (
        <>
            <div onClick={handleTriggerClick} className="cursor-pointer">
                {trigger}
            </div>

            {isOpen && (
                <div
                    className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4"
                    onClick={handleBackdropClick}
                >
                    <div className="relative max-w-md w-full bg-white rounded-lg shadow-xl p-6">
                        <button
                            onClick={handleClose}
                            className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 transition-colors"
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
                        <WeChatQRBox message={message} />
                    </div>
                </div>
            )}
        </>
    )
}
