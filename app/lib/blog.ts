export interface BlogPost {
    id: string
    title: string
    slug: string
    content: string
    image: string
    author: string
    date: Date
    excerpt?: string
}

// Generate slug from title
export function generateSlug(title: string): string {
    return title
        .toLowerCase()
        .replace(/[^\w\s-]/g, "")
        .replace(/\s+/g, "-")
        .replace(/-+/g, "-")
        .trim()
}

// Generate random date between Jan 6, 2026 and Jan 1, 2021
function randomDate(): Date {
    const start = new Date("2021-01-01").getTime()
    const end = new Date("2026-01-06").getTime()
    const randomTime = start + Math.random() * (end - start)
    return new Date(randomTime)
}

// Authors
const authors = ["Lucas Meyer", "Ava Patel", "Noah Alvarez"]

// Get random author
function getRandomAuthor(): string {
    return authors[Math.floor(Math.random() * authors.length)]
}

// Generate excerpt from content
function generateExcerpt(content: string, maxLength: number = 150): string {
    const text = content.replace(/[#*`]/g, "").trim()
    if (text.length <= maxLength) return text
    return text.substring(0, maxLength).trim() + "..."
}

// Sample blog posts data
export const blogPosts: BlogPost[] = [
    {
        id: "1",
        title: "Building a Global-Ready Brand for Chinese Manufacturers",
        slug: generateSlug(
            "Building a Global-Ready Brand for Chinese Manufacturers"
        ),
        image: "/images/factory.webp",
        author: getRandomAuthor(),
        content: `# Building a Global-Ready Brand for Chinese Manufacturers

Many Chinese manufacturers have world class production, but their brand story is still missing in overseas markets. A global ready brand clarifies value, quality, and credibility for buyers who do not know your factory yet.

## Translate the value, not just the words

Overseas buyers respond to benefits, proof, and risk reduction. We rebuild messaging around outcomes, certifications, and quality control so the offer feels credible in English.

## Build a consistent identity

Logo usage, color, and tone should be consistent across your website, catalogs, and Amazon listings. Consistency reduces doubt and speeds up decisions.

## Show proof in the right places

Case studies, production capacity, and QA photos belong in the pages where buyers evaluate suppliers. We map proof to each stage of the buying journey.

## Make it easy to contact you

Clear CTAs, quick forms, and local response expectations reduce drop off from qualified leads.

## Final thought

A global ready brand makes your factory feel familiar, reliable, and easy to work with for overseas buyers.`,
        date: randomDate()
    },
    {
        id: "2",
        title: "Export Seller Playbook: Positioning for Amazon and Shopify",
        slug: generateSlug(
            "Export Seller Playbook: Positioning for Amazon and Shopify"
        ),
        image: "/images/chinese_businessmen.webp",
        author: getRandomAuthor(),
        content: `# Export Seller Playbook: Positioning for Amazon and Shopify

Overseas marketplaces reward clarity and trust. Sellers from China can win by positioning products for the buyer mindset in each region, not just by price.

## Start with a single buyer persona

Choose a focused segment and build listings around their use case. This improves conversion and reviews.

## Localize your listing stack

Titles, bullets, and images must match local language patterns and compliance rules. We rewrite copy and redesign graphics to meet platform standards.

## Build a brand layer outside the marketplace

Landing pages, email flows, and social proof protect you from algorithm changes and create repeat customers.

## Prove delivery and support

Clear shipping times, returns, and warranty information reduce negative reviews and increase conversions.

## Final thought

Positioning is the difference between a product that competes on price and a brand that earns margin.`,
        date: randomDate()
    },
    {
        id: "3",
        title: "B2B Lead Generation for OEM and ODM Factories",
        slug: generateSlug("B2B Lead Generation for OEM and ODM Factories"),
        image: "/images/industry-1.jpg",
        author: getRandomAuthor(),
        content: `# B2B Lead Generation for OEM and ODM Factories

Most OEM and ODM buyers do research long before they request a quote. We build a lead engine that captures this demand early.

## Optimize for supplier search behavior

Buyers search with terms like factory, manufacturer, and OEM. We target those keywords with product pages, certifications, and capacity details.

## Create technical content that sells

Specifications, materials, and tolerances matter. We turn your technical data into buyer friendly pages and downloadable PDFs.

## Capture leads with trust and speed

RFQ forms should be short and clear. We add lead magnets and response automation to reduce time to first reply.

## Qualify with smart follow up

Email sequences and LinkedIn outreach turn early interest into real RFQs.

## Final thought

When the pipeline starts earlier, you win more contracts and negotiate from a stronger position.`,
        date: randomDate()
    },
    {
        id: "4",
        title: "Localization That Converts: From Product Sheets to Websites",
        slug: generateSlug(
            "Localization That Converts: From Product Sheets to Websites"
        ),
        image: "/images/industry-2.jpg",
        author: getRandomAuthor(),
        content: `# Localization That Converts: From Product Sheets to Websites

Localization is more than translation. It is about removing friction for overseas buyers and making your offer feel native.

## Adapt tone and structure

Western buyers expect direct statements, clear benefits, and visible proof. We restructure pages to match those expectations.

## Local standards and certifications

Highlight certifications and compliance early. It shortens the evaluation cycle for buyers and procurement teams.

## Visual language matters

Graphics should focus on use cases, not factory shots alone. We add diagrams, measurements, and real world application images.

## Regional UX patterns

Navigation, forms, and CTAs should follow local UX habits. This improves conversions and trust.

## Final thought

Localization makes your business feel present and reliable in every market you serve.`,
        date: randomDate()
    },
    {
        id: "5",
        title: "Trust Signals That Win Overseas Buyers",
        slug: generateSlug("Trust Signals That Win Overseas Buyers"),
        image: "/images/industry-3.jpg",
        author: getRandomAuthor(),
        content: `# Trust Signals That Win Overseas Buyers

Overseas buyers are cautious when sourcing from new suppliers. Trust signals reduce perceived risk and accelerate decision making.

## Show production and QA clearly

Factory photos, inspection processes, and third party audits create confidence. We place these where buyers compare suppliers.

## Publish case studies

Short case studies show real results and prove capability. Focus on lead time, quality, and delivery.

## Offer transparent policies

Clear terms, warranty, and post sale support remove fear and reduce back and forth.

## Use recognizable certifications

Show relevant ISO, CE, FDA, or industry certificates with short explanations for buyers.

## Final thought

Trust is a conversion lever. When it is visible, buyers commit faster and at higher value.`,
        date: randomDate()
    },
    {
        id: "6",
        title: "Scaling Cross-Border Ads Without Wasting Budget",
        slug: generateSlug("Scaling Cross-Border Ads Without Wasting Budget"),
        image: "/images/service-1.jpg",
        author: getRandomAuthor(),
        content: `# Scaling Cross-Border Ads Without Wasting Budget

Paid media can be profitable for Chinese manufacturers and overseas sellers when it is built around buyer intent and a tight landing funnel.

## Separate markets by intent

Search campaigns target buyer intent, while social builds awareness. We avoid mixing objectives and budgets.

## Build landing pages for each region

Localized landing pages improve conversion and reduce cost per lead. We also add compliance and shipping clarity.

## Measure beyond clicks

Track qualified leads and RFQs, not just traffic. We connect ads to CRM and quote systems.

## Iterative creative testing

We test messaging around quality, MOQ, and lead time to find what resonates most.

## Final thought

Efficiency grows when ads and landing pages are designed for overseas buyer expectations.`,
        date: randomDate()
    },
    {
        id: "7",
        title: "Website Architecture for Overseas Buyers and Distributors",
        slug: generateSlug(
            "Website Architecture for Overseas Buyers and Distributors"
        ),
        image: "/images/service-2.jpg",
        author: getRandomAuthor(),
        content: `# Website Architecture for Overseas Buyers and Distributors

Your website must speak to both decision makers and technical evaluators. The structure should guide them from discovery to RFQ.

## Create a buyer first homepage

Lead with what you manufacture, who you serve, and why you are trusted. Avoid long company introductions.

## Build product clusters

Group products by industry and application to help buyers find what they need fast.

## Add distributor resources

Provide brochures, specs, and pricing guidance for channel partners. It speeds up onboarding.

## Use multilingual SEO

English should be optimized for overseas search behavior. We implement localized metadata and structured data.

## Final thought

A clear architecture reduces confusion and increases qualified inquiries.`,
        date: randomDate()
    },
    {
        id: "8",
        title: "From Trade Shows to Digital Pipeline",
        slug: generateSlug("From Trade Shows to Digital Pipeline"),
        image: "/images/service-3.jpg",
        author: getRandomAuthor(),
        content: `# From Trade Shows to Digital Pipeline

Trade shows generate interest, but most leads go cold without a digital follow up plan. We help turn those contacts into ongoing revenue.

## Capture leads in real time

Use QR landing pages and mobile forms to collect clean data on site.

## Send localized follow ups

Segment by market and send follow up emails with the right language and proof assets.

## Retarget with credibility

Show case studies, certifications, and production capability in retargeting ads.

## Maintain a simple nurture flow

A 3 to 5 email sequence keeps you top of mind while buyers evaluate options.

## Final thought

Digital follow up turns trade show spend into measurable sales pipeline.`,
        date: randomDate()
    },
    {
        id: "9",
        title: "Pricing Pages That Protect Margin for Overseas Sellers",
        slug: generateSlug(
            "Pricing Pages That Protect Margin for Overseas Sellers"
        ),
        image: "/images/service-4.jpg",
        author: getRandomAuthor(),
        content: `# Pricing Pages That Protect Margin for Overseas Sellers

Pricing is not just a number. It is a signal of quality and trust. For overseas sellers, the right pricing page can protect margin and reduce negotiation.

## Anchor with value

Show quality assurance, warranties, and service to justify pricing.

## Offer clear tiers

Tiered offers help buyers match budget with value without pushing everything to the lowest price.

## Add buyer friendly comparisons

Simple comparison tables show why your offer is the safer choice.

## Explain logistics up front

Shipping, returns, and lead times should be visible before checkout or inquiry.

## Final thought

Well structured pricing keeps you competitive while protecting profit.`,
        date: randomDate()
    }
].map((post) => ({
    ...post,
    excerpt: generateExcerpt(post.content)
}))

// Get all blog posts sorted by date (newest first)
export function getAllBlogPosts(): BlogPost[] {
    return [...blogPosts].sort((a, b) => b.date.getTime() - a.date.getTime())
}

// Get blog post by slug
export function getBlogPostBySlug(slug: string): BlogPost | undefined {
    return blogPosts.find((post) => post.slug === slug)
}

// Get related posts (excluding current post)
export function getRelatedPosts(
    currentPostSlug: string,
    count: number = 3
): BlogPost[] {
    const currentPost = getBlogPostBySlug(currentPostSlug)
    if (!currentPost) return []

    const otherPosts = blogPosts.filter((post) => post.slug !== currentPostSlug)
    // Shuffle and take random posts
    const shuffled = [...otherPosts].sort(() => Math.random() - 0.5)
    return shuffled.slice(0, count)
}
