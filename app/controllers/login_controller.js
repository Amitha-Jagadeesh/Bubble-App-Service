const express = require('express');
const axios = require('axios');
const router = express.Router();
const {User} = require('../models/user');
const {getUser} = require('../API/request')

router.post('/',async (req,res) => {
    let body = req.body;
    await axios.post(getUser, body).then(response=>{
        const bearerToken = response.data;
        const user = new User(body);
        user.save().then(user=>{
            user.tokens.push(bearerToken);
            user.save().then(user=>{
                res.send(user);
            })
        }).catch(err=>{
            res.send(err)
        })
        
    }).catch(error=>{
        res.send('Invalid Credentials')
    })
})

module.exports = {
    loginController:router
}

