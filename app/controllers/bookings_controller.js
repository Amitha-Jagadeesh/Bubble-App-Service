const express = require('express');
const router = express.Router();
const axios = require('axios');
const {authenticateUser} = require('../middlewares/userAuthentication');
const {Booking} = require('../models/booking');
const {validateId} = require('../middlewares/bookingvalidation');
const {getbookinginfo} = require('../API/request')

router.get('/:id',authenticateUser,validateId, async (req,res) => {
    let bookingId = req.params.id
    let token = req.token
    axios.defaults.headers.common['Authorization'] = `Bearer ${token}`
    await axios.get(`${getbookinginfo}/${bookingId}`).then(response=>{
        const booking = response.data;
        const bookingInfo = new Booking(booking);
        bookingInfo.save().then(bookingdata=>{
            bookingdata.save();
        }).catch(err=>{
            console.log('duplicate key', bookingInfo.id)
        })
    }).catch(error=>{
        res.send(error)
    }) 

    setTimeout(() => {
        Booking.findOne({id:bookingId}).then(booking=>{
            res.send(booking)
        }).catch(err=>{
            res.send(err)
        }) 
    }, 2000);
    
})

module.exports = {
    bookingsController:router
}

