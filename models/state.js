const mongoose = require('mongoose')

const Schema = mongoose.Schema

const stateSchema = new Schema({
	country_code: { type: String, required: true },
	state_code: { type: String, required: true },
	state_name: { type: String, required: true },
})

module.exports = mongoose.model('State', stateSchema)