import { NextRequest, NextResponse } from "next/server"
import { trackReportDownload } from "@/lib/api"

export async function POST(
    request: NextRequest,
    { params }: { params: Promise<{ hash: string }> }
) {
    try {
        const { hash } = await params

        if (!hash) {
            return NextResponse.json(
                { error: "Hash is required" },
                { status: 400 }
            )
        }

        // Track download via ContactStorm API
        await trackReportDownload(hash)

        return NextResponse.json({ success: true })
    } catch (error) {
        console.error("Error tracking report download:", error)
        return NextResponse.json(
            { error: "Failed to track report download" },
            { status: 500 }
        )
    }
}
