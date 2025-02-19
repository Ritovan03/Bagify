const mongoose = require('mongoose');


const ownerSchema = new mongoose.Schema({
  fullname: {
    type: String,
    minlength: 3,
    trim: true,
    required: true
  },
  email: String,
  password: String,
  products: {
    type: Array,
    default: []

  },
  picture: String,
  gstIn : String
});


module.exports = mongoose.model('owner', ownerSchema);