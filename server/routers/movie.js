const express = require('express')
const db = require('./../db/db')
const router = new express.Router()

router.get('/:id/account_states', async (req, res) => {
    try {
        const state = await db.v3Client.movie.accountStates(req.params.id, req.query)
        res.status(200).send(state)
    } catch (error) {
        res.status(500).send({ msg: error })
    }
})

router.get('/:id/alternative_titles', async (req, res) => {
    try {
        const altTitles = await db.v3Client.movie.alternativeTitles(req.params.id, req.query)
        res.status(200).send(altTitles)
    } catch (error) {
        res.status(500).send({ msg: error })
    }
})

router.get('/:id/changes', async (req, res) => {
    try {
        const changes = await db.v3Client.movie.changes(req.params.id, req.query)
        res.status(200).send(changes)
    } catch (error) {
        res.status(500).send({ msg: error })
    }
})

router.get('/:id/credits', async (req, res) => {
    try {
        const credits = await db.v3Client.movie.credits(req.params.id)
        res.status(200).send(credits)
    } catch (error) {
        res.status(500).send({ msg: error })
    }
})

router.delete('/:id/rating', async (req, res) => {
    const query = req.query.session_id != '' ?  req.query.session_id : req.query.guest_session_id
    try {
        const deletedRating = await db.v3Client.movie.deleteRating(req.params.id, {...query})
        res.status(200).send(deletedRating)
    } catch (error) {
        res.status(500).send({ msg: error })
    }
})

router.get('/:id/details', async (req, res) => {
    try {
        const details = await db.v3Client.movie.details(req.params.id, req.query)
        res.status(200).send(details)
    } catch (error) {
        res.status(500).send({ msg: error })
    }
})

router.get('/:id/external_ids', async (req, res) => {
    try {
        const ids = await db.v3Client.movie.externalIds(req.params.id)
        res.status(200).send(ids)
    } catch (error) {
        res.status(500).send({ msg: error })
    }
})

router.get('/:id/images', async (req, res) => {
    try {
        const images = await db.v3Client.movie.images(req.params.id, req.query)
        res.status(200).send(images)
    } catch (error) {
        res.status(500).send({ msg: error })
    }
})

router.get('/:id/keywords', async (req, res) => {
    try {
        const keywords = await db.v3Client.movie.keywords(req.params.id)
        res.status(200).send(keywords)
    } catch (error) {
        res.status(500).send({ msg: error })
    }
})

router.get('/latest', async (req, res) => {
    try {
        const latest = await db.v3Client.movie.latest(req.query)
        res.status(200).send(latest)
    } catch (error) {
        res.status(500).send({ msg: error })
    }
})

router.get('/:id/lists', async (req, res) => {
    try {
        const list = await db.v3Client.movie.lists(req.params.id, req.query)
        res.status(200).send(list)
    } catch (error) {
        res.status(500).send({ msg: error })
    }
})

router.get('/now_playing', async (req, res) => {
    try {
        const play = await db.v3Client.movie.nowPlaying(req.query)
        res.status(200).send(play)
    } catch (error) {
        res.status(500).send({ msg: error })
    }
})

router.get('/popular', async (req, res) => {
    try {
        const popular = await db.v3Client.movie.popular(req.query)
        res.status(200).send(popular)
    } catch (error) {
        res.status(500).send({ msg: error })
    }
})

router.post('/:id/rating', async (req, res) => {
    const query = req.query.session_id != '' ?  req.query.session_id : req.query.guest_session_id
    try {
        const rate = await db.v3Client.movie.rate(req.params.id, req.body, {...query})
        res.status(200).send(rate)
    } catch (error) {
        res.status(500).send({ msg: error })
    }
})

router.get('/:id/recommendations', async (req, res) => {
    try {
        const recommendations = await db.v3Client.movie.recommendations(req.params.id, req.query)
        res.status(200).send(recommendations)
    } catch (error) {
        res.status(500).send({ msg: error })
    }
})

router.get('/:id/relese_dates', async (req, res) => {
    try {
        const dates = await db.v3Client.movie.releaseDates(req.params.id)
        res.status(200).send(dates)
    } catch (error) {
        res.status(500).send({ msg: error })
    }
})

router.get('/:id/reviews', async (req, res) => {
    try {
        const reviews = await db.v3Client.movie.reviews(req.params.id, req.query)
        res.status(200).send(reviews)
    } catch (error) {
        res.status(500).send({ msg: error })
    }
})

router.get('/:id/similar', async (req, res) => {
    try {
        const similar = await db.v3Client.movie.similar(req.params.id, req.query)
        res.status(200).send(similar)
    } catch (error) {
        res.status(500).send({ msg: error })
    }
})

router.get('/top_rated', async (req, res) => {
    try {
        const top = await db.v3Client.movie.topRated(req.query)
        res.status(200).send(top)
    } catch (error) {
        res.status(500).send({ msg: error })
    }
})

router.get('/:id/translations', async (req, res) => {
    try {
        const translations = await db.v3Client.movie.translations(req.params.id)
        res.status(200).send(translations)
    } catch (error) {
        res.status(500).send({ msg: error })
    }
})

router.get('/upcoming', async (req, res) => {
    try {
        const upcoming = await db.v3Client.movie.upcoming(req.query)
        res.status(200).send(upcoming)
    } catch (error) {
        res.status(500).send({ msg: error })
    }
})

router.get('/:id/videos', async (req, res) => {
    try {
        const videos = await db.v3Client.movie.videos(req.params.id)
        res.status(200).send(videos)
    } catch (error) {
        res.status(500).send({ msg: error })
    }
})

module.exports = router