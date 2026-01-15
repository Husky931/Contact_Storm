"use client"

import { useEffect, useState } from "react"
import WeChatQRBox from "./WeChatQRBox"

interface WeChatQRPopupProps {
    trigger: React.ReactNode
    message?: string | React.ReactNode
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

    useEffect(() => {
        if (!isOpen) {
            return
        }

        const handleKeyDown = (event: KeyboardEvent) => {
            if (event.key === "Escape") {
                handleClose()
            }
        }

        window.addEventListener("keydown", handleKeyDown)
        return () => {
            window.removeEventListener("keydown", handleKeyDown)
        }
    }, [isOpen])

    return (
        <>
            <div
                onClick={handleTriggerClick}
                className="no-print inline-flex cursor-pointer"
            >
                {trigger}
            </div>

            {isOpen && (
                <div
                    className="fixed inset-0 z-50 flex cursor-pointer items-center justify-center bg-black/50 p-4"
                    onClick={handleBackdropClick}
                >
                    <div className="relative w-full max-w-md rounded-lg bg-white p-6 shadow-xl">
                        <button
                            onClick={handleClose}
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
                        <WeChatQRBox message={message} />
                    </div>
                </div>
            )}
        </>
    )
}
