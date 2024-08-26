const mongoose = require('mongoose')
const todoSchema = new mongoose.Schema ({
      title: {
            type: String,
            required: false
      },
      content: {
            type: String,
            required: false
      },
      selectedCategory: {
            type: String,
            required: false
      }
})

module.exports = mongoose.model('ToDo', todoSchema)