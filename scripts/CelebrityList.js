import { getCelebrities } from "./database.js"

const celebrities = getCelebrities()

export const Celebrities = () => {
    let html = "<ol>"

    for (const star of celebrities) {
        html += `<li id = "star--${star.id}">${star.name}</li>`
    }

    html += "</ol>"
    return html
}
