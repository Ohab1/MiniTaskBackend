const mongoose = require('mongoose');
const { states, districts, cities } = require('../data/locationData');

// SCHEMAS
const stateSchema = new mongoose.Schema({ name: String });
const districtSchema = new mongoose.Schema({
  name: String,
  stateId: { type: mongoose.Schema.Types.ObjectId, ref: 'State' },
});
const citySchema = new mongoose.Schema({
  name: String,
  districtId: { type: mongoose.Schema.Types.ObjectId, ref: 'District' },
});

// MODELS
const State = mongoose.model('State', stateSchema);
const District = mongoose.model('District', districtSchema);
const City = mongoose.model('City', citySchema);

// UPLOAD FUNCTION
const uploadLocationData = async () => {
  try {
    await State.deleteMany({});
    await District.deleteMany({});
    await City.deleteMany({});

    const stateIdMap = {};
    for (let state of states) {
      const savedState = await new State({ name: state.name }).save();
      stateIdMap[state.id] = savedState._id;
    }

    const districtIdMap = {};
    for (let district of districts) {
      const savedDistrict = await new District({
        name: district.name,
        stateId: stateIdMap[district.stateId],
      }).save();
      districtIdMap[district.id] = savedDistrict._id;
    }

    for (let city of cities) {
      await new City({
        name: city.name,
        districtId: districtIdMap[city.districtId],
      }).save();
    }

    console.log('✅ Static location data uploaded successfully!');
    process.exit(0);
  } catch (err) {
    console.error('❌ Error uploading location data:', err);
    process.exit(1);
  }
};

// Connect and upload
require('dotenv').config();
const connectDB = require('../db/db_connection'); // replace with your path
connectDB().then(uploadLocationData);
