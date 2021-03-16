const {User} = require('../models/user')

const authenticateUser = (req,res,next) =>{   
    let token = req.query.token || req.header('Authorization')
    token = token.substr(7);
    User.findByToken(token).then((user) =>{
        req.user = user
        req.token = token
        next()
    }).catch((err) =>{
        res.status(401).send(err)
    })
}

module.exports ={
    authenticateUser
}