import { relations } from "drizzle-orm/relations";
import { domains, domainSearchTerms, seoReports } from "./schema";

export const domainSearchTermsRelations = relations(domainSearchTerms, ({one}) => ({
	domain: one(domains, {
		fields: [domainSearchTerms.domain],
		references: [domains.domain]
	}),
}));

export const domainsRelations = relations(domains, ({many}) => ({
	domainSearchTerms: many(domainSearchTerms),
	seoReports: many(seoReports),
}));

export const seoReportsRelations = relations(seoReports, ({one}) => ({
	domain: one(domains, {
		fields: [seoReports.domain],
		references: [domains.domain]
	}),
}));