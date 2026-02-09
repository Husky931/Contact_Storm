"use client"

import { useEffect } from "react"
import Link from "next/link"

interface ErrorPageProps {
    error: Error & { digest?: string }
    reset: () => void
}

export default function ReportDetailError({ error, }: ErrorPageProps) {
    useEffect(() => {
        // Log to the console for debugging and observability.
        console.error("Report detail page error:", error)
    }, [error])

    return (
        <div className="bg-background text-text min-h-[70vh]">
            <div className="mx-auto flex max-w-5xl flex-col items-center px-6 py-16 text-center">
                <p className="text-xs font-semibold tracking-[0.5em] text-gray-500 uppercase">
                    Pixaventures Report
                </p>
                <h1 className="mt-4 text-4xl font-bold text-gray-900 md:text-5xl">
                    This report is temporarily unavailable
                </h1>
                <p className="mt-4 max-w-2xl text-base text-gray-600 md:text-lg">
                    We hit a snag while loading this report. Our team is already
                    working on it, but you can retry or explore other insights
                    in the meantime.
                </p>



                <div className="mt-12 w-full max-w-3xl rounded-2xl border border-gray-200 bg-linear-to-br from-white via-blue-50 to-indigo-50 px-6 py-8 text-left shadow-sm">
                    <h2 className="text-lg font-semibold text-gray-900">
                        Need immediate help?
                    </h2>
                    <p className="mt-2 text-sm text-gray-600">
                        Tell us which report you were trying to access and we
                        will send it straight to you.
                    </p>
                    <div className="mt-5 flex flex-col gap-3 sm:flex-row">
                        <Link
                            href="/contact"
                            className="inline-flex items-center justify-center rounded-md bg-gray-900 px-5 py-2.5 text-sm font-semibold text-white transition-opacity hover:opacity-90"
                        >
                            Contact Pixaventures
                        </Link>
                        <Link
                            href="/"
                            className="inline-flex items-center justify-center rounded-md border border-gray-300 px-5 py-2.5 text-sm font-semibold text-gray-700 transition-colors hover:border-gray-400 hover:bg-gray-100"
                        >
                            Go to homepage
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}
