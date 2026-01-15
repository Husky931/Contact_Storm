/**
 * Utility functions for generating and parsing SEO report URLs
 *
 * URL Format: /reports/{domain-slug}-{urlHash}
 * Example: /reports/example-com-abc123def456
 */

/**
 * Converts a domain to a URL-safe slug
 * Example: "example.com" -> "example-com"
 */
export function domainToSlug(domain: string): string {
    return domain.replace(/\./g, "-").toLowerCase()
}

/**
 * Generates a report URL from domain and hash
 * @param domain - The domain name (e.g., "example.com")
 * @param urlHash - The URL hash from the database
 * @returns The full report URL path
 */
export function generateReportUrl(domain: string, urlHash: string): string {
    const domainSlug = domainToSlug(domain)
    return `/reports/${domainSlug}-${urlHash}`
}

/**
 * Parses a report URL to extract domain and hash
 * @param urlPath - The URL path (e.g., "/reports/example-com-abc123def456")
 * @returns Object with domain and hash, or null if invalid
 */
export function parseReportUrl(
    urlPath: string
): { domain: string; hash: string } | null {
    // Remove leading slash and "reports/" prefix
    const match = urlPath
        .replace(/^\/reports\//, "")
        .match(/^(.+)-([a-zA-Z0-9]+)$/)

    if (!match) {
        return null
    }

    const [, domainSlug, hash] = match

    // Convert slug back to domain (replace hyphens with dots)
    const domain = domainSlug.replace(/-/g, ".")

    return { domain, hash }
}

/**
 * Extracts just the hash from a report URL
 * @param urlPath - The URL path (e.g., "/reports/example-com-abc123def456")
 * @returns The hash or null if invalid
 */
export function extractHashFromUrl(urlPath: string): string | null {
    // Remove leading slash and "reports/" prefix if present
    const slug = urlPath.replace(/^\/reports\//, "").replace(/^\//, "")

    // Extract the hash (last segment after the last hyphen)
    // Format: domain-slug-hash, we want just the hash part
    const lastHyphenIndex = slug.lastIndexOf("-")

    if (lastHyphenIndex === -1) {
        // If no hyphen, assume the entire slug is the hash (backward compatibility)
        return slug || null
    }

    // Extract everything after the last hyphen as the hash
    const hash = slug.substring(lastHyphenIndex + 1)

    // Validate hash is alphanumeric
    if (!/^[a-zA-Z0-9]+$/.test(hash)) {
        return null
    }

    return hash || null
}
