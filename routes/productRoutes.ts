import Express from 'express';
const Router = Express.Router();
const Controller = require('../controllers/productController');

Router.get('/', Controller.getProduct);
Router.post('/', Controller.create);

module.exports = Router;
