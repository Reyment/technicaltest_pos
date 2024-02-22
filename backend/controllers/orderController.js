const Order = require('../models/Order');

// Controller function to create a new order
exports.createOrder = async (req, res) => {
  try {
    const { or_pd_id, or_amount } = req.body;
    const order = new Order({ or_pd_id, or_amount });
    await order.save();
    res.status(201).json(order);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal server error' });
  }
};

// Controller function to get all orders
exports.getAllOrders = async (req, res) => {
  try {
    const orders = await Order.find().populate('or_pd_id'); // Populate the or_pd_id field with product data
    res.status(200).json(orders);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal server error' });
  }
};

// Controller function to get a single order by ID
exports.getOrderById = async (req, res) => {
  try {
    const { orderId } = req.params;
    const order = await Order.findById(orderId).populate('or_pd_id'); // Populate the or_pd_id field with product data
    if (!order) {
      return res.status(404).json({ message: 'Order not found' });
    }
    res.status(200).json(order);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal server error' });
  }
};

// Controller function to update an order by ID
exports.updateOrderById = async (req, res) => {
  try {
    const { orderId } = req.params;
    const { or_pd_id, or_amount } = req.body;
    const updatedOrder = await Order.findByIdAndUpdate(orderId, { or_pd_id, or_amount }, { new: true });
    if (!updatedOrder) {
      return res.status(404).json({ message: 'Order not found' });
    }
    res.status(200).json(updatedOrder);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal server error' });
  }
};

// Controller function to delete an order by ID
exports.deleteOrderById = async (req, res) => {
  try {
    const { orderId } = req.params;
    const deletedOrder = await Order.findByIdAndDelete(orderId);
    if (!deletedOrder) {
      return res.status(404).json({ message: 'Order not found' });
    }
    res.status(204).json({ message: 'Order deleted successfully' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal server error' });
  }
};
