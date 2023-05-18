import express from 'express';
const router = express.Router();
const Controller = require('../controllers/productController');

router.get('/', Controller.getProduct);
router.post('/create', Controller.create);

module.exports = router;
