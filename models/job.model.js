const mongoose = require('mongoose');

const jobSchema = new mongoose.Schema({
    description: { 
        type: String, 
        required: [true, 'Description must be provided'] 
    },
    price: { 
        type: Number, 
        required: true, 
    },
    jobType: { 
        type: String,
        required: true, 
        enum: {
            values: ["Event Management","MC","Birth Day party","Wedding","Private party","Meeting","Other"],
            message: '{VALUE} is not supported as a job type.'
        }
    },
    jobLocation: {
        type: String, 
        required: true,
    },
    jobGoogleMapLocation: {
        type: String, 
        required: false
    },
    startDate: {
        type: Date, 
        required: true,
    },
    endDate: {
        type: Date,
        required: true
    },
    numberOfHours: {
        type: Number,
        required: true
    },
    suggestedDjId: {
        type: String, 
        required: false,
    },
    suggestedDjName: {
        type: String, 
        required: false,
    },
    requestingUserId: { 
        type: String, 
        required: true 
    },
    requestingUserType: { 
        type: String, 
        required: true,
        enum: {
            values: ["Company","Personal","Group","Family"],
            message: '{VALUE} is not supported as a status.'
        }
    },
    requestingCompanyName: { 
        type: String, 
        required: false 
    },
    requestingUserName: { 
        type: String, 
        required: true 
    },
    requestingUserPhone: { 
        type: String, 
        required: true 
    },
    requestingUserEmail: { 
        type: String, 
        required: true 
    },
    paymentInstallments: [
        {
            first: { 
                type: Number, 
                required: true,
                default: 0, 
            },
            second: { 
                type: Number, 
                required: true,
                default: 0, 
            },
        }
    ],
    status: { 
        type: String, 
        required: true,
        enum: {
            values: ["Pending","Confirmed","Rejected"],
            message: '{VALUE} is not supported as a status.'
        }
    },
    sendDate: { 
        type: Date, 
        required: true,
        default: Date.now() 
    }
}) 

module.exports = mongoose.model('job', jobSchema);