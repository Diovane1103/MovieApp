const express = require('express')
const cors = require('cors')
const dotenv = require('dotenv')
const bodyParser = require('body-parser')

const search = require('./routers/search.js')
const person = require('./routers/person.js')
const collection = require('./routers/collection.js')
const company = require('./routers/company.js')
const tv = require('./routers/tv.js')
const utils = require('./routers/utils.js')
const misc = require('./routers/misc.js')
const auth = require('./routers/auth.js')
const account = require('./routers/account.js')
const discover = require('./routers/discover.js')

const app = express()

dotenv.config()
app.use(cors())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

app.use('/search', search)
app.use('/tv', tv)
app.use('/collection', collection)
app.use('/company', company)
app.use('/person', person)
app.use('/utils', utils)
app.use('/misc', misc)
app.use('/auth', auth)
app.use('/account', account)
app.use('/discover', discover)


module.exports = app