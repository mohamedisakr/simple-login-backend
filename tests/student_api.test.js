const mongoose = require("mongoose");
const supertest = require("supertest");
const app = require("../app");
const api = supertest(app);
const Student = require("../models/student");

const initialStudents = [
  {
    seatNo: "5932",
    ssn: 30010130300251,
    fullName: "Ali Sharif Al-Husseini Ali",
  },
  {
    seatNo: "4579",
    ssn: 30011200300161,
    fullName: "Nora Mahmoud Kamel El-Sayed",
  },
];

beforeEach(async () => {
  await Student.deleteMany({});

  let studentObject = new Student(initialStudents[0]);
  await studentObject.save();

  studentObject = new Student(initialStudents[1]);
  await studentObject.save();
});

// test("there are two students", async () => {
//   const response = await api.get("/api/students");
//   expect(response.body).toHaveLength(initialStudents.length);
// });

// test("a specific student is within the returned students", async () => {
//   const response = await api.get("/api/students");
//   const names = response.body.map((r) => r.fullName);
//   expect(names).toContain("Ali Sharif Al-Husseini Ali");
// });

test("a valid student can be added", async () => {
  const newStudent = {
    seatNo: "7822",
    ssn: "29910250300498",
    fullName: "Mohamed Ahmed Mohamed Ahmed",
  };

  await api
    .post("/api/students")
    .send(newStudent)
    .expect(200)
    .expect("Content-Type", /application\/json/);

  const response = await api.get("/api/students");

  const names = response.body.map((r) => r.fullName);

  expect(response.body).toHaveLength(initialStudents.length + 1);
  expect(names).toContain("Mohamed Ahmed Mohamed Ahmed");
});

// test("student without seat number is not added", async () => {
//   const newStudent = {
//     ssn: "29910250300498",
//     fullName: "Mohamed Ahmed Mohamed Ahmed",
//   };

//   await api.post("/api/students").send(newStudent).expect(400);

//   const response = await api.get("/api/students");

//   expect(response.body).toHaveLength(initialStudents.length);
// });

// ======================

//#region hidden tests
/*
test("students are returned as json", async () => {
  await api
    .get("/api/students")
    .expect(200)
    .expect("Content-Type", /application\/json/);
});

test("the first student is about HTTP methods", async () => {
  const response = await api.get("/api/students");
  expect(response.body[0].content).toBe("HTML is easy");
});*/
//#endregion

afterAll(() => {
  mongoose.connection.close();
});
