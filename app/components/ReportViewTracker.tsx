"use client"

import { useEffect } from "react"
import { useSearchParams } from "next/navigation"

interface ReportViewTrackerProps {
    urlHash: string
}

export default function ReportViewTracker({ urlHash }: ReportViewTrackerProps) {
    const searchParams = useSearchParams()

    useEffect(() => {
        // Skip tracking if admin parameter is present in the URL
        const isAdmin = searchParams?.has('admin')

        if (isAdmin) {
            // Don't track views when admin parameter is present
            return
        }

        // Track the view when component mounts
        const trackView = async () => {
            try {
                await fetch(`/api/reports/${urlHash}/track-view`, {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json"
                    }
                })
            } catch (error) {
                // Silently fail - we don't want to interrupt the user experience
                console.error("Failed to track report view:", error)
            }
        }

        trackView()
    }, [urlHash, searchParams])

    return null // This component doesn't render anything
}
