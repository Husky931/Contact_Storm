import nodemailer from "nodemailer"

interface EmailOptions {
    to: string
    subject: string
    html: string
    text?: string
}

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

// Create reusable transporter object using SMTP transport
const createTransporter = () => {
    const port = parseInt(process.env.SMTP_PORT || "587")
    const secure = process.env.SMTP_SECURE === "true" // true for 465, false for other ports

    return nodemailer.createTransport({
        host: process.env.SMTP_HOST,
        port,
        secure,
        // For port 587, we need to use TLS
        requireTLS: !secure && port === 587,
        // Allow self-signed certificates (useful for development)
        tls: {
            rejectUnauthorized: false
        },
        auth: {
            user: process.env.SMTP_USER,
            pass: process.env.SMTP_PASSWORD
        },
        // Debug mode in development
        debug: process.env.NODE_ENV === "development",
        logger: process.env.NODE_ENV === "development"
    })
}

export async function sendEmail({
    to,
    subject,
    html,
    text
}: EmailOptions): Promise<void> {
    // Validate environment variables
    if (
        !process.env.SMTP_HOST ||
        !process.env.SMTP_USER ||
        !process.env.SMTP_PASSWORD
    ) {
        throw new Error(
            "SMTP configuration is missing. Please check your environment variables."
        )
    }

    const transporter = createTransporter()
    const from = process.env.SMTP_FROM || process.env.SMTP_USER

    try {
        // Verify connection first
        await transporter.verify()
        console.log("SMTP server connection verified successfully")

        const info = await transporter.sendMail({
            from: `"${process.env.SMTP_FROM_NAME || "Contact Form"}" <${from}>`,
            to,
            subject,
            text: text || html.replace(/<[^>]*>/g, ""), // Fallback to plain text if not provided
            html
        })

        console.log("Email sent successfully:", info.messageId)
    } catch (error) {
        console.error("Error sending email:", error)

        // Provide more detailed error information
        if (isNodemailerError(error)) {
            console.error("Error message:", error.message)
            if (error.response) {
                console.error("SMTP response:", error.response)
            }
            if (error.responseCode) {
                console.error("SMTP response code:", error.responseCode)
            }
        } else if (error instanceof Error) {
            console.error("Error message:", error.message)
        }

        throw error
    }
}

export interface ContactFormData {
    name: string
    email: string
    wechatId?: string
    message: string
}

export function formatContactEmail(data: ContactFormData): {
    subject: string
    html: string
    text: string
} {
    const subject = `New Contact Form Submission from ${data.name}`

    const html = `
        <!DOCTYPE html>
        <html>
        <head>
            <meta charset="utf-8">
            <style>
                body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
                .container { max-width: 600px; margin: 0 auto; padding: 20px; }
                .header { background-color: #1e293b; color: white; padding: 20px; text-align: center; }
                .content { background-color: #f8f9fa; padding: 20px; }
                .field { margin-bottom: 15px; }
                .label { font-weight: bold; color: #1e293b; }
                .value { margin-top: 5px; padding: 10px; background-color: white; border-left: 3px solid #dc2626; }
            </style>
        </head>
        <body>
            <div class="container">
                <div class="header">
                    <h1>New Contact Form Submission</h1>
                </div>
                <div class="content">
                    <div class="field">
                        <div class="label">Name:</div>
                        <div class="value">${data.name}</div>
                    </div>
                    <div class="field">
                        <div class="label">Email:</div>
                        <div class="value">${data.email}</div>
                    </div>
                    ${
                        data.wechatId
                            ? `
                    <div class="field">
                        <div class="label">WeChat ID:</div>
                        <div class="value">${data.wechatId}</div>
                    </div>
                    `
                            : ""
                    }
                    <div class="field">
                        <div class="label">Message:</div>
                        <div class="value">${data.message.replace(/\n/g, "<br>")}</div>
                    </div>
                </div>
            </div>
        </body>
        </html>
    `

    const text = `
New Contact Form Submission

Name: ${data.name}
Email: ${data.email}
${data.wechatId ? `WeChat ID: ${data.wechatId}\n` : ""}
Message:
${data.message}
    `.trim()

    return { subject, html, text }
}
