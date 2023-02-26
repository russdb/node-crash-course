const mongoose = require('mongoose')
const { stringify } = require('querystring')
const Schema = mongoose.Schema
const blogSchema = new Schema({
  title: {
    type: string,
    required: true
  },
  snippet: {
    type: string,
    required: true
  },
  body: {
    type: string,
    required: true
  }
}, { timestamps: true })