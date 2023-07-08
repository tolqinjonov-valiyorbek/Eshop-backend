const mongoose = require('mongoose');
const asyncHandler = require("express-async-handler");

const dbConnect = asyncHandler(async () =>{
    try{
        const conn = await mongoose.connect("mongodb+srv://ecomer:umsiEhytJWGvEFHo@cluster0.clmuc84.mongodb.net/?retryWrites=true&w=majority", {useNewUrlParser: true})
        console.log("Database Connected Succesfully")
        conn()
    }catch(err){
        console.log("Database error");
    }
    
})



module.exports = dbConnect;  