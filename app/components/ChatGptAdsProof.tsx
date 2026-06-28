"use client"

import { useLanguage } from "@/components/LanguageProvider"

/**
 * Campaign rows shown in the recreated Ads Manager window.
 * Numbers mirror our real beta account; names are withheld for client
 * confidentiality (matching how they appear blurred in the live dashboard).
 */
const CAMPAIGNS = [
    {
        name: "Campaign · confidential",
        active: false,
        serving: false,
        type: "Clicks",
        spend: "—",
        impressions: "—",
        clicks: "—",
        ctr: "—",
        cpc: "—"
    },
    {
        name: "Campaign · confidential",
        active: true,
        serving: true,
        type: "Clicks",
        spend: "$7,761.43",
        impressions: "125,000",
        clicks: "3,000",
        ctr: "2.40%",
        cpc: "$2.59"
    },
    {
        name: "Campaign · confidential",
        active: true,
        serving: true,
        type: "Clicks",
        spend: "$2,221.21",
        impressions: "87,000",
        clicks: "1,000",
        ctr: "1.15%",
        cpc: "$2.22"
    }
]

function Toggle({ on }: { on: boolean }) {
    return (
        <span
            className={`inline-flex h-4 w-7 shrink-0 items-center rounded-full px-0.5 transition-colors ${on ? "justify-end bg-[#0a84ff]" : "justify-start bg-gray-300"
                }`}
            aria-hidden="true"
        >
            <span className="h-3 w-3 rounded-full bg-white shadow-sm" />
        </span>
    )
}

function StatusCell({ serving }: { serving: boolean }) {
    return (
        <span className="inline-flex items-center gap-1.5 whitespace-nowrap">
            <span
                className={`h-1.5 w-1.5 rounded-full ${serving ? "bg-emerald-500" : "bg-red-500"
                    }`}
            />
            <span className={serving ? "text-gray-700" : "text-gray-400"}>
                {serving ? "Serving" : "Not serving"}
            </span>
        </span>
    )
}

