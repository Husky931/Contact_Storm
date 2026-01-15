import { relations } from "drizzle-orm/relations";
import { domains, domainSearchTerms, contactAttempts, seoReports } from "./schema";

export const domainSearchTermsRelations = relations(domainSearchTerms, ({one}) => ({
	domain: one(domains, {
		fields: [domainSearchTerms.domain],
		references: [domains.domain]
	}),
}));

export const domainsRelations = relations(domains, ({many}) => ({
	domainSearchTerms: many(domainSearchTerms),
	contactAttempts: many(contactAttempts),
	seoReports: many(seoReports),
}));

export const contactAttemptsRelations = relations(contactAttempts, ({one}) => ({
	domain: one(domains, {
		fields: [contactAttempts.domain],
		references: [domains.domain]
	}),
	seoReport: one(seoReports, {
		fields: [contactAttempts.seoReportUrlHash],
		references: [seoReports.urlHash]
	}),
}));

export const seoReportsRelations = relations(seoReports, ({one, many}) => ({
	contactAttempts: many(contactAttempts),
	domain: one(domains, {
		fields: [seoReports.domain],
		references: [domains.domain]
	}),
}));