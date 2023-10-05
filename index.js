const mysql = require('mysql');
const express = require('express');




const db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "root123"

});

// module.exports = connection;

db.connect(err => {
    if (err) console.log("There is an error while connecting" + err);

    app.listen(4000);

    console.log("DB Connected" + db.threadId);
    console.log("Server started at port 4000");

})

const app = express();
app.get('/createdb', (req, res)=>{
    let sql = 'CREATE DATABASE nodemysql';
    db.query(sql,error=>{
        if(error){
            return error
        }
        res.send('Database created')
    })
})
