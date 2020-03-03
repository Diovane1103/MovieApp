const { v3, v4 } = require('@leonardocabeza/the-movie-db')

const v3Client = v3(process.env.API_KEY)
const v4Client = v4(process.env.API_KEY)

module.exports = {
    v4Client, v3Client
}