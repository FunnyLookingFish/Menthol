const { Schema, model } = require('mongoose');

const categorySchema = new Schema({
    items: [{
        ref: 'Item',
        type: Schema.Types.ObjectId
    }],
    name: {
        type: String,
        required: true,
        trim: true,
    },
})

const Category = model('Category', categorySchema);

module.exports = Category;