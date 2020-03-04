const express = require('express')
const db = require('./../db/db')
const router = new express.Router()

router.get('/movie', async (req, res) => {
    try {
        const certification = await db.v3Client.certification.movies()
        res.status(200).send(certification)
    } catch (error) {
        res.status(500).send({ msg: error })
    }
})

router.get('/tv', async (req, res) => {
    try {
        const certification = await db.v3Client.certification.tvShows()
        res.status(200).send(certification)
    } catch (error) {
        res.status(500).send({ msg: error })
    }
})

module.exports = router