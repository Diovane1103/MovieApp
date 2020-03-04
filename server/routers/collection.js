const express = require('express')
const db = require('./../db/db')
const router = new express.Router()

router.get('/:id', async (req, res) => {
    try {
        const details = await db.v3Client.collection.details(req.params.id, req.query)
        res.status(200).send(details)    
    } catch (error) {
        res.status(500).send({ msg: error})
    }
})

router.get('/:id/images', async (req, res) => {
    try {
        const images = await db.v3Client.collection.images(req.params.id, req.query)
        res.status(200).send(images)    
    } catch (error) {
        res.status(500).send({ msg: error})
    }
})

router.get('/:id/translations', async (req, res) => {
    try {
        const translations = await db.v3Client.collection.translations(req.params.id, req.query)
        res.status(200).send(translations)    
    } catch (error) {
        res.status(500).send({ msg: error})
    }
})

module.exports = router