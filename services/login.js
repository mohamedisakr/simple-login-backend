const Student = require("../models/student");

const login = async (seatNo, ssn) => {
  const student = await Student.findOne({ seatNo, ssn });
  return student;
};

module.exports = { login };
