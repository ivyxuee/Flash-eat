const express = require('express');
const app = express();
const session = require('express-session');
const cookieParser = require('cookie-parser');

app.use(cookieParser());
app.use(session({
  resave: false,
  saveUninitialized: true,
  secret: 'currentUser',
  cookie : {
    maxAge : 1000 * 60 * 3000
  },
}));

const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: false}));
app.use(bodyParser.json());

require('./data/db');

app.use(function(req, res, next) {
  var allowedOrigins = ['https://cs5610-sp20-team18.herokuapp.com', 'https://cs5610-sp20-team18.herokuapp.com', 'http://localhost:4200', 'http://127.0.0.1:9000', 'http://localhost:9000', 'http://localhost:3000', 'http://localhost:3001'];
  var origin = req.headers.origin;
  if(allowedOrigins.indexOf(origin) > -1){
    res.header('Access-Control-Allow-Origin', origin);
  }
  //res.header('Access-Control-Allow-Origin', 'http://127.0.0.1:8020');
  res.header('Access-Control-Allow-Methods', 'GET, OPTIONS, PUT, DELETE, POST');
  res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization');
  res.header('Access-Control-Allow-Credentials', true);
  return next();
});

require('./controllers/user.controller.server')(app);
require('./controllers/review.controller.server')(app);
require('./controllers/order.controller.server')(app);
require('./controllers/payment.controller.server')(app);
require('./controllers/shoppingcart.controller.server')(app);
require('./controllers/menu.controller.server')(app);
require('./controllers/item.controller.server')(app);

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/' + 'api.server.html')
});

app.listen(process.env.PORT || 3000);
