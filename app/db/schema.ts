import {
    pgTable,
    serial,
    text,
    boolean,
    timestamp,
    real,
    integer,
    jsonb,
    uniqueIndex,
    index
} from "drizzle-orm/pg-core"
import { relations } from "drizzle-orm"

export const domains = pgTable("domains", {
    id: serial("id").primaryKey(),
    domain: text("domain").notNull().unique(),
    searchQueryUsed: text("search_query_used").notNull(),
    industry: text("industry"),
    firstSeen: timestamp("first_seen", { withTimezone: false })
        .notNull()
        .defaultNow(),
    formFound: boolean("form_found"),
    submitted: boolean("submitted").default(false),
    messageType: text("message_type"),
    contactAttemptDate: timestamp("contact_attempt_date", {
        withTimezone: false
    }),
    contactEmail: text("contact_email"),
    contactPhone: text("contact_phone")
})

export const domainSearchTerms = pgTable("domain_search_terms", {
    id: serial("id").primaryKey(),
    domain: text("domain")
        .notNull()
        .references(() => domains.domain),
    searchTerm: text("search_term").notNull(),
    firstSeen: timestamp("first_seen", { withTimezone: false })
        .notNull()
        .defaultNow()
})

export const seoReports = pgTable("seo_reports", {
    id: serial("id").primaryKey(),
    domain: text("domain")
        .notNull()
        .references(() => domains.domain),
    analyzedAt: timestamp("analyzed_at", { withTimezone: false })
        .notNull()
        .defaultNow(),
    overallScore: real("overall_score"),
    lighthousePerformance: real("lighthouse_performance"),
    lighthouseAccessibility: real("lighthouse_accessibility"),
    lighthouseBestPractices: real("lighthouse_best_practices"),
    lighthouseSeo: real("lighthouse_seo"),
    lcp: real("lcp"),
    cls: real("cls"),
    inp: real("inp"),
    fcp: real("fcp"),
    ttfb: real("ttfb"),
    technicalSeoScore: real("technical_seo_score"),
    hasTitle: boolean("has_title"),
    titleContent: text("title_content"),
    hasMetaDescription: boolean("has_meta_description"),
    metaDescriptionContent: text("meta_description_content"),
    hasCanonical: boolean("has_canonical"),
    canonicalUrl: text("canonical_url"),
    hasRobotsTxt: boolean("has_robots_txt"),
    hasSitemapXml: boolean("has_sitemap_xml"),
    sitemapUrl: text("sitemap_url"),
    hasHreflang: boolean("has_hreflang"),
    hasStructuredData: boolean("has_structured_data"),
    structuredDataTypes: jsonb("structured_data_types"),
    securityScore: real("security_score"),
    isHttps: boolean("is_https"),
    sslValid: boolean("ssl_valid"),
    sslExpiryDays: integer("ssl_expiry_days"),
    hasHsts: boolean("has_hsts"),
    hasCsp: boolean("has_csp"),
    hasXFrameOptions: boolean("has_x_frame_options"),
    hasXContentTypeOptions: boolean("has_x_content_type_options"),
    securityHeaders: jsonb("security_headers"),
    contentQualityScore: real("content_quality_score"),
    wordCount: integer("word_count"),
    hasH1: boolean("has_h1"),
    h1Count: integer("h1_count"),
    h2Count: integer("h2_count"),
    imageCount: integer("image_count"),
    imagesWithAlt: integer("images_with_alt"),
    altTextCoverage: real("alt_text_coverage"),
    internalLinkCount: integer("internal_link_count"),
    externalLinkCount: integer("external_link_count"),
    mobileReadinessScore: real("mobile_readiness_score"),
    hasViewportMeta: boolean("has_viewport_meta"),
    viewportContent: text("viewport_content"),
    isMobileResponsive: boolean("is_mobile_responsive"),
    internationalSeoScore: real("international_seo_score"),
    detectedLanguage: text("detected_language"),
    hasCharsetDeclaration: boolean("has_charset_declaration"),
    charsetValue: text("charset_value"),
    hreflangTags: jsonb("hreflang_tags"),
    hasEnglishVersion: boolean("has_english_version"),
    trustSignalsScore: real("trust_signals_score"),
    hasContactPage: boolean("has_contact_page"),
    contactPageUrl: text("contact_page_url"),
    hasSocialLinks: boolean("has_social_links"),
    socialLinksFound: jsonb("social_links_found"),
    hasCertificationMentions: boolean("has_certification_mentions"),
    certificationsFound: jsonb("certifications_found"),
    hasPrivacyPolicy: boolean("has_privacy_policy"),
    hasTermsOfService: boolean("has_terms_of_service"),
    markdownReport: text("markdown_report").notNull(),
    analysisError: text("analysis_error"),
    analysisSuccessful: boolean("analysis_successful").notNull().default(false),
    socialPreviewScore: real("social_preview_score"),
    ogTitle: text("og_title"),
    ogDescription: text("og_description"),
    ogImage: text("og_image"),
    ogImageIsAbsolute: boolean("og_image_is_absolute"),
    twitterCard: text("twitter_card"),
    socialPreviewIssues: jsonb("social_preview_issues"),
    imageOptimizationScore: real("image_optimization_score"),
    totalImages: integer("total_images"),
    modernFormatCount: integer("modern_format_count"),
    modernFormatPercent: real("modern_format_percent"),
    lazyLoadedCount: integer("lazy_loaded_count"),
    missingLazyLoad: integer("missing_lazy_load"),
    aboveFoldLazyLoaded: integer("above_fold_lazy_loaded"),
    missingDimensions: integer("missing_dimensions"),
    brokenImages: jsonb("broken_images"),
    responsiveImages: integer("responsive_images"),
    linkHealthScore: real("link_health_score"),
    totalInternalLinks: integer("total_internal_links"),
    totalExternalLinks: integer("total_external_links"),
    brokenInternalLinksCount: integer("broken_internal_links_count"),
    brokenExternalLinksCount: integer("broken_external_links_count"),
    brokenInternalLinks: jsonb("broken_internal_links"),
    brokenExternalLinks: jsonb("broken_external_links"),
    redirectChainsCount: integer("redirect_chains_count"),
    nofollowLinks: integer("nofollow_links"),
    genericAnchors: integer("generic_anchors"),
    schemaAnalysisScore: real("schema_analysis_score"),
    schemasFound: jsonb("schemas_found"),
    totalSchemas: integer("total_schemas"),
    hasBreadcrumbs: boolean("has_breadcrumbs"),
    hasOrganization: boolean("has_organization"),
    hasFaq: boolean("has_faq"),
    hasArticle: boolean("has_article"),
    hasProduct: boolean("has_product"),
    hasLocalBusiness: boolean("has_local_business"),
    hasHowTo: boolean("has_how_to"),
    domainInfoScore: real("domain_info_score"),
    domainAge: real("domain_age"),
    domainCreationDate: text("domain_creation_date"),
    domainExpiryDate: text("domain_expiry_date"),
    daysUntilExpiry: integer("days_until_expiry"),
    registrar: text("registrar"),
    isExpiringSoon: boolean("is_expiring_soon"),
    sslGradeScore: real("ssl_grade_score"),
    sslGrade: text("ssl_grade"),
    sslProtocols: jsonb("ssl_protocols"),
    sslVulnerabilities: jsonb("ssl_vulnerabilities"),
    sslChainIssues: jsonb("ssl_chain_issues"),
    safeBrowsingScore: real("safe_browsing_score"),
    isSafe: boolean("is_safe"),
    threatTypes: jsonb("threat_types"),
    titleLength: integer("title_length"),
    titleTooLong: boolean("title_too_long"),
    descriptionLength: integer("description_length"),
    descriptionTooLong: boolean("description_too_long"),
    metaRobots: text("meta_robots"),
    isNoIndex: boolean("is_no_index"),
    isNoFollow: boolean("is_no_follow"),
    headingHierarchyValid: boolean("heading_hierarchy_valid"),
    headingHierarchyIssues: jsonb("heading_hierarchy_issues"),
    h3Count: integer("h3_count"),
    h4Count: integer("h4_count"),
    h5Count: integer("h5_count"),
    h6Count: integer("h6_count"),
    readabilityScore: real("readability_score"),
    readabilityGrade: text("readability_grade"),
    paragraphCount: integer("paragraph_count"),
    avgParagraphLength: real("avg_paragraph_length"),
    sentenceCount: integer("sentence_count"),
    avgSentenceLength: real("avg_sentence_length"),
    listCount: integer("list_count"),
    tableCount: integer("table_count"),
    videoCount: integer("video_count"),
    iframeCount: integer("iframe_count"),
    hasFaqSection: boolean("has_faq_section"),
    hasTableOfContents: boolean("has_table_of_contents"),
    analyzerErrors: jsonb("analyzer_errors")
})

export const domainsRelations = relations(domains, ({ many }) => ({
    searchTerms: many(domainSearchTerms),
    seoReports: many(seoReports)
}))

export const domainSearchTermsRelations = relations(
    domainSearchTerms,
    ({ one }) => ({
        domainRef: one(domains, {
            fields: [domainSearchTerms.domain],
            references: [domains.domain]
        })
    })
)

export const seoReportsRelations = relations(seoReports, ({ one }) => ({
    domainRef: one(domains, {
        fields: [seoReports.domain],
        references: [domains.domain]
    })
}))
