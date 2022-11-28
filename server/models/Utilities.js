const { Schema, model } = require('mongoose');

const utilitiesSchema = new Schema(
  {
    utilities: {
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

const Utilities = model('Utilities', utilitiesSchema);

module.exports = Utilities;
