const { v3 } = require('@leonardocabeza/the-movie-db')

const v3Client = v3(process.env.API_KEY)

module.exports = {
    v3Client
}