const express = require('express');
const router = express.Router();
const Rental = require('../model/rental');
router.get('/api/v1/rentals', (req, res) => {
    Rental.find({}, (err, foundRentals) => {
        res.json(foundRentals);
    })
});
router.get('/api/v1/rentals/:id', (req, res) => {
    const rentalId = req.params.id;
    Rental.find(rentalId, (err, foundRentals) => {
        res.json(foundRentals);
    })
});
module.exports = router;