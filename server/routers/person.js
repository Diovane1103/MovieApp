const express = require('express')
const db = require('./../db/db')
const router = new express.Router()

router.get('/:id/details', async (req, res) => {
    try {
        const details = await db.v3Client.people.details(req.params.id, req.query)
        res.status(200).send(changes)
    } catch (error) {
        res.status(500).send({ msg: error })
    }
})

router.get('/:id/credits_movie', async (req, res) => {
    try {
        const mCredits = await db.v3Client.people.movieCredits(req.params.id, req.query)
        res.status(200).send(mCredits)
    } catch (error) {
        res.status(500).send({ msg: error })
    }
})

router.get('/:id/credits_tv', async (req, res) => {
    try {
        const tCredits = await db.v3Client.people.tvCredits(req.params.id, req.query)
        res.status(200).send(tCredits)
    } catch (error) {
        res.status(500).send({ msg: error })
    }
})

router.get('/:id/translations', async (req, res) => {
    try {
        const translations = await db.v3Client.people.translations(req.params.id, req.query)
        res.status(200).send(translations)
    } catch (error) {
        res.status(500).send({ msg: error })
    }
})

router.get('/:id/tagged_images', async (req, res) => {
    try {
        const tagged = await db.v3Client.people.taggedImages(req.params.id, req.query)
        res.status(200).send(tagged)
    } catch (error) {
        res.status(500).send({ msg: error })
    }
})

router.get('/:id/combined_credits', async (req, res) => {
    try {
        const combCredits = await db.v3Client.people.combinedCredits(req.params.id, req.query)
        res.status(200).send(combCredits)
    } catch (error) {
        res.status(500).send({ msg: error })
    }
})

router.get('/:id/images', async (req, res) => {
    try {
        const images = await db.v3Client.people.images(req.params.id)
        res.status(200).send(images)
    } catch (error) {
        res.status(500).send({ msg: error })
    }
})

router.get('/:id/changes', async (req, res) => {
    try {
        const changes = await db.v3Client.people.changes(req.params.id, req.query)
        res.status(200).send(changes)
    } catch (error) {
        res.status(500).send({ msg: error })
    }
})

router.get('/latest', async (req, res) => {
    try {
        const latest = await db.v3Client.people.latest(req.query)
        res.status(200).send(latest)
    } catch (error) {
        res.status(500).send({ msg: error })
    }
})

router.get('/popular', async (req, res) => {
    try {
        const popular = await db.v3Client.people.popular(req.query)
        res.status(200).send(popular)
    } catch (error) {
        res.status(500).send({ msg: error })
    }
})

router.get('/:id/external_id', async (req, res) => {
    try {
        const ids = await db.v3Client.people.externalIds(req.params.id, req.query)
        res.status(200).send(ids)
    } catch (error) {
        res.status(500).send({ msg: error })
    }
})

module.exports = router