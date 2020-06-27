const mongoose = require("mongoose");
const uniqueValidator = require("mongoose-unique-validator");

const schemaDefinition = {
  seatNo: { type: String, minlength: 3, required: true },
  ssn: { type: String, minlength: 14, required: true },
  fullName: { type: String, required: true },
};

const studentSchema = new mongoose.Schema(schemaDefinition);

studentSchema.set("toJSON", {
  transform: (document, returnedObject) => {
    returnedObject.id = returnedObject._id.toString();
    delete returnedObject._id;
    delete returnedObject.__v;
  },
});

studentSchema.plugin(uniqueValidator);

module.exports = mongoose.model("Student", studentSchema);
