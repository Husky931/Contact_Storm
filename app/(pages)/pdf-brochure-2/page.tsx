import type { Metadata } from "next"
import "./brochure-2.css"
import PageBreak from "./components/PageBreak"
import Slide1 from "./components/slide-1"
import Slide2 from "./components/slide-2"
import Slide3 from "./components/slide-3"
import Slide4 from "./components/slide-4"
import Slide5 from "./components/slide-5"
import Slide6 from "./components/slide-6"
import Slide7 from "./components/slide-7"
import Slide8 from "./components/slide-8"
import Slide9 from "./components/slide-9"
import Slide10 from "./components/slide-10"
import Slide11 from "./components/slide-11"
import Slide12 from "./components/slide-12"
import Slide13A from "./components/slide-13A"
import Slide14A from "./components/slide-14A"
// import Slide13 from "./components/slide-pre-final"
// import Slide14 from "./components/slide-final"

export const metadata: Metadata = {
    title: "Brochure | Pixaventures",
    description:
        "Pixaventures — Foreign-led export growth agency for Chinese manufacturers."
}

export default function PdfBrochure2Page() {
    return (
        <div className="brochure-print min-h-screen bg-[#1b2737]">
            <Slide1 />
            <PageBreak />

            <Slide2 />
            <PageBreak />

            <Slide3 />
            <PageBreak />

            <Slide4 />
            <PageBreak />

            <Slide5 />
            <PageBreak />

            <Slide6 />
            <PageBreak />

            <Slide7 />
            <PageBreak />

            <Slide8 />
            <PageBreak />

            <Slide9 />
            <PageBreak />

            <Slide10 />
            <PageBreak />

            <Slide11 />
            <PageBreak />

            <Slide12 />
            <PageBreak />

            <Slide13A />
            <PageBreak />

            <Slide14A />
            <PageBreak />

            {/* <Slide13 />
            <PageBreak />

            <Slide14 /> */}
        </div>
    )
}
