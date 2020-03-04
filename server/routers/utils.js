const express = require('express')
const db = require('./../db/db')
const router = new express.Router()

router.get('/:id/credit', async(req, res) => {
    try {
        const detail = db.v3Client.credit.details(req.params.id)
        res.status(200).send(detail)
    } catch (error) {
        res.status(500).send({ msg: error })
    }
})

router.get('/:id/review', async(req, res) => {
    try {
        const detail = db.v3Client.review.details(req.params.id)
        res.status(200).send(detail)
    } catch (error) {
        res.status(500).send({ msg: error })
    }
})

router.get('/trending', async(req, res) => {
    try {
        const trendingItems = db.v3Client.trending.items(req.query)
        res.status(200).send(trendingItems)
    } catch (error) {
        res.status(500).send({ msg: error })
    }
})

module.exports = router