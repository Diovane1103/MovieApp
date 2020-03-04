const express = require('express')
const db = require('./../db/db.js')
const router = new express.Router()

router.get('/movie', async (req, res) => {
    try {
        const discMovie = await db.v3Client.discover.movie(req.query)
        res.status(200).send(discMovie)
    } catch (error) {
        res.status(500).send({ msg: error })
    }
})

router.get('/tv', async (req, res) => {
    try {
        const discTvShow = await db.v3Client.discover.tvShows(req.query)
        res.status(200).send(discTvShow)
    } catch (error) {
        res.status(500).send({ msg: error })
    }
})

module.exports = router