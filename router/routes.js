const express = require("express")
const bodyparser = require("body-parser")
const controller = require("../controller/controller")

const routes = express.Router()


// Get Request Routes
routes.get("/", controller.homeRoutes);
routes.get("/about", controller.about);
routes.get("/contact", controller.contact);
routes.get("/signin", controller.signin);
routes.get("/signup", controller.signup);
routes.get("/logout", controller.logout);

// Post Request Routes
routes.post('/signin', controller.signin_user)
routes.post('/signup', controller.signup_user)



module.exports = routes;