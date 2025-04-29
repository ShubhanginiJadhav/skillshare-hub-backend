const Course = require('../models/Course');

exports.getCourses = async (req, res) => {
  const courses = await Course.find().populate('instructor', 'name');
  res.json(courses);
};

exports.addCourse = async (req, res) => {
  const { title, description, content, instructorId } = req.body;
  const course = new Course({ title, description, content, instructor: instructorId });
  await course.save();
  res.status(201).json({ message: 'Course added!' });
};
