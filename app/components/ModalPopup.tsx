"use client"

import { useEffect, useState } from "react"

interface ModalPopupProps {
    trigger: React.ReactNode
    children: React.ReactNode
    ariaLabel?: string
}

export default function ModalPopup({
    trigger,
    children,
    ariaLabel = "Close"
}: ModalPopupProps) {
    const [isOpen, setIsOpen] = useState(false)

    const handleTriggerClick = (event: React.MouseEvent) => {
        event.preventDefault()
        setIsOpen(true)
    }

    const handleClose = () => {
        setIsOpen(false)
    }

    const handleBackdropClick = (event: React.MouseEvent<HTMLDivElement>) => {
        if (event.target === event.currentTarget) {
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
            <div onClick={handleTriggerClick} className="inline-flex cursor-pointer">
                {trigger}
            </div>

            {isOpen && (
                <div
                    className="fixed inset-0 z-50 flex cursor-pointer items-center justify-center bg-black/50 p-4"
                    onClick={handleBackdropClick}
                >
                    <div className="relative w-full max-w-2xl overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-2xl">
                        <button
                            onClick={handleClose}
                            className="absolute right-4 top-4 cursor-pointer text-slate-400 transition-colors hover:text-slate-600"
                            aria-label={ariaLabel}
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
                        {children}
                    </div>
                </div>
            )}
        </>
    )
}
