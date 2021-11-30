import { getChildren } from "./database.js"

const children = getChildren()

export const Kids = () => {
    let html = "<ol>"

    for (const child of children) {
        html += `<li id = "child--${child.id}> ${child.name}</li>`
    }

    html += "</ol>"
    return html
}

