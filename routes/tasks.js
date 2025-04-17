const express = require('express');
const Task = require('../models/Task');
const auth = require('../middleware/authMiddleware');
const multer = require('multer');
const path = require('path');
const router = express.Router();

// ✅ Multer Setup
const storage = multer.diskStorage({
  destination: (req, file, cb) => cb(null, 'uploads/'),
  filename: (req, file, cb) => cb(null, `${Date.now()}-${file.originalname}`)
});

const upload = multer({
  storage,
  limits: { fileSize: 10 * 1024 * 1024 }, // Max 10MB
  fileFilter: (req, file, cb) => {
    const filetypes = /jpeg|jpg|png|gif/;
    const extname = filetypes.test(path.extname(file.originalname).toLowerCase());
    const mimetype = filetypes.test(file.mimetype);

    if (extname && mimetype) {
      return cb(null, true);
    } else {
      return cb(new Error('Only image files are allowed (jpeg, jpg, png, gif)'));
    }
  }
});

// ✅ Public Access to Images
router.use('/uploads', express.static(path.join(__dirname, 'uploads')));

// ✅ Upload image only
router.post('/uploadimage', auth, upload.single('image'), (req, res) => {
  try {
    if (!req.file) {
      return res.status(400).json({ message: 'No image provided' });
    }


    const imagePath = req.file ? req.file.path.replace(/\\/g, "/") : null;
    // const imagePath = req.file.path;
    res.status(200).json({ imageUrl: imagePath });
  } catch (error) {
    console.error("Image upload error:", error);
    res.status(500).json({ message: 'Failed to upload image' });
  }
});

// ✅ GET all tasks of logged-in user
router.get('/taskslist', auth, async (req, res) => {
  try {
    const tasks = await Task.find({ userId: req.user.userId })
      .populate('state district city');
    res.json(tasks);
  } catch (err) {
    res.status(500).json({ message: 'Something went wrong' });
  }
});

// ✅ Create task (image should be uploaded first and URL passed here)
router.post('/createtasks', auth, async (req, res) => {
  try {
    const { title, description, taskStatus, state, district, city, imageUrl } = req.body;

    if (!title || !description) {
      return res.status(400).json({ message: 'Title and description are required' });
    }

    const task = new Task({
      title,
      description,
      taskStatus: taskStatus || "Pending",
      state,
      district,
      city,
      userId: req.user.userId,
      image: imageUrl || null
    });

    await task.save();
    res.status(201).json(task);
  } catch (error) {
    console.error("Create task error:", error);
    res.status(500).json({ message: 'Failed to create task' });
  }
});

// ✅ Update task
router.put('/updatetasks/:id', auth, async (req, res) => {
  const { title, description, taskStatus, state, district, city } = req.body;
  try {
    const task = await Task.findOneAndUpdate(
      { _id: req.params.id, userId: req.user.userId },
      { title, description, taskStatus, state, district, city },
      { new: true }
    );
    if (!task) return res.status(404).json({ message: 'Task not found' });
    res.json(task);
  } catch (error) {
    res.status(500).json({ message: 'Failed to update task' });
  }
});

// ✅ Delete task
router.delete('/deletetasks/:id', auth, async (req, res) => {
  try {
    const task = await Task.findOneAndDelete({ _id: req.params.id, userId: req.user.userId });
    if (!task) return res.status(404).json({ message: 'Task not found' });
    res.json({ message: 'Task deleted' });
  } catch (error) {
    res.status(500).json({ message: 'Failed to delete task' });
  }
});

module.exports = router;
