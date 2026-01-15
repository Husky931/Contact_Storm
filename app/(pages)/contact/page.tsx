import type { Metadata } from "next"
import ReadyToTalk from "@/components/ReadyToTalk"
import ContactHero from "@/components/ContactHero"

export const metadata: Metadata = {
    title: "Contact Us",
    description:
        "Get in touch with Pixaventures. Contact us through our form or scan our QR code to connect via WeChat."
}

export default function ContactPage() {
    return (
        <div className="min-h-screen bg-white">
            <main>
                {/* Hero Section */}
                <ContactHero />

                {/* Contact Form Section */}
                <ReadyToTalk />
            </main>
        </div>
    )
}
