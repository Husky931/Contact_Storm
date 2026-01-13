export default function BlogContactFooter() {
    return (
        <div className="mt-12 rounded-lg border-2 border-slate-200 bg-slate-50 p-8">
            <h3 className="mb-4 font-heading text-xl font-semibold text-slate-900">
                Contact us on 📞
            </h3>
            <div className="space-y-2 text-slate-700">
                <p>
                    <span className="font-semibold">Wechat:</span> Gligor1
                </p>
                <p>
                    <span className="font-semibold">Phone:</span> +86 131 6290
                    8096
                </p>
                <p>
                    <span className="font-semibold">Email:</span>{" "}
                    <a
                        href="mailto:hello@pixaventures.com"
                        className="text-(--brand-red) hover:underline"
                    >
                        hello@pixaventures.com
                    </a>
                </p>
                <p>
                    <span className="font-semibold">Web:</span>{" "}
                    <a
                        href="https://www.pixaventures.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-(--brand-red) hover:underline"
                    >
                        www.pixaventures.com
                    </a>
                </p>
            </div>
        </div>
    )
}
