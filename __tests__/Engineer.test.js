const engineer = require("../lib/engineer");

// Creates engineer object
test("creates an engineer object", () => {
  const engineer = new engineer(
    "Pam Beasley",
    "04",
    "pam.beasley@theoffice.com",
    "notareceptionist"
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
    "Pam Beasley",
    "04",
    "pam.beasley@theoffice.com",
    "notareceptionist"
  );

  expect(employee.getName()).toEqual(expect.any(String));
});

// ID
test("gets employee ID", () => {
  const employee = new Employee(
    "Pam Beasley",
    "04",
    "pam.beasley@theoffice.com",
    "notareceptionist"
  );

  expect(employee.getId()).toEqual(expect.any(Number));
});

// Email
test("gets employee email", () => {
  const employee = new Employee(
    "Pam Beasley",
    "04",
    "pam.beasley@theoffice.com",
    "notareceptionist"
  );

  expect(employee.getEmail()).toEqual(
    expect.stringContaining(employee.email.toString())
  );
});

// Github
test("gets engineer github value", () => {
  const engineer = new engineer(
    "Pam Beasley",
    "04",
    "pam.beasley@theoffice.com",
    "notareceptionist"
  );

  expect(engineer.getGithub()).toEqual(
    expect.stringContaining(engineer.github.toString())
  );
});

// Role
test("gets role of engineer", () => {
  const engineer = new engineer(
    "Pam Beasley",
    "04",
    "pam.beasley@theoffice.com",
    "notareceptionist"
  );

  expect(engineer.getRole()).toEqual("engineer");
});
