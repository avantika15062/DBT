const dotenv = require("dotenv")

const express = require("express")
const mongoose = require("mongoose")
const cors = require("cors")

const bcrypt = require("bcrypt")
const userModel = require("./model/User")
const MongoStore = require ("connect-mongo")
const session = require("express-session")
   
const Booking = require("./model/bookingModel")
const paymentRoutes = require('./routes/payment');
const PDFDocument = require('pdfkit');
const fs = require('fs');
const path = require('path');

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
         if (!req.session.user) {
      return res.status(401).json({ error: "Not authenticated" });
    }

        const newBooking = new Booking({
      ...req.body,
      userId: req.session.user.id,
      userName: req.session.user.name,
    });
        await newBooking.save()
        res.status(201).json(newBooking)
        
    } catch (error) {
        res.status(500).json({error : error.message})
    }
})

app.use('/api/payment', paymentRoutes);

app.get("/api/bookings/user", async (req, res) => {
    try {
        if (!req.session.user || !req.session.user.id ) {
            return res.status(401).json({error : "User not authenticated"})
        }
        const userId = req.session.user.id; 
        const userBookings = await Booking.find({ userId})
        res.status(200).json(userBookings)
    } catch (error) {
        console.error("Error Fetching user bookings", error)
        res.status(500).json({error: "Internal server error"})
    }
})

app.get("/api/bookings/receipt/:id", async(req, res) => {
    try {
        const booking = await Booking.findById(req.params.id)
        if (!booking) return res.status(404).send("Booking not found")

            const doc = new PDFDocument ({ margin: 50 }) 
            const filename = `receipt_${booking._id}.pdf`
            res.setHeader('Content-Disposition', `attachment; filename = "${filename}"`)
            res.setHeader('Content-Type', 'application/pdf')
            doc.pipe(res) 

      const logoPath = path.join(__dirname, 'assets', 'dbt-logo.png'); // Update path
    try {
      doc.image(logoPath, 50, 45, { width: 80 });
    } catch (e) {
      // Optional logo fail silently
    }       

    //          doc.fontSize(20).text("Booking Receipt", { align: 'center' });
    //  doc.fontSize(22).fillColor('#0e3c68').text('DBT Travel Company', 150, 50, { align: 'right' });         
    // doc.moveDown(2);


     doc
      .fontSize(18)
      .fillColor('#000')
      .text('Booking Receipt', { align: 'center', underline: true });
    doc.moveDown(1.5);

    const details = [
      { label: "Name", value: booking.userName },
      { label: "Tour", value: booking.title },
      { label: "Departure", value: booking.departure },
      { label: "Date", value: new Date(booking.date).toLocaleDateString() },
      { label: "Adults", value: booking.passengers },
      { label: "Children", value: booking.children },
      { label: "Total Price", value: `₹${booking.totalPrice}` },
    ];

    details.forEach(item => {
      doc
        .fontSize(12)
        .fillColor('#333')
        .text(`${item.label}:`, { continued: true, width: 150 })
        .fillColor('#000')
        .text(`${item.value}`);
      doc.moveDown(0.5);
    });

    doc.moveDown(2);
    doc
      .fontSize(14)
      .fillColor('#555')
      .text("Thank you for choosing DBT. We wish you a memorable journey!", {
        align: 'center',
        italics: true
      });

    doc.end();
    } catch (error) {
         console.error("PDF generation error:", error);
    res.status(500).send("Error generating PDF");
    }
})