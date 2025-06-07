const dotenv = require("dotenv")

const express = require("express")
const mongoose = require("mongoose")
const cors = require("cors")

const bcrypt = require("bcrypt")
const userModel = require("./model/User")
const MongoStore = require ("connect-mongo")
const session = require("express-session")
const booking = require("./model/bookingModel")       
const Booking = require("./model/bookingModel")
const paymentRoutes = require('./routes/payment');

dotenv.config()
console.log("FRONTENDURL",process.env.FRONTENDURL)
console.log("🔑 KEY_ID:", process.env.RAZORPAY_KEY_ID);
console.log("🔐 KEY_SECRET:", process.env.RAZORPAY_SECRET);
const app = express()
app.use(express.json())

app.use(cors({
    origin : process.env.FRONTENDURL,
    credentials : true
}))

try {
   
if ( mongoose.connect(process.env.MONGOURL)){
    console.log("Connection successful")
} 
else {
    console.log("Disconnected")
}  
} catch (error) {
    console.log("Not connected ")
}

app.listen(process.env.PORT,()=>{
    console.log(`Server is running on port ${process.env.PORT}`)
})

app.use(session({
    secret : process.env.SESSION_SECRET,
    resave : false,
    saveUninitialized : true,
    store : MongoStore.create({
        mongoUrl : process.env.MONGOURL
    }),
    cookie : {maxAge : 24 * 60 * 60 * 1000 }
}))

app.post("/signup", async (req, res)=>{
    try {
        const {name, email, password} = req.body
        const existingUser = await userModel.findOne({email})
        if (existingUser){
            return res.status(400).json({error : "Email already exists"})
        }
         const hashPassword = await bcrypt.hash(password, 10);
         const newUser = new userModel( {name, email, password : hashPassword})
         const saveUser = await newUser.save()
         res.status(200).json(saveUser)


        
    } catch (error) {
        res.status(400).json({error : error.message})
        
    }
} )

app.post("/login", async (req,res)=>{
     try {
        const { email, password} = req.body
        const user = await userModel.findOne({email})
        if (user){
            const passwordMatch = await bcrypt.compare(password, user.password)
            if(passwordMatch) {
              
                req.session.user = {id : user._id, name : user.name, email : user.email}
                  res.json("Success")
            }
            else {
                res.status(401).json("Password does not match")
            }
        }
        else{
            res.status(404).json("No records found")
        }
      
    } catch (error) {
        res.status(400).json({error : error.message})
        
    }
    

}),

app.get("/user", (req,res) => {
    if (req.session.user) {
        res.json({user : req.session.user})
    }else {
        res.status(401).json("Not authenticated")
    }
})

app.post("/addBooking", async(req,res) => {
    try {
        const newBooking = new Booking(req.body);
        await newBooking.save()
        res.status(201).json(newBooking)
        
    } catch (error) {
        res.status(500).json({error : error.message})
    }
})

app.use('/api/payment', paymentRoutes);
