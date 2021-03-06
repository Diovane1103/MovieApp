const express = require('express')
const cors = require('cors')
const bodyParser = require('body-parser')

const account = require('./routers/account.js')
const auth = require('./routers/auth.js')
const certification = require('./routers/certification.js')
const changes = require('./routers/changes.js')
const collection = require('./routers/collection.js')
const company = require('./routers/company.js')
const configuration = require('./routers/configuration.js')
const discover = require('./routers/discover.js')
const genre = require('./routers/genre.js')
const guest = require('./routers/guest.js')
const keyword = require('./routers/keyword.js')
const list = require('./routers/list.js')
const movie = require('./routers/movie.js')
const network = require('./routers/network.js')
const person = require('./routers/person.js')
const search = require('./routers/search.js')
const tv = require('./routers/tv.js')
const utils = require('./routers/utils.js')

const app = express()

app.use(cors())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

app.use('/account', account)
app.use('/auth', auth)
app.use('/certification', certification)
app.use('/changes', changes)
app.use('/collection', collection)
app.use('/company', company)
app.use('/configuration', configuration)
app.use('/discover', discover)
app.use('/genre', genre)
app.use('/guest', guest)
app.use('/keyword', keyword)
app.use('/list', list)
app.use('/movie', movie)
app.use('/network', network)
app.use('/person', person)
app.use('/search', search)
app.use('/tv', tv)
app.use('/utils', utils)

module.exports = app