const mongoose = require("mongoose");
const supertest = require("supertest");
const app = require("../app");

const api = supertest(app);

test("students are returned as json", async () => {
  await api
    .get("/api/students")
    .expect(200)
    .expect("Content-Type", /application\/json/);
});

test("there are two students", async () => {
  const response = await api.get("/api/students");
  expect(response.body).toHaveLength(2);
});

test("the first student is about HTTP methods", async () => {
  const response = await api.get("/api/students");
  expect(response.body[0].content).toBe("HTML is easy");
});

afterAll(() => {
  mongoose.connection.close();
});
