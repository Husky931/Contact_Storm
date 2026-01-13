import type { Metadata } from "next"
import { Oswald, Source_Sans_3 } from "next/font/google"
import "./globals.css"
import Navbar from "./components/Navbar"
import Footer from "./components/Footer"

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
                <Navbar />
                {children}
                <Footer />
            </body>
        </html>
    )
}
