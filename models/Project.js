const mongoose = require('mongoose')

const projectSchema = new mongoose.Schema({
	id: String,
	selectedTool: String,
	selectedItem: mongoose.Schema.Types.Mixed,
	solars: [mongoose.Schema.Types.Mixed],
	lanes: [mongoose.Schema.Types.Mixed]
})

const Project = mongoose.model('Project', projectSchema)

module.exports = Project
