const express = require('express')
const db = require('./../db/db')
const router = new express.Router()

router.get('/', async (req, res) => {
    const sessionId = req.query.sessionId
    try {
        const account = await db.v3Client.account.details(sessionId)
        res.status(200).send(account)
    } catch (error) {
        res.status(500).send({ msg: error })
    }
})

router.get('/:id/favorite_movie', async (req, res) => {
    try {
        const account = await db.v3Client.account.favoriteMovies(req.params.id, req.query)
        res.status(200).send(account)
    } catch (error) {
        res.status(500).send({ msg: error })
    }
})

router.get('/:id/favorite_tv', async (req, res) => {
    try {
        const account = await db.v3Client.account.favoriteTvShows(req.params.id, req.query)
        res.status(200).send(account)
    } catch (error) {
        res.status(500).send({ msg: error })
    }
})

router.get('/:id/favorite', async (req, res) => {
    try {
        const account = await db.v3Client.account.lists(req.params.id, req.query)
        res.status(200).send(account)
    } catch (error) {
        res.status(500).send({ msg: error })
    }
})

router.post('/:id/add_watchlist', async (req, res) => {
    try {
        const watchlistItem = await db.v4Client.account.addToWatchlist(req.params.id, req.query.session_id, req.body)
        res.status(201).send(watchlistItem)
    } catch (error) {
        res.status(500).send({ msg: error })
    }
})

module.exports = router