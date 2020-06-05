const tipList = () => {
    // Iterate the collection of objects
    for (const currentTipObject of tipCollection) {

        // Convert the current fish to its HTML representation
        const tipHTML = tipConverter(currentTipObject)

        // Find the <article> element in index.html
        const tipArticleElement = document.querySelector(".tipList")

        // Put the fish HTML representation inside the <article> element
        tipArticleElement.innerHTML += tipHTML
    }
}

const tipVisibilityButton = document.querySelector(".toggleTips")

tipVisibilityButton.addEventListener("click", clickEvent => {
    document.querySelector(".tipList").classList.toggle("hidden")
})