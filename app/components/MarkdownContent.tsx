"use client"

import ReactMarkdown from "react-markdown"

interface MarkdownContentProps {
    content: string
}

export default function MarkdownContent({ content }: MarkdownContentProps) {
    return (
        <div className="prose prose-gray max-w-none">
            <ReactMarkdown>{content}</ReactMarkdown>
        </div>
    )
}
