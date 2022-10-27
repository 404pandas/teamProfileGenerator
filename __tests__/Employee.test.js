// Calling Employee
const Employee = require("../lib/Employee");

// Creates employee object
test("creates an employee object", () => {
  const employee = new employee(
    "Toby Flenderson",
    "03",
    "toby.flenderson@theoffice.com",
    "tobytheoffice"
  );

  expect(employee.name).toEqual(expect.any(String));
  expect(employee.id).toEqual(expect.any(Number));
  expect(employee.email).toEqual(expect.any(String));
  expect(employee.github).toEqual(expect.any(String));
});

// Name
test("gets employee name", () => {
  const employee = new Employee(
    "Toby Flenderson",
    "03",
    "toby.flenderson@theoffice.com",
    "tobytheoffice"
  );

  expect(employee.getName()).toEqual(expect.any(String));
});

// ID
test("gets employee ID", () => {
  const employee = new Employee(
    "Toby Flenderson",
    "03",
    "toby.flenderson@theoffice.com",
    "tobytheoffice"
  );

  expect(employee.getId()).toEqual(expect.any(Number));
});

// Email
test("gets employee email", () => {
  const employee = new Employee(
    "Toby Flenderson",
    "03",
    "toby.flenderson@theoffice.com",
    "tobytheoffice"
  );

  expect(employee.getEmail()).toEqual(
    expect.stringContaining(employee.email.toString())
  );
});

// Github
test("gets employee github value", () => {
  const employee = new employee(
    "Toby Flenderson",
    "03",
    "toby.flenderson@theoffice.com",
    "tobytheoffice"
  );

  expect(employee.getGithub()).toEqual(
    expect.stringContaining(employee.github.toString())
  );
});
