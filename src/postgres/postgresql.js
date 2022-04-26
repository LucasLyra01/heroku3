const { Pool, Client } = require('pg');

var client = new Client({
    user: process.env.POSTGRE_USER,
    password: process.env.POSTGRE_PASSWORD,
    database: process.env.POSTGRE_DATABASE,
    port: process.env.POSTGRE_PORT,
    host: process.env.POSTGRE_HOST,
    ssl: true
});

try {
    client.connect( () => {
        console.log('Conectado')
    });
} catch (error) {
    console.log(error)
}

module.exports = client;