// Consistent date formatting to avoid hydration errors
// Uses UTC to ensure same output on server and client

export function formatDateLong(date: Date): string {
    const year = date.getUTCFullYear()
    const month = date.getUTCMonth()
    const day = date.getUTCDate()

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

export function formatDateShort(date: Date): string {
    const year = date.getUTCFullYear()
    const month = date.getUTCMonth()
    const day = date.getUTCDate()

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
