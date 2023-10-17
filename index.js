const express = require('express');
const app = express();

const mongoose = require('mongoose');
// mongoose.connect('mongodb://127.0.0.1:27017/LonexGetAPIRender');
mongoose.connect('mongodb+srv://pushpamgaurav3:e5tvoDyrEvo1HDqp@mysaloon.rlqufop.mongodb.net/');


//user routes
const user_route = require('./routes/userRoutes');

app.use('/api', user_route)

app.get('/getapi', (req, res) => {


  res.send('server is runnimng at render');

});

app.listen(3000, function () {
  console.log("Server is ready");
})