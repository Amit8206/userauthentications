const mongoose = require("mongoose")
const dotenv = require("dotenv")


dotenv.config({ path: "config.env" });

const db = "mongodb+srv://Amit:Amit1999@cluster0.yawrs.mongodb.net/User_Authentication?retryWrites=true&w=majority";

// creating Database
const connctDB = mongoose.connect(db, {
    // useCreateIndex: true,
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => {
    console.log("Connection Established Successfully...");
}).catch((error) => {
    console.log("Database Connection Failed !!!");
    console.log(error);
})