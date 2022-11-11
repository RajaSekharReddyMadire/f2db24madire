var express = require('express');
const dog_controlers=require('../controllers/dogs');
var router = express.Router();

/* GET dogs */ 
router.get('/', dog_controlers.dog_view_all_Page ); 

// GET request for one Dog. 
router.get('/dogs/:id', dog_controlers.dog_detail); 


/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('dogs', { title: 'Search Results Dogs' });
});

module.exports = router;
