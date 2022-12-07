const express = require('express');
const mysqli = require('mysqli');

const app = express();

app.use(express.json());

const db = mysqli.createConnection({
    servername : 'localhost',
    username : 'root',
    password : '',
    dbname : 'openspace_db',
});

app.post('/registration', (req, res)=> {
    
    db.query("INSERT INTO `user_register_tbl` `(`user_id`, `username`, `password`) VALUES (?,?,?,?)", [username, password], (err, result)=>{
        console.log(err);
    });
});