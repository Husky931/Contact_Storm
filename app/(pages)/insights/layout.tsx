import type { Metadata } from "next"

export const metadata: Metadata = {
    title: "Insights",
    description:
        "Discover the latest insights, trends, and best practices in digital marketing, web development, and business growth."
}

export default function InsightsLayout({
    children
}: {
    children: React.ReactNode
}) {
    return <>{children}</>
}
