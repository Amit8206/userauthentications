const express = require("express")
const morgan = require("morgan")
const dotenv = require("dotenv");
const bodyparser = require("body-parser")
const path = require("path")
const connectDB = require("./database/connection")
const router = require("./router/routes")
const user = require("./controller/controller")


const app = express()

// log request
app.use(morgan("tiny"));

// connect Mongo DB
connectDB



dotenv.config();

const port = process.env.PORT || 8080;

// const port = 3000
// const host = process.env.HOST || "127.0.0.2"


app.use(bodyparser.urlencoded({ extended: true }))
app.use(bodyparser.json())



app.set("view engine", "ejs")
    // app.set('views', path.join(__dirname, 'views'));
    // ejs.registerPartials('./views/partials');

app.use('/', router);
app.use('/about', router);
app.use('/contact', router);
app.use('/signin', router);
app.use('/signup', router);
app.use('/logout', router);




app.listen(port, () => {
    console.log(`App is listening on http://localhost:${port}`)
})