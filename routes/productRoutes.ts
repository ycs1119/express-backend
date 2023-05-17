import express from 'express';
const router = express.Router();
const Controller = require('../controllers/productController');

router.get('/', Controller.getProduct);
router.post('/', Controller.create);

module.exports = router;
