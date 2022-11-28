const { Schema, model } = require('mongoose');

const homeSchema = new Schema(
  {
    _id: {
      type: String,
      required: true,
      trim: true
    },
    payment: {
      type: Number,
      required: true
    },

//     classes: [
//       {
//         type: Schema.Types.ObjectId,
//         ref: 'Class'
//       }
//     ]
  }
);

const Home = model('Home', homeSchema);

module.exports = Home;
