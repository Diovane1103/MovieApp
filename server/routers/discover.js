const express = require('express')
const db = require('./../db/db.js')
const router = new express.Router()

router.get('/movie', async (req, res) => {
    await db.discoverMovie({ }, (err, res) => {
        if(err)
            return res.status(500).send({ msg: err })
        res.status(200).send(res)
    })
})

router.get('/tv', async (req, res) => {
    await db.discoverTv({ }, (err, res) => {
        if(err)
            return res.status(500).send({ msg: err })
        res.status(200).send(res)
    })
})

module.exports = router