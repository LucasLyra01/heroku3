let router = require('express').Router();

const AgendamentosController = require('../controllers/index');

router.get('/', AgendamentosController.listarAgendamentos);

router.get('/', (req, res) => {
    console.log('Pingando no get');
    res.json({
        status: 'ok',
        message: 'Entrei dentro do routes'
    })
}) 

module.exports = router;