const mongoose = require('mongoose');
const dbgr = require('debug')('development:mongoose');
require("dotenv").config();
const uri = process.env.MONGO_URI;
// Connect to MongoDB

mongoose
.connect(`${uri}/scatch`)
.then(() => dbgr('Connected to MongoDB...'))
.catch(err => dbgr('Could not connect to MongoDB...', err));


module.exports = mongoose.connection;