import { Language } from "@/lib/i18n"

// Consistent date formatting to avoid hydration errors
// Uses UTC to ensure same output on server and client

export function formatDateLong(date: Date, language: Language = "en"): string {
    const year = date.getUTCFullYear()
    const month = date.getUTCMonth()
    const day = date.getUTCDate()

    if (language === "zh") {
        return `${year}年${month + 1}月${day}日`
    }

    const monthNames = [
        "January",
        "February",
        "March",
        "April",
        "May",
        "June",
        "July",
        "August",
        "September",
        "October",
        "November",
        "December"
    ]

    return `${monthNames[month]} ${day}, ${year}`
}

export function formatDateShort(date: Date, language: Language = "en"): string {
    const year = date.getUTCFullYear()
    const month = date.getUTCMonth()
    const day = date.getUTCDate()

    if (language === "zh") {
        return `${year}.${month + 1}.${day}`
    }

    const monthNames = [
        "Jan",
        "Feb",
        "Mar",
        "Apr",
        "May",
        "Jun",
        "Jul",
        "Aug",
        "Sep",
        "Oct",
        "Nov",
        "Dec"
    ]

    return `${monthNames[month]} ${day}, ${year}`
}
