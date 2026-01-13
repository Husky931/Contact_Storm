import { NextRequest, NextResponse } from "next/server"
import {
    sendEmail,
    formatContactEmail,
    type ContactFormData
} from "@/lib/email"

interface NodemailerError extends Error {
    response?: string
    responseCode?: number
}

function isNodemailerError(error: unknown): error is NodemailerError {
    return (
        error instanceof Error &&
        (("response" in error &&
            typeof (error as NodemailerError).response === "string") ||
            ("responseCode" in error &&
                typeof (error as NodemailerError).responseCode === "number"))
    )
}

export async function POST(request: NextRequest) {
    try {
        const body = await request.json()
        const { name, email, wechatId, message } = body

        // Validate required fields
        if (!name || !email || !message) {
            return NextResponse.json(
                {
                    error: "Missing required fields: name, email, and message are required."
                },
                { status: 400 }
            )
        }

        // Validate email format
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
        if (!emailRegex.test(email)) {
            return NextResponse.json(
                { error: "Invalid email format." },
                { status: 400 }
            )
        }

        const formData: ContactFormData = {
            name: name.trim(),
            email: email.trim(),
            wechatId: wechatId?.trim(),
            message: message.trim()
        }

        // Get recipient email from environment variable or use default
        const recipientEmail =
            process.env.CONTACT_EMAIL ||
            process.env.SMTP_USER ||
            "hello@pixaventures.com"

        // Format and send email
        const { subject, html, text } = formatContactEmail(formData)
        await sendEmail({
            to: recipientEmail,
            subject,
            html,
            text
        })

        return NextResponse.json(
            { message: "Email sent successfully!" },
            { status: 200 }
        )
    } catch (error) {
        console.error("Error in send-email API route:", error)

        // In development, show more details
        const isDevelopment = process.env.NODE_ENV === "development"
        let errorMessage = "Failed to send email. Please try again later."

        if (isDevelopment && error instanceof Error) {
            errorMessage = `Failed to send email: ${error.message}`

            const errorDetails: {
                message: string
                stack?: string
                response?: string
                responseCode?: number
            } = {
                message: error.message,
                stack: error.stack
            }

            if (isNodemailerError(error)) {
                if (error.response) {
                    errorDetails.response = error.response
                }
                if (error.responseCode) {
                    errorDetails.responseCode = error.responseCode
                }
            }

            console.error("Full error details:", errorDetails)
        }

        return NextResponse.json({ error: errorMessage }, { status: 500 })
    }
}
