// const mongoose = require('mongoose');
// const Schema = mongoose.Schema;

// const bookingSummarySchema = new Schema({
//     id:{
//         type:String,
//         unique: true
//     },
//     parentId:{
//         type:String
//     },
//     bookingType:{
//         type:Number
//     },
//     bookingStatus:{
//         type:Number
//     },
//     requestStatus:{
//         type:Number
//     },
//     lookingForVolunteer: {
//         nhs:{
//             type:Boolean       
//         }
//     },
//     scheduledStart: {
//         type: Date
//     },
//     scheduledDuration:{
//         type:Number
//     },
//     weeklyDays:{
//         type:String
//     },
//     weeksDuration:{
//         type:String
//     },
//     imageUrl:{
//         type:String
//     },
//     otherUserFullName:{
//         type: String
//     },
//     bookingDuty:{
//         type:Number
//     }
// });

// const BookingSummary = mongoose.model('BookingSummary',bookingSummarySchema)

// module.exports = {
//     BookingSummary
// }

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const bookingSummarySchema = new Schema({
    id:{
        type:String,
        unique: true
    },
    parentId:{
        type:String
    },
    bookingType:{
        type:Number
    },
    bookingStatus:{
        type:Number
    },
    requestStatus:{
        type:Number
    },
    lookingForVolunteer: {
        nhs:{
            type:Boolean       
        }
    },
    scheduledStart: {
        type: Date
    },
    scheduledDuration:{
        type:Number
    },
    weeklyDays:{
        type:String
    },
    weeksDuration:{
        type:String
    },
    imageUrl:{
        type:String
    },
    otherUserFullName:{
        type: String
    },
    bookingDuty:{
        type:Number
    }
});

module.exports = {
    bookingSummarySchema
}

