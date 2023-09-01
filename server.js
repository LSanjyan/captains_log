require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const Log = require('./models/logs');

const app = express();
const PORT = process.env.PORT || 5005;

const mongoURI = process.env.MONGO_URI;


const logSchema = new mongoose.Schema({
  title: String,
  entry: String,
  shipIsBroken: Boolean,
});


const Log = mongoose.model('Log', logSchema);


mongoose.connect(mongoURI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const db = mongoose.connection;

db.on('error', err => console.log(err.message + " is mongod not running?"));
db.on('open', () => console.log('mongo connected!'));
db.on('close', () => console.log('mongo disconnected'));

app.use(bodyParser.urlencoded({ extended: true }));
app.set('view engine', 'jsx');
app.engine('jsx', require('express-react-views').createEngine());

app.get('/logs/new', (req, res) => {
  res.render('New');
});

app.post('/logs', async (req, res) => {
  try {
    const newLog = new Log({
      title: req.body.title,
      entry: req.body.entry,
      shipIsBroken: req.body.shipIsBroken === 'true',
    });

    await newLog.save();

    res.redirect('/logs');
  } catch (error) {
    console.error(error);
    res.status(500).send('An error occurred while saving the log.');
  }
});

app.get('/logs', async (req, res) => {
  try {
    const logs = await Log.find();
    res.render('Index', { logs });
  } catch (error) {
    console.error(error);
    res.status(500).send('An error occurred while fetching logs.');
  }
});

app.get('/logs/:id', async (req, res) => {
    try {
        const log = await Log.findById(req.params.id);
        if (!log) {
            return res.status(404).send('Log not found');
        }
        res.render('Show', { log });
    } catch (error) {
        console.error(error);
        res.status(500),send('An error occurred while fetching the log.')
    }
});


app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
