/**
 * ContactStorm API Client
 *
 * Replaces direct database access with API calls to the ContactStorm API.
 * View tracking is handled by the API via the ?countView parameter.
 */

const API_BASE_URL = process.env.CONTACTSTORM_API_URL;
const API_KEY = process.env.CONTACTSTORM_API_KEY;

if (!API_BASE_URL) {
    throw new Error("CONTACTSTORM_API_URL environment variable is required");
}

if (!API_KEY) {
    throw new Error("CONTACTSTORM_API_KEY environment variable is required");
}

interface ApiError {
    error: string;
    message: string;
}

/**
 * SEO Report type from the API
 */
export interface SeoReport {
    id: number;
    urlHash: string;
    domain: string;
    analyzedAt: string;
    overallScore: number | null;
    analysisSuccessful: boolean;
    analysisError: string | null;

    // Lighthouse scores
    lighthousePerformance: number | null;
    lighthouseAccessibility: number | null;
    lighthouseBestPractices: number | null;
    lighthouseSeo: number | null;

    // Core Web Vitals
    lcp: number | null;
    cls: number | null;
    inp: number | null;
    fcp: number | null;
    ttfb: number | null;

    // Section scores
    technicalSeoScore: number | null;
    securityScore: number | null;
    contentQualityScore: number | null;
    mobileReadinessScore: number | null;
    internationalSeoScore: number | null;
    trustSignalsScore: number | null;
    socialPreviewScore: number | null;
    imageOptimizationScore: number | null;
    linkHealthScore: number | null;
    schemaAnalysisScore: number | null;

    // Technical SEO details
    hasTitle: boolean | null;
    titleContent: string | null;
    titleLength: number | null;
    titleTooLong: boolean | null;
    hasMetaDescription: boolean | null;
    metaDescriptionContent: string | null;
    descriptionLength: number | null;
    descriptionTooLong: boolean | null;
    hasCanonical: boolean | null;
    canonicalUrl: string | null;
    hasRobotsTxt: boolean | null;
    hasSitemapXml: boolean | null;
    sitemapUrl: string | null;

    // Security details
    isHttps: boolean | null;
    sslValid: boolean | null;
    hasHsts: boolean | null;
    hasCsp: boolean | null;

    // Report content
    markdownReport: string | null;

    // Tracking
    seoReportOpened: boolean;
    seoReportLastOpened: string | null;
    seoReportTimesOpened: number;
    reportDownloaded: boolean;
}

/**
 * Fetch an SEO report by URL hash
 *
 * @param urlHash - The URL hash of the report
 * @param options.countView - If true, increments the view counter (for real visits, not admin previews)
 * @returns The SEO report or null if not found
 */
export async function getSeoReport(
    urlHash: string,
    options?: { countView?: boolean }
): Promise<SeoReport | null> {
    const url = `${API_BASE_URL}/seo-reports/${urlHash}${options?.countView ? "?countView" : ""}`;

    const response = await fetch(url, {
        headers: {
            Authorization: `Bearer ${API_KEY}`,
        },
        // Don't cache when counting views
        cache: options?.countView ? "no-store" : "default",
    });

    if (!response.ok) {
        if (response.status === 404) {
            return null;
        }
        const error: ApiError = await response.json().catch(() => ({
            error: "UNKNOWN",
            message: `HTTP ${response.status}`,
        }));
        console.error("API error fetching report:", error);
        throw new Error(error.message);
    }

    return response.json();
}

/**
 * Track that a report was downloaded
 *
 * @param urlHash - The URL hash of the report
 */
export async function trackReportDownload(urlHash: string): Promise<void> {
    const response = await fetch(`${API_BASE_URL}/seo-reports/${urlHash}/downloaded`, {
        method: "POST",
        headers: {
            Authorization: `Bearer ${API_KEY}`,
        },
    });

    if (!response.ok) {
        console.error("Failed to track download:", response.status);
    }
}
