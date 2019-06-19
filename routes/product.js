const productController = require('../controllers/product.controler')
const express = require('express');
const router = express.Router();
const { isAuthenticated, tokenVerify } = require('../middleware/index');

router.get("/", isAuthenticated,productController.getAll);

router.get("/:id", tokenVerify, isAuthenticated, productController.getOne);
router.post("/add", tokenVerify, isAuthenticated, productController.create);
router.delete("/:id", tokenVerify, isAuthenticated, productController.deleteOne);
router.put('/update', tokenVerify, isAuthenticated, productController.updateOne);

module.exports = router