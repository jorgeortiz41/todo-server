const express = require("express");
const cors = require("cors");
const mongoose = require('mongoose');
const bodyParser = require("body-parser");
const Taskroutes = require('./routes/taskroutes')

//Database Connection
const conn_str = 'mongodb+srv://sweportfolio:sweportfolio@cluster0.laht2l1.mongodb.net/todo-app?retryWrites=true&w=majority'
mongoose.connect(conn_str,{ 
    useNewUrlParser: true, 
    useUnifiedTopology: true 
    },
    (err) => {
    if (err) {
    console.log("error in connection");
    } 
    else {
    console.log("mongodb is connected");
    }});

//create express app
const app = express();

//app use
app.use(cors());
app.use(express.json());
app.use(bodyParser.json());
app.use("/api", Taskroutes);


//listen to port
const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`Listening on port ${port}`));