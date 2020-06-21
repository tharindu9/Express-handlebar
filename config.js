const mySql = require('mysql');

var mySqlConnecton;

var settings = {
    host: "localhost",
    user: "root",
    database: "employee",
    password: "",
}

const dbConnection = function(){
    if(!mySqlConnecton){
        //create mysql connection
         mySqlConnecton = mySql.createConnection(settings)


mySqlConnecton.connect((err) => {
    if (!err) {
        console.log('connection sucess')
    } 
    else {
        console.log('conection faild',err)
    }
})
}
    return mySqlConnecton;
}

module.exports = dbConnection();

