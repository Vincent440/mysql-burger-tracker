const burger = require('../models/burger.js')

module.exports = {
  getAll: (req, res) => {
    burger.all(burgers => {
      res.render('index', { burgers })
    })
  },
  createNew: (req, res) => {
    burger.create(['burger_name'], [req.body.burger_name], () => {
      res.status(200).end()
    })
  },
  updateToEaten: (req, res) => {
    const condition = `id = ${req.params.id}`
    burger.update({ devoured: true }, condition, () => {
      res.status(200).end()
    })
  }
}
