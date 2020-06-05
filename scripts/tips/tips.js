const tipConverter = (tipObject) => {

    const tipHTMLRepresentation = `<section class="tip">
        
        <div class="tip__details">
            ${tipObject.tip}
        </div>
    </section>`

    return tipHTMLRepresentation
}