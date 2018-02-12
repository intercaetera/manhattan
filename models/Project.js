const mongoose = require('mongoose')

const projectSchema = new mongoose.Schema({
	data: { type: Object }
})

const Project = mongoose.model('Project', projectSchema)

module.exports = Project
