const Category = require('../models/Category');

// Controller for creating a new category
exports.createCategory = async (req, res) => {
    try {
        const category = new Category(req.body);
        await category.save();
        res.status(201).json({ success: true, message: 'Category created successfully', category });
    } catch (error) {
        res.status(400).json({ success: false, message: 'Failed to create category', error: error.message });
    }
};

// Controller for retrieving all categories
exports.getCategories = async (req, res) => {
    try {
        const categories = await Category.find();
        res.status(200).json({ success: true, categories });
    } catch (error) {
        res.status(500).json({ success: false, message: 'Failed to fetch categories', error: error.message });
    }
};

// Controller for retrieving a single category by ID
exports.getCategoryById = async (req, res) => {
    try {
        const category = await Category.findById(req.params.id);
        if (!category) {
            return res.status(404).json({ success: false, message: 'Category not found' });
        }
        res.status(200).json({ success: true, category });
    } catch (error) {
        res.status(500).json({ success: false, message: 'Failed to fetch category', error: error.message });
    }
};

// Controller for updating a category by ID
exports.updateCategory = async (req, res) => {
    try {
        const { id } = req.params;
        const category = await Category.findByIdAndUpdate(id, req.body, { new: true });
        if (!category) {
            return res.status(404).json({ success: false, message: 'Category not found' });
        }
        res.status(200).json({ success: true, message: 'Category updated successfully', category });
    } catch (error) {
        res.status(500).json({ success: false, message: 'Failed to update category', error: error.message });
    }
};

// Controller for deleting a category by ID
exports.deleteCategory = async (req, res) => {
    try {
        const { id } = req.params;
        const category = await Category.findByIdAndDelete(id);
        if (!category) {
            return res.status(404).json({ success: false, message: 'Category not found' });
        }
        res.status(200).json({ success: true, message: 'Category deleted successfully', category });
    } catch (error) {
        res.status(500).json({ success: false, message: 'Failed to delete category', error: error.message });
    }
};
