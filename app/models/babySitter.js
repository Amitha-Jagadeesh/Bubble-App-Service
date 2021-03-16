const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const babySitterSchema = new Schema({
    email:{
        type:String
    },
    firstName:{
        type:String
    },
    lastName:{
        type:String
    },
    fullName:{
        type:String
    },
    accountType:{
        type:Number
    },
    address: {
        houseNo:{
            type:String       
        },
        street:{
            type:String
        },
        town:{
            type:String
        },
        postcode:{
            type:String
        }
    },
    id:{
        type:String,
        unique:true
    },
    dob:{
        type:Date
    },
    hourlyRate:{
        type:Number
    },
    ownTransport:{
        type:Boolean
    },
    degree:{
        type:Number
    },
    ratingPercentage:{
        type:Number
    },
    sits:{
        type:Number
    },
    profileImageUrl: {
        type: String
    },
    mobileNumber: {
        type: String
    },
    biography: {
        type: String
    },
    approvalStatus: {
        type: String
    },
    idVerified: {
        type: String
    },
    medicalStudent: {
        isEnabled:{
            type:Boolean       
        },
        isVerified:{
            type:Boolean
        },
        schoolName:{
            type:String
        }
    }
});

const BabySitter = mongoose.model('BabySitter',babySitterSchema);

module.exports = {
    BabySitter
}


