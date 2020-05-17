var express = require('express');
var mySqlConnecton = require('../config');

var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  mySqlConnecton.query("select * from employee", (err, rows) => {
    if (err) {
        console.log(err)
        throw err;
    } else {
        res.render('index',{emps : rows} )
    }
})
});

module.exports = router;
