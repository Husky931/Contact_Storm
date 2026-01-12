import { db, seoReports, domains } from "@/db"
import { desc, eq, and, gte, lte, sql } from "drizzle-orm"

// Get all SEO reports with basic info, ordered by most recent
export async function getAllSeoReports(limit = 50) {
    return await db
        .select({
            id: seoReports.id,
            domain: seoReports.domain,
            analyzedAt: seoReports.analyzedAt,
            overallScore: seoReports.overallScore,
            analysisSuccessful: seoReports.analysisSuccessful,
            lighthousePerformance: seoReports.lighthousePerformance,
            lighthouseAccessibility: seoReports.lighthouseAccessibility,
            lighthouseBestPractices: seoReports.lighthouseBestPractices,
            lighthouseSeo: seoReports.lighthouseSeo,
            technicalSeoScore: seoReports.technicalSeoScore,
            securityScore: seoReports.securityScore
        })
        .from(seoReports)
        .orderBy(desc(seoReports.analyzedAt))
        .limit(limit)
}

// Get a single SEO report by ID
export async function getSeoReportById(id: number) {
    const result = await db
        .select()
        .from(seoReports)
        .where(eq(seoReports.id, id))
        .limit(1)

    return result[0] || null
}

// Get all SEO reports for a specific domain
export async function getSeoReportsByDomain(domain: string, limit = 10) {
    return await db
        .select()
        .from(seoReports)
        .where(eq(seoReports.domain, domain))
        .orderBy(desc(seoReports.analyzedAt))
        .limit(limit)
}

// Get the latest SEO report for a specific domain
export async function getLatestSeoReportByDomain(domain: string) {
    const result = await db
        .select()
        .from(seoReports)
        .where(eq(seoReports.domain, domain))
        .orderBy(desc(seoReports.analyzedAt))
        .limit(1)

    return result[0] || null
}

// Get SEO reports with successful analysis only
export async function getSuccessfulSeoReports(limit = 50) {
    return await db
        .select()
        .from(seoReports)
        .where(eq(seoReports.analysisSuccessful, true))
        .orderBy(desc(seoReports.analyzedAt))
        .limit(limit)
}

// Get SEO reports with overall score above a threshold
export async function getSeoReportsByMinScore(minScore: number, limit = 50) {
    return await db
        .select()
        .from(seoReports)
        .where(
            and(
                eq(seoReports.analysisSuccessful, true),
                gte(seoReports.overallScore, minScore)
            )
        )
        .orderBy(desc(seoReports.overallScore))
        .limit(limit)
}

// Get SEO reports within a date range
export async function getSeoReportsByDateRange(
    startDate: Date,
    endDate: Date,
    limit = 50
) {
    return await db
        .select()
        .from(seoReports)
        .where(
            and(
                gte(seoReports.analyzedAt, startDate),
                lte(seoReports.analyzedAt, endDate)
            )
        )
        .orderBy(desc(seoReports.analyzedAt))
        .limit(limit)
}

// Get SEO reports with Lighthouse performance above threshold
export async function getSeoReportsByPerformance(
    minPerformance: number,
    limit = 50
) {
    return await db
        .select()
        .from(seoReports)
        .where(
            and(
                eq(seoReports.analysisSuccessful, true),
                gte(seoReports.lighthousePerformance, minPerformance)
            )
        )
        .orderBy(desc(seoReports.lighthousePerformance))
        .limit(limit)
}

// Get domains with their latest SEO report
export async function getDomainsWithLatestReport(limit = 50) {
    return await db
        .select({
            domain: domains.domain,
            industry: domains.industry,
            firstSeen: domains.firstSeen,
            submitted: domains.submitted,
            latestReport: {
                id: seoReports.id,
                analyzedAt: seoReports.analyzedAt,
                overallScore: seoReports.overallScore,
                analysisSuccessful: seoReports.analysisSuccessful
            }
        })
        .from(domains)
        .leftJoin(seoReports, eq(domains.domain, seoReports.domain))
        .orderBy(desc(domains.firstSeen))
        .limit(limit)
}

// Get count of SEO reports
export async function getSeoReportsCount() {
    const result = await db
        .select({ count: sql<number>`count(*)` })
        .from(seoReports)

    return result[0]?.count || 0
}

// Get count of successful analyses
export async function getSuccessfulReportsCount() {
    const result = await db
        .select({ count: sql<number>`count(*)` })
        .from(seoReports)
        .where(eq(seoReports.analysisSuccessful, true))

    return result[0]?.count || 0
}

// Get average overall score
export async function getAverageOverallScore() {
    const result = await db
        .select({
            avg: sql<number>`avg(${seoReports.overallScore})`
        })
        .from(seoReports)
        .where(eq(seoReports.analysisSuccessful, true))

    return result[0]?.avg || null
}
