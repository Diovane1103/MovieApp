const express = require('express')
const db = require('./../db/db.js')

const router = new express.Router()

router.get('/movie/:query', async (req, res) => {
    await db.searchMovie({ query: req.params.query }, (err, r) => {
        if (err)
            return res.status(500).send({ msg: err })
        res.status(200).send(r)
    })
})

router.get('/tv/:query', async (req, res) => {
    await db.searchTv({ query: req.params.query }, (err, r) => {
        if (err)
            return res.status(500).send({ msg: err })
        res.status(200).send(r)
    })
})

router.get('/multi/:query', async (req, res) => {
    await db.searchMulti({ query: req.params.query }, (err, r) => {
        if (err)
            return res.status(500).send({ msg: err })
        res.status(200).send(r)
    })
})

router.get('/collection/:query', async (req, res) => {
    await db.searchCollection({ query: req.params.query }, (err, r) => {
        if (err)
            return res.status(500).send({ msg: err })
        res.status(200).send(r)
    })
})

router.get('/person/:query', async (req, res) => {
    await db.searchPerson({ query: req.params.query }, (err, r) => {
        if (err)
            return res.status(500).send({ msg: err })
        res.status(200).send(r)
    })
})

router.get('/list/', async (req, res) => {
    await db.searchList({ }, (err, r) => {
        if (err)
            return res.status(500).send({ msg: err })
        res.status(200).send(r)
    })
})

router.get('/company/:query', async (req, res) => {
    await db.searchCompany({ query: req.params.query }, (err, r) => {
        if (err)
            return res.status(500).send({ msg: err })
        res.status(200).send(r)
    })
})

router.get('/keyword/:query', async (req, res) => {
    await db.searchKeyword({ query: req.params.query }, (err, r) => {
        if (err)
            return res.status(500).send({ msg: err })
        res.status(200).send(r)
    })
})

module.exports = router