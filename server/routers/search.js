const express = require('express')
const db = require('./../db/db.js')
const router = new express.Router()

router.get('/movie/', async (req, res) => {
    const body = req.query
    try {
        const data = await db.v3Client.search.movies(body)
        res.status(200).send(data)
    } catch (error) {
        res.status(500).send({ msg: error })
    }
})

router.get('/tv/', async (req, res) => {
    const body = req.query
    try {
        const data = await db.v3Client.search.tv(body)
        res.status(200).send(data)
    } catch (error) {
        res.status(500).send({ msg: error })
    }
})

router.get('/company/', async (req, res) => {
    const body = req.query
    try {
        const data = await db.v3Client.search.companies(body)
        res.status(200).send(data)
    } catch (error) {
        res.status(500).send({ msg: error })
    }
})

router.get('/multi/', async (req, res) => {
    const body = req.query
    try {
        const data = await db.v3Client.search.multi(body)
        res.status(200).send(data)
    } catch (error) {
        res.status(500).send({ msg: error })
    }
})

router.get('/collection/', async (req, res) => {
    const body = req.query
    try {
        const data = await db.v3Client.search.collections(body)
        res.status(200).send(data)
    } catch (error) {
        res.status(500).send({ msg: error })
    }
})

router.get('/person/', async (req, res) => {
    const body = req.query
    try {
        const data = await db.v3Client.search.people(body)
        res.status(200).send(data)
    } catch (error) {
        res.status(500).send({ msg: error })
    }
})

router.get('/keyword/', async (req, res) => {
    const body = req.query
    try {
        const data = await db.v3Client.search.keywords(body)
        res.status(200).send(data)
    } catch (error) {
        res.status(500).send({ msg: error })
    }
})

module.exports = router