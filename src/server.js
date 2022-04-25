require('dotenv').config();

const express = require('express');
const cors = require('cors');
const app = express();

const port = process.env.PORT
const hostname = process.env.HOSTNAME

app.use(cors());

app.use(express.urlencoded({
    extended: true
}));

app.use(express.json());

app.get('/', (req, res) => {
    res.send({
        message: 'Rodando - v2'
    })
})

app.listen(port, hostname, () => {
    console.log(`Rodando no endereço ${hostname}:${port}`)
});