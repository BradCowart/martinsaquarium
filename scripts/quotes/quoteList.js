const quoteList = () => {
    // Iterate the collection of objects
    for (const currentQuoteObject of quoteCollection) {

        // Convert the current fish to its HTML representation
        const quoteHTML = quoteConverter(currentQuoteObject)

        // Find the <article> element in index.html
        const quoteArticleElement = document.querySelector(".quoteList")

        // Put the fish HTML representation inside the <article> element
        quoteArticleElement.innerHTML += quoteHTML
    }
}

const quoteVisibilityButton = document.querySelector(".toggleQuotes")

quoteVisibilityButton.addEventListener("click", clickEvent => {
    document.querySelector(".quoteList").classList.toggle("hidden")
})