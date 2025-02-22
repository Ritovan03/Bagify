const mongoose = require('mongoose');
const dbgr = require('debug')('development:mongoose');
// Connect to MongoDB

mongoose
.connect('mongodb://localhost:27017/scatch')
.then(() => console.log('Connected to MongoDB...'))
.catch(err => console.error('Could not connect to MongoDB...', err));


module.exports = mongoose.connection;