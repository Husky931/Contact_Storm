import { NextRequest, NextResponse } from "next/server"
import { db, seoReports } from "@/db"
import { eq, sql } from "drizzle-orm"

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

        // Update the report tracking fields
        // Increment the times opened counter using SQL expression
        await db
            .update(seoReports)
            .set({
                seoReportOpened: true,
                seoReportLastOpened: new Date(),
                seoReportTimesOpened: sql`${seoReports.seoReportTimesOpened} + 1`
            })
            .where(eq(seoReports.urlHash, hash))

        return NextResponse.json({ success: true })
    } catch (error) {
        console.error("Error tracking report view:", error)
        return NextResponse.json(
            { error: "Failed to track report view" },
            { status: 500 }
        )
    }
}
