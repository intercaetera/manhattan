const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const morgan = require('morgan')
const path = require('path')
const mongoose = require('mongoose')

const config = require('./config.js')

const app = express()
const PORT = process.env.PORT || 8081

const Project = require('./models/Project.js')

mongoose.Promise = require('bluebird')
mongoose.connect(config.URI)
const db = mongoose.connection
db.on('error', console.error.bind(console, 'Connection errror: '))
db.once('open', () => { console.log('Connected to database.') })

app.use(morgan('combined'))
app.use(bodyParser.json())
app.use(cors())
app.use(express.static('frontend'))

app.get('/', (req, res) => {
	res.sendFile(path.join(__dirname, 'frontend', 'index.html'))
})

app.get('/api', (req, res) => {
	res.send("Łabądź.")
})

app.post('/api/create', (req, res) => {
	const { body } = req
	console.log(body)
	res.send(body)
})

app.listen(PORT)
console.log(`App listening on port ${PORT}`)
