const express = require('express')
const db = require('./../db/db.js')
const router = new express.Router()

router.get('/movie', async (req, res) => {
    try {
        const data = await db.v3Client.search.movies(req.query)
        res.status(200).send(data)
    } catch (error) {
        res.status(500).send({ msg: error })
    }
})

router.get('/tv', async (req, res) => {
    try {
        const data = await db.v3Client.search.tv(req.query)
        res.status(200).send(data)
    } catch (error) {
        res.status(500).send({ msg: error })
    }
})

router.get('/company', async (req, res) => {
    try {
        const data = await db.v3Client.search.companies(req.query)
        res.status(200).send(data)
    } catch (error) {
        res.status(500).send({ msg: error })
    }
})

router.get('/multi', async (req, res) => {
    try {
        const data = await db.v3Client.search.multi(req.query)
        res.status(200).send(data)
    } catch (error) {
        res.status(500).send({ msg: error })
    }
})

router.get('/collection', async (req, res) => {
    try {
        const data = await db.v3Client.search.collections(req.query)
        res.status(200).send(data)
    } catch (error) {
        res.status(500).send({ msg: error })
    }
})

router.get('/person', async (req, res) => {
    try {
        const data = await db.v3Client.search.people(req.query)
        res.status(200).send(data)
    } catch (error) {
        res.status(500).send({ msg: error })
    }
})

router.get('/keyword', async (req, res) => {
    try {
        const data = await db.v3Client.search.keywords(req.query)
        res.status(200).send(data)
    } catch (error) {
        res.status(500).send({ msg: error })
    }
})

module.exports = router