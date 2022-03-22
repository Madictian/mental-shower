const mongoose = require('mongoose');

const DataSchema = new mongoose.Schema({
    zone: {
    type: Number,
    required: [true, 'zone must be specified'],
  },
  Temperature: {
    type: Number,
    required: [true, 'TeTemperaturemp must be specified'],
  },
  Humidity: {
    type: Number,
    required: [true, 'Humidity must be specified'],
  },
  AirQuality: {
    type: Number,
    required: [true, 'AirQuality must be specified'],
  },
  date: { type: Date, default: Date.now }

});

const Data = mongoose.model('Data', DataSchema);

module.exports = Data;