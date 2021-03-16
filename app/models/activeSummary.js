const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const {bookingSummarySchema} = require('../models/bookingSummary');

const activeSummarySchema = new Schema({
    requestedBookings:[bookingSummarySchema],
    confirmedBookings:[bookingSummarySchema]
});

const ActiveSummary = mongoose.model('ActiveSummary',activeSummarySchema);

module.exports = {
    ActiveSummary
}




