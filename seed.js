require('dotenv').config();
const mongoose = require('mongoose');
const Log = require('./models/logs');

const mongoURI = process.env.MONGO_URI;

mongoose.connect(mongoURI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const db = mongoose.connection;

db.on('error', err => console.log(err.message + ' is mongod not running?'));
db.on('open', async () => {
  console.log('mongo connected!');

  
  const logsData = [
    {
      title: 'First Log',
      entry: 'This is the first log entry.',
      shipIsBroken: true,
    },
    {
      title: 'Second Log',
      entry: 'The ship is still holding up.',
      shipIsBroken: false,
    },
    
  ];

  try {
    await Log.deleteMany(); 
    await Log.insertMany(logsData); 
    console.log('Seed data inserted.');
  } catch (error) {
    console.error(error);
  }

  db.close();
});

