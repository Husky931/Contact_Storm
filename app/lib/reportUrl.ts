/**
 * Utility functions for generating and parsing SEO report URLs
 *
 * URL Format: /reports/{urlHash}
 * Example: /reports/mxkDJoBs78Q8
 */

/**
 * Generates a report URL from hash
 * @param urlHash - The URL hash from the database
 * @returns The full report URL path
 */
export function generateReportUrl(urlHash: string): string {
    return `/reports/${urlHash}`
}

/**
 * Extracts the hash from a report URL
 * @param urlPath - The URL path (e.g., "/reports/mxkDJoBs78Q8")
 * @returns The hash or null if invalid
 */
export function extractHashFromUrl(urlPath: string): string | null {
    // Remove leading slash and "reports/" prefix if present
    const hash = urlPath.replace(/^\/reports\//, "").replace(/^\//, "")

    // Validate hash is alphanumeric
    if (!hash || !/^[a-zA-Z0-9]+$/.test(hash)) {
        return null
    }

    return hash
}
