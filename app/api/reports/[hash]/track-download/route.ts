import { NextRequest, NextResponse } from "next/server"
import { db, seoReports } from "@/db"
import { eq } from "drizzle-orm"

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

        // Update the report download field
        await db
            .update(seoReports)
            .set({
                reportDownloaded: true
            })
            .where(eq(seoReports.urlHash, hash))

        return NextResponse.json({ success: true })
    } catch (error) {
        console.error("Error tracking report download:", error)
        return NextResponse.json(
            { error: "Failed to track report download" },
            { status: 500 }
        )
    }
}
