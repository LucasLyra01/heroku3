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