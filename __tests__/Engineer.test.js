const engineer = require("../lib/engineer");

// Creates engineer object
test("creates an engineer object", () => {
  const engineer = new engineer(
    "Toby",
    "03",
    "toby.theoffice@gmail",
    "tobytheoffice"
  );

  expect(engineer.name).toEqual(expect.any(String));
  expect(engineer.id).toEqual(expect.any(Number));
  expect(engineer.email).toEqual(expect.any(String));
  expect(engineer.github).toEqual(expect.any(String));
  expect(engineer.role).toEqual(expect.any(String));
});

// Name
test("gets employee name", () => {
  const employee = new Employee(
    "Toby",
    "03",
    "toby.theoffice@gmail",
    "tobytheoffice"
  );

  expect(employee.getName()).toEqual(expect.any(String));
});

// ID
test("gets employee ID", () => {
  const employee = new Employee(
    "Toby",
    "03",
    "toby.theoffice@gmail",
    "tobytheoffice"
  );

  expect(employee.getId()).toEqual(expect.any(Number));
});

// Email
test("gets employee email", () => {
  const employee = new Employee(
    "Toby",
    "03",
    "toby.theoffice@gmail",
    "tobytheoffice"
  );

  expect(employee.getEmail()).toEqual(
    expect.stringContaining(employee.email.toString())
  );
});

// Github
test("gets engineer github value", () => {
  const engineer = new engineer(
    "Toby",
    "03",
    "toby.theoffice@gmail",
    "tobytheoffice"
  );

  expect(engineer.getGithub()).toEqual(
    expect.stringContaining(engineer.github.toString())
  );
});

// Role
test("gets role of engineer", () => {
  const engineer = new engineer(
    "Toby",
    "03",
    "toby.theoffice@gmail",
    "tobytheoffice"
  );

  expect(engineer.getRole()).toEqual("engineer");
});
