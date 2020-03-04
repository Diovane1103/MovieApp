const express = require('express')
const db = require('./../db/db')
const router = new express.Router()

router.get('/api', async(req, res) => {
    try {
        const api = await db.v3Client.configuration.api()
        res.status(200).send(api)
    } catch (error) {
        res.status(500).send({ msg: error })
    }
})

router.get('/countries', async(req, res) => {
    try {
        const countries = await db.v3Client.configuration.countries()
        res.status(200).send(countries)
    } catch (error) {
        res.status(500).send({ msg: error })
    }
})

router.get('/jobs', async(req, res) => {
    try {
        const jobs = await db.v3Client.configuration.jobs()
        res.status(200).send(jobs)
    } catch (error) {
        res.status(500).send({ msg: error })
    }
})

router.get('/languages', async(req, res) => {
    try {
        const languages = await db.v3Client.configuration.languages()
        res.status(200).send(languages)
    } catch (error) {
        res.status(500).send({ msg: error })
    }
})

router.get('/primary_translations', async(req, res) => {
    try {
        const translations = await db.v3Client.configuration.primaryTranslations()
        res.status(200).send(translations)
    } catch (error) {
        res.status(500).send({ msg: error })
    }
})

router.get('/timezones', async(req, res) => {
    try {
        const timezones = await db.v3Client.configuration.timezones()
        res.status(200).send(timezones)
    } catch (error) {
        res.status(500).send({ msg: error })
    }
})

module.exports = router