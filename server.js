// server.js
// where your node app starts
const employeesController = require('./employees/employeesController.js');
const deptsController = require('./depts/deptsController.js');
const employersController = require('./employers/employersController.js');

// init project
const express = require('express');
const app = express();
const mongoose = require('mongoose');
const bodyParser = require('body-parser');


const mongoDB = process.env.MongoURI;

mongoose.connect(mongoDB, {useNewUrlParser: true, useUnifiedTopology: true}).then(() => {
  console.log('MongoDB is connected...');
})

//use the static files in the public folder
app.use(express.static('public'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

//tell express where to get your views and which template engine to use
app.set("views", __dirname + "/views/");
app.set("view engine", "ejs");



//define your routes here. don't forget about error handling
app.get('/', function(request, response) {
  response.render("index", {
    "message": "Hey everyone! This is my webpage.",
  });
});

//get employee by id
app.get('/employee/:id/',employeesController.employeeById);


// Get all employees info
app.get('/employees', employeesController.getAll);

// Delete employee by id
app.get('/employee/:id/delete', employeesController.deleteById);



// Add a new employee
app.post('/employee', employeesController.addemployee);

// Update employee by id
app.post('/employee/:id', employeesController.updateemployee);



//Get all depts
app.get('/depts', deptsController.getAll);

app.post('/depts', deptsController.save);

app.get('/dept/:id/employee', deptsController.employeeById);

app.post('/depts/name',deptsController.deptByName);


app.post('/employers', employersController.save);




// listen for requests :)
const listener = app.listen(3000, function() {
  console.log('Your app is listening on port ' + listener.address().port);
});
