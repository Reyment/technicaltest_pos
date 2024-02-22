const mongoose = require('mongoose');

const orderSchema = new mongoose.Schema({
  or_pd_id: { type: mongoose.Schema.Types.ObjectId, ref: 'Product', required: false  }, // Reference to the Product model
  or_amount: { type: Number, required: true },
}, 
{ timestamps: true }
);

module.exports = mongoose.model('Order', orderSchema);
