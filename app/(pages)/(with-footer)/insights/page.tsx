"use client"

import { useState } from "react"
import { getAllBlogPosts } from "@/lib/blog"
import BlogCard from "@/components/BlogCard"
import { useLanguage } from "@/components/LanguageProvider"

const POSTS_PER_PAGE = 6

export default function InsightsPage() {
    const { language, translations } = useLanguage()
    const copy = translations[language]
    const allPosts = getAllBlogPosts()
    const [displayedPosts, setDisplayedPosts] = useState(
        allPosts.slice(0, POSTS_PER_PAGE)
    )
    const [hasMore, setHasMore] = useState(allPosts.length > POSTS_PER_PAGE)

    const loadMore = () => {
        const nextPage = displayedPosts.length + POSTS_PER_PAGE
        const newPosts = allPosts.slice(0, nextPage)
        setDisplayedPosts(newPosts)
        setHasMore(nextPage < allPosts.length)
    }

    return (
        <div className="min-h-screen bg-white">
            <main>
                {/* Hero Section */}
                <section className="bg-linear-to-b from-slate-50 to-white py-20 lg:py-28">
                    <div className="mx-auto max-w-4xl px-6 text-center">
                        <h1 className="font-heading text-4xl font-bold text-slate-900 md:text-5xl lg:text-6xl">
                            {copy.insights.title.includes(
                                copy.insights.highlight
                            ) ? (
                                <>
                                    {
                                        copy.insights.title.split(
                                            copy.insights.highlight
                                        )[0]
                                    }
                                    <span className="text-primary-red">
                                        {copy.insights.highlight}
                                    </span>
                                    {
                                        copy.insights.title.split(
                                            copy.insights.highlight
                                        )[1]
                                    }
                                </>
                            ) : (
                                copy.insights.title
                            )}
                        </h1>
                        <p className="mt-6 text-lg text-slate-600 md:text-xl">
                            {copy.insights.subtitle}
                        </p>
                    </div>
                </section>

                {/* Blog Posts Grid */}
                <section className="py-16 lg:py-24">
                    <div className="mx-auto max-w-7xl px-6">
                        {displayedPosts.length > 0 ? (
                            <>
                                <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                                    {displayedPosts.map((post) => (
                                        <BlogCard key={post.id} post={post} />
                                    ))}
                                </div>

                                {/* Load More Button */}
                                {hasMore && (
                                    <div className="mt-12 text-center">
                                        <button
                                            onClick={loadMore}
                                            className="bg-primary-main hover:bg-primary-navy/90 cursor-pointer rounded-lg px-8 py-4 text-base font-semibold tracking-[0.2em] text-white uppercase transition-colors md:text-lg"
                                        >
                                            {copy.insights.loadMore}
                                        </button>
                                    </div>
                                )}
                            </>
                        ) : (
                            <div className="py-12 text-center">
                                <p className="text-lg text-slate-600">
                                    {copy.insights.empty}
                                </p>
                            </div>
                        )}
                    </div>
                </section>
            </main>
        </div>
    )
}
