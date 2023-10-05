const mysql = require('mysql');
const express = require('express');




const db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "root123",
    database: "nodemysql"

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
app.get('/createemployee', (req, res)=>{
    let sql = 'CREATE TABLE employee(id int AUTO_INCREMENT, name VARCHAR(50), designation VARCHAR(50), PRIMARY KEY(id))';
    db.query(sql,error=>{
        if(error){
            return error
        }
        res.send('Employee Table created')
    })
})
// app.get('/employee1', (req, res)=>{
//     let post = {name:"Radha", designation:"Teacher"};
//     let sql = 'INSERT INTO employee SET ?';
//     let query = db.query
//     db.query(sql,post,error=>{
//         if(error){
//             return error
//         }
//         res.send('Employee added');
//     })
// })

