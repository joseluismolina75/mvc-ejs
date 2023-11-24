const express = require('express')
const { index } = require('../controllers')//me trae solo index
//const index = require('../controllers/index') no uso esta opción pq me trae todo y yo
//solo necesito index, porque en el index de controllers, solo uso index, como se ve abajo
//const controller = {
//    index: (req, res) => res.render('index')
//}

const router = express.Router()

//index usado para que me muestre el objeto index en un menú contextual
//y haciendo clic en él, me genera la línea de arriba:
//const { index } = require('../controllers')
router.get('/', index)

module.exports = router