import {
    getAllSeoReports,
    getSeoReportsCount,
    getSuccessfulReportsCount,
    getAverageOverallScore
} from "@/db/queries"
import Link from "next/link"

export default async function ReportsPage() {
    // Fetch data using the query functions
    const reports = await getAllSeoReports(20)
    const totalCount = await getSeoReportsCount()
    const successfulCount = await getSuccessfulReportsCount()
    const avgScore = await getAverageOverallScore()

    return (
        <div className="min-h-screen bg-(--background) p-8 text-(--foreground)">
            <div className="mx-auto max-w-7xl">
                <h1 className="mb-8 text-4xl font-bold">SEO Reports</h1>

                {/* Stats */}
                <div className="mb-8 grid grid-cols-1 gap-4 md:grid-cols-3">
                    <div className="rounded-lg bg-gray-50 p-6">
                        <div className="text-2xl font-bold">{totalCount}</div>
                        <div className="text-gray-600">Total Reports</div>
                    </div>
                    <div className="rounded-lg bg-gray-50 p-6">
                        <div className="text-2xl font-bold">
                            {successfulCount}
                        </div>
                        <div className="text-gray-600">Successful Analyses</div>
                    </div>
                    <div className="rounded-lg bg-gray-50 p-6">
                        <div className="text-2xl font-bold">
                            {avgScore ? Math.round(avgScore) : "N/A"}
                        </div>
                        <div className="text-gray-600">Average Score</div>
                    </div>
                </div>

                {/* Reports List */}
                {reports.length === 0 ? (
                    <p className="text-lg">No reports found.</p>
                ) : (
                    <div className="grid gap-4">
                        {reports.map((report) => (
                            <Link
                                key={report.id}
                                href={`/reports/${report.id}`}
                                className="block rounded-lg border border-gray-200 p-6 transition-colors hover:bg-gray-50"
                            >
                                <div className="flex items-start justify-between">
                                    <div>
                                        <h2 className="mb-2 text-xl font-semibold">
                                            {report.domain}
                                        </h2>
                                        <p className="text-sm text-gray-600">
                                            Analyzed:{" "}
                                            {report.analyzedAt instanceof Date
                                                ? report.analyzedAt.toLocaleString()
                                                : new Date(
                                                      report.analyzedAt as unknown as string
                                                  ).toLocaleString()}
                                        </p>
                                    </div>
                                    <div className="text-right">
                                        {report.overallScore !== null && (
                                            <div className="mb-1 text-2xl font-bold">
                                                {Math.round(
                                                    report.overallScore
                                                )}
                                                %
                                            </div>
                                        )}
                                        <div
                                            className={`rounded px-2 py-1 text-sm ${
                                                report.analysisSuccessful
                                                    ? "bg-green-100 text-green-800"
                                                    : "bg-red-100 text-red-800"
                                            }`}
                                        >
                                            {report.analysisSuccessful
                                                ? "Success"
                                                : "Failed"}
                                        </div>
                                    </div>
                                </div>
                                <div className="mt-4 grid grid-cols-2 gap-4 text-sm md:grid-cols-4">
                                    {report.lighthousePerformance !== null && (
                                        <div>
                                            <span className="text-gray-600">
                                                Performance:{" "}
                                            </span>
                                            <span className="font-medium">
                                                {Math.round(
                                                    report.lighthousePerformance
                                                )}
                                            </span>
                                        </div>
                                    )}
                                    {report.lighthouseSeo !== null && (
                                        <div>
                                            <span className="text-gray-600">
                                                SEO:{" "}
                                            </span>
                                            <span className="font-medium">
                                                {Math.round(
                                                    report.lighthouseSeo
                                                )}
                                            </span>
                                        </div>
                                    )}
                                    {report.technicalSeoScore !== null && (
                                        <div>
                                            <span className="text-gray-600">
                                                Technical:{" "}
                                            </span>
                                            <span className="font-medium">
                                                {Math.round(
                                                    report.technicalSeoScore
                                                )}
                                            </span>
                                        </div>
                                    )}
                                    {report.securityScore !== null && (
                                        <div>
                                            <span className="text-gray-600">
                                                Security:{" "}
                                            </span>
                                            <span className="font-medium">
                                                {Math.round(
                                                    report.securityScore
                                                )}
                                            </span>
                                        </div>
                                    )}
                                </div>
                            </Link>
                        ))}
                    </div>
                )}
            </div>
        </div>
    )
}
