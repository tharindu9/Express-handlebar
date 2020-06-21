var express = require('express');
var mySqlConnecton = require('../config');

var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  mySqlConnecton.query("select * from employee", (err, rows) => {
    if (err) {
        throw err;
    } else {
        res.render('index',{emps : rows} )
    }
})
});

router.post('/add-user',function(req,res){

    const userData = {
        name    : req.body.name,
        age      :req.body.age,
        email    :req.body.email,
        position : req.body.position
    }

    mySqlConnecton.query("Insert into employee SET ?",userData, function(err,result){
        if(err) throw err;
        res.redirect('/')
    })
})

router.get('/delete-user/:id',function(req,res){
    var id = req.params.id;
    mySqlConnecton.query("delete from employee where id=?",[id],function(err,result){
        if(err) throw err;
        res.redirect('/');
    })
})

module.exports = router;
