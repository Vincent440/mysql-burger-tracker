const router = require('express').Router()
const burgersController = require('../controllers/burgers_controller')

router.get('/', burgersController.getAll)

router.put('/burgers/update/:id', burgersController.updateToEaten)

router.post('/burgers/create', burgersController.createNew)

module.exports = router
