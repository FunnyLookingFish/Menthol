const { Schema, model } = require('mongoose');

const vehicleSchema = new Schema(
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

const Vehicle = model('Vehicle', vehicleSchema);

module.exports = Vehicle;
