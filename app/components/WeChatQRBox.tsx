"use client"

import Image from "next/image"
import { useLanguage } from "@/components/LanguageProvider"

interface WeChatQRBoxProps {
    message?: string | React.ReactNode
}

export default function WeChatQRBox({ message }: WeChatQRBoxProps) {
    const { language, translations } = useLanguage()
    const copy = translations[language]

    return (
        <div className="mt-8 rounded-lg bg-gray-100 p-6 shadow-sm">
            {message ? (
                <p className="mb-4 text-center text-base text-slate-500">
                    {message}
                </p>
            ) : (
                <p className="mb-4 text-center text-base text-slate-500">
                    {copy.wechat.contactLine}{" "}
                    <span className="font-bold">Gligor</span>
                </p>
            )}
            <div className="flex flex-col items-center justify-center">
                <Image
                    src="/qrcode.jpg"
                    alt={copy.wechat.qrAlt}
                    width={200}
                    height={200}
                    className="rounded object-contain"
                />
            </div>
        </div>
    )
}
