const express = require('express')
const db = require('./../db/db')
const router = new express.Router()

router.get('/:id/alternative_names', async(req, res) => {
    try {
        const altNames = await db.v3Client.company.alternativeNames(req.params.id)
        res.status(200).send(altNames)
    } catch (error) {
        res.status(500).send({ msg: error })
    }
})

router.get('/:id/details', async(req, res) => {
    try {
        const details = await db.v3Client.company.details(req.params.id)
        res.status(200).send(details)
    } catch (error) {
        res.status(500).send({ msg: error })
    }
})

router.get('/:id/images', async(req, res) => {
    try {
        const images = await db.v3Client.company.images(req.params.id)
        res.status(200).send(images)
    } catch (error) {
        res.status(500).send({ msg: error })
    }
})

module.exports = router