// Extends employee constructor + role specifics
class Engineer extends Employee {
  constructor(name, id, email, school, github) {
    super(name, id, email);
    this.github = github;
  }

  // Github
  getGithub() {
    return this.github;
  }

  // Role
  getRole() {
    return "Engineer";
  }
}

module.exports = Engineer;
