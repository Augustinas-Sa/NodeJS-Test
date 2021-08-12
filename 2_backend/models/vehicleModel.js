const mongoose = require('mongoose');

const vehicleSchema = mongoose.Schema(
  {
    model_id: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Model',
    },
    number_plate: {
      type: String,
      required: true,
    },
    country_location: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

const Vehicle = mongoose.model('vehicle', vehicleSchema);
module.exports = Vehicle;
