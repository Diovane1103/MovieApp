const express = require('express')
const db = require('./../db/db')
const router = new express.Router()

router.get('/:id', async (req, res) => {
    await db.collectionInfo({ id: req.params.id }, (err, r) => {
        if(err)
            return res.status(500).send({ msg: err})
        res.status(200).send(r)
    })
})

router.get('/:id/images', async (req, res) => {
    await db.collectionImages({ id: req.params.id }, (err, r) => {
        if(err)
            return res.status(500).send({ msg: err})
        res.status(200).send(r)
    })
})

module.exports = router