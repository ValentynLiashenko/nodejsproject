const productController = require('../controllers/product.controler')
const express = require('express');
const router = express.Router();


router.get("/", productController.getAll);

router.get("/:id", productController.getOne);
router.post("/add", productController.create);
router.delete("/:id", productController.deleteOne);
router.put('/update', productController.updateOne);

module.exports = router