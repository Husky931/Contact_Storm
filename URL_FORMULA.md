# SEO Report URL Formula

## URL Format

The SEO report URLs follow this format:

```
/reports/{domain-slug}-{urlHash}
```

## Components

### Domain Slug

- **Source**: `domain` field from `seo_reports` table
- **Transformation**: Replace all dots (`.`) with hyphens (`-`) and convert to lowercase
- **Example**: `example.com` → `example-com`
- **Example**: `subdomain.example.com` → `subdomain-example-com`

### URL Hash

- **Source**: `url_hash` field from `seo_reports` table
- **Format**: Alphanumeric string (letters and numbers only)
- **Example**: `abc123def456`

## Complete URL Examples

1. **Domain**: `example.com`
   **Hash**: `abc123def456`
   **URL**: `/reports/example-com-abc123def456`

2. **Domain**: `test-site.com`
   **Hash**: `xyz789`
   **URL**: `/reports/test-site-com-xyz789`

3. **Domain**: `subdomain.example.org`
   **Hash**: `hash123abc`
   **URL**: `/reports/subdomain-example-org-hash123abc`

## Implementation Formula

```javascript
// JavaScript example
function generateReportUrl(domain, urlHash) {
    const domainSlug = domain.replace(/\./g, "-").toLowerCase()
    return `/reports/${domainSlug}-${urlHash}`
}
```

## Parsing the URL

To extract the hash from a URL:

1. Remove `/reports/` prefix
2. Find the last hyphen (`-`) in the remaining string
3. Everything after the last hyphen is the `url_hash`
4. Everything before the last hyphen is the domain slug (convert back by replacing `-` with `.`)

**Example:**

- URL: `/reports/example-com-abc123def456`
- After removing prefix: `example-com-abc123def456`
- Last hyphen position: after `example-com`
- Hash: `abc123def456`
- Domain slug: `example-com` → Domain: `example.com`

## Database Query

To find a report by URL:

```sql
SELECT * FROM seo_reports WHERE url_hash = 'abc123def456';
```

**Note**: PostgreSQL text comparisons are case-sensitive. Make sure the `url_hash` value matches exactly (including case).

## Backend Implementation

### Generating Report URLs (Backend)

When your backend creates or returns SEO report data, generate the full URL using this formula:

**Python Example:**
```python
def generate_report_url(domain: str, url_hash: str) -> str:
    """
    Generate the full report URL for frontend.
    
    Args:
        domain: Domain name from database (e.g., "www.feetech.cn")
        url_hash: Hash value from url_hash column (e.g., "mxkDJoBs78Q8")
    
    Returns:
        Full URL path (e.g., "/reports/www-feetech-cn-mxkDJoBs78Q8")
    """
    domain_slug = domain.replace(".", "-").lower()
    return f"/reports/{domain_slug}-{url_hash}"

# Example usage:
domain = "www.feetech.cn"
url_hash = "mxkDJoBs78Q8"
report_url = generate_report_url(domain, url_hash)
# Returns: "/reports/www-feetech-cn-mxkDJoBs78Q8"

# Full URL (if you need absolute URL):
base_url = "https://yourdomain.com"
full_url = f"{base_url}{report_url}"
# Returns: "https://yourdomain.com/reports/www-feetech-cn-mxkDJoBs78Q8"
```

**JavaScript/Node.js Example:**
```javascript
function generateReportUrl(domain, urlHash) {
    const domainSlug = domain.replace(/\./g, "-").toLowerCase();
    return `/reports/${domainSlug}-${urlHash}`;
}

// Example usage:
const domain = "www.feetech.cn";
const urlHash = "mxkDJoBs78Q8";
const reportUrl = generateReportUrl(domain, urlHash);
// Returns: "/reports/www-feetech-cn-mxkDJoBs78Q8"
```

### Including URL in API Response

When returning SEO report data from your API, include the generated URL:

```python
# Example API response
{
    "id": 123,
    "domain": "www.feetech.cn",
    "url_hash": "mxkDJoBs78Q8",
    "report_url": "/reports/www-feetech-cn-mxkDJoBs78Q8",  # Include this!
    "overall_score": 85.5,
    "analyzed_at": "2024-01-15T10:30:00Z",
    # ... other fields
}
```

## Real-World Example

**Database Record:**
- `domain`: `www.feetech.cn`
- `url_hash`: `mxkDJoBs78Q8`

**Generated URL:**
```
/reports/www-feetech-cn-mxkDJoBs78Q8
```

**Full URL (for sharing):**
```
https://yourdomain.com/reports/www-feetech-cn-mxkDJoBs78Q8
```

Users can paste this URL directly into their browser to view the report.

## Notes

- The `url_hash` field is **unique** in the database (enforced by unique constraint)
- The domain slug is included in the URL for SEO and readability purposes
- The hash is always the last segment after the final hyphen
- All domains are converted to lowercase in the slug
- **Important**: Store only the hash in `url_hash` column (e.g., `mxkDJoBs78Q8`), NOT the full URL path
- The frontend will extract the hash from the URL and query the database using `WHERE url_hash = 'extracted_hash'`
