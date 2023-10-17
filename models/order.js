import mongoose from 'mongoose'

const orderSchema = new mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },

  orderItems: [
    {
      title: { type: String },
      price: { type: Number },
      quantity: { type: Number },
    },
  ],

  shippingData: {
    name: { type: String },
    address: { type: String },
    postalCode: { type: String },
  },

  paymentMethod: { type: String },

  totalPrice: { type: Number },
})

const Order = mongoose.models.Order || mongoose.model('Order', orderSchema)

export default Order
