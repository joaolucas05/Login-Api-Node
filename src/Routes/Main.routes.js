const express = require('express');

const main = express.Router();

main.get('/', (req, res)=>{
    res.json({success:"The API is now Running!"});
});

module.exports = main;