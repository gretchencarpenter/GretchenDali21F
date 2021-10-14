import express from 'express';
import cors from 'cors';
import path from 'path';
import morgan from 'morgan';
import mongoose from 'mongoose';
import passport from 'passport';
import dotenv from 'dotenv';
import router from './router';

dotenv.config();

// initialize
const app = express();

// enable/disable cross origin resource sharing if necessary
app.use(cors());

// enable/disable http request logging
app.use(morgan('dev'));

// templating and view support
app.set('view engine', 'ejs');
app.use(express.static('static'));

// this just allows us to render ejs from the ../app/views directory
app.set('views', path.join(__dirname, '../src/views'));

// enable json message body for posting data to API
app.use(express.urlencoded({ extended: true }));
app.use(express.json()); // To parse the incoming requests with JSON payloads

// enable the server
app.use(passport.initialize());

// additional init stuff should go before hitting the routing
const mongoURI = process.env.mongoURI || 'mongodb://localhost/project';
console.log(mongoURI);
mongoose.connect(mongoURI).then(() => {
  console.log('connected to database:', mongoURI);
}).catch((err) => {
  console.log('error: could not connect to db:', err);
});

app.use('/', router);

// // default index route
// app.get('/', (req, res) => {
//   res.send('hello world');
// });

// // MINI CHALLENGE #1
// app.get('/dali', (req, res) => {
//   res.json({result: 'hello world'});
// });

// // MINI CHALLENGE #2
// app.get('/dali/:param1', (req, res) => {
//   res.json(req.params);
// })

// // MINI CHALLENGE #3
// app.get('error-route', (req, res) => {
//   res.status(500).send('An unknown error has offucred');
// })

// // MINI CHALLENGE #4
// app.put('/dali', (req, res) => {
//   res.json({result: req.body.key1});
// })

// START THE SERVER
// =============================================================================
const port = process.env.PORT || 9090;
app.listen(port);

console.log(`listening on: ${port}`);
