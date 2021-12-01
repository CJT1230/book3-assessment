import { getChildren } from "./database.js"

const children = getChildren()

export const Kids = () => {
    let html = "<ol>"

    for (const child of children) {
        html += `<li id = "child--${child.id}">${child.name}</li>`
    }

    html += "</ol>"
    return html
}

document.addEventListener("click", (clickEvent) => {
    const tClicked = clickEvent.target;
    if (tClicked.id.startsWith("kid--")) {
        const [, kidId] = tClicked.id.split("--");

        for (const kid of children) {
            if (kid.id === parseInt(kidId)) {
                window.alert(`${kid.name}'s wish is to ${kid.wish}`)
            }
        }
    }
})
