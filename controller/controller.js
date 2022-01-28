const Userdb = require("../models/usermodel")
const bodyParser = require('body-parser')
const alert = require('alert');

// create application/json parser
const jsonParser = bodyParser.json()

// create application/x-www-form-urlencoded parser
const urlencodedParser = bodyParser.urlencoded({ extended: false })

exports.homeRoutes = (req, res) => {
    res.render("index")
}
exports.contact = (req, res) => {
    res.render("contact")
}
exports.about = (req, res) => {
    res.render("about")
}
exports.signup = (req, res) => {
    res.render("signup")
}
exports.signin = (req, res) => {
    res.render("signin")
}



exports.logout = (req, res) => {
    res.render("index")
}



// create and save new user
exports.signup_user = (req, res) => {
    console.log(req.body.jsonParser)

    // validate  request
    if (!req.body) {
        res.status(400).send({ message: "content can not be empty" });
        return;
    }

    // New user
    const user = new Userdb({
        name: req.body.name,
        email: req.body.email,
        password: req.body.password
    });

    // save user in the database
    user
        .save(user)
        .then(data => {
            // res.send(data)
            // res.send("SignUp Successful....")
        })
        .catch(err => {
            res.status(500).send({
                message: err.message || "Some error occure while creating operation"
            })
        })
    res.render("index")
    console.log("SignUp Successful...");
    alert("SignUp Successful...")
        // alert("SignUp Successful...")
}


exports.signin_user = async(req, res) => {
    // console.log("Event Executed...");
    try {
        const email = req.body.email;
        const password = req.body.password;
        // console.log(`Email Is ${email}  and Password Is ${password}`);

        const userdb = await Userdb.findOne({ email: email, password: password });

        // if (!userdb == null) {
        // res.send(useremail);
        const username = userdb.name;
        alert(`Welcome ${username}`)

        console.log("SignIn Successful...");
        console.log(userdb)
        res.render("dashboard", { userdb: userdb });

        // } else {
        //     //     // res.write("SignIn Failed !!!");
        //     console.log("SignIn Failed !!!")
        // }

    } catch (err) {
        // console.log("Invalid Email or Password !!!")
        // console.log(err)

        res.write("SignIn Failed !!!");
    }
}