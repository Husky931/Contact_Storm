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
            <div className="mt-2 h-px w-48 bg-gray-500" />
            <div className="mt-8 flex flex-1 items-center justify-between gap-20">
                <div className="space-y-4 text-sm text-gray-300">
                    <div className="flex justify-between gap-8">
                        <span className="font-semibold">Strategy & Consulting</span>
                        <span>4</span>
                    </div>
                    <div className="flex justify-between gap-8">
                        <span className="font-semibold">Implementation Services</span>
                        <span>6</span>
                    </div>
                    <ul className="ml-4 space-y-2 text-gray-400">
                        <li className="flex justify-between gap-8">
                            <span>Website and Digital Design</span>
                            <span>7</span>
                        </li>
                        <li className="flex justify-between gap-8">
                            <span>Website Development</span>
                            <span>8</span>
                        </li>
                        <li className="flex justify-between gap-8">
                            <span>Demand Generation</span>
                            <span>9</span>
                        </li>
                        <li className="flex justify-between gap-8">
                            <span>Video & Content</span>
                            <span>10</span>
                        </li>
                        <li className="flex justify-between gap-8">
                            <span>Branding & Graphic Design</span>
                            <span>11</span>
                        </li>
                        <li className="flex justify-between gap-8">
                            <span>Support & Maintenance</span>
                            <span>12</span>
                        </li>
                    </ul>
                    <div className="flex justify-between gap-8 pt-2">
                        <span className="font-semibold">Our Work</span>
                        <span>14</span>
                    </div>
                    <div className="flex justify-between gap-8">
                        <span className="font-semibold">Agency Credentials</span>
                        <span>22</span>
                    </div>
                </div>
                <div className="brochure-serif text-right text-5xl font-normal leading-tight">
                    <span className="text-white">delivering</span>
                    <br />
                    <span style={{ color: BRAND_RED }}>high-performance</span>
                    <br />
                    <span className="text-white">marketing</span>
                    <br />
                    <span className="text-white">solutions</span>
                </div>
            </div>
            <div className="mt-auto flex justify-end gap-2 pt-8">
                <span className="h-px w-8 self-center bg-gray-500" />
                <span className="h-1.5 w-1.5 rounded-full bg-gray-400" />
                <span className="text-sm text-gray-400">3</span>
            </div>
        </section>
    )
}
