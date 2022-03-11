const mongoose = require('mongoose');

const FoodSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    desc: {
        type: String,
    },
    price: {
        type: String,
        min: 1
    },
},
{
    timestamps: true
}
);

module.exports = mongoose.model('Food', FoodSchema);