const express = require('express');
const server = express();
const sqlite3 = require('sqlite3').verbose();

server
.use(express.json())
.use(express.urlencoded({ extended: false}))
.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', '*');
    res.header('Access-Control-Allow-Methods', '*');

    next();
});

const PORT = 3000;
server.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
})

server.get('/', (req, res) => {
    const method = req.method;
    const url = req.url;
    res.send(`Du gjorde en ${method}-förfrågan till url:en ${url}`)
})

server.get('/users', (req, res) => {
    const db = new sqlite3.Database('./gik339-labb2.db');
    const sql = 'SELECT * FROM users';
    db.all(sql, (err, rows) => {
        if (err) {
            res.status(500).send(err);
        } else {
            res.send(rows);
        }
        db.close();
    });
})
