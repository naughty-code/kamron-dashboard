const express = require('express');
const { Client } = require('pg');
const app = express();
const port = 3000;
const databaseUri = 'postgres://jxhsmzbyblxtja:9cf35b7c333850010b2d50b7458746e0ddf7ebb078c76b68c4b380c24b82b0f2@ec2-184-73-222-192.compute-1.amazonaws.com:5432/de02qip1j8b2vp';
const client = new Client({
    connectionString: databaseUri,
    ssl: true
});


app.get('/', async (req, res) => {
    await client.connect();
    {rows} = await client.query('SELECT * FROM db.full_view');
    res.json(rows);
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`))