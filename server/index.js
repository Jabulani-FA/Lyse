const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const morgan = require("morgan");
const bodyParser = require("body-parser");
require("dotenv").config()

const app = express()

app.get("/", (req, res) => {
    res.send("Lyse server is running....")
})
const analyzeRoute = require('./routes/analyze')
app.use('/api/analyze', analyzeRoute)


const port = process.env.APP_PORT || 3001
app.listen(port, () => console.log("App is listening on port ", port))