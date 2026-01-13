export type LocalizedString = {
    en: string
    zh: string
}

export interface BlogPost {
    id: string
    title: LocalizedString
    slug: string
    content: LocalizedString
    image: string
    author: string
    date: Date
    excerpt?: LocalizedString
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

function generateLocalizedExcerpt(content: LocalizedString): LocalizedString {
    return {
        en: generateExcerpt(content.en),
        zh: generateExcerpt(content.zh)
    }
}

// Sample blog posts data
export const blogPosts: BlogPost[] = [
    {
        id: "1",
        title: {
            en: "Building a Global-Ready Brand for Chinese Manufacturers",
            zh: "为中国制造商打造全球化品牌"
        },
        slug: generateSlug("Building a Global-Ready Brand for Chinese Manufacturers"),
        image: "/images/factory.webp",
        author: getRandomAuthor(),
        content: {
            en: `# Building a Global-Ready Brand for Chinese Manufacturers

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
            zh: `# 为中国制造商打造全球化品牌

许多中国制造商拥有世界级产能，但在海外市场仍缺少品牌故事。全球化品牌能向不熟悉你工厂的买家明确传达价值、质量与可信度。

## 传达价值，而不只是翻译文字

海外买家关注收益、证据与风险降低。我们围绕结果、认证和质检重塑表达，让英文信息更可信。

## 建立一致的品牌形象

Logo 用法、配色与语气应在官网、画册与亚马逊 Listing 中保持一致。一致性能减少疑虑并加快决策。

## 在正确的位置展示证明

案例、产能与质检照片应放在买家评估供应商的页面。我们将证明映射到购买旅程的每个阶段。

## 让买家更容易联系你

清晰的 CTA、快速表单与本地化响应预期能减少优质线索流失。

## 最后的想法

一个全球化品牌让海外买家觉得你的工厂熟悉、可靠、合作门槛低。`
        },
        date: randomDate()
    },
    {
        id: "2",
        title: {
            en: "Export Seller Playbook: Positioning for Amazon and Shopify",
            zh: "外贸卖家打法：亚马逊与 Shopify 定位"
        },
        slug: generateSlug("Export Seller Playbook: Positioning for Amazon and Shopify"),
        image: "/images/chinese_businessmen.webp",
        author: getRandomAuthor(),
        content: {
            en: `# Export Seller Playbook: Positioning for Amazon and Shopify

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
            zh: `# 外贸卖家打法：亚马逊与 Shopify 定位

海外平台更奖励清晰与信任。中国卖家要赢，不仅靠价格，更要在不同地区用买家思维定位产品。

## 从单一买家画像开始

选择一个清晰细分人群，并围绕其使用场景搭建 Listing，可提升转化与评价。

## 本地化你的 Listing 组合

标题、卖点与图片要匹配当地语言习惯与合规要求。我们重写文案并重做视觉以符合平台标准。

## 在平台之外建立品牌层

独立落地页、邮件流程与社会证明可以降低算法波动影响并带来复购。

## 证明履约与支持能力

明确的物流时效、退换与质保信息能减少差评并提升转化。

## 最后的想法

定位决定你是在价格上竞争，还是以品牌赢得利润。`
        },
        date: randomDate()
    },
    {
        id: "3",
        title: {
            en: "B2B Lead Generation for OEM and ODM Factories",
            zh: "OEM 与 ODM 工厂的 B2B 线索获取"
        },
        slug: generateSlug("B2B Lead Generation for OEM and ODM Factories"),
        image: "/images/industry-1.jpg",
        author: getRandomAuthor(),
        content: {
            en: `# B2B Lead Generation for OEM and ODM Factories

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
            zh: `# OEM 与 ODM 工厂的 B2B 线索获取

大多数 OEM 与 ODM 买家在询价前会长时间研究。我们搭建线索引擎，提前捕获需求。

## 贴合买家搜索习惯

买家常用 factory、manufacturer、OEM 等关键词搜索。我们通过产品页、认证与产能信息覆盖这些词。

## 产出能销售的技术内容

规格、材料与公差很关键。我们把技术数据转成买家友好的页面和可下载 PDF。

## 以信任与速度获取线索

RFQ 表单应短而清晰。加入资料下载与自动回复，缩短首次响应时间。

## 用智能跟进筛选线索

邮件序列与 LinkedIn 触达可把早期兴趣转化为真实 RFQ。

## 最后的想法

管道越早启动，越能拿下更多合同并占据谈判优势。`
        },
        date: randomDate()
    },
    {
        id: "4",
        title: {
            en: "Localization That Converts: From Product Sheets to Websites",
            zh: "高转化本地化：从产品资料到网站"
        },
        slug: generateSlug("Localization That Converts: From Product Sheets to Websites"),
        image: "/images/industry-2.jpg",
        author: getRandomAuthor(),
        content: {
            en: `# Localization That Converts: From Product Sheets to Websites

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
            zh: `# 高转化本地化：从产品资料到网站

本地化不只是翻译，更是减少海外买家摩擦，让你的方案看起来“本地原生”。

## 调整语气与结构

西方买家期待直接表达、清晰收益与可见证明。我们重新组织页面结构以匹配这些期待。

## 本地标准与认证

尽早展示认证与合规信息，可缩短买家与采购团队评估周期。

## 视觉语言同样重要

图片应突出使用场景，而不只是工厂照片。我们加入示意图、尺寸与真实应用图。

## 区域化 UX 习惯

导航、表单与 CTA 应符合当地习惯，提升转化与信任。

## 最后的想法

本地化让你的业务在每个市场都显得可靠、可接近。`
        },
        date: randomDate()
    },
    {
        id: "5",
        title: {
            en: "Trust Signals That Win Overseas Buyers",
            zh: "赢得海外买家的信任信号"
        },
        slug: generateSlug("Trust Signals That Win Overseas Buyers"),
        image: "/images/industry-3.jpg",
        author: getRandomAuthor(),
        content: {
            en: `# Trust Signals That Win Overseas Buyers

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
            zh: `# 赢得海外买家的信任信号

海外买家在选择新供应商时更谨慎。信任信号能降低感知风险并加速决策。

## 清晰展示生产与质检

工厂照片、检验流程与第三方审计能建立信心。我们把这些放在买家比较供应商的关键页面。

## 发布案例

简短案例能展示真实结果并证明能力，重点突出交期、质量与交付。

## 提供透明政策

清晰条款、质保与售后支持可以减少顾虑与来回沟通。

## 使用可识别的认证

展示 ISO、CE、FDA 或行业认证，并附简短说明。

## 最后的想法

信任是转化杠杆，可见度越高，买家越快下单且价值更高。`
        },
        date: randomDate()
    },
    {
        id: "6",
        title: {
            en: "Scaling Cross-Border Ads Without Wasting Budget",
            zh: "不浪费预算的跨境广告增长"
        },
        slug: generateSlug("Scaling Cross-Border Ads Without Wasting Budget"),
        image: "/images/service-1.jpg",
        author: getRandomAuthor(),
        content: {
            en: `# Scaling Cross-Border Ads Without Wasting Budget

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
            zh: `# 不浪费预算的跨境广告增长

当广告围绕买家意图与精简落地页漏斗搭建时，中国制造商与海外卖家的投放能实现可观回报。

## 按意图区分市场

搜索广告针对购买意图，社交广告负责认知。我们避免混用目标与预算。

## 为不同地区建立落地页

本地化落地页能提升转化并降低单条线索成本，同时明确合规与物流信息。

## 关注点击之外的数据

追踪合格线索与 RFQ，而非仅看流量。我们打通广告与 CRM/报价系统。

## 持续迭代创意

围绕质量、MOQ 与交期测试信息，找到最有共鸣的表达。

## 最后的想法

当广告与落地页都围绕海外买家预期设计，效率会显著提升。`
        },
        date: randomDate()
    },
    {
        id: "7",
        title: {
            en: "Website Architecture for Overseas Buyers and Distributors",
            zh: "面向海外买家与分销商的网站架构"
        },
        slug: generateSlug("Website Architecture for Overseas Buyers and Distributors"),
        image: "/images/service-2.jpg",
        author: getRandomAuthor(),
        content: {
            en: `# Website Architecture for Overseas Buyers and Distributors

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
            zh: `# 面向海外买家与分销商的网站架构

你的网站需要同时打动决策者与技术评估者。结构应引导他们从了解走向 RFQ。

## 打造买家优先的主页

先说清楚你生产什么、服务谁、为何值得信任，避免冗长的企业介绍。

## 建立产品集群

按行业与应用场景分组，帮助买家快速找到所需产品。

## 提供分销资源

为渠道伙伴提供画册、规格与定价指引，加快上手速度。

## 使用多语言 SEO

英文应针对海外搜索习惯优化，我们提供本地化的元数据与结构化数据。

## 最后的想法

清晰的网站架构能减少困惑并提升高质量询盘。`
        },
        date: randomDate()
    },
    {
        id: "8",
        title: {
            en: "From Trade Shows to Digital Pipeline",
            zh: "从展会到数字化线索管道"
        },
        slug: generateSlug("From Trade Shows to Digital Pipeline"),
        image: "/images/service-3.jpg",
        author: getRandomAuthor(),
        content: {
            en: `# From Trade Shows to Digital Pipeline

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
            zh: `# 从展会到数字化线索管道

展会能带来兴趣，但没有数字化跟进，大多数线索会冷却。我们帮助把展会联系人转化为持续收入。

## 实时获取线索

使用二维码落地页与移动表单在现场收集干净数据。

## 发送本地化跟进

按市场分组，以合适语言与证明素材发送跟进邮件。

## 通过再营销建立可信度

在再营销广告中展示案例、认证与产能。

## 保持简洁的培育流程

3 到 5 封邮件序列可在买家评估期间持续保持存在感。

## 最后的想法

数字化跟进让展会投入转化为可量化的销售管道。`
        },
        date: randomDate()
    },
    {
        id: "9",
        title: {
            en: "Pricing Pages That Protect Margin for Overseas Sellers",
            zh: "保护海外卖家利润的定价页面"
        },
        slug: generateSlug("Pricing Pages That Protect Margin for Overseas Sellers"),
        image: "/images/service-4.jpg",
        author: getRandomAuthor(),
        content: {
            en: `# Pricing Pages That Protect Margin for Overseas Sellers

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
            zh: `# 保护海外卖家利润的定价页面

价格不仅是数字，更是质量与信任信号。对海外卖家而言，合适的定价页面能保护利润并减少议价。

## 用价值做锚点

展示质保、服务与质量保障，为价格提供理由。

## 提供清晰的分层方案

分层报价帮助买家在预算与价值间做匹配，而非一味压低价格。

## 添加买家友好的对比

简明对比表能说明你的方案更安全可靠。

## 提前说明物流

在下单或询价前明确物流、退换与交期。

## 最后的想法

结构清晰的定价既能保持竞争力，也能保护利润。`
        },
        date: randomDate()
    }
].map((post) => ({
    ...post,
    excerpt: generateLocalizedExcerpt(post.content)
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
