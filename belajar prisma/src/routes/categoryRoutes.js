// src/routes/categoryRoutes.js
const express = require('express');
const router = express.Router();
const categoryController = require('../controllers/categoryController');
const { validationbodycategories } = require('../middleware/validation');

router.get('/', categoryController.getAllCategories);
router.get('/:id', categoryController.getCategoryById);
router.post('/', validationbodycategories, categoryController.createCategory);
router.put('/:id', validationbodycategories, categoryController.updateCategory);
router.delete('/:id', categoryController.deleteCategory);

module.exports = router;
