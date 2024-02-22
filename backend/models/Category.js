const mongoose = require('mongoose');

const categorySchema = new mongoose.Schema({
  ct_code: { type: String, required: true },
  ct_name: { type: String, required: true },
},
{ timestamps: true }
);

module.exports = mongoose.model('Category', categorySchema);


