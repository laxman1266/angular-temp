const monngoose = require('mongoose');
const rentalSchema = new monngoose.Schema({
    title: { type: String, required: true, max: [128, 'Too logn, Max is 128 chasrs'] },
    city: { type: String, required: true, lowercase: true },
    street: { type: String, required: true, min: [4, 'Too short, min is 4 chars'] },
    category: { type: String, require: true, lowercase: true },
    image: { type: String, required: true },
    bedRooms: Number,
    shared: Boolean,
    description: { type: String, required: true },
    dailyRate: Number,
    createdAt: { type: Date, default: Date.now }

})
module.exports = monngoose.model('Rental', rentalSchema);