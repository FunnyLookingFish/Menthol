const { Schema, model } = require('mongoose');

const budgetSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
      unique: true,
      trim: true
    },
    expense: {
      type: Number,
      required: true
    },

    budget: {
        type: Number,
        required: true
    },
  }
);

const Budget = model('Budget', budgetSchema);

module.exports = Budget;
