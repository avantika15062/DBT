const dotenv = require("dotenv")

const express = require('express')
const Razorpay = require('razorpay')
const router = express.Router();

dotenv.config()

const razorpay = new Razorpay({
    key_id : process.env.RAZORPAY_KEY_ID,
    key_secret : process.env.RAZORPAY_SECRET
})
console.log("FRONTENDURLfvffdv",process.env.FRONTENDURL)
console.log("🔑 KEY_IDfvf:", process.env.RAZORPAY_KEY_ID);
console.log("🔐 KEY_SECRETvvffv:", process.env.RAZORPAY_SECRET);
router.post('/create-order', async(req,res) =>{
const {amount} = req.body

try {
    const options = {
        amount : amount * 100,
        currency : 'INR',
        receipt :`order_rcptid_${Math.random().toString(36).substr(2, 9)}`
    }
    const order = await razorpay.orders.create(options)
    res.status(200).json(order)
} catch (error) {
    res.status(500).json({error : error.message})
}
})

module.exports = router;

