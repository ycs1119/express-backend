import Express from 'express';
const Router = Express.Router();
const Controller = require('../controllers/productController');

Router.route('/').get(Controller.all);
Router.post('/', Controller.create);
// Router.post('/delete', Controller.remove);
// Router.post('/update', Controller.update);

module.exports = Router;
