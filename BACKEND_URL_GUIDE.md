# Backend Developer Guide: Generating SEO Report URLs

## Quick Summary

Your backend needs to generate URLs in this format:
```
/reports/{domain-slug}-{urlHash}
```

Where:
- `domain-slug` = domain with dots replaced by hyphens, lowercase
- `urlHash` = the value from `seo_reports.url_hash` column

## Implementation

### Python Example

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

# Usage example:
domain = "www.feetech.cn"
url_hash = "mxkDJoBs78Q8"
report_url = generate_report_url(domain, url_hash)
# Returns: "/reports/www-feetech-cn-mxkDJoBs78Q8"
```

### JavaScript/Node.js Example

```javascript
function generateReportUrl(domain, urlHash) {
    const domainSlug = domain.replace(/\./g, "-").toLowerCase();
    return `/reports/${domainSlug}-${urlHash}`;
}

// Usage example:
const domain = "www.feetech.cn";
const urlHash = "mxkDJoBs78Q8";
const reportUrl = generateReportUrl(domain, urlHash);
// Returns: "/reports/www-feetech-cn-mxkDJoBs78Q8"
```

## Real Example from Your Database

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

## What to Do

1. **When creating a new SEO report:**
   - Generate a unique `url_hash` (see options below)
   - Store it in the `url_hash` column
   - Use the formula above to generate the URL

2. **When returning SEO report data:**
   - Include the generated `report_url` in your API response
   - Users can copy/paste this URL directly into their browser

3. **Example API Response:**
```json
{
    "id": 123,
    "domain": "www.feetech.cn",
    "url_hash": "mxkDJoBs78Q8",
    "report_url": "/reports/www-feetech-cn-mxkDJoBs78Q8",
    "overall_score": 85.5,
    "analyzed_at": "2024-01-15T10:30:00Z"
}
```

## Generating Unique url_hash Values

When creating new SEO reports, generate a unique hash:

**Option 1: UUID-based (Recommended)**
```python
import uuid

url_hash = uuid.uuid4().hex[:16]  # 16-character hex string
```

**Option 2: Random alphanumeric**
```python
import secrets
import string

url_hash = ''.join(secrets.choice(string.ascii_letters + string.digits) for _ in range(16))
```

**Important**: The `url_hash` must be unique (database enforces this). Handle collisions by checking if hash exists before saving.

## Important Notes

- ✅ Store ONLY the hash in `url_hash` column (e.g., `mxkDJoBs78Q8`)
- ✅ Generate the full URL using the formula when needed
- ✅ Include the generated URL in API responses
- ❌ Do NOT store the full URL path in the database
- ❌ Do NOT include the domain in the `url_hash` value

## Testing

Test your URL generation:
1. Take a domain from your database: `www.feetech.cn`
2. Take the `url_hash`: `mxkDJoBs78Q8`
3. Generate URL: `/reports/www-feetech-cn-mxkDJoBs78Q8`
4. Paste in browser: `http://localhost:3000/reports/www-feetech-cn-mxkDJoBs78Q8`
5. Should display the report!
