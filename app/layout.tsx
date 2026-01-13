import type { Metadata } from "next"
import { Oswald, Source_Sans_3 } from "next/font/google"
import "./globals.css"
import Navbar from "./components/Navigation/Navbar"
import Footer from "./components/Footer"
import { LanguageProvider } from "./components/LanguageProvider"

const headingFont = Oswald({
    variable: "--font-heading",
    subsets: ["latin"],
    weight: ["400", "500", "600", "700"]
})

const bodyFont = Source_Sans_3({
    variable: "--font-body",
    subsets: ["latin"],
    weight: ["400", "500", "600", "700"]
})

export const metadata: Metadata = {
    title: "PixaVentures",
    description: "Development & Growth agency."
}

export default function RootLayout({
    children
}: Readonly<{
    children: React.ReactNode
}>) {
    return (
        <html lang="en">
            <body
                className={`${headingFont.variable} ${bodyFont.variable} antialiased`}
            >
                <LanguageProvider>
                    <Navbar />
                    {children}
                    <Footer />
                </LanguageProvider>
            </body>
        </html>
    )
}
