const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const userSchema = new mongoose.Schema({
    fullName: { 
        type: String, 
        trim: true, 
        required: [true, 'Full name must be provided'],
        minlength: 3,
    },
    userType: { 
        type: String,
        required: false, 
        enum: {
            values: ["Personal","Company","DJ","Manager"],
            message: '{VALUE} is not supported as a user type.'
        }
    },
    companyName: { 
        type: String, 
        trim: true, 
        required: false,
    },
    email: { 
        type: String, 
        trim: true, 
        required: [true, 'Email must be provided'],
        match: [
            /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
            'Please provide a valid email',
        ]
    },
    phone: { 
        type: String, 
        required: [true, 'Phone number must be provided'],
        maxlength: 12,
        minlength: 10,
    },
    specialities: {
        type: Array,
        required: false,
    },
    jobHistory: {
        type: Array,
        required: false,
    },
    password: { 
        type: String, 
        required: [true, 'Password must be provided'], 
        minlength: 8, 
    },
    profilePicture: { 
        type: String, 
        required: false, 
    },
    ratings: { 
        type: Number, 
        required: true,
        default: 0, 
    },
}) 

userSchema.pre('save', async function() {
    if (!this.isModified('password')) return;
    const salt = await bcrypt.genSalt(10);
    this.password = await bcrypt.hash(this.password, salt);
});

userSchema.methods.createJWT = function() {
    return jwt.sign(
        {
            userId: this._id,  
            email: this.email,
        }, 
        process.env.JWT_SECRET,
        {
            expiresIn: process.env.JWT_LIFETIME,
        }
    );
};

userSchema.methods.comparePassword = async function(candidatePassword) {
    const isMatch = await bcrypt.compare(candidatePassword, this.password);
    return isMatch;
}

module.exports = mongoose.model('user', userSchema);