const Employee = require("./Employee");
// Extends employee constructor + role specifics
class AssistantToTheRegionalManager extends Employee {
  constructor(name, id, email, github) {
    super(name, id, email);
    this.github = github;
  }

  // Github
  getGithub() {
    return this.github;
  }

  // Role
  getRole() {
    return "AssistantToTheRegionalManager";
  }
}

module.exports = AssistantToTheRegionalManager;