export default function ChatGptAdsProof() {
    const { language, translations } = useLanguage()
    const copy = translations[language].chatgptAdsProof

    return (
        <section className="bg-linear-to-b from-primary-navy via-[#141d2b] to-background-dark text-white">
            <div className="mx-auto max-w-6xl px-6 py-20 lg:py-24">
                {/* Header */}
                <div className="mx-auto max-w-3xl text-center">
                    <h2 className="font-heading mt-5 text-3xl font-bold leading-[1.1] sm:text-4xl lg:text-5xl">
                        {copy.title}
                    </h2>
                    <p className="mt-5 text-base leading-relaxed text-white/70 sm:text-lg">
                        {copy.intro}
                    </p>
                </div>

                {/* Recreated Ads Manager window */}
                <div className="mt-12 overflow-hidden rounded-2xl bg-white text-gray-900 shadow-2xl ring-1 ring-black/10">
                    {/* Window chrome */}
                    <div className="flex items-center justify-between gap-4 border-b border-gray-200 bg-gray-50/80 px-4 py-3 sm:px-5">
                        <div className="flex items-center gap-2.5">
                            <span className="flex h-6 w-6 items-center justify-center rounded-full bg-black text-[11px] font-bold text-white">
                                ⦿
                            </span>
                            <span className="text-sm font-semibold text-gray-900">
                                Ads Manager
                            </span>
                            <span className="rounded-md border border-gray-300 bg-white px-1.5 py-0.5 text-[10px] font-semibold tracking-wide text-gray-500 uppercase">
                                Beta
                            </span>
                        </div>
                        <span className="hidden items-center gap-2 rounded-lg border border-gray-200 bg-white px-3 py-1.5 text-xs font-medium text-gray-600 sm:inline-flex">
                            <svg
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="2"
                                className="h-3.5 w-3.5 text-gray-400"
                                aria-hidden="true"
                            >
                                <rect x="3" y="4" width="18" height="17" rx="2" />
                                <path d="M3 9h18M8 2v4M16 2v4" />
                            </svg>
                            06/15/26 – 06/28/26
                        </span>
                    </div>

                    {/* Sub-header */}
                    <div className="flex items-center justify-between gap-4 px-4 py-3.5 sm:px-5">
                        <div className="flex items-center gap-3">
                            <h3 className="text-base font-semibold text-gray-900">
                                Campaigns
                            </h3>
                            <span className="inline-flex items-center gap-1.5 rounded-full bg-emerald-50 px-2.5 py-1 text-[11px] font-semibold text-emerald-700">
                                <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
                                Live
                            </span>
                        </div>
                        <span className="inline-flex items-center gap-1.5 rounded-full bg-black px-3.5 py-1.5 text-xs font-semibold text-white">
                            + Create
                        </span>
                    </div>

                    {/* Table */}
                    <div className="overflow-x-auto">
                        <table className="w-full min-w-[640px] border-collapse text-sm">
                            <thead>
                                <tr className="border-y border-gray-200 bg-gray-50 text-left text-[11px] font-semibold tracking-wide text-gray-500 uppercase">
                                    <th className="py-2.5 pr-3 pl-4 font-semibold sm:pl-5">
                                        Active
                                    </th>
                                    <th className="py-2.5 pr-3 font-semibold">
                                        Name
                                    </th>
                                    <th className="py-2.5 pr-3 font-semibold">
                                        Status
                                    </th>
                                    <th className="py-2.5 pr-3 text-right font-semibold">
                                        Spend
                                    </th>
                                    <th className="py-2.5 pr-3 text-right font-semibold">
                                        Impressions
                                    </th>
                                    <th className="py-2.5 pr-3 text-right font-semibold">
                                        Clicks
                                    </th>
                                    <th className="py-2.5 pr-3 text-right font-semibold">
                                        CTR
                                    </th>
                                    <th className="py-2.5 pr-4 text-right font-semibold sm:pr-5">
                                        Avg CPC
                                    </th>
                                </tr>
                            </thead>
                            <tbody>
                                {CAMPAIGNS.map((c, i) => (
                                    <tr
                                        key={i}
                                        className="border-b border-gray-100 last:border-b-0 hover:bg-gray-50/60"
                                    >
                                        <td className="py-3.5 pr-3 pl-4 sm:pl-5">
                                            <Toggle on={c.active} />
                                        </td>
                                        <td className="py-3.5 pr-3">
                                            <span className="inline-block h-3 w-28 rounded bg-gray-200/90 align-middle" />
                                        </td>
                                        <td className="py-3.5 pr-3 text-xs">
                                            <StatusCell serving={c.serving} />
                                        </td>
                                        <td className="py-3.5 pr-3 text-right font-medium tabular-nums text-gray-900">
                                            {c.spend}
                                        </td>
                                        <td className="py-3.5 pr-3 text-right tabular-nums text-gray-700">
                                            {c.impressions}
                                        </td>
                                        <td className="py-3.5 pr-3 text-right tabular-nums text-gray-700">
                                            {c.clicks}
                                        </td>
                                        <td className="py-3.5 pr-3 text-right tabular-nums text-gray-700">
                                            {c.ctr}
                                        </td>
                                        <td className="py-3.5 pr-4 text-right tabular-nums text-gray-700 sm:pr-5">
                                            {c.cpc}
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>

                    {/* Window footer — the real account is the proof */}
                    <div className="flex items-center justify-between gap-4 border-t border-gray-200 bg-gray-50/80 px-4 py-3 sm:px-5">
                        <span className="inline-flex items-center gap-2 text-xs font-medium text-gray-600">
                            <span className="flex h-5 w-5 items-center justify-center rounded-full bg-primary-navy text-[10px] font-bold text-white">
                                P
                            </span>
                            pixaventures, llc
                        </span>
                        <span className="text-[11px] text-gray-400">1–1 of 1</span>
                    </div>
                </div>

                {/* Confidentiality note */}
                <p className="mt-4 text-center text-xs text-white/45">
                    {copy.note}
                </p>

                {/* KPI stats */}
                <dl className="mt-12 grid grid-cols-2 gap-px overflow-hidden rounded-2xl bg-white/10 ring-1 ring-white/10 md:grid-cols-4">
                    {copy.stats.map((stat) => (
                        <div
                            key={stat.label}
                            className="bg-primary-navy/40 px-5 py-6 text-center backdrop-blur-sm sm:px-6 sm:py-7"
                        >
                            <dt className="font-heading text-3xl font-bold text-white sm:text-4xl">
                                {stat.value}
                            </dt>
                            <dd className="mt-2 text-xs leading-snug text-white/60 sm:text-sm">
                                {stat.label}
                            </dd>
                        </div>
                    ))}
                </dl>
            </div>
        </section>
    )
}
