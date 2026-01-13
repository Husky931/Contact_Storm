import { notFound } from "next/navigation"
import Image from "next/image"
import Link from "next/link"
import {
    getBlogPostBySlug,
    getRelatedPosts,
    getAllBlogPosts
} from "@/lib/blog"
import { formatDateLong } from "@/lib/dateUtils"
import MarkdownContent from "@/components/MarkdownContent"
import RelatedPosts from "@/components/RelatedPosts"
import BlogContactFooter from "@/components/BlogContactFooter"
import type { Metadata } from "next"

interface PageProps {
    params: Promise<{ slug: string }>
}

export async function generateStaticParams() {
    const posts = getAllBlogPosts()
    return posts.map((post) => ({
        slug: post.slug
    }))
}

export async function generateMetadata({
    params
}: PageProps): Promise<Metadata> {
    const { slug } = await params
    const post = getBlogPostBySlug(slug)

    if (!post) {
        return {
            title: "Post Not Found | PixaVentures"
        }
    }

    return {
        title: `${post.title} | PixaVentures Insights`,
        description: post.excerpt || post.title
    }
}

export default async function BlogPostPage({ params }: PageProps) {
    const { slug } = await params
    const post = getBlogPostBySlug(slug)

    if (!post) {
        notFound()
    }

    const relatedPosts = getRelatedPosts(slug, 3)
    const formattedDate = formatDateLong(post.date)

    return (
        <div className="min-h-screen bg-white">
            <main>
                {/* Hero Image */}
                <section className="relative h-[400px] w-full overflow-hidden bg-slate-200 md:h-[500px] lg:h-[600px]">
                    <Image
                        src={post.image}
                        alt={post.title}
                        fill
                        className="object-cover"
                        priority
                        sizes="100vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                    <div className="absolute bottom-0 left-0 right-0 p-6 md:p-12">
                        <div className="mx-auto max-w-4xl">
                            <Link
                                href="/insights"
                                className="mb-4 inline-flex items-center text-white/90 transition-colors hover:text-white"
                            >
                                <svg
                                    className="mr-2 h-5 w-5"
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M15 19l-7-7 7-7"
                                    />
                                </svg>
                                Back to Insights
                            </Link>
                            <h1 className="font-heading text-3xl font-bold text-white md:text-4xl lg:text-5xl">
                                {post.title}
                            </h1>
                        </div>
                    </div>
                </section>

                {/* Content Section */}
                <section className="py-12 lg:py-16">
                    <div className="mx-auto max-w-7xl px-6">
                        <div className="lg:grid lg:grid-cols-3 lg:gap-12">
                            {/* Main Content */}
                            <div className="lg:col-span-2">
                                <div className="mb-8 flex flex-wrap items-center gap-4 text-slate-600">
                                    <time dateTime={post.date.toISOString()}>
                                        {formattedDate}
                                    </time>
                                    <span className="text-slate-400">•</span>
                                    <span>Written by {post.author}</span>
                                </div>

                                {/* Article Content */}
                                <article className="prose prose-lg max-w-none prose-headings:font-heading prose-headings:text-slate-900 prose-p:text-slate-700 prose-a:text-(--brand-red) prose-a:no-underline hover:prose-a:underline">
                                    <MarkdownContent content={post.content} />
                                </article>

                                {/* Contact Footer */}
                                <BlogContactFooter />
                            </div>

                            {/* Related Posts Sidebar */}
                            {relatedPosts.length > 0 && (
                                <aside className="mt-12 lg:mt-0">
                                    <RelatedPosts posts={relatedPosts} />
                                </aside>
                            )}
                        </div>
                    </div>
                </section>
            </main>
        </div>
    )
}
