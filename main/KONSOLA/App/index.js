const express = require('express');
const http = require('http');
const mongoose = require('mongoose');
const path = require('path');
const get_routs = require('./Controllers/getcontroller')
const logincontroller = require('./Controllers/logincontroller');
const registercontroller = require('./Controllers/registercontroller');

var cors = require('cors');  // cors - pozwala na zapytania pomiędzy serverem
var app = express();  
var server = http.createServer(app);

mongoose.connect('mongodb://localhost/app', { useNewUrlParser: true,  useUnifiedTopology: true})
.then(() => console.log('Now connected to MongoDB!'))
.catch(err => console.error('Something went wrong', err));  //połaczenie się z bazą - zapytania asynchroniczne

app.use(cors());
app.use(express.static(path.join(__dirname, 'Views')));
get_routs(app);
app.use('/logincontroller', logincontroller);
app.use('/registercontroller', registercontroller);

const PORT = process.env.PORT || 80;
server.listen(PORT, console.log('server opend on port ' + PORT))
