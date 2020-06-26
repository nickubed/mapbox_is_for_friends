require('dotenv').config()
let router = require('express').Router()

// Requiring our mapbox geocoder
const mbxGeocoding = require('@mapbox/mapbox-sdk/services/geocoding')
// Utilizing our geocoding client (this is where I use my API key!)
// geocodingClient will allow me to send requests for geocoding data from the Mapbox API
const geocodingClient = mbxGeocoding({accessToken: process.env.MAPBOX_TOKEN})

router.get('/', (req, res) => {
    geocodingClient.forwardGeocode({
        query: `${req.query.city}, ${req.query.state}`
    })
    .send()
    .then(response => {
        let match = response.body.features[0]
        console.log(match)
        res.render('show', {match, mapkey: process.env.MAPBOX_TOKEN})
    })
})

module.exports = router