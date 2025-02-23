const express = require('express');
const router = express.Router();
const ownerModel = require('../models/owner_model');

router.get('/', (req, res) => {
  res.send("404: Page not found");
});

router.post('/create', async (req, res) => {
  let owners = await ownerModel.find();
  if(owners.length > 0){
    return res.send("Owner already exists").sendStatus(503);
  }
  let newOwner = new ownerModel({
    fullname: req.body.name,
    email: req.body.email,
    password: req.body.password
  });
  await newOwner.save();
  res.send(newOwner).status(201);
  

});

module.exports = router;