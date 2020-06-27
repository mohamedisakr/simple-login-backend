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

const update = async (id, studentToUpdate) => {
  const student = await Student.findById(id);
  if (!student) return null;
  student.set({
    seatNo: studentToUpdate.seatNo || student.seatNo,
    ssn: studentToUpdate.ssn || student.ssn,
    fullName: studentToUpdate.fullName || student.fullName,
  });
  const savedStudent = await student.save();
  return savedStudent;
};

const remove = async (id) => {
  const student = await Student.findByIdAndDelete(id);
  return student;
};

module.exports = { getAll, getById, Add, update, remove };
