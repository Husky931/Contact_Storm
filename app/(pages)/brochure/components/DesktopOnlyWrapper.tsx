"use client"

import { useEffect, useState } from "react"

const DESKTOP_MIN_WIDTH = 1024

export default function DesktopOnlyWrapper({
    children,
}: {
    children: React.ReactNode
}) {
    const [isDesktop, setIsDesktop] = useState<boolean | null>(null)

    useEffect(() => {
        const check = () => setIsDesktop(window.innerWidth >= DESKTOP_MIN_WIDTH)
        check()
        window.addEventListener("resize", check)
        return () => window.removeEventListener("resize", check)
    }, [])

    // Before hydration / on mobile: show message
    if (isDesktop !== true) {
        return (
            <div className="flex min-h-screen flex-col items-center justify-center bg-[#1b2737] px-6 py-12 text-center">
                <p className="max-w-md text-lg leading-relaxed text-white">
                    Please visit this brochure URL from a desktop device for
                    optimal experience.
                </p>
                <p className="mt-6 max-w-md text-lg leading-relaxed text-white/90">
                    请使用电脑访问此宣传册链接以获得最佳体验。
                </p>
            </div>
        )
    }

    return <>{children}</>
}
