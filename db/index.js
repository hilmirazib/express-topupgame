const mongoose = require('mongoose');
const { urlDb } = require('../config');

// mongoose.connect(urlDb, {
//   useUnifiedTopology: true,
//   useFindAndModify: true,
//   useCreatendex: true,
//   useNewUrlParser: true,
// });
mongoose.connect(urlDb, (err) => {
    if (err) throw err;
    console.log('connected to MongoDB');
});

const db = mongoose.connection;

module.exports = db;