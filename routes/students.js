const Student = require("../models/student");
const router = require("express").Router();
const studentServices = require("../services/student");

router.get("/", async (req, res) => {
  const students = await studentServices.getAll();
  res.status(200).send(students);
});

router.get("/:id", async (req, res) => {
  const id = req.params.id;
  const students = await studentServices.getById(id);
  res.status(200).send(students);
});

router.post("/", async (req, res) => {
  const { seatNo, ssn, fullName } = req.body;
  const student = { seatNo, ssn, fullName };
  const savedStudent = await studentServices.Add(student);
  res.status(200).send(savedStudent);
});

module.exports = router;
