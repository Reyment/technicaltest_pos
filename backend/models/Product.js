const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
  pd_code: { type: String, required: true },
  pd_ct_id: { type: String, required: true },
  pd_name: { type: String, required: true },
  pd_price: { type: Number, required: true },

},
{ timestamps: true }
);

module.exports = mongoose.model('Product', productSchema);
