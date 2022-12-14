class Employee {
  constructor(name, id, email) {
    this.name = name;
    this.id = id;
    this.email = email;
  }

  // Name
  getName() {
    return this.name;
  }

  // ID
  getId() {
    return this.id;
  }

  // Email
  getEmail() {
    return this.email;
  }
}

module.exports = Employee;
