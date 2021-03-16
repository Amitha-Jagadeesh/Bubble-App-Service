const {Booking} = require('../models/booking');
const bookings = require('../dummyData/bookings.json');

const getBookingSDummyData = () => {
    bookings.forEach(booking=>{
        let bookingInfo = new Booking(booking)
        bookingInfo.save().then(bookingData=>{
            bookingData.save();
        }).catch(err=>{
            console.log('duplicate booking', bookingInfo.id)
        })
    })

}

module.exports = {
    getBookingSDummyData
}