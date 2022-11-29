const { Schema, model } = require('mongoose');

const expenseSchema = new Schema(
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

const Expense = model('Expense', expenseSchema);

module.exports = Expense;