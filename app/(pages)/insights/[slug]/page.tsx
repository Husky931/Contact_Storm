import { notFound } from "next/navigation"
import { getBlogPostBySlug, getRelatedPosts, getAllBlogPosts } from "@/lib/blog"
import BlogPostClient from "@/components/BlogPostClient"
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
        title: `${post.title.en} | PixaVentures Insights`,
        description: post.excerpt?.en || post.title.en
    }
}

export default async function BlogPostPage({ params }: PageProps) {
    const { slug } = await params
    const post = getBlogPostBySlug(slug)

    if (!post) {
        notFound()
    }

    const relatedPosts = getRelatedPosts(slug, 3)

    return (
        <BlogPostClient
            post={{
                ...post,
                date: post.date.toISOString()
            }}
            relatedPosts={relatedPosts.map((related) => ({
                ...related,
                date: related.date.toISOString()
            }))}
        />
    )
}
