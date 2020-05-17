var express = require('express');
var router = express.Router();
var mySqlConnecton = require('../config');

/* GET users listing. */
router.get('/', function(req, res, next) {
  mySqlConnecton.query("select * from employee", (err, rows) => {
    if (err) {
        console.log(err)
        throw err;
    } else {
        res.send(rows);
    }
})
});

module.exports = router;
