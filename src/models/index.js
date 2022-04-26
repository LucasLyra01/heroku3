const Sequelize = require('sequelize');
const sequelize = require('../postgres/postgresql');

const Agendamentos = sequelize.define('agendamentos', {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true
    },
    nome: {
        type: Sequelize.STRING,

    }
})

module.exports = Agendamentos;