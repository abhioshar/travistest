const express = require('express');
const path = require('path');
const bodyParser = require("body-parser");
const cors = require('cors');
const passport = require('passport');
const mongoose = require('mongoose');
const config = require('./config/database');

// Connect to the mongodb database using configuration
mongoose.connect(config.database);

// Database connection is successful
mongoose.connection.on('connected', () => {
	console.log('Connected to database ' + config.database);
});

// Database connection is unsuccessful
mongoose.connection.on('error', (err) => {
	console.log('Database error: ' + err);
});

const app = express();

const users = require('./routes/users');

//const port = 3000;
const port = process.env.PORT || 8080;

// For allowing cross domain requests
app.use(cors());

// Static path
app.use(express.static(path.join(__dirname, 'angular-public')));

// Bodyparser for parsing incoming request bodies
app.use(bodyParser.json());

// Passport middleware
app.use(passport.initialize());
app.use(passport.session());

require('./config/passport')(passport);

// Setting route for users
app.use('/users', users);

// Root path
app.get('/', (req, res) => {
	res.send('Invalid Endpoint');
});

app.get('*', (req, res) => {
	res.sendfile(path.join(__dirname, 'angular-public/index.html'));
});

// Start the app
app.listen(port, () => {
	console.log('Server started on port ' + port);
});