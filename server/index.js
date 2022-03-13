const express = require('express')
const mysql = require("mysql2");
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
    methods: ["GET", "POST", "UPDATE"],
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
    // cookie: {
    //   expires: 60 * 60 * 24,
    // },
  })
);


const db = mysql.createConnection({
  user: "root",
  host: "localhost",
  password: "rootpassword",
  database: "hackathonProject",
});



//get 

app.get("/login", (req, res) => {
  if (req.session.user) {
    res.send({ loggedIn: true, user: req.session.user });
  } else {
    res.send({ loggedIn: false });
  }
});

app.get("/getUsers", (req, res) => {

  db.query("select U.username, D.scores from User U, User_Dashboard D where U.id = D.User_id", (err, result) => {
    res.send(result) 
  })
})


//post


app.post("/register", (req, res) => {
  const username = req.body.username;
  const password = req.body.password;
  const email = req.body.email
  const phone = req.body.phone


  const saltRounds = 10

  bcrypt.hash(password, saltRounds, (err, hash) => {
    if (err) {
      console.log("hueshueshu")
      res.send({ err: err });
    }

    console.log("username: ", username) 
    console.log("password: ", hash) 
    console.log("email: ", email) 
    console.log("phone: ", phone) 


    db.query(
      "INSERT INTO User (username, password, email, phone) VALUES (?,?,?,?)",
      [username, hash, email, phone]
    )
  });

  
});

app.post("/login", (req, res) => {
  const username = req.body.username;
  const password = req.body.password;


  db.query(
    "SELECT * FROM User WHERE username = ?;",
    username,
    (err, result) => {
      if (err) {
        res.send({ err: err });
      }

      if (result.length > 0) {
        bcrypt.compare(password, result[0].password, (error, response) => {
          if (response) {
            req.session.user = result;
            res.send(result);
          } else {
            res.send({ message: "Wrong username/password combination!" });
          }
        });
      } else {
        res.send({ message: "User doesn't exist" });
      }
    }
  );
  
});








app.get('/', (req, res) => {
  res.send('Hello World!')
})



app.listen(port, () => {
  console.log(`listening on port ${port}`)
})