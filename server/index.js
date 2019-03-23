const express = require('express');
const mongoose = require('mongoose');
const DB_URL = require('./config/dev');
const rental = require('./model/rental');
const FakeDb = require('./fake-db');
const rentalRoute = require('./routes/rentals');
console.log(DB_URL.DB_URL);
mongoose.connect(DB_URL.DB_URL).then(
    () => {
        const fakeDb = new FakeDb();
        fakeDb.seedDb();
    }
);
const app = express();
const port = process.env.PORT || 3001;
app.listen(port, () => {
    console.log(`Server runs under port: ${port} `);
});
app.use('/', rentalRoute);