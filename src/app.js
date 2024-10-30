const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const connectDb = require('./db.js')

const app = express()
app.use(bodyParser.json())

app.get('/', (req, res) => {
    res.send('MONGO_UPLOAD')
})

const port = 1312

app.listen(port, () => {
    connectDb()
    console.log(`MONGO_UPLOAD READY AT ${port}`);
})