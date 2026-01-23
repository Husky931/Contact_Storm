"use client"

import { useEffect } from "react"

interface ReportViewTrackerProps {
    urlHash: string
}

export default function ReportViewTracker({ urlHash }: ReportViewTrackerProps) {
    useEffect(() => {
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
    }, [urlHash])

    return null // This component doesn't render anything
}
