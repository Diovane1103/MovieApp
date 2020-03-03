const express = require('express')
const db = require('./../db/db')
const router = new express.Router()

router.post('/logout', async (req, res) => {
    const sessionId = req.query.sessionId
    try {
        const log = await db.v3Client.authentication.logout(sessionId)
        res.status(200).send(log)
    } catch (error) {
        res.status(500).send({ msg: 'Internal Error!'})
    }
})

router.post('/guest_session', async (req, res) => {
    try {
        const log = await db.v3Client.authentication.newGuestSession()
        res.status(200).send(log)
    } catch (error) {
        res.status(500).send({ msg: 'Internal Error!'})
    }
})

router.post('/token', async (req, res) => {
    try {
        const log = await db.v3Client.authentication.newToken()
        res.status(200).send(log)
    } catch (error) {
        res.status(500).send({ msg: 'Internal Error!'})
    }
})

router.post('/session', async (req, res) => {
    try {
        const log = await db.v3Client.authentication.newSession(req.headers.authorization.replace('Bearer ', ''))
        res.status(200).send(log)
    } catch (error) {
        res.status(500).send({ msg: 'Internal Error!'})
    }
})


router.post('/validate_login', async (req, res) => {
    try {
        const log = await db.v3Client.authentication.validateWithLogin({...req.body, request_token: req.headers.authorization.replace('Bearer ', '')})
        res.status(200).send(log)
    } catch (error) {
        res.status(500).send({ msg: 'Internal Error!'})
    }
})

module.exports = router