// models/bookingModel.js
const mongoose = require('mongoose');

const bookingSchema = new mongoose.Schema({
  userId : {
    type : mongoose.Schema.Types.ObjectId,
    ref : 'User',
    required : true

  },
  userName : {
    type: String,
    required : true


  },
  departure: {
    type: String,
    required: true,
  },
  title :{
      type : String
  },
  date: {
    type: Date,
    required: true,
  },
  passengers: {
    type: Number,
    required: true,
    min: 1,
  },
  children: {
    type: Number,
    required: true,
    min: 0,
  },
  totalPrice: {
    type: Number,
    required: true,
    min: 0,
  },
}, {
  timestamps: true, // Optional: useful for tracking bookings
});

const Booking = mongoose.model('Booking', bookingSchema);
module.exports = Booking;
