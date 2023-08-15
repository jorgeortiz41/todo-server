const express = require("express");
const cors = require("cors");
const mongoose = require('mongoose');
const bodyParser = require("body-parser");
const Taskroutes = require('./routes/taskroutes')
const Listroutes = require('./routes/listroutes')
//require dotenv
require('dotenv').config();

//Database Connection
const conn_str = process.env.MONGODB_URI;
mongoose.set("strictQuery", false);
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
app.use("/api", Taskroutes, Listroutes);


//listen to port
const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`Listening on port ${port}`));