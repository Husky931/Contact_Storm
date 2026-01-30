"use client"

export default function BrochurePDFButton() {
    const handlePrint = () => {
        window.print()
    }

    return (
        <div className="no-print fixed right-6 top-32 z-40 md:right-8">
            <button
                onClick={handlePrint}
                className="flex cursor-pointer items-center gap-2 rounded-md bg-primary-main px-4 py-3 text-sm font-semibold text-white shadow-lg transition-all hover:bg-primary-slate focus:outline-none md:px-6 md:py-3 md:text-base"
                aria-label="Download PDF"
            >
                <svg
                    className="h-5 w-5 md:h-6 md:w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5M16.5 12L12 16.5m0 0L7.5 12m4.5 4.5V3"
                    />
                </svg>
                <span className="hidden sm:inline">Download PDF</span>
            </button>
        </div>
    )
}
