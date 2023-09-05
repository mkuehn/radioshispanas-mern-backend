const mongoose = require('mongoose')

const Schema = mongoose.Schema

const stationSchema = new Schema({
	station_id: { type: String, required: true },
	call_letters: { type: String, required: true },
	frequency: { type: String, required: true },
	band: { type: String, required: true },
	city: { type: String, required: true },
	state: { type: String, required: true },
	country_code: { type: String, required: true },
	url: { type: String },
	nickname: { type: String },
	tagline: { type: String },
	latitude: { type: String },
	longitude: { type: String },
	power_day: { type: String },
	power_night: { type: String },
	active: { type: String, default: "0" }
})

module.exports = mongoose.model('Station', stationSchema)