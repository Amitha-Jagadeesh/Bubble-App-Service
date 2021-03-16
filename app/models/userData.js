const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userdataSchema = new Schema({
    email:{
        type:String,
        required:true
    },
    firstName:{
        type:String,
        required:true
    },
    lastName:{
        type:String,
        required:true
    },
    fullName:{
        type:String,
        required:true
    },
    accountType:{
        type:Number,
        required:true
    },
    address: {
        houseNo:{
            type:String,
            required:true       
        },
        street:{
            type:String,
            required:true
        },
        town:{
            type:String,
            required:true
        },
        postcode:{
            type:String,
            required:true
        }
    },
    id:{
        type:String,
        unique:true
    },
    userId:{
        type:Schema.Types.ObjectId
    },
    profileImageUrl: {
        type: String,
        required:true
    },
    mobileNumber: {
        type: String,
        required:true
    },
    biography: {
        type: String
    },
    approvalStatus: {
        type: String,
        required:true
    },
    idVerified: {
        type: String,
        required:true
    },
    children: [{
        gender: {
            type: Number,
            required:true
        },
        age: {
            type: Number,
            required:true
        }
    }],
    lastBookedSitter: {
        id:{
            type:String,
            required:true       
        },
        firstName:{
            type:String,
            required:true
        },
        lastName:{
            type:String,
            required:true
        },
        profileImageUrl:{
            type:String,
            required:true
        }
    }
});

const UserData = mongoose.model('UserData',userdataSchema);

module.exports = {
    UserData
}


