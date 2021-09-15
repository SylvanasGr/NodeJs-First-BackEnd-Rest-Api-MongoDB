const express = require('express');
const app = express();
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
 require('dotenv/config');

 //Middlewares
 app.use(cors());
app.use(bodyParser.json());

//Import Routes
const postRoute = require('./routes/posts');

app.use('/posts',postRoute);

 //routes
app.get('/',(req,res) => {
 res.send('Home Page');
});


//connect to db
mongoose.connect(
 process.env.DB_CONNECTION,
 () => console.log('connect to the db !!')
 );


app.listen(3000);

