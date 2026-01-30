import Footer from "@/components/Footer"
import ContactPopup from "@/components/ContactPopup"

export default function WithFooterLayout({
    children
}: {
    children: React.ReactNode
}) {
    return (
        <>
            {children}
            <Footer />
            <ContactPopup />
        </>
    )
}
