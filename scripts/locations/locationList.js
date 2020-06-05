const locationList = () => {
    // Iterate the collection of objects
    for (const currentLocationObject of locationCollection) {

        // Convert the current fish to its HTML representation
        const locationHTML = locationConverter(currentLocationObject)

        // Find the <article> element in index.html
        const locationArticleElement = document.querySelector(".locationList")

        // Put the fish HTML representation inside the <article> element
        locationArticleElement.innerHTML += locationHTML
    }
}

const locationVisibilityButton = document.querySelector(".toggleLocations")

locationVisibilityButton.addEventListener("click", clickEvent => {
    document.querySelector(".locationList").classList.toggle("hidden")
})