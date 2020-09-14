const mongoose = require("mongoose")

let Schema = mongoose.Schema

let BookSchema = new Schema({
    id: {
        type: Number
    },
    title: {
        type: String
    },
    author: {
        type: String
    },
    price: {
        type: Number
    },
    description: {
        type: String
    },
    release: {
        type: String
    },
    rating: {
        type: Number
    },
    tags: {
        type: String
    }
})

module.exports = Book = mongoose.model('books', BookSchema)