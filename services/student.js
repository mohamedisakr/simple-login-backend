const Student = require("../models/student");

const getAll = async () => {
  const students = await Student.find({});
  return students;
};

const getById = async (id) => {
  const student = await Student.findById(id);
  return student;
};

module.exports = { getAll, getById };
