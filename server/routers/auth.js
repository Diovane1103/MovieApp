const express = require('express')
const db = require('./../db/db')
const router = new express.Router()

router.post('/token', async (req, res) => {
    await db.requestToken((err, r) => {
        if(err)
            return res.status(500).send({ msg: err })
        res.status(200).send(r)
    })
})

router.post('/session', async (req, res) => {
    await db.sessionId((err, r) => {
        
    })
})

module.exports = router