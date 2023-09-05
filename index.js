require('dotenv').config()

const express = require('express')
const mongoose = require('mongoose')

const stationsRoutes = require('./routes/stations')

const HttpError = require('./models/http-error')

const app = express()

app.use('/stations', stationsRoutes);

app.use((req, res, next) => {
	const error = new HttpError('Could not find this route.', 404)
	throw error
})

app.use((error, req, res, next) => {
	if (res.headerSent) {
		return next(error)
	}

	res.status(error.code || 500)
	res.json({ message: error.message || 'An unknown error occurred!' })
})

mongoose
	.connect(
		`mongodb+srv://${process.env.UNAME}:${process.env.PWD}@tkg.yphkvna.mongodb.net/${process.env.COLLECTION}?retryWrites=true&w=majority`
	)
	.then(() => {
		app.listen(3000)
	})
	.catch(err => {
		console.log(err)
	})
