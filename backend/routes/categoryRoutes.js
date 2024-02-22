// Import required modules and controllers
const express = require('express');
const router = express.Router();
const categoryController = require('../controllers/categoryController');

// Define route handlers
router.get('/', categoryController.getCategories);
router.post('/', categoryController.createCategory);
router.get('/:id', categoryController.getCategoryById);
router.put('/:id', categoryController.updateCategory);
router.delete('/:id', categoryController.deleteCategory);

// Export the router
module.exports = router;
