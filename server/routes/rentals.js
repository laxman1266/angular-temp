const express = require('express');
const router = express.Router();
const Rental = require('../model/rental');
router.get('', (req, res) => {
    Rental.find({}, (err, foundRentals) => {
        res.json(foundRentals);
    })
});
router.get('/:id', (req, res) => {
    const rentalId = req.params.id;
    Rental.find({ _id: rentalId }, (err, foundRentals) => {
        res.json(foundRentals);
    })
});
module.exports = router;