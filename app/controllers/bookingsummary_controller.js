const express = require('express');
const router = express.Router();
const axios = require('axios');
const {authenticateUser} = require('../middlewares/userAuthentication');
const { ActiveSummary } = require('../models/activeSummary');
const {getactivesummary} = require('../API/request')

router.get('/', authenticateUser, async (req,res) => {
    let token = req.token
    axios.defaults.headers.common['Authorization'] = `Bearer ${token}`

    await axios.get(getactivesummary).then(response=>{
        const activesummary = response.data;
        const bookingsummary = new ActiveSummary(activesummary);
        bookingsummary.save().then(summary=>{
            summary.save();
        }).catch(err=>{
            console.log('duplicate booking summary data');
        })
    }).catch(error=>{
        res.send(error)
    })

    setTimeout(() => {
        ActiveSummary.find({}).then(activesummary => {
            res.send(activesummary);
        }).catch(err=>{
            res.send(err)
        })
    }, 2000);
    
})
module.exports = {
    bookingsummaryController:router
}

