import { getMarkdownContent } from "@/lib/content"
import MarkdownContent from "@/components/MarkdownContent"
import type { Metadata } from "next"

export const metadata: Metadata = {
    title: "Brochure | Pixaventures",
    description: "PIXAVENTURES | B2B DIGITAL GROWTH FOR EXPORT MANUFACTURERS"
}

export default function BrochurePage() {
    const content = getMarkdownContent("brochure")

    return (
        <div className="bg-background text-text min-h-screen">
            <div className="mx-auto max-w-5xl px-6 py-12">
                <MarkdownContent content={content} />
            </div>
        </div>
    )
}
