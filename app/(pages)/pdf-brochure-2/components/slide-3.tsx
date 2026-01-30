import { BRAND_NAVY, BRAND_RED } from "../constants"

export default function Slide3() {
    return (
        <section
            className="brochure-page flex flex-col px-16 py-14 text-white"
            style={{ backgroundColor: BRAND_NAVY, pageBreakAfter: "always" }}
        >
            <p className="text-xs font-medium uppercase tracking-widest text-gray-300">
                TABLE OF CONTENTS
            </p>
            <div className="mt-2 h-px w-full bg-gray-500" />
            <div className="mt-0 flex flex-1 items-center justify-center gap-24 py-8">
                <div className="space-y-4 text-base text-gray-300">
                    <div className="flex justify-between gap-8">
                        <span className="font-semibold">Who are We</span>
                        <span>2</span>
                    </div>
                    <div className="flex justify-between gap-8">
                        <span className="font-semibold">Execution Services</span>
                        <span>6</span>
                    </div>
                    <ul className="ml-4 space-y-2 text-gray-400">
                        <li className="flex justify-between gap-8">
                            <span>Website & Conversion Design</span>
                            <span>7</span>
                        </li>
                        <li className="flex justify-between gap-8">
                            <span>Growth Software & Automation</span>
                            <span>8</span>
                        </li>
                        <li className="flex justify-between gap-8">
                            <span>Buyer Acquisition Channels</span>
                            <span>9</span>
                        </li>
                        <li className="flex justify-between gap-8">
                            <span>Content & Creative Production</span>
                            <span>10</span>
                        </li>
                        <li className="flex justify-between gap-8">
                            <span>Marketplace & Trust Assets</span>
                            <span>11</span>
                        </li>
                        <li className="flex justify-between gap-8">
                            <span>Optimization & Reporting</span>
                            <span>12</span>
                        </li>
                    </ul>
                    <div className="flex justify-between gap-8 pt-2">
                        <span className="font-semibold">Buyer Journey Framework</span>
                        <span>13</span>
                    </div>
                    <div className="flex justify-between gap-8">
                        <span className="font-semibold">Contact & Locations</span>
                        <span>14</span>
                    </div>
                </div>
                <div className="brochure-serif text-right text-7xl font-normal leading-tight">
                    <span className="text-white">Export-first</span>
                    <br />
                    <span style={{ color: BRAND_RED }}>growth for</span>
                    <br />
                    <span className="text-white">overseas</span>
                    <br />
                    <span className="text-white">buyers</span>
                </div>
            </div>
        </section>
    )
}
