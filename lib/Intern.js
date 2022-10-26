const Employee = require("./Employee");

// Extends employee constructor + role specifics
class Intern extends Employee {
  constructor(name, id, email, school) {
    super(name, id, email);
    this.school = school;
  }

  // School
  getSchool() {
    return this.school;
  }

  // Role
  getRole() {
    return "Intern";
  }
}

module.exports = Intern;
