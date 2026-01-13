"use client"

import Link from "next/link"
import Image from "next/image"
import { BlogPost } from "@/lib/blog"
import { formatDateShort } from "@/lib/dateUtils"
import { useLanguage } from "@/components/LanguageProvider"

interface RelatedPostsProps {
    posts: BlogPost[]
}

export default function RelatedPosts({ posts }: RelatedPostsProps) {
    const { language, translations } = useLanguage()
    const copy = translations[language]

    if (posts.length === 0) return null

    return (
        <div className="mt-12 lg:mt-0">
            <h2 className="mb-6 font-heading text-2xl font-bold text-slate-900">
                {copy.blog.relatedPosts}
            </h2>
            <div className="space-y-6">
                {posts.map((post) => {
                    const formattedDate = formatDateShort(post.date, language)
                    const title = post.title[language]

                    return (
                        <Link
                            key={post.id}
                            href={`/insights/${post.slug}`}
                            className="group flex gap-4"
                        >
                            <div className="relative h-24 w-24 shrink-0 overflow-hidden rounded-lg bg-slate-100">
                                <Image
                                    src={post.image}
                                    alt={title}
                                    fill
                                    className="object-cover transition-transform duration-300 group-hover:scale-105"
                                    sizes="96px"
                                />
                            </div>
                            <div className="flex flex-1 flex-col">
                                <h3 className="mb-1 font-heading text-base font-semibold text-slate-900 transition-colors group-hover:text-primary-red line-clamp-2">
                                    {title}
                                </h3>
                                <time
                                    dateTime={post.date.toISOString()}
                                    className="text-sm text-slate-600"
                                >
                                    {formattedDate}
                                </time>
                            </div>
                        </Link>
                    )
                })}
            </div>
        </div>
    )
}
