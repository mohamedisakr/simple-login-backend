const express = require("express");
const app = express();
require("dotenv").config();

// const Student = require("./models/student");
// const studentServices = require("./services/student");
const cors = require("cors");

app.use(cors());
app.use(express.json());

const studentRouter = require("./routes/students");
const loginRouter = require("./routes/login");

app.use(process.env.STUDENT_PATH, studentRouter);
app.use(process.env.LOGIN_PATH, loginRouter);

const unknownEndpoint = (request, response) => {
  response.status(404).send({ error: "unknown endpoint" });
};

app.use(unknownEndpoint);

const errorHandler = (error, request, response, next) => {
  console.error(error.message);

  if (error.name === "CastError" && error.kind == "ObjectId") {
    return response.status(400).send({ error: "malformatted id" });
  }

  next(error);
};

app.use(errorHandler);

const PORT = process.env.PORT;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

// const DatabaseUri = "mongodb://localhost:27017/tanseeq";

// mongoose
//   .connect(DatabaseUri, {
//     useNewUrlParser: true,
//     useUnifiedTopology: true,
//   })
//   .then((result) => {
//     console.log("connected to MongoDB");
//   })
//   .catch((error) => {
//     console.log("error connecting to MongoDB:", error.message);
//   });

// const schemaDefinition = {
//   SeatNo: String,
//   SSN: String,
//   FullName: String,
// };

// const studentSchema = new mongoose.Schema(schemaDefinition);
// studentSchema.set("toJSON", {
//   transform: (document, returnObject) => {
//     returnObject.id = returnedObject._id.toString();
//     delete returnedObject._id;
//     delete returnedObject.__v;
//   },
// });
// const Student = mongoose.model("Student", studentSchema);
