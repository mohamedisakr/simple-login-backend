const Student = require("../models/student");

const login = async (seatNo, ssn) => {
  if (seatNo === "undefined") {
    return { message: "Seat no is required" };
  }

  if (ssn === "undefined") {
    return { message: "Social security number is required" };
  }

  const student = await Student.findOne({ seatNo, ssn }, (err, user) => {
    if (err) {
      return { message: err };
    } else if (!user) {
      return { message: err };
    } else {
      return user;
    }
  });
  console.log(seatNo, ssn);
  return student;
};

module.exports = { login };
