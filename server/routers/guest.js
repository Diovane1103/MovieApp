const express = require('express')
const db = require('./../db/db')
const router = new express.Router()

router.get('/:id/ratedMovies', async(req, res) => {
    try {
        const rMovies = await db.v3Client.guestSession.ratedMovies(req.params.id, req.query)
        res.status(200).send(rMovies)
    } catch (error) {
        res.status(500).send({ msg: error })
    }
})

router.get('/:id/ratedEpisodes', async(req, res) => {
    try {
        const rEpisodes = await db.v3Client.guestSession.ratedTvEpisodes(req.params.id, req.query)
        res.status(200).send(rEpisodes)
    } catch (error) {
        res.status(500).send({ msg: error })
    }
})

router.get('/:id/ratedTvShows', async(req, res) => {
    try {
        const rTvShow = await db.v3Client.guestSession.ratedTvShows(req.params.id, req.query)
        res.status(200).send(rTvShow)
    } catch (error) {
        res.status(500).send({ msg: error })
    }
})

module.exports = router