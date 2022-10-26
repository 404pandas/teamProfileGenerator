// Extends employee constructor + role specifics
class Manager extends Employee {
  constructor(name, id, email, officeNumber) {
    super(name, id, email);
    this.officeNumber = officeNumber;
  }

  // Role
  getRole() {
    return "Manager";
  }
}
