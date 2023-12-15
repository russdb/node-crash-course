const mongoose = require('mongoose')
const Schema = mongoose.Schema
//describe the properties of the documents
const blogSchema = new Schema({
  title: {
    type: String,
    required: true
  },
  snippet: {
    type: String,
    required: true
  },
  body: {
    type: String,
    required: true
  }
}, { timestamps: true })

//the model allows you to interact with the schema above
const Blog = mongoose.model('Blog', blogSchema) //name is important, adds an 's' at the end
module.exports = Blog

