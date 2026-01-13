"use client"

import { useLanguage } from "@/components/LanguageProvider"

export default function BlogContactFooter() {
    const { language, translations } = useLanguage()
    const copy = translations[language]

    return (
        <div className="mt-12 rounded-lg border-2 border-slate-200 bg-slate-50 p-8">
            <h3 className="mb-4 font-heading text-xl font-semibold text-slate-900">
                {copy.blog.contactFooter.title}
            </h3>
            <div className="space-y-2 text-slate-700">
                <p>
                    <span className="font-semibold">
                        {copy.blog.contactFooter.wechat}:
                    </span>{" "}
                    Gligor1
                </p>
                <p>
                    <span className="font-semibold">
                        {copy.blog.contactFooter.phone}:
                    </span>{" "}
                    +86 131 6290 8096
                </p>
                <p>
                    <span className="font-semibold">
                        {copy.blog.contactFooter.email}:
                    </span>{" "}
                    <a
                        href="mailto:hello@pixaventures.com"
                        className="text-primary-red hover:underline"
                    >
                        hello@pixaventures.com
                    </a>
                </p>
                <p>
                    <span className="font-semibold">
                        {copy.blog.contactFooter.web}:
                    </span>{" "}
                    <a
                        href="https://www.pixaventures.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-primary-red hover:underline"
                    >
                        www.pixaventures.com
                    </a>
                </p>
            </div>
        </div>
    )
}
