import { readFileSync, readdirSync } from "fs"
import { join } from "path"

const contentDirectory = join(process.cwd(), "content", "brochures")

/**
 * Reads a markdown file from the content/brochures directory
 * @param filename - The name of the markdown file (with or without .md extension)
 * @returns The markdown content as a string
 */
export function getMarkdownContent(filename: string): string {
    const filePath = join(contentDirectory, filename.endsWith(".md") ? filename : `${filename}.md`)
    try {
        return readFileSync(filePath, "utf-8")
    } catch (error) {
        throw new Error(`Failed to read markdown file: ${filename}`)
    }
}

/**
 * Lists all available markdown files in the content/brochures directory
 * @returns Array of filenames (without .md extension)
 */
export function getAllMarkdownFiles(): string[] {
    try {
        const files = readdirSync(contentDirectory)
        return files
            .filter((file: string) => file.endsWith(".md") && file !== "README.md")
            .map((file: string) => file.replace(".md", ""))
    } catch (error) {
        return []
    }
}
