let router = require('express').Router();

const AgendamentosController = require('../controllers/index');

router.get('/', AgendamentosController.listarAgendamentos);
router.get('/names', AgendamentosController.listarTodosOsNomes);
router.get('/horarios', AgendamentosController.listarHorarios);
router.post('/', AgendamentosController.CadastrarAgendamento);
router.get('/:nome', AgendamentosController.listarAgendamentosPorNome);

module.exports = router;