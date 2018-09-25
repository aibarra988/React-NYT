const express = require('express')
const bodyParser = require('body-parser')
const mongoose = require('mongoose')
const app = express()
const routes = require('./routes')
const PORT = process.env.PORT || 3001

// Configure body parser for AJAX requests
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())

// Serve up static assets
app.use(express.static('client/build'))

// Setup API routes
app.use(routes)

// Connect to mongo and set it up to use promises
mongoose.Promise = global.Promise
mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost/reactnyt',
    {
        useNewUrlParser: true
    }
)

// Start API server
app.listen(PORT, () => console.log(`API Server now listening on PORT ${PORT}`))
