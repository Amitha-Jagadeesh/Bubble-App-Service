const {BabySitter} = require('../models/babySitter');
const babySitters = require('../dummyData/babySitters.json');

const getBabySittersDummyData = () => {
    babySitters.forEach(babystter=>{
        let sitter = new BabySitter(babystter)
        sitter.save().then(babysitttter=>{
            babysitttter.save();
        }).catch(err=>{
            console.log('duplicate babysitter', sitter.id)
        })
    })

}

module.exports = {
    getBabySittersDummyData
}