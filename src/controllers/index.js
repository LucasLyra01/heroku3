const AgendamentosModel = require('../models/index');
const { sequelize } = require('../postgres/postgresql');
const { Op } = require('sequelize')

exports.CadastrarAgendamento = async (req, res) => {

    const agendamento = req.body;

    console.log(agendamento)

    // const AgendamentoExiste = await AgendamentosModel.findAll({
    //     where: {
    //         nome: agendamento.nome,
    //     }
    // });
    
    const AgendamentoExiste = await AgendamentosModel.findAll({
        where: {
            [Op.and]: [{ data: agendamento.data }, { horario: agendamento.horario }]
        }
    });

    if(AgendamentoExiste.length > 0){
        res.json({
            status: 'ok',
            message: 'Data e horário não disponíveis',
        });
    }else{
        const InserirAgendamento = await AgendamentosModel.create({
            nome: agendamento.nome,
            data: agendamento.data,
            horario: agendamento.horario
        });

        res.json({
            status: 'ok',
            message: InserirAgendamento
        });
    }
}

exports.listarAgendamentos = async (req, res) => {
    try {
        const agendamentos = await AgendamentosModel.findAll();
        res.json({
            status: 'ok',
            message: agendamentos
        });
    } catch (error) {
        console.log(error)
        res.json({
            status: 'error',
            message: 'Ocorreu um erro', error
        })
    }
}

exports.listarAgendamentosPorNome = async (req, res) => {
    const agendamento = req.params;

    try {
        const AgendamentoExiste = await AgendamentosModel.findAll({
            where: {
                nome: agendamento.nome
            }
        })

        if(AgendamentoExiste.length > 0) {
            res.json({
                status: 'ok',
                message: AgendamentoExiste
            });
            console.log('Nome encontrado na base de dados')

        }else {
            res.json({
                status: 'erro',
                message: 'Não foi possível encontrar o nome inserido'
            });
            console.log('Não foi possível encontrar o nome inserido')
        }
    } catch (error) {   
        console.log(error);
    }
}

exports.listarTodosOsNomes = async (req, res) => {

    const agendamentos = await AgendamentosModel.findAll();
    let vetorNomes = [];

    agendamentos.map((response) => {
        vetorNomes.push(response.nome)
    })

    res.json({
        status: 'ok',
        agendamentos: vetorNomes
    });
}

exports.listarHorarios = async (req, res) => {

    const agendamentos = await AgendamentosModel.findAll();
    let vetorHorarios = [];

    agendamentos.map((response) => {
        vetorHorarios.push(response.horario);
        console.log(response.horario, response.nome)
    });

    res.json({
        status:'ok',
        message: vetorHorarios
    });
}