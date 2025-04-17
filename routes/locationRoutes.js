// routes/locationRoutes.js
const express = require('express');
const router = express.Router();

const State = require('../models/State');
const District = require('../models/District');
const City = require('../models/City');

router.get('/states', async (req, res) => {
  const states = await State.find();
  res.json(states);
});

router.get('/districts/:stateId', async (req, res) => {
  const districts = await District.find({ stateId: req.params.stateId });
  res.json(districts);
});

router.get('/cities/:districtId', async (req, res) => {
  const cities = await City.find({ districtId: req.params.districtId });
  res.json(cities);
});

module.exports = router;
