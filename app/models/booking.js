const mongoose = require('mongoose');
const Schema = mongoose.Schema;
    
const bookingSchema = new Schema({
    id:{
        type:String,
        unique: true
    },
    bookingProcess:{
        type:Number
    },
    scheduledStart:{
        type:Date
    },
    bookingStatus:{
        type:Number
    },
    scheduledDuration:{
        type:Number
    },
    specialRequirements:{
        type:String
    },
    parent:{
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
            type:String
        },
        referralCodeNumber:{
            type:Number
        },
        firstName:{
            type:String
        },
        lastName:{
            type:String
        },
        profileImageUrl:{
            type:String
        },
        fullName:{
            type:String
        },
        mobileNumber:{
            type:String
        }
    },
    sitterRequests:[], //Tribo.IBookingRequest[] info not known
    bookedSitter:{} //BookingBookedSitter info not known
    
});
    
const Booking = mongoose.model('Booking',bookingSchema);

module.exports = {
    Booking
}
    
    
    