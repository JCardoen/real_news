const mongoose = require("mongoose");
const Schema = mongoose.Schema;

let ArticleSchema = new Schema({
  title: String,
  author: String,
  description: String,
  urlToImage: String,
  source: String,
  publishedAt: Date,
  url: String,
});

let Article = mongoose.model("Article", ArticleSchema);
module.exports = Article;