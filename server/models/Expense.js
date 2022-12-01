const { Schema, model } = require('mongoose');

const expenseSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true
    },
    expense: {
      type: Number,
    },

  }
);

const Expense = model('Expense', expenseSchema);

module.exports = Expense;
