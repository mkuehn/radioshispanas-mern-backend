const mongoose = require('mongoose')

const Schema = mongoose.Schema

const countrySchema = new Schema({
	country_code: { type: String, required: true },
	country_short_code: { type: String, required: true },
	abbreviation: { type: String, required: true },
	description: { type: String, required: true }
})

module.exports = mongoose.model('Country', countrySchema)