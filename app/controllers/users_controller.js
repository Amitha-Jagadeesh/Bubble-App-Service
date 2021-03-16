const express = require('express');
const axios = require('axios');
const router = express.Router();
const {UserData} = require('../models/userData');
const {BabySitter} = require('../models/babySitter');
const {authenticateUser} = require('../middlewares/userAuthentication');
const {getUserData} = require('../API/request');
const {getbabysitters} = require('../API/request');

router.get('/',authenticateUser, async (req,res) => {
    console.log('user', req.user)
    let id = req.user._id
    axios.defaults.headers.common['Authorization'] = `Bearer ${req.token}`
    await axios.get(getUserData).then(response=>{
        const userData = response.data;
        const userInfo = new UserData(userData);
        userInfo.save().then(userInfo=>{
            userInfo.userId = id
            userInfo.save();
        })
    }).catch(error=>{
        res.send(error)
    })

    setTimeout(() => {
        UserData.find({userId:id}).then(user=>{
            res.send(user);
        }).catch(err=>{
            res.send(err)
        })
    }, 2000);
    
})

router.get('/search',authenticateUser, async (req,res) => {
    let token = req.token
    axios.defaults.headers.common['Authorization'] = `Bearer ${token}`
    await axios.get(getbabysitters).then(response=>{
        const babysittersInfo = response.data;
        babysittersInfo.forEach(babystter=>{
            let sitter = new BabySitter(babystter);
            sitter.save().then(babysitr=>{
                babysitr.save();
            }).catch(err=>{
                console.log('duplicate babysitter', sitter.id)
            })
        })
    }).catch(error=>{
        res.send(error)
    }) 
    
    setTimeout(() => {
        BabySitter.find({}).then(babysitters=>{
            res.send(babysitters)
        }).catch(err=>{
            res.send(err)
        })
    }, 2000);
    
})

module.exports = {
    usersController:router
}

