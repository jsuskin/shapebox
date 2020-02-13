const mongoose = require('mongoose');

const ShapeSchema = mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  type: {
    type: String,
    required: true
  },
  dims: [{
    type: Number
  }],
  color: [{
    type: Number
  }]
});

module.exports = mongoose.model('Shapes', ShapeSchema);