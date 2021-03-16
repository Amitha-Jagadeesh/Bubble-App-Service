const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const userSchema = new Schema({
    email:{
        type:String,
        minlength:3,
        required:true,
        unique:true, 
        trim:true
    },    
    password:{
        type:String,
        minlength:5,
        maxlength:128,
        required:true,
        trim:true
    },
    tokens:[{
        token:{
            type:String
        }
    }]
})

userSchema.statics.findByToken = function(token){
    let User = this;
    return User.findOne({
        'tokens.token' : token
    })
}

const User = mongoose.model('User',userSchema)

module.exports = {
    User
}