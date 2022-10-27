const intern = require("../lib/intern");

// Creates intern object
test("creates an intern object", () => {
  const intern = new intern(
    "Ryan Howard",
    "00",
    "ryan.howard@theoffice.com",
    "University of Scranton"
  );

  expect(intern.name).toEqual(expect.any(String));
  expect(intern.id).toEqual(expect.any(Number));
  expect(intern.email).toEqual(expect.any(String));
  expect(intern.school).toEqual(expect.any(String));
});

// Name
test("gets employee name", () => {
  const employee = new Employee(
    "Ryan Howard",
    "00",
    "ryan.howard@theoffice.com",
    "University of Scranton"
  );

  expect(employee.getName()).toEqual(expect.any(String));
});

// ID
test("gets employee ID", () => {
  const intern = new intern(
    "Ryan Howard",
    "00",
    "ryan.howard@theoffice.com",
    "University of Scranton"
  );
  expect(intern.getId()).toEqual(expect.any(Number));
});

// Email
test("gets employee email", () => {
  const employee = new Employee(
    "Ryan Howard",
    "00",
    "ryan.howard@theoffice.com",
    "University of Scranton"
  );

  expect(employee.getEmail()).toEqual(
    expect.stringContaining(employee.email.toString())
  );
});

// Role
test("gets role of intern", () => {
  const intern = new intern(
    "Ryan Howard",
    "00",
    "ryan.howard@theoffice.com",
    "istartedthefire"
  );

  expect(intern.getRole()).toEqual("intern");
});

// School
test("gets employee school", () => {
  const intern = new Intern(
    "Ryan Howard",
    "00",
    "ryan.howard@theoffice.com",
    "University of Scranton"
  );

  expect(intern.getSchool()).toEqual(
    expect.stringContaining(intern.school.toString())
  );
});
