const express = require('express')
const mysql = require("mysql");
const cors = require("cors");


const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const session = require("express-session");

const bcrypt = require("bcrypt");


const app = express()
const port = 3001

app.use(express.json());
app.use(
  cors({
    origin: ["http://localhost:3000"],
    methods: ["GET", "POST"],
    credentials: true,
  })
);
app.use(cookieParser());
app.use(bodyParser.urlencoded({ extended: true }));


app.use(
  session({
    key: "userId",
    secret: "subscribe",
    resave: false,
    saveUninitialized: false,
    cookie: {
      expires: 60 * 60 * 24,
    },
  })
);


// const db = mysql.createConnection({
//   user: "root",
//   host: "localhost",
//   password: "password",
//   database: "LoginSystem",
// });



//get 

app.get("/login", (req, res) => {
  if (req.session.user) {
    res.send({ loggedIn: true, user: req.session.user });
  } else {
    res.send({ loggedIn: false });
  }
});


//post


app.post("/register", (req, res) => {
  const username = req.body.username;
  const password = req.body.password;

  console.log("username: ", username) 
  console.log("password: ", password) 

  
});

app.post("/login", (req, res) => {
  const username = req.body.username;
  const password = req.body.password;

  
});








app.get('/', (req, res) => {
  res.send('Hello World!')
})



app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})