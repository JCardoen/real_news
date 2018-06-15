const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
const morgan = require('morgan');
const Article = require('../models/Article');

const app = express()
app.use(morgan('combined'))
app.use(bodyParser.json())
app.use(cors())

mongoose.connect('mongodb://localhost/articles');

let db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error'));
db.once('open', function (callback) {
    console.log('Connection Succeeded');
});

app.post('/bookmark/article', (req, res) => {
    let db = req.db;
    let newArticle = new Article({
        title: req.body.title,
        author: req.body.author,
        description: req.body.description,
        urlToImage: req.body.urlToImage,
        source: req.body.title,
        publishedAt: req.body.publishedAt,
        url: req.body.url,
    })

    newArticle.save(function (error) {
        if (error) {
            console.log(error)
        }
        res.send({
            success: true,
            message: 'Article saved successfully!'
        })
    })
})

app.delete('/local/article/:id', (req, res) => {
    var db = req.db;
    Article.remove({
        _id: req.params.id
    }, function (err, post) {
        if (err) res.send(err)
        res.send({
            success: true
        })
    })
})

app.get('/local/articles', (req, res) => {
    Article.find(function (err, articles) {
        if (err) return console.error(err);
        res.send({
            articles: articles
        })
    })
})

app.listen(process.env.PORT || 8081)