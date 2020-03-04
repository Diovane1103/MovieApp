const express = require('express')
const db = require('./../db/db')
const router = new express.Router()

router.post('/:id/add_item', async(req, res) => {
    try {
        const addedItem = await db.v3Client.list.addMovie(req.params.id, req.query.session_id, req.body)
        res.status(200).send(addedItem)
    } catch (error) {
        res.status(500).send({ msg: error })
    }
})

router.post('/:id/clear', async(req, res) => {
    try {
        const cleanList = await db.v3Client.list.clear(req.params.id, req.query)
        res.status(200).send(cleanList)
    } catch (error) {
        res.status(500).send({ msg: error })
    }
})

router.post('/create', async(req, res) => {
    try {
        const cList = await db.v3Client.list.create(req.query.session_id, req.body)
        res.status(200).send(cList)
    } catch (error) {
        res.status(500).send({ msg: error })
    }
})

router.get('/:id/details', async(req, res) => {
    try {
        const dList = await db.v3Client.list.details(req.params.id, req.query)
        res.status(200).send(dList)
    } catch (error) {
        res.status(500).send({ msg: error })
    }
})

router.get('/:id/verif_item', async(req, res) => {
    try {
        const verifItem = await db.v3Client.list.itemStatus(req.params.id, req.body)
        res.status(200).send(verifItem)
    } catch (error) {
        res.status(500).send({ msg: error })
    }
})

router.delete('/:id/delete', async(req, res) => {
    try {
        const delList = await db.v3Client.list.remove(req.params.id, req.query.session_id)
        res.status(200).send(delList)
    } catch (error) {
        res.status(500).send({ msg: error })
    }
})

router.post('/:id/remove_item', async(req, res) => {
    try {
        const removedItem = await db.v3Client.list.removeMovie(req.params.id, req.query.session_id, req.body)
        res.status(200).send(removedItem)
    } catch (error) {
        res.status(500).send({ msg: error })
    }
})

module.exports = router