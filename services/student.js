const Student = require("../models/student");

const getAll = async () => {
  const students = await Student.find({});
  return students;
};

const getById = async (id) => {
  const student = await Student.findById(id);
  return student;
};

const Add = async (newStudent) => {
  const student = new Student(newStudent);
  const savedStudent = await student.save();
  return savedStudent;
};

module.exports = { getAll, getById, Add };
