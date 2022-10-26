const manager = require("../lib/manager");

// Creates manager object
test("creates an manager object", () => {
  const manager = new manager(
    "Toby",
    "03",
    "toby.theoffice@gmail",
    "tobytheoffice"
  );

  expect(manager.name).toEqual(expect.any(String));
  expect(manager.id).toEqual(expect.any(Number));
  expect(manager.email).toEqual(expect.any(String));
  expect(manager.github).toEqual(expect.any(String));
  expect(manager.role).toEqual(expect.any(String));
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
  const manager = new Manager(
    "Toby",
    "03",
    "toby.theoffice@gmail",
    "tobytheoffice"
  );

  expect(manager.getId()).toEqual(expect.any(Number));
});

// Email
test("gets manager email", () => {
  const manager = new Manager(
    "Toby",
    "03",
    "toby.theoffice@gmail",
    "tobytheoffice"
  );

  expect(manager.getEmail()).toEqual(
    expect.stringContaining(manager.email.toString())
  );
});

// Github
test("gets manager github value", () => {
  const manager = new manager(
    "Toby",
    "03",
    "toby.theoffice@gmail",
    "tobytheoffice"
  );

  expect(manager.getGithub()).toEqual(
    expect.stringContaining(manager.github.toString())
  );
});

// Role
test("gets role of manager", () => {
  const manager = new manager(
    "Toby",
    "03",
    "toby.theoffice@gmail",
    "tobytheoffice"
  );

  expect(manager.getRole()).toEqual("manager");
});
