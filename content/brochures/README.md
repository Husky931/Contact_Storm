# Brochures Content Directory

This directory contains markdown files for brochure-style pages.

## Structure

- Each markdown file in this directory can be accessed via a corresponding route
- The route name matches the filename (without `.md` extension)
- Example: `brochure.md` → `/brochure` route

## Adding a New Brochure Page

1. Create a new `.md` file in this directory (e.g., `services.md`)
2. Create a corresponding route page in `app/(pages)/[route-name]/page.tsx`
3. Use the `getMarkdownContent()` utility from `@/lib/content` to read the file
4. Display it using the `MarkdownContent` component

### Example

**File:** `content/brochures/services.md`
```markdown
# Our Services
...
```

**Route:** `app/(pages)/services/page.tsx`
```tsx
import { getMarkdownContent } from "@/lib/content"
import MarkdownContent from "@/components/MarkdownContent"

export default function ServicesPage() {
    const content = getMarkdownContent("services")
    return (
        <div className="bg-background text-text min-h-screen">
            <div className="mx-auto max-w-5xl px-6 py-12">
                <MarkdownContent content={content} />
            </div>
        </div>
    )
}
```

## Available Files

- `brochure.md` - Main brochure page (accessible at `/brochure`)
