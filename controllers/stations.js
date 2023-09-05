const HttpError = require('../models/http-error')

const Station = require('../models/station')

const getStationById = async (req, res, next) => {
	let station

	try {
		station = await Station.findOne({ _id: req.params.stationId })
	} catch (e) {
		const error = new HttpError('Could not find station.', 500)

		return next(error)
	}

	res.json(station)
}

const getStations = async (req, res, next) => {
	let stations

	try {
		stations = await Station.find()
	} catch (e) {
		const error = new HttpError('Could not list stations.', 500)

		return next(error)
	}

	res.json(stations)
}

exports.getStationById = getStationById
exports.getStations = getStations