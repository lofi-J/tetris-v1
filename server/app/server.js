const express = require('express');
const cors = require('cors');
const path = require('path');
require('dotenv').config({path: __dirname + '/../../.env'});

// DB
const mysql = require('mysql2');
const dbconfig = require('../config/db').user;

let db;
function dataBaseConnection() {
    db = mysql.createConnection(dbconfig);

    db.connect((err) => {
        if(err) {
            console.error("Error MySQL연결 실패: ", err);
            // re-connect
            setTimeout(dataBaseConnection(), 5000);
        } else {
            console.log('Connected to MySQL server');
        }
    });

    db.on('error', (err) => {
        console.error("MySQL connection error: ", err);
        if(err.code === "read ECONNRESET") {
            dataBaseConnection();
        } else {
            throw err;
        }
    })
}
// start DB
dataBaseConnection();

const badWords = require('../config/badWord');

// app
const app = express();
const PORT = process.env.PORT || 8080;

// app setting
app.use(express.static(path.join(__dirname, '/../../tetris/build')));
app.use(cors());
app.use(express.json());


// GET Request
app.get('/', (req, res) => {
    res.sendFile(__dirname, '/../../tetris/build/index.html');
});



//SELECT * FROM rank_table ORDER BY score DESC
app.get('/api/ranking', (req, res) => {
    const query = 'SELECT * FROM rank_table ORDER BY score DESC LIMIT 100';
    db.query(query, (error, results) => {
        res.status(200).json(results);
    })
});


// Bad Word api
app.get('/api/badword', (req, res) => {
    res.json({ badWords });
})


// POST (유저로부터 데이터 받으면 DB에 추가
app.post('/api/data', (req, res) => {
    const data = req.body;
    const query = `INSERT INTO rank_table (name, score, created) VALUES (?, ?, NOW())`;
    db.query(query, [data.name, data.score], (error, results) => {
        if (error) {
            console.error('데이터 삽입중 에러발생: ', error);
            res.status(500).send('데이터 삽입중 에러발생.');
            return;
        }
        res.status(200).send('데이터 삽입 성공.');
    })
})


app.listen(PORT, () => {
    console.log('Express server listening on http://localhost:' + PORT);
});