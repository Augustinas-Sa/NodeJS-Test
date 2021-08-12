const mongoose = require('mongoose');

const modelSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    hour_price: {
      type: Number,
      required: true,
    },
  },
  { timestamps: true }
);

const Model = mongoose.model('model', modelSchema);
module.exports = Model;
