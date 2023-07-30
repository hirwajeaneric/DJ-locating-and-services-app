const mongoose = require('mongoose');

const ratingSchema = new mongoose.Schema({
    djId: { type: 'String', required: true },
    userId: { type: 'String', required: true },
    email: { type: 'String', required: true },
    fullName: { type: 'String', required: true },
    description: { type: String, required: false },
    scrore: { 
        type: String,
        required: [true, "Rating type must be provided"], 
        enum: {
            values: [1,2,3,4,5],
            message: '{VALUE} is not supported as a rating score.'
        }
    },
    ratingDate: { type: Date, required: true, default: Date.now() }
}) 

module.exports = mongoose.model('rating', ratingSchema);
