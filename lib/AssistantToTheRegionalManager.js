class ARM extends Employee {
  constructor(name, id, email, github, role) {
    super(name, id, email);
    this.github = github;
  }

  // Github
  getGithub() {
    return this.github;
  }

  // Role
  getRole() {
    return "ARM";
  }
}
