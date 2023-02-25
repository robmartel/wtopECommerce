const Category = require('../models/CategoryModel');

const getCategories = async (req, res) => {
  try {
    const categories = await Category.find({}).sort({ name: 'asc' }).orFail();
    res.json(categories);
  } catch (error) {
    next(error);
  }
};

module.exports = getCategories;

// 'asc' means ascendent order, so line 5 will return all categories in ascendent order
