const { DataTypes } = require('sequelize');
const postgres = require('../postgres/postgresql').sequelize;

const Agendamentos = postgres.define('agendamentos', {
    nome: DataTypes.STRING,
    data: DataTypes.STRING,
    horario: DataTypes.STRING
})

const init = async () => {
    await Agendamentos.sync();
    console.log('BASE DE DADOS CRIADA')
}

init();

module.exports = Agendamentos;