const express = require('express')

const stationsControllers = require('../controllers/stations')

const router = express.Router()

router.get('/:stationId', stationsControllers.getStationById)

router.get('/', stationsControllers.getStations)

module.exports = router