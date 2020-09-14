const express = require('express')
const books = express.Router()
const cors = require('cors')
const jwt = require('jsonwebtoken')
const bcrypt = require('bcrypt')

const Book = require("../models/Book")
const { Router } = require('express')
books.use(cors())

process.env.SECRET_KEY = 'secret'


// books.post('/register', (req, res) => {
//     const bookData = {
//         id: req.body.id,
//         title: req.body.title,
//         author: req.body.author,
//         price: req.body.price,
//         description: req.body.description,
//         release: req.body.release,
//         rating: req.body.rating,
//         tags: req.body.tags
//     }
// })


books.get('/', async (req,res) => {
    try {
        const books = await Book.find()
        res.json(books);
    } catch(err) {
        res.json({message: err})
    }
})

books.post('/register', async (req,res) => {
        const book = new Book({
            id: req.body.id,
            title: req.body.title,
            author: req.body.author,
            price: req.body.price,
            description: req.body.description,
            release: req.body.release,
            rating: req.body.rating,
            tags: req.body.tags
        })
        try {
            const savedBook = await book.save()
            res.json(savedBook)
        }
        catch(error) {
            res.json({message: error})
        }
})

books.get('/:id', async (req,res) => {
    try{
        const bookById= await Book.find({id: req.params.id})
        console.log(req.params.id)
        res.json(bookById)
    }catch(error) {
        res.json({message: error})
    }

})

books.delete('/:id', async (req,res) => {
   try {
       const removeBook = await Book.remove({id: req.params.id})
       res.json(removeBook)
   }catch(error) {
       res.json({message: error})
   }
})

books.put('/:id', async (req,res) => {
    try {
      const updateBook = await  Book.updateOne({_id: req.params.id},{$set: {title: req.params.title}})
      res.json(updateBook)
    }catch (error) {
        res.json({message: error})
    }
    
})


module.exports = books