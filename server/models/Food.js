const { Schema, model } = require('mongoose');

const foodSchema = new Schema(
  {
    grocery: {
      type: String,
      required: true,
      unique: true,
      trim: true
    },
    expense: {
      type: Number,
      required: true
    },

    // budget: [
    //   {
    //     type: Schema.Types.ObjectId,
    //     ref: 'Budget'
    //   }
    // ]
  }
);

const Food = model('Food', foodSchema);

module.exports = Food;
