const {ActiveSummary} = require('../models/activeSummary');
const bookingSummery = require('../dummyData/bookingSummery.json');
const confirmedBookings = []
const requestedBookings = []

const getBookingSummaryDummyData = async () => {
    await ActiveSummary.find({}).then(activebookings=>{
        if(activebookings.length === 0) {
            bookingSummery.forEach(booking=>{
                if(booking.bookingStatus === 1){
                    confirmedBookings.push(booking);
                }else if(booking.bookingStatus === 0){
                    requestedBookings.push(booking);
                }
            })
            if(confirmedBookings.length > 0 || requestedBookings.length > 0) {
                let body = {
                    requestedBookings,
                    confirmedBookings
                }
                let rbookingData = ActiveSummary(body);
                rbookingData.save().then(bookinginfo=>{
                    bookinginfo.save();
                })
            }
        }
    })
    
}

module.exports = {
    getBookingSummaryDummyData
}