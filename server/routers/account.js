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
        const watchlistItem = await db.v3Client.account.addToWatchlist(req.params.id, req.query.session_id, req.body)
        res.status(201).send(watchlistItem)
    } catch (error) {
        res.status(500).send({ msg: error })
    }
})

router.post('/:id/favorite', async (req, res) => {
    try {
        const favoriteItem = await db.v3Client.account.markAsFavorite(req.params.id, req.query.session_id, req.body)
        res.status(201).send(favoriteItem)
    } catch (error) {
        res.status(500).send({ msg: error })
    }
})

router.get('/:id/watchlist_movie', async (req, res) => {
    try {
        const watchlistMovie = await db.v3Client.account.movieWatchlist(req.params.id, req.query.session_id)
        res.status(200).send(watchlistMovie)
    } catch (error) {
        res.status(500).send({ msg: error })
    }
})

router.get('/:id/rated_movie', async (req, res) => {
    try {
        const ratedMovies = await db.v3Client.account.ratedMovies(req.params.id)
        res.status(200).send(ratedMovies)
    } catch (error) {
        res.status(500).send({ msg: error })
    }
})

router.get('/:id/rated_tv', async (req, res) => {
    try {
        const ratedTv = await db.v3Client.account.ratedTvShows(req.params.id)
        res.status(200).send(ratedTv)
    } catch (error) {
        res.status(500).send({ msg: error })
    }
})

router.get('/:id/rated_ep', async (req, res) => {
    try {
        const ratedEp = await db.v3Client.account.ratedTvEpisodes(req.params.id)
        res.status(200).send(ratedEp)
    } catch (error) {
        res.status(500).send({ msg: error })
    }
})

router.get('/:id/watchlist_tv', async (req, res) => {
    try {
        const watchlistTv = db.v3Client.account.tvShowWatchlist(req.params.id, req.query)
        res.status(200).send(watchlistTv) 
    } catch (error) {
        res.status(500).send({ msg: error })
    }
})

module.exports = router