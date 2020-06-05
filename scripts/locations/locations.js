const locationConverter = (locationObject) => {

    const locationHTMLRepresentation = `<section class="location">
        
        <div class="location__details">
            ${locationObject.name}
            ${locationObject.descp}
            <img class="fish__picture" src="${locationObject.image}"
            
        </div>
    </section>`

    return locationHTMLRepresentation
}