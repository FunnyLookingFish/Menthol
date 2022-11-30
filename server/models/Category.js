const { Schema, model } = require('mongoose');

const categorySchema = new Schema({
    items: {
        type: String,
        required: true,
        trim: true,
    },
    name: {
        type: String,
        required: true,
        trim: true,
    },
    cost: {
        type: Number,
        required: true,
        min: 0.01,
    }
})

const Category = model('Category', categorySchema);

module.exports = Category;