const app = require('./app.js')
const port = process.env.PORT | 3500

app.listen(port, () => {
    console.log(`The application is running on localhost:${port}`)
})
