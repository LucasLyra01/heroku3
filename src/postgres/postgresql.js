// const { Pool, Client } = require('pg');

// var client = new Client({
//     user: process.env.POSTGRE_USER,
//     password: process.env.POSTGRE_PASSWORD,
//     database: process.env.POSTGRE_DATABASE,
//     port: process.env.POSTGRE_PORT,
//     host: process.env.POSTGRE_HOST,
//     ssl: true
// });

// try {
//     client.connect( () => {
//         console.log('Conectado')
//     });
// } catch (error) {
//     console.log(error)
// }

// module.exports = client;

const { Sequelize } = require('sequelize');

const sequelize = new Sequelize(
    process.env.POSTGRE_URI,
    {
        dialectOptions: {
            ssl: {
                rejectUnauthorized: false,
            }
        }
    }
);

const sincronizaPostgres = async() => {
    try {
        sequelize.authenticate()
        .then(() => {
            console.log('Conexão estabalecida com sucesso')
        }).catch(error => console.log(error));
    } catch (error) {
        console.log("Deu erro aqui", error);
    }
}


module.exports = {sincronizaPostgres, Sequelize, sequelize};