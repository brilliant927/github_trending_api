const request = require("request-promise");
const cheerio = require("cheerio");
const axios = require("axios");

var express = require('express');
const githubTrends = require('github-trends-api')

var router = express.Router();

router.get('/', function(req, res, next) {
  
    const section= req.query.section=='developers' ?{ section: 'developers', since: 'weekly' } :{};
     try {
        githubTrends(section)
        .then(result => { res.send(result) })
        .catch(error => { console.log(error) })
    } catch (e) {
        console.log('Something is wrong. Please check your internet status');
    }
   
});

module.exports = router;