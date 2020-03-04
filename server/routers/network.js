const express = require('express')
const db = require('./../db/db')
const router = new express.Router()

router.get('/:id/details', async(req, res) => {
    try {
        const details = await db.v3Client.network.details(req.params.id)
        res.status(200).send(details)
    } catch (error) {
        res.status(500).send({ msg: error })
    }
})

router.get('/:id/alternative_names', async(req, res) => {
    try {
        const altName = await db.v3Client.network.alternativeNames(req.params.id)
        res.status(200).send(altName)
    } catch (error) {
        res.status(500).send({ msg: error })
    }
})

router.get('/:id/images', async(req, res) => {
    try {
        const images = await db.v3Client.network.images(req.params.id)
        res.status(200).send(images)
    } catch (error) {
        res.status(500).send({ msg: error })
    }
})

module.exports = router