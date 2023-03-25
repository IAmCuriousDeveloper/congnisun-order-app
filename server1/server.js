const express = require('express')
const bodyParser = require('body-parser')
const mongoose = require('mongoose')
const cors = require('cors')

const app = express()

const corsOption = {
  origin: ['http://localhost:3000'],
}
app.use(cors(corsOption))
//if you want in every domain then
app.use(cors())

mongoose.connect(
  'mongodb+srv://Prashant:5ZduhJLZUGSlrl04@cluster0.m5itv.mongodb.net/?retryWrites=true&w=majority',
  {useNewUrlParser: true},
)

const userSchema = new mongoose.Schema({
  name: String,
  email: String,
  password: String,
})

const productSchema = new mongoose.Schema({
  category: {
    type: String,
    required: true,
  },
  product_name: {
    type: String,
    required: true,
  },
  SKU: {
    type: Number,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  discount: {
    type: Number,
    required: true,
  },
})

const orderSchema = new mongoose.Schema({
  category: {
    type: String,
    required: true,
  },
  product_name: {
    type: String,
    required: true,
  },
  SKU: {
    type: Number,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  discount: {
    type: Number,
    required: true,
  },
  netPrice: {
    type: Number,
    required: true,
  },
  tax: {
    type: Number,
    required: true,
  },
  quantity: {
    type: Number,
    required: true,
  },
  shippingType: {
    type: String,
    required: true,
  },
  totalAmountCharged: {
    type: Number,
    required: true,
  },
  estimatedDelivery: {
    type: Date,
    required: true,
  },
  customerName: {
    type: String,
    required: true,
  },
  dob: {
    type: Date,
    required: true,
  },
  statusUpdate: {
    type: Boolean,
  },
  deliverySignature: {
    type: Boolean,
  },
  phoneNumber: {
    type: Number,
    required: true,
  },
})

const User = mongoose.model('User', userSchema)
const Product = mongoose.model('Product', userSchema)
const Order = mongoose.model('Order', userSchema)

app.use(bodyParser.json())

app.get('/products', async (req, res) => {
  const products = await Product.find()
  res.json(products)
})

app.get('/orders', async (req, res) => {
  const orders = await Order.find()
  res.json(orders)
})

app.get('/order/:id', async (req, res) => {
  const order = await Order.findById(req.params.id)
  res.json(order)
})

app.post('/order', async (req, res) => {
  const user = new Order(req.body)
  await Order.save()
  res.json(user)
})

app.put('/order/:id', async (req, res) => {
  const {id} = req.params
  await Order.findByIdAndUpdate(id, req.body)
  const order = await Order.findById(id)
  res.json(order)
})

app.delete('/order/:id', async (req, res) => {
  const {id} = req.params
  await Order.findByIdAndDelete(id)
  res.json({message: 'Order deleted'})
})

app.listen(5000, () => {
  console.log('Server started on port 5000')
})
