const Agendamentos = require('../models/index');

exports.listarAgendamentos = async (req, res) => {
    try {
        const agendamentos = await Agendamentos.findAll();
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