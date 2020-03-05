const express = require('express')
const db = require('./../db/db')
const router = new express.Router()

router.get('/episode_group/:id/details', async (req, res) => {
    try {
        const detail = await db.v3Client.tvEpisodeGroup.details(req.params.id, req.query)
        res.status(200).send(detail)
    } catch (error) {
        res.status(500).send({ msg: error })
    }
})

router.get('/:id/season/:season_number/episode/:episode_number/account_states', async (req, res) => {
    try {
        const state = await db.v3Client.tvEpisode.accountStates(req.params.id, req.params.season_number, req.params.episode_number, req.query)
        res.status(200).send(state)
    } catch (error) {
        res.status(500).send({ msg: error })
    }
})

router.get('/episode/:id/changes', async (req, res) => {
    try {
        const changes = await db.v3Client.tvEpisodeGroup.details(req.params.id, req.query)
        res.status(200).send(changes)
    } catch (error) {
        res.status(500).send({ msg: error })
    }
})

router.get('/:id/season/:season_number/episode/:episode_number/credits', async (req, res) => {
    try {
        const credits = await db.v3Client.tvEpisode.credits(req.params.id, req.params.season_number, req.params.episode_number)
        res.status(200).send(credits)
    } catch (error) {
        res.status(500).send({ msg: error })
    }
})

router.delete('/:id/season/:season_id/episode/:episode_id/rating', async (req, res) => {
    const query = req.query.session_id != '' ?  req.query.session_id : req.query.guest_session_id
    try {
        const del = await db.v3Client.tvEpisode.deleteRating(req.params.id, req.params.season_id, req.params.episode_id, query)
        res.status(200).send(del)
    } catch (error) {
        res.status(500).send({ msg: error })
    }
})

router.get('/:id/season/:season_id/episode/:episode_id/details', async (req, res) => {
    try {
        const detail = await db.v3Client.tvEpisode.details(req.params.id, req.params.season_id, req.params.episode_id, req.query)
        res.status(200).send(detail)
    } catch (error) {
        res.status(500).send({ msg: error })
    }
})

router.get('/:id/season/:season_id/episode/:episode_id/external_ids', async (req, res) => {
    try {
        const ids = await db.v3Client.tvEpisode.externalIds(req.params.id, req.params.season_id, req.params.episode_id)
        res.status(200).send(ids)
    } catch (error) {
        res.status(500).send({ msg: error })
    }
})

router.get('/:id/season/:season_id/episode/:episode_id/images', async (req, res) => {
    try {
        const images = await db.v3Client.tvEpisode.images(req.params.id, req.params.season_id, req.params.episode_id, req.query)
        res.status(200).send(images)
    } catch (error) {
        res.status(500).send({ msg: error })
    }
})

router.post('/:id/season/:season_id/episode/:episode_id/rating', async (req, res) => {
    const query = req.query.session_id != '' ?  req.query.session_id : req.query.guest_session_id
    try {
        const rate = await db.v3Client.tvEpisode.rate(req.params.id, req.params.season_id, req.params.episode_id, req.body, query)
        res.status(200).send(rate)
    } catch (error) {
        res.status(500).send({ msg: error })
    }
})

router.get('/:id/season/:season_id/episode/:episode_id/translations', async (req, res) => {
    try {
        const translations = await db.v3Client.tvEpisode.translations(req.params.id, req.params.season_id, req.params.episode_id)
        res.status(200).send(translations)
    } catch (error) {
        res.status(500).send({ msg: error })
    }
})

router.get('/:id/season/:season_id/episode/:episode_id/videos', async (req, res) => {
    try {
        const videos = await db.v3Client.tvEpisode.videos(req.params.id, req.params.season_id, req.params.episode_id, req.query)
        res.status(200).send(videos)
    } catch (error) {
        res.status(500).send({ msg: error })
    }
})

router.get('/:id/season/:season_id/account_states', async (req, res) => {
    try {
        const state = await db.v3Client.tvSeason.accountStates(req.params.id, req.params.season_id, req.query)
        res.status(200).send(state)
    } catch (error) {
        res.status(500).send({ msg: error })
    }
})

router.get('/season/:season_id/changes', async (req, res) => {
    try {
        const changes = await db.v3Client.tvSeason.changes(req.params.season_id, req.query)
        res.status(200).send(changes)
    } catch (error) {
        res.status(500).send({ msg: error })
    }
})

router.get('/:id/season/:season_id/credits', async (req, res) => {
    try {
        const credits = await db.v3Client.tvSeason.credits(req.params.id, req.params.season_id, req.query)
        res.status(200).send(credits)
    } catch (error) {
        res.status(500).send({ msg: error })
    }
})

router.get('/:id/season/:season_id/details', async (req, res) => {
    try {
        const details = await db.v3Client.tvSeason.details(req.params.id, req.params.season_id, req.query)
        res.status(200).send(details)
    } catch (error) {
        res.status(500).send({ msg: error })
    }
})

router.get('/:id/season/:season_id/external_ids', async (req, res) => {
    try {
        const ids = await db.v3Client.tvSeason.externalIds(req.params.id, req.params.season_id, req.query)
        res.status(200).send(ids)
    } catch (error) {
        res.status(500).send({ msg: error })
    }
})

router.get('/:id/season/:season_id/images', async (req, res) => {
    try {
        const images = await db.v3Client.tvSeason.images(req.params.id, req.params.season_id, req.query)
        res.status(200).send(images)
    } catch (error) {
        res.status(500).send({ msg: error })
    }
})

router.get('/:id/season/:season_id/videos', async (req, res) => {
    try {
        const videos = await db.v3Client.tvSeason.videos(req.params.id, req.params.season_id, req.query)
        res.status(200).send(videos)
    } catch (error) {
        res.status(500).send({ msg: error })
    }
})

router.get('/:id/account_states', async (req, res) => {
    try {
        const state = await db.v3Client.tv.accountStates(req.params.id, req.query)
        res.status(200).send(state)
    } catch (error) {
        res.status(500).send({ msg: error })
    }
})

router.get('/airing_today', async (req, res) => {
    try {
        const air = await db.v3Client.tv.airingToday(req.query)
        res.status(200).send(air)
    } catch (error) {
        res.status(500).send({ msg: error })
    }
})

router.get('/:id/alternative_titles', async (req, res) => {
    try {
        const titles = await db.v3Client.tv.alternativeTitles(req.params.id, req.query)
        res.status(200).send(titles)
    } catch (error) {
        res.status(500).send({ msg: error })
    }
})

router.get('/:id/changes', async (req, res) => {
    try {
        const changes = await db.v3Client.tv.changes(req.params.id, req.query)
        res.status(200).send(changes)
    } catch (error) {
        res.status(500).send({ msg: error })
    }
})

router.get('/:id/content_rating', async (req, res) => {
    try {
        const content = await db.v3Client.tv.contentRatings(req.params.id, req.query)
        res.status(200).send(content)
    } catch (error) {
        res.status(500).send({ msg: error })
    }
})

router.get('/:id/credits', async (req, res) => {
    try {
        const credits = await db.v3Client.tv.credits(req.params.id, req.query)
        res.status(200).send(credits)
    } catch (error) {
        res.status(500).send({ msg: error })
    }
})

router.delete('/:id/rating', async (req, res) => {
    const query = req.query.session_id != '' ?  req.query.session_id : req.query.guest_session_id
    try {
        const rate = await db.v3Client.tv.deleteRating(req.params.id, query)
        res.status(200).send(rate)
    } catch (error) {
        res.status(500).send({ msg: error })
    }
})

router.get('/:id/details', async (req, res) => {
    try {
        const details = await db.v3Client.tv.details(req.params.id, req.query)
        res.status(200).send(details)
    } catch (error) {
        res.status(500).send({ msg: error })
    }
})

router.get('/:id/episode_group', async (req, res) => {
    try {
        const groups = await db.v3Client.tv.episodeGroups(req.params.id, req.query)
        res.status(200).send(groups)
    } catch (error) {
        res.status(500).send({ msg: error })
    }
})

router.get('/:id/external_ids', async (req, res) => {
    try {
        const ids = await db.v3Client.tv.externalIds(req.params.id, req.query)
        res.status(200).send(ids)
    } catch (error) {
        res.status(500).send({ msg: error })
    }
})

router.get('/:id/images', async (req, res) => {
    try {
        const images = await db.v3Client.tv.images(req.params.id, req.query)
        res.status(200).send(images)
    } catch (error) {
        res.status(500).send({ msg: error })
    }
})

router.get('/:id/keywords', async (req, res) => {
    try {
        const keywords = await db.v3Client.tv.keywords(req.params.id)
        res.status(200).send(keywords)
    } catch (error) {
        res.status(500).send({ msg: error })
    }
})

router.get('/latest', async (req, res) => {
    try {
        const latest = await db.v3Client.tv.latest(req.query)
        res.status(200).send(latest)
    } catch (error) {
        res.status(500).send({ msg: error })
    }
})

router.get('/on_air', async (req, res) => {
    try {
        const onAir = await db.v3Client.tv.onTheAir(req.query)
        res.status(200).send(onAir)
    } catch (error) {
        res.status(500).send({ msg: error })
    }
})

router.get('/popular', async (req, res) => {
    try {
        const popular = await db.v3Client.tv.popular(req.query)
        res.status(200).send(popular)
    } catch (error) {
        res.status(500).send({ msg: error })
    }
})

router.post('/:id/rating', async (req, res) => {
    const query = req.query.session_id != '' ?  req.query.session_id : req.query.guest_session_id
    try {
        const rate = await db.v3Client.tv.rate(req.params.id, req.body, query)
        res.status(200).send(rate)
    } catch (error) {
        res.status(500).send({ msg: error })
    }
})

router.get('/:id/recommendations', async (req, res) => {
    try {
        const recommendations = await db.v3Client.tv.recommendations(req.params.id, req.query)
        res.status(200).send(recommendations)
    } catch (error) {
        res.status(500).send({ msg: error })
    }
})

router.get('/:id/reviews', async (req, res) => {
    try {
        const reviews = await db.v3Client.tv.reviews(req.params.id, req.query)
        res.status(200).send(reviews)
    } catch (error) {
        res.status(500).send({ msg: error })
    }
})

router.get('/:id/screened_theatrically', async (req, res) => {
    try {
        const screened = await db.v3Client.tv.screenedTheatrically(req.params.id)
        res.status(200).send(screened)
    } catch (error) {
        res.status(500).send({ msg: error })
    }
})

router.get('/:id/similar', async (req, res) => {
    try {
        const similar = await db.v3Client.tv.similar(req.params.id, req.query)
        res.status(200).send(similar)
    } catch (error) {
        res.status(500).send({ msg: error })
    }
})

router.get('/similar', async (req, res) => {
    try {
        const top = await db.v3Client.tv.topRated(req.query)
        res.status(200).send(top)
    } catch (error) {
        res.status(500).send({ msg: error })
    }
})

router.get('/:id/translations', async (req, res) => {
    try {
        const translations = await db.v3Client.tv.translations(req.params.id, req.query)
        res.status(200).send(translations)
    } catch (error) {
        res.status(500).send({ msg: error })
    }
})

router.get('/:id/videos', async (req, res) => {
    try {
        const videos = await db.v3Client.tv.videos(req.params.id, req.query)
        res.status(200).send(videos)
    } catch (error) {
        res.status(500).send({ msg: error })
    }
})

module.exports = router