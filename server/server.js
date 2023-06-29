const express = require('express');
const cors = require('cors');
const path = require('path');

// DB
const mysql = require('mysql2');
const dbconfig = require('./config/db').user;

const db = mysql.createConnection(dbconfig);

const badWords = require('./config/badWord');


// app
const app = express();
app.set('port', process.env.PORT || 8080);

// app setting
app.use(express.static(path.join(__dirname, '../tetris/build')));
app.use(cors());
app.use(express.json());


// GET Request
app.get('/', (req, res) => {
    res.sendFile(__dirname, '../tetris/build/index.html');
})

//SELECT * FROM rank_table ORDER BY score DESC
app.get('/api/ranking', (req, res) => {
    db.query('SELECT * FROM rank_table ORDER BY score DESC Limit 100', (error, results) => {
        if (error) {
            console.error('Error fetching data');
            res.status(500).send('Error fetching data');
            return;
        } else {
            res.status(200).json(results);
        }
    });
})


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


app.listen(app.get('port'), () => {
    console.log('Express server listening on http://localhost:' + app.get('port'));
});