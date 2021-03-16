const express = require('express');
const cors = require('cors')
const app = express();
const port = 3001;
const {mongoose} = require('./config/db');
const Agenda = require('agenda')
const agenda = new Agenda({ db: { address: 'mongodb://localhost:27017/BubbleAppDB' } });

const {loginController} = require('./app/controllers/login_controller');
const {usersController} = require('./app/controllers/users_controller');
const {bookingsController} = require('./app/controllers/bookings_controller');
const {bookingsummaryController} = require('./app/controllers/bookingsummary_controller');

const {getBabySittersDummyData} = require('./app/functions/babysitters');
const {getBookingSummaryDummyData} = require('./app/functions/activeSummary');
const {getBookingSDummyData} = require('./app/functions/bookings');

mongoose.set('useFindAndModify', false);
app.use(express.json());
app.use(cors()) // enables cors in app
app.get('/',function(req,res){
    res.send('welcome to home page')
});

app.use('/auth/local',loginController);
app.use('/api/user',usersController);
app.use('/api/booking/activesummary',bookingsummaryController);
app.use('/api/booking',bookingsController);

app.listen(port,async () => {
    await getBabySittersDummyData();
    await getBookingSummaryDummyData();
    await getBookingSDummyData();
  console.log('listening to port',port)
});