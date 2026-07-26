const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const cors = require("cors");

dotenv.config();

const app = express();


app.use(cors());
app.use(express.json());



const leadRoutes = require("./routes/leadRoutes");
const authRoutes = require("./routes/authRoutes");

app.use("/api/leads", leadRoutes);
app.use("/api/auth", authRoutes);




app.get("/",(req,res)=>{

    res.send("LeadDesk Mini Backend Running 🚀");

});



mongoose
.connect(process.env.MONGO_URI)

.then(()=>{

    console.log("✅ MongoDB Connected");


    app.listen(process.env.PORT,()=>{

        console.log(
        `🚀 Server running on http://localhost:${process.env.PORT}`
        );

    });


})

.catch((error)=>{

    console.log(error);

});

