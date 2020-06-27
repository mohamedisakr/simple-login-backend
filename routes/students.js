// const Student = require("../models/student");
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

router.delete("/:id", async (req, res) => {
  const id = req.params.id;
  const studentToDelete = await studentServices.remove(id);
  res.status(204).send(studentToDelete);
});

router.put("/:id", async (req, res) => {
  const id = req.params.id;
  const { seatNo, ssn, fullName } = req.body;
  const student = { seatNo, ssn, fullName };
  const studentToUpdate = await studentServices.update(id, student);
  res.status(204).send(studentToUpdate);
});

module.exports = router;
