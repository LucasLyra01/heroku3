const AgendamentosModel = require('../models/index');

exports.CadastrarAgendamento = async (req, res) => {

    const agendamento = req.body;

    const AgendamentoExiste = await AgendamentosModel.findAll({
        where: {
            nome: agendamento.nome
        }
    })

    console.log(AgendamentoExiste);

    if(AgendamentoExiste.length > 0){
        res.json({
            status: 'ok',
            message: 'O nome já existe na base de dados', AgendamentoExiste
        });
    }else{
        const InserirAgendamento = await AgendamentosModel.create({
            nome: agendamento.nome,
        });

        res.json({
            status: 'ok',
            message: InserirAgendamento
        });
    }
}

// exports.CadastrarAgendamento = {
    
//     all(req, res, next){
//         AgendamentosModel.findAll().then((result) => {
//             res.json(result);
//         });
//     },
//     create(req, res, next) {
//         const agendamento = req.body;

//         console.log(agendamento.nome);

//         AgendamentosModel.create(agendamento.nome)
//             .then((result) => {
//                 res.status(201).json(result);
//             })
//             .catch((err) => { 
//                 console.log(err) 
//                 res.json({
//                     status: 'error',
//                     error: err
//                 })
//             })
//     }
// }

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