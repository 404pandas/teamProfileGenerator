const AssistantToTheRegionalManager = require("../lib/AssistantToTheRegionalManager");

// Creates AssistantToTheRegionalManager object
test("creates an AssistantToTheRegionalManager object", () => {
  const AssistantToTheRegionalManager = new AssistantToTheRegionalManager(
    "Dwight Schrute",
    "02",
    "dwight.schrute@theoffice.com",
    "dwighttheoffice"
  );

  expect(AssistantToTheRegionalManager.name).toEqual(expect.any(String));
  expect(AssistantToTheRegionalManager.id).toEqual(expect.any(Number));
  expect(AssistantToTheRegionalManager.email).toEqual(expect.any(String));
  expect(AssistantToTheRegionalManager.github).toEqual(expect.any(String));
  expect(AssistantToTheRegionalManager.role).toEqual(expect.any(String));
});

// Name
test("gets employee name", () => {
  const employee = new Employee(
    "Dwight Schrute",
    "02",
    "dwight.schrute@theoffice.com",
    "dwighttheoffice"
  );

  expect(employee.getName()).toEqual(expect.any(String));
});

// ID
test("gets employee ID", () => {
  const AssistantToTheRegionalManager = new AssistantToTheRegionalManager(
    "Dwight Schrute",
    "02",
    "dwight.schrute@theoffice.com",
    "dwighttheoffice"
  );

  expect(AssistantToTheRegionalManager.getId()).toEqual(expect.any(Number));
});

// Email
test("gets employee email", () => {
  const employee = new Employee(
    "Dwight Schrute",
    "02",
    "dwight.schrute@theoffice.com",
    "dwighttheoffice"
  );

  expect(employee.getEmail()).toEqual(
    expect.stringContaining(employee.email.toString())
  );
});

// Github
test("gets AssistantToTheRegionalManager github value", () => {
  const AssistantToTheRegionalManager = new AssistantToTheRegionalManager(
    "Dwight Schrute",
    "02",
    "dwight.schrute@theoffice.com",
    "dwighttheoffice"
  );

  expect(AssistantToTheRegionalManager.getGithub()).toEqual(
    expect.stringContaining(AssistantToTheRegionalManager.github.toString())
  );
});

// Role
test("gets role of AssistantToTheRegionalManager", () => {
  const AssistantToTheRegionalManager = new AssistantToTheRegionalManager(
    "Dwight Schrute",
    "02",
    "dwight.schrute@theoffice.com",
    "dwighttheoffice"
  );

  expect(AssistantToTheRegionalManager.getRole()).toEqual(
    "AssistantToTheRegionalManager"
  );
});
