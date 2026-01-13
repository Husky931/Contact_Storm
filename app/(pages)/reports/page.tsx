import type { Metadata } from "next"

export const metadata: Metadata = {
    title: "Reports | PixaVentures",
    description:
        "Search for your company and get detailed SEO reports and analytics."
}

export default function ReportsPage() {
    return (
        <div className="min-h-screen bg-white">
            <main>
                {/* Hero Search Section */}
                <section className="bg-linear-to-b from-slate-50 to-white py-20 lg:py-28">
                    <div className="mx-auto max-w-4xl px-6">
                        <div className="text-center">
                            <h1 className="font-heading text-4xl font-bold text-slate-900 md:text-5xl lg:text-6xl">
                                Search for your{" "}
                                <span className="text-primary-red">
                                    company
                                </span>
                            </h1>
                            <p className="mt-6 text-lg text-slate-600 md:text-xl">
                                Enter your company domain to get comprehensive
                                SEO reports and analytics.
                            </p>
                        </div>

                        {/* Search Form */}
                        <div className="mt-12">
                            <form className="space-y-6">
                                <div>
                                    <input
                                        type="text"
                                        placeholder="Enter company domain (e.g., example.com)"
                                        className="w-full rounded-lg border-2 border-slate-200 bg-white px-6 py-4 text-base text-slate-900 transition-colors placeholder:text-slate-400 focus:border-primary-red focus:ring-2 focus:ring-primary-red/20 focus:outline-none"
                                    />
                                </div>
                                <button
                                    type="submit"
                                    className="bg-primary-main hover:bg-primary-navy/90 w-full rounded-lg px-8 py-4 text-base font-semibold tracking-[0.2em] text-white uppercase transition-colors md:text-lg"
                                >
                                    Find Report
                                </button>
                            </form>
                        </div>
                    </div>
                </section>
            </main>
        </div>
    )
}
