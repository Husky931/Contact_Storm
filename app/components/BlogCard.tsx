import Link from "next/link"
import Image from "next/image"
import { BlogPost } from "@/lib/blog"
import { formatDateLong } from "@/lib/dateUtils"

interface BlogCardProps {
    post: BlogPost
}

export default function BlogCard({ post }: BlogCardProps) {
    const formattedDate = formatDateLong(post.date)

    return (
        <article className="group flex flex-col overflow-hidden rounded-lg bg-white shadow-sm transition-shadow hover:shadow-lg">
            <Link href={`/insights/${post.slug}`} className="block">
                <div className="relative aspect-video w-full overflow-hidden bg-slate-100">
                    <Image
                        src={post.image}
                        alt={post.title}
                        fill
                        className="object-cover transition-transform duration-300 group-hover:scale-105"
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    />
                </div>
            </Link>
            <div className="flex flex-1 flex-col p-6">
                <div className="mb-2 flex items-center gap-4 text-sm text-slate-600">
                    <time dateTime={post.date.toISOString()}>
                        {formattedDate}
                    </time>
                    <span className="text-slate-400">•</span>
                    <span>{post.author}</span>
                </div>
                <Link href={`/insights/${post.slug}`}>
                    <h2 className="mb-3 font-heading text-xl font-semibold text-slate-900 transition-colors group-hover:text-primary-red">
                        {post.title}
                    </h2>
                </Link>
                {post.excerpt && (
                    <p className="mb-4 flex-1 text-slate-600 line-clamp-3">
                        {post.excerpt}
                    </p>
                )}
                <Link
                    href="/insights"
                    className="inline-flex items-center font-semibold text-primary-red transition-colors hover:text-primary-redDark"
                >
                    Read More
                    <svg
                        className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M9 5l7 7-7 7"
                        />
                    </svg>
                </Link>
            </div>
        </article>
    )
}
