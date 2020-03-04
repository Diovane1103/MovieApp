const express = require('express')
const db = require('./../db/db')
const router = new express.Router()

router.get('/:id/details', async(req, res) => {
    try {
        const detail = await db.v3Client.keyword.details(req.params.id)
        res.status(200).send(detail)
    } catch (error) {
        res.status(500).send({ msg: error })
    }
})

router.get('/:id/movies', async(req, res) => {
    try {
        const movies = await db.v3Client.keyword.movies(req.params.id, req.query)
        res.status(200).send(movies)
    } catch (error) {
        res.status(500).send({ msg: error })
    }
})

module.exports = router