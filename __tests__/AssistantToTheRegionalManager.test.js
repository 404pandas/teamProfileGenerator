const arm = require("../lib/arm");

// Creates arm object
test("creates an arm object", () => {
  const arm = new arm("Toby", "03", "toby.theoffice@gmail", "tobytheoffice");

  expect(arm.name).toEqual(expect.any(String));
  expect(arm.id).toEqual(expect.any(Number));
  expect(arm.email).toEqual(expect.any(String));
  expect(arm.github).toEqual(expect.any(String));
  expect(arm.role).toEqual(expect.any(String));
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
  const arm = new ARM("Toby", "03", "toby.theoffice@gmail", "tobytheoffice");

  expect(arm.getId()).toEqual(expect.any(Number));
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
test("gets arm github value", () => {
  const arm = new arm("Toby", "03", "toby.theoffice@gmail", "tobytheoffice");

  expect(arm.getGithub()).toEqual(
    expect.stringContaining(arm.github.toString())
  );
});

// Role
test("gets role of arm", () => {
  const arm = new arm("Toby", "03", "toby.theoffice@gmail", "tobytheoffice");

  expect(arm.getRole()).toEqual("arm");
});
