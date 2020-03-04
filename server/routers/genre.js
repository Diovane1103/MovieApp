const express = require('express')
const db = require('./../db/db')
const router = new express.Router()

router.get('/movie_list', async(req, res) => {
    try {
        const genre = await db.v3Client.genre.movieList(req.query)
        res.status(200).send(genre)
    } catch (error) {
        res.status(500).send({ msg: error })
    }
})

router.get('/tv_list', async(req, res) => {
    try {
        const genre = await db.v3Client.genre.tvList(req.query)
        res.status(200).send(genre)
    } catch (error) {
        res.status(500).send({ msg: error })
    }
})

module.exports = router