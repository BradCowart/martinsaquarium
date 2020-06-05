let locationCollection = []

const getLocationData = () => {
    return fetch("http://localhost:8088/locations").then(
        (httpResponse) => {
            return httpResponse.json()
        }
    )
        .then(
            (arrayOflocations) => {
                // 100 percent sure the data is back
                locationCollection = arrayOflocations
            }
        )
}