const express = require('express')
const db = require('./../db/db')
const router = new express.Router()

router.get('/:id', async (req, res) => {
    await db.personInfo({ id: req.params.id }, (err, r) => {
        if(err)
            return res.status(500).send({ mgs: err })
        res.status(200).send(r)
    })
})

router.get('/:id/credits', async (req, res) => {
    await db.personMovieCredits({ id: req.params.id }, (err, r) => {
        if(err)
            return res.status(500).send({ mgs: err })
        res.status(200).send(r)
    })
})

router.get('/:id/combined_credits', async (req, res) => {
    await db.personCombinedCredits({ id: req.params.id }, (err, r) => {
        if(err)
            return res.status(500).send({ mgs: err })
        res.status(200).send(r)
    })
})

router.get('/:id/images', async (req, res) => {
    await db.personImages({ id: req.params.id }, (err, r) => {
        if(err)
            return res.status(500).send({ mgs: err })
        res.status(200).send(r)
    })
})

router.get('/:id/changes', async (req, res) => {
    await db.personChanges({ id: req.params.id }, (err, r) => {
        if(err)
            return res.status(500).send({ mgs: err })
        res.status(200).send(r)
    })
})

router.get('/latest', async (req, res) => {
    await db.personLatest((err, r) => {
        if(err)
            return res.status(500).send({ mgs: err })
        res.status(200).send(r)
    })
})

router.get('/popular', async (req, res) => {
    await db.personPopular((err, r) => {
        if(err)
            return res.status(500).send({ mgs: err })
        res.status(200).send(r)
    })
})

module.exports = router