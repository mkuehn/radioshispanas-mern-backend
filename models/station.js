const mongoose = require('mongoose')

const Schema = mongoose.Schema

const stationSchema = new Schema({
	station_id: { type: Number, required: true },
	call_letters: { type: String, required: true },
	frequency: { type: Number, required: true },
	band: { type: String, required: true },
	city: { type: String, required: true },
	state: { type: String, required: true },
	country_code: { type: String, required: true },
	url: { type: String },
	nickname: { type: String },
	tagline: { type: String },
	latitude: { type: Number },
	longitude: { type: Number },
	power_day: { type: Number },
	power_night: { type: Number },
	active: { type: Boolean, default: false }
})

module.exports = mongoose.model('Station', stationSchema)