require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const Log = require('./models/logs');
const methodOverride = require('method-override');
const logsController = require('./controllers/logsController');
const logsEditController = require('./controllers/logsEditController');


const app = express();
const PORT = process.env.PORT || 5005;

const mongoURI = process.env.MONGO_URI;

mongoose.connect(mongoURI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const db = mongoose.connection;

db.on('error', err => console.log(err.message + " is mongod not running?"));
db.on('open', () => console.log('mongo connected!'));
db.on('close', () => console.log('mongo disconnected'));

app.use(methodOverride('_method'));

app.use(bodyParser.urlencoded({ extended: true }));
app.set('view engine', 'jsx');
app.engine('jsx', require('express-react-views').createEngine());

app.use('/logs', logsController);
app.use('/logs', logsEditController);




app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

