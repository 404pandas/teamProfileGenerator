const Manager = require("../lib/manager");

// Creates manager object
test("creates an manager object", () => {
  const manager = new manager(
    "Michael Scott",
    "01",
    "michael.scott@theoffice.com",
    "01"
  );

  expect(manager.name).toEqual(expect.any(String));
  expect(manager.id).toEqual(expect.any(Number));
  expect(manager.email).toEqual(expect.any(String));
  expect(manager.officeNumber).toEqual(expect.any(String));
});

// Name
test("gets manager name", () => {
  const employee = new Employee(
    "Michael Scott",
    "01",
    "michael.scott@theoffice.com",
    "01"
  );

  expect(employee.getName()).toEqual(expect.any(String));
});

// ID
test("gets employee ID", () => {
  const manager = new Manager(
    "Michael Scott",
    "01",
    "michael.scott@theoffice.com",
    "01"
  );

  expect(manager.getId()).toEqual(expect.any(Number));
});

// Email
test("gets manager email", () => {
  const manager = new Manager(
    "Michael Scott",
    "01",
    "michael.scott@theoffice.com",
    "01"
  );

  expect(manager.getEmail()).toEqual(
    expect.stringContaining(manager.email.toString())
  );
});

// Role
test("gets role of employee", () => {
  const manager = new Manager(
    "Michael Scott",
    "01",
    "michael.scott@theoffice.com",
    "01"
  );

  expect(manager.getRole()).toEqual("Manager");
});
