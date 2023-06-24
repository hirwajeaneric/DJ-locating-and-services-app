const mongoose = require('mongoose');

const scheduleSchema = new mongoose.Schema({
    startDay: { 
        type: Date, 
        required: true 
    },
    endDay: {
        type: Date,
        required: true
    },
    workTime: {
        type: Array,
        required: false
    },
}) 

module.exports = mongoose.model('scedule', scheduleSchema);