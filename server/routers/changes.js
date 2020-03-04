const express = require('express')
const db = require('./../db/db')
const router = new express.Router()

router.get('/movie', async(req, res) => {
    try {
        const changedMovies = await db.v3Client.change.movies(req.query)
        res.status(200).send(changedMovies)
    } catch (error) {
        res.status(500).send({ msg: error })
    }
})

router.get('/tv', async(req, res) => {
    try {
        const changedTvShow = await db.v3Client.change.tvShows(req.query)
        res.status(200).send(changedTvShow)
    } catch (error) {
        res.status(500).send({ msg: error })
    }
})

router.get('/people', async(req, res) => {
    try {
        const changedPeople = await db.v3Client.change.people(req.query)
        res.status(200).send(changedPeople)
    } catch (error) {
        res.status(500).send({ msg: error })
    }
})

module.exports = router