const mongoose = require('mongoose');

// MongoDB connection URI
const MONG_URI = 'mongodb+srv://u2426673:V0Djd1Qiuh0wZW4X@books01.gbf9v.mongodb.net/';

mongoose.set('strictQuery', false); // Suppress deprecation warnings
mongoose.connect(MONG_URI, {
  useUnifiedTopology: true,
  useNewUrlParser: true
});

const db = mongoose.connection;

db.on('error', (err) => {
  console.log('Error occurred: ' + err);
});

db.once('open', () => {
  console.log("Current Version of Mongoose installed: " + mongoose.version);
  console.log('Connection is successful to ' + MONG_URI);
});

module.exports = db;
