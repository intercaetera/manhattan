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
	res.send('Łabądź.')
})

app.get('/api/:id', (req, res) => {
	let { id } = req.params

	Project.findOne({id: id}, (error, project) => {
		if(error) {
			console.log(error)
			res.sendStatus(404)
			return
		}

		if(!project) {
			console.log(error)
			res.sendStatus(404)
			return
		}

		res.send(project)
	})
})

app.post('/api/create', (req, res) => {
	try {
		let { body } = req

		Project.findOneAndUpdate({id: body.id}, body, {upsert: true}, (error, result) => {
			if(error) {
				console.log(error)
				return
			}

			if(!result) {
				result = new Project(body)
				console.log('created')
			}

			result.save((error, project) => {
				if(error) {
					res.sendStatus(500)
					console.log('error', error)
				}
				else {
					res.send(project)
					console.log(project)
					console.log('updated')
				}
			})
		})
	}			
	catch(error) {
		console.log(error)
		res.sendStatus(400)
	}
})

app.listen(PORT)
console.log(`App listening on port ${PORT}`)
