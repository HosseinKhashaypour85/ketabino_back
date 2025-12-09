const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const app = express();
app.use(cors());
app.use(bodyParser.json());
const router = require('./routes/index');
require('dotenv').config();
const PORT = process.env.PORT;


app.use('/' , router);

app.listen(PORT,()=> {
    console.log(`app is running on ${PORT}`);
})