import { getSeoReportById } from "@/db/queries"
import { notFound } from "next/navigation"
import Link from "next/link"
import MarkdownContent from "@/components/MarkdownContent"

interface PageProps {
    params: Promise<{ id: string }>
}

export default async function ReportDetailPage({ params }: PageProps) {
    const { id } = await params
    const reportId = parseInt(id)

    if (isNaN(reportId)) {
        notFound()
    }

    const report = await getSeoReportById(reportId)

    if (!report) {
        notFound()
    }

    return (
        <div className="min-h-screen bg-background p-8 text-text">
            <div className="mx-auto max-w-7xl">
                <Link
                    href="/reports"
                    className="mb-4 inline-block text-blue-600 hover:underline"
                >
                    ← Back to Reports
                </Link>

                <h1 className="mb-2 text-4xl font-bold">{report.domain}</h1>
                <p className="mb-8 text-gray-600">
                    Analyzed:{" "}
                    {report.analyzedAt instanceof Date
                        ? report.analyzedAt.toLocaleString()
                        : new Date(
                              report.analyzedAt as unknown as string
                          ).toLocaleString()}
                </p>

                {report.overallScore !== null && (
                    <div className="mb-8 rounded-lg bg-gray-50 p-6">
                        <h2 className="mb-4 text-2xl font-semibold">
                            Overall Score
                        </h2>
                        <div className="text-6xl font-bold">
                            {Math.round(report.overallScore)}%
                        </div>
                    </div>
                )}

                <div className="mb-8 grid gap-6 md:grid-cols-2">
                    {/* Lighthouse Scores */}
                    {(report.lighthousePerformance !== null ||
                        report.lighthouseAccessibility !== null ||
                        report.lighthouseBestPractices !== null ||
                        report.lighthouseSeo !== null) && (
                        <div className="rounded-lg border border-gray-200 p-6">
                            <h2 className="mb-4 text-xl font-semibold">
                                Lighthouse Scores
                            </h2>
                            <div className="space-y-2">
                                {report.lighthousePerformance !== null && (
                                    <div className="flex justify-between">
                                        <span>Performance:</span>
                                        <span className="font-medium">
                                            {Math.round(
                                                report.lighthousePerformance
                                            )}
                                        </span>
                                    </div>
                                )}
                                {report.lighthouseAccessibility !== null && (
                                    <div className="flex justify-between">
                                        <span>Accessibility:</span>
                                        <span className="font-medium">
                                            {Math.round(
                                                report.lighthouseAccessibility
                                            )}
                                        </span>
                                    </div>
                                )}
                                {report.lighthouseBestPractices !== null && (
                                    <div className="flex justify-between">
                                        <span>Best Practices:</span>
                                        <span className="font-medium">
                                            {Math.round(
                                                report.lighthouseBestPractices
                                            )}
                                        </span>
                                    </div>
                                )}
                                {report.lighthouseSeo !== null && (
                                    <div className="flex justify-between">
                                        <span>SEO:</span>
                                        <span className="font-medium">
                                            {Math.round(report.lighthouseSeo)}
                                        </span>
                                    </div>
                                )}
                            </div>
                        </div>
                    )}

                    {/* Core Web Vitals */}
                    {(report.lcp !== null ||
                        report.cls !== null ||
                        report.inp !== null ||
                        report.fcp !== null ||
                        report.ttfb !== null) && (
                        <div className="rounded-lg border border-gray-200 p-6">
                            <h2 className="mb-4 text-xl font-semibold">
                                Core Web Vitals
                            </h2>
                            <div className="space-y-2">
                                {report.lcp !== null && (
                                    <div className="flex justify-between">
                                        <span>LCP:</span>
                                        <span className="font-medium">
                                            {report.lcp.toFixed(2)}s
                                        </span>
                                    </div>
                                )}
                                {report.cls !== null && (
                                    <div className="flex justify-between">
                                        <span>CLS:</span>
                                        <span className="font-medium">
                                            {report.cls.toFixed(3)}
                                        </span>
                                    </div>
                                )}
                                {report.inp !== null && (
                                    <div className="flex justify-between">
                                        <span>INP:</span>
                                        <span className="font-medium">
                                            {report.inp.toFixed(2)}ms
                                        </span>
                                    </div>
                                )}
                                {report.fcp !== null && (
                                    <div className="flex justify-between">
                                        <span>FCP:</span>
                                        <span className="font-medium">
                                            {report.fcp.toFixed(2)}s
                                        </span>
                                    </div>
                                )}
                                {report.ttfb !== null && (
                                    <div className="flex justify-between">
                                        <span>TTFB:</span>
                                        <span className="font-medium">
                                            {report.ttfb.toFixed(2)}ms
                                        </span>
                                    </div>
                                )}
                            </div>
                        </div>
                    )}

                    {/* Technical SEO */}
                    {report.technicalSeoScore !== null && (
                        <div className="rounded-lg border border-gray-200 p-6">
                            <h2 className="mb-4 text-xl font-semibold">
                                Technical SEO
                            </h2>
                            <div className="mb-4 text-3xl font-bold">
                                {Math.round(report.technicalSeoScore)}%
                            </div>
                            <div className="space-y-2 text-sm">
                                {report.hasTitle !== null && (
                                    <div>
                                        Title Tag: {report.hasTitle ? "✓" : "✗"}
                                        {report.titleContent && (
                                            <div className="mt-1 text-gray-600">
                                                &ldquo;{report.titleContent}
                                                &rdquo;
                                            </div>
                                        )}
                                    </div>
                                )}
                                {report.hasMetaDescription !== null && (
                                    <div>
                                        Meta Description:{" "}
                                        {report.hasMetaDescription ? "✓" : "✗"}
                                        {report.metaDescriptionContent && (
                                            <div className="mt-1 text-gray-600">
                                                &ldquo;
                                                {report.metaDescriptionContent}
                                                &rdquo;
                                            </div>
                                        )}
                                    </div>
                                )}
                                {report.hasCanonical !== null && (
                                    <div>
                                        Canonical URL:{" "}
                                        {report.hasCanonical ? "✓" : "✗"}
                                        {report.canonicalUrl && (
                                            <div className="mt-1 text-gray-600">
                                                {report.canonicalUrl}
                                            </div>
                                        )}
                                    </div>
                                )}
                                {report.hasRobotsTxt !== null && (
                                    <div>
                                        robots.txt:{" "}
                                        {report.hasRobotsTxt ? "✓" : "✗"}
                                    </div>
                                )}
                                {report.hasSitemapXml !== null && (
                                    <div>
                                        Sitemap:{" "}
                                        {report.hasSitemapXml ? "✓" : "✗"}
                                        {report.sitemapUrl && (
                                            <div className="mt-1 text-gray-600">
                                                {report.sitemapUrl}
                                            </div>
                                        )}
                                    </div>
                                )}
                            </div>
                        </div>
                    )}

                    {/* Security */}
                    {report.securityScore !== null && (
                        <div className="rounded-lg border border-gray-200 p-6">
                            <h2 className="mb-4 text-xl font-semibold">
                                Security
                            </h2>
                            <div className="mb-4 text-3xl font-bold">
                                {Math.round(report.securityScore)}%
                            </div>
                            <div className="space-y-2 text-sm">
                                {report.isHttps !== null && (
                                    <div>
                                        HTTPS: {report.isHttps ? "✓" : "✗"}
                                    </div>
                                )}
                                {report.sslValid !== null && (
                                    <div>
                                        SSL Valid: {report.sslValid ? "✓" : "✗"}
                                    </div>
                                )}
                                {report.hasHsts !== null && (
                                    <div>
                                        HSTS: {report.hasHsts ? "✓" : "✗"}
                                    </div>
                                )}
                                {report.hasCsp !== null && (
                                    <div>CSP: {report.hasCsp ? "✓" : "✗"}</div>
                                )}
                            </div>
                        </div>
                    )}
                </div>

                {/* Markdown Report */}
                {report.markdownReport && (
                    <div className="mt-8 rounded-lg border border-gray-200 p-6">
                        <h2 className="mb-4 text-xl font-semibold">
                            Full Report
                        </h2>
                        <MarkdownContent content={report.markdownReport} />
                    </div>
                )}

                {/* Error Message */}
                {report.analysisError && (
                    <div className="mt-8 rounded-lg border border-red-200 bg-red-50 p-6">
                        <h2 className="mb-2 text-xl font-semibold text-red-800">
                            Analysis Error
                        </h2>
                        <p className="text-red-700">{report.analysisError}</p>
                    </div>
                )}
            </div>
        </div>
    )
}
