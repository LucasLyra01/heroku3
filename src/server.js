require('dotenv').config();

const express = require('express');
const cors = require('cors');
// const mongo = require('./mongodb/mongo.js');
const postgres = require('./postgres/postgresql.js');
const app = express();

const pingRouter = require('./routes/index.js');

const port = process.env.PORT
const hostname = process.env.HOSTNAME

app.use(cors());

app.use(express.urlencoded({
    extended: true
}));

app.use(express.json());

app.get('/', (req, res) => {
    res.send({
        message: 'Rodando - v4'
    })
});

app.use('/api', pingRouter);

app.listen(port, hostname, () => {
    console.log(`Rodando no endereço ${hostname}:${port}`)
});