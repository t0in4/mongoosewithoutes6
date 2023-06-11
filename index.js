const mongoose = require('mongoose');
const Blog= require('./model/Blog.js');

mongoose.connect("mongodb://localhost:27017/newBase")
// create a new blog post object
const article = new Blog({
title: 'Second Awesome Post!',
slug: 'awsome-post',
published: true,
content: 'This is the best post ever',
tags: ['featured', 'announcement'],
});
// insert the article 
// in our MongoDB
(() => {
    const foo = async () => {
        await article.save();
    };
  
    foo();
  })();

// console.log("Find a single blog post")
// find a single blog post
(() => {
    const firstArticle = async () => {
        await Blog.findOne({});
        console.log(Blog.findOne({}))
        console.log("***********************");
    };
    
    firstArticle();
})();



