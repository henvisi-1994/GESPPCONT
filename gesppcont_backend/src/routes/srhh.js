const {Router } = require('express');
const router = Router();

const {getPersonas} = require('../controllers/personas.controller')
router.get('/personas',getPersonas);

module.exports= router;