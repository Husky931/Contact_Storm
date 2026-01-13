import type { Metadata } from "next"
import ReadyToTalk from "@/components/ReadyToTalk"

export const metadata: Metadata = {
    title: "Contact Us | PixaVentures",
    description:
        "Get in touch with PixaVentures. Contact us through our form or scan our QR code to connect via WeChat."
}

export default function ContactPage() {
    return (
        <div className="min-h-screen bg-white">
            <main>
                {/* Hero Section */}
                <section className="bg-linear-to-b from-slate-50 to-white py-16">
                    <div className="mx-auto max-w-6xl px-6">
                        <div className="text-center">
                            <h1 className="font-heading text-4xl font-bold text-slate-900 md:text-5xl">
                                Get in{" "}
                                <span className="text-(--brand-red)">
                                    Touch
                                </span>
                            </h1>
                            <p className="mt-4 text-lg text-slate-600">
                                We&apos;d love to hear from you. Choose your
                                preferred way to reach us.
                            </p>
                        </div>
                    </div>
                </section>

                {/* Contact Form Section */}
                <ReadyToTalk />
            </main>
        </div>
    )
}
