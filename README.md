# Bubble_App_Service_application

This is service which retreives information from Bubble-API and stores the data locally in mongoDB.
In order to perform CRUD operations, User authentication is required.

# Solution Design

As soon as Server starts, the  sample data from  Booking.json, Babysitters.json and ActiveSummary.json, gets uploaded to  Booking table, Babysitters table and ActiveSummary table in the DB.

1) When user hits the login endpoint, token is generated from bubble-api.
2) When user asks for user info, User is authenticated and user info is retreived from bubble-api and is displayed to the user.
3) When user asks for babysitters info, User is authenticated and babysitters info is retreived from  bubble-api and stored in Babysitters table in local DB which already has few sample babysitters info and all babysitters info is displayed to user.
4) When user asks for activesummary info, User is authenticated and activesummary info is retreived from  bubble-api and stored in ActiveSummary table in local DB which already has few sample activesummary info and all activesummary info is displayed to user.
5) When user asks for booking info based on booking id, User is authenticated, id is validated and booking info is retreived from  bubble-api and stored in Booking table in local DB and booking info is displayed to user.

Note: 
Scheduled information pull is not viable since users authorization token is needed. Since the API endpoints are user(authorized) aware, we cannot use the endpoint for bulk pull.
I have shared sample code below just as a proof of concept

# Below is the Sample Schedule code which can be implemented using `agenda` module to schedule Jobs 

"agenda.define('call retreiveBookings', async (job, done) => {
    await retreiveBookings();
    job.repeatEvery('25 minutes', {
     skipImmediate: true
   });
    job.save()
         done()
})
  
agenda.start()
agenda.on('ready', function () {
    agenda.schedule('everyday at 00.00','call retreiveBookings')
})"

# Below is the API Endpoints

http://localhost:3001/auth/local -> POST login request to Bubble-Api and token is created.

All below Endpoints need User Authentication

http://localhost:3001/api/user -> GET request to Bubble-Api to retreive UserData and store in db.
http://localhost:3001/api/user/search -> GET request to Bubble-Api to retreive local babysitters and store the babysitters data in db.
http://localhost:3001/api/booking/activesummary -> GET request to Bubble-Api to retreive all active booking summary and store the data in db.
http://localhost:3001//api/booking/:id -> GET request to Bubble-Api to retreive booking based on id and store the booking in db.

# Installation and  build instructions

Download the code locally
Run "npm install", this would install all required packages for this project.
Run "node index.js", to start the server

# Install Robo 3T Application locally
Robo 3T is a popular desktop graphical user interface (GUI) for the MongoDB hosting deployments that acts as a database which allows you to verify all the stored data as a collection

Follow below link for app download
https://robomongo.org/download

# Install mongodb Application locally
Follow below link for installation
https://docs.mongodb.com/guides/server/install/