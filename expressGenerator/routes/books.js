var express = require('../node_modules/express'),
bookRouter = express.Router(),
controller = require('../controller/bookController');


bookRouter
    .get('/', controller.GetAll)
    .get('/:id', controller.GetByID)
    .post('/', controller.Create)
    .put('/:id', controller.Update)
    .get('/delete/:id', controller.Delete);

module.exports = bookRouter;