const { Schema, model } = require('mongoose');

const miscSchema = new Schema(
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

    // budget: [
    //   {
    //     type: Schema.Types.ObjectId,
    //     ref: 'Budget'
    //   }
    // ]
  }
);

const Misc = model('Misc', miscSchema);

module.exports = Misc;
