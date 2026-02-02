import Image from "next/image"
import { NAV_LINKS } from "../constants"

export default function Slide14() {
    return (
        <section
            className="brochure-page flex flex-col bg-white px-4 py-8 text-[#1b2737] relative overflow-hidden sm:px-8 md:px-16 md:py-14"
            style={{ pageBreakAfter: "always" }}
        >
            {/* Nav */}
            <div className="flex items-center justify-between border-b border-gray-200 pb-4 z-10">
                <nav className="flex flex-wrap gap-3 text-xs text-gray-500 md:gap-6">
                    {NAV_LINKS.map((link, i) => (
                        <span key={link} className={i === 2 ? "font-semibold text-gray-800" : ""}>
                            {link}
                        </span>
                    ))}
                </nav>
            </div>

            {/* Main content area */}
            <div className="flex-1 relative mt-6 md:mt-8">
                {/* Background gradient on left — full width on mobile */}
                <div
                    className="absolute left-0 top-0 bottom-0 w-full md:w-2/3 z-0"
                    style={{
                        background: "linear-gradient(to bottom, #0d4a5f, #1a7a9a)"
                    }}
                />

                {/* Title on left — stacked on mobile */}
                <div className="relative z-20 px-0 pt-0 pb-8 md:absolute md:left-16 md:top-16 md:px-0 md:pt-0 md:pb-0">
                    <h2 className="brochure-serif text-3xl font-normal leading-tight tracking-tight text-white mb-4 md:text-5xl">
                        Our Core Technology
                    </h2>
                    <p className="text-base text-white/90 max-w-md leading-relaxed md:text-xl">
                        Our Leads Generation platform is designed to scan thousdands of businesses daily and extract decision-maker contacts.
                    </p>
                    <ul className="text-sm text-white/90 max-w-sm mt-6 [&>li]:list-item md:mt-10 md:text-base">
                        <li className="mb-4 font-semibold">- Scans 5000+ foreign buyer’s domains daily targeted by industry, location and online presence</li>
                        <li className="mb-4 font-semibold">- Analyses their digital footprints (paid ads, social media channels)</li>
                        <li className="mb-4 font-semibold">- Direct automated outreach via website or email</li>
                        <li className="mb-4 font-semibold">- Real-time tracking of response rate, interaction and success rate on our dashboard</li>
                        <li className="mb-4 font-semibold">- Options for toggling between customized outreach messages,  conversation logging</li>
                    </ul>
                </div>

                {/* Software image coming from right — below content on mobile */}
                <div className="relative z-10 mt-6 h-[280px] w-full md:absolute md:right-0 md:top-0 md:bottom-0 md:mt-0 md:h-full md:w-3/5">
                    <div className="relative h-full w-full overflow-hidden rounded-2xl md:rounded-l-2xl">
                        <Image
                            src="/brochure/lead_software/pixa.png"
                            alt="Lead Generation Software Dashboard"
                            fill
                            className="object-cover"
                            style={{ objectPosition: "left center" }}
                        />
                    </div>
                </div>

                {/* Floating popup cards */}

                {/* Total Orders Card */}
                <div className="absolute left-4 right-4 top-[28%] z-30 bg-white rounded-xl shadow-2xl p-6 w-auto max-w-64 transform -rotate-2 md:left-[35%] md:right-auto md:top-[35%] md:w-64">
                    <h3 className="text-sm font-semibold text-gray-700 mb-2">New Leads</h3>
                    <div className="text-4xl font-bold text-[#1b2737] mb-1">68</div>
                    <div className="text-sm text-green-600 font-medium mb-3">+15%</div>
                    <div className="flex gap-1 h-12 items-end">
                        <div className="bg-[#1a7a9a] w-8 h-8 rounded-t"></div>
                        <div className="bg-[#1a7a9a] w-8 h-12 rounded-t"></div>
                        <div className="bg-[#1a7a9a] w-8 h-10 rounded-t"></div>
                        <div className="bg-[#1a7a9a] w-8 h-14 rounded-t"></div>
                    </div>
                </div>

                {/* <div className="absolute left-[35%] top-[35%] z-30 bg-white rounded-xl shadow-2xl p-6 w-64 transform rotate-[1deg]"> */}

                {/* Stock Inventory Card */}
                <div className="absolute left-4 right-4 top-[48%] z-30 bg-white rounded-xl shadow-2xl p-6 w-auto max-w-64 transform rotate-1 md:left-[50%] md:right-auto md:top-[55%] md:w-64">
                    <h3 className="text-sm font-semibold text-gray-700 mb-2">Stock Inventory</h3>
                    <div className="text-lg text-[#1a7a9a] font-medium mb-3">1000 Storage Bins</div>
                    <div className="flex justify-center">
                        <div className="w-16 h-16 bg-[#1a7a9a]/20 rounded-lg flex items-center justify-center">
                            <svg className="w-10 h-10 text-[#1a7a9a]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
                            </svg>
                        </div>
                    </div>
                </div>

                {/* Invoice Report Card */}
                {/* <div className="absolute left-[50%] top-[55%] z-30 bg-white rounded-xl shadow-2xl p-6 w-72 transform rotate-[2deg]">
                    <h3 className="text-sm font-semibold text-gray-700 mb-1">Invoice Report</h3>
                    <div className="text-xs text-gray-500 mb-2">Aug 2023</div>
                    <div className="text-2xl font-bold text-[#1b2737] mb-1">$133,568.60</div>
                    <div className="text-sm text-red-600 font-medium mb-3">-10.5%</div>
                    <div className="h-12 flex items-end">
                        <svg className="w-full h-full" viewBox="0 0 100 40" preserveAspectRatio="none">
                            <polyline
                                points="0,35 20,30 40,25 60,20 80,18 100,15"
                                fill="none"
                                stroke="#1a7a9a"
                                strokeWidth="2"
                            />
                        </svg>
                    </div>
                </div> */}

                {/* Contract Management Popup */}
                <div className="absolute left-4 right-4 top-[68%] z-30 bg-white rounded-lg shadow-xl p-4 w-auto max-w-56 border border-gray-200 md:left-auto md:right-[47%] md:top-[75%] md:w-56">
                    <div className="flex items-center gap-3">
                        <div className="w-8 h-8 bg-[#1a7a9a] rounded flex items-center justify-center">
                            <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
                            </svg>
                        </div>
                        <div className="flex-1">
                            <div className="text-xs font-semibold text-gray-800">Contract Management</div>
                            <div className="text-xs text-gray-600">Send for Signatures</div>
                        </div>
                    </div>
                </div>

                {/* <div className="absolute right-[30%] top-[45%] z-30 bg-gray-50 rounded-lg shadow-xl p-5 w-64 border border-gray-300">
                    <div className="flex flex-col items-center text-center">
                        <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-3">
                            <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
                            </svg>
                        </div>
                        <div className="text-xs text-gray-700 mb-2">Browse and choose the files you want to upload</div>
                        <button className="w-10 h-10 bg-blue-600 text-white rounded-full flex items-center justify-center text-xl font-light hover:bg-blue-700 transition">
                            +
                        </button>
                    </div>
                </div> */}

                {/* Supplier Onboarding Progress */}
                <div className="absolute left-4 right-4 bottom-4 z-30 bg-white rounded-lg shadow-xl p-4 w-auto max-w-72 border border-gray-200 md:left-auto md:right-[17%] md:bottom-[5%] md:w-72">
                    <div className="flex items-center gap-3 mb-3">
                        <div className="w-8 h-8 bg-[#1a7a9a] rounded flex items-center justify-center">
                            <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                        </div>
                        <div className="text-sm font-semibold text-gray-800">Supplier Onboarding</div>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                        <div
                            className="bg-[#1a7a9a] h-2 rounded-full transition-all"
                            style={{ width: "81%" }}
                        />
                    </div>
                    <div className="text-xs text-gray-600 mt-1 text-right">81%</div>
                </div>
            </div>
        </section>
    )
}
