const express = require('express');
const cors = require('cors');
const fs = require('fs');
const path = require('path');
require('dotenv').config();

const authRoutes = require('./routes/auth');
const taskRoutes = require('./routes/tasks');
const locationRoutes = require('./routes/locationRoutes');
const connectDB = require('./db/db_connection');
// ✅ Connect to DB
connectDB();

const app = express();
app.use(cors());
app.use(express.json());

// ✅ Ensure uploads folder exists
const uploadDir = path.join(__dirname, 'uploads');
if (!fs.existsSync(uploadDir)) {
  fs.mkdirSync(uploadDir);
}

// ✅ Serve uploaded images statically
// app.use('/uploads', express.static('uploads'));

app.use('/uploads', express.static(path.join(__dirname, 'uploads')));


// ✅ Routes
app.use('/', authRoutes); 
app.use('/', taskRoutes);
app.use('/', locationRoutes);

// ✅ Start server
app.listen(process.env.PORT, () => {
  console.log("App is running on:", process.env.PORT);
});

