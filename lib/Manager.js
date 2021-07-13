const employeeClass = require("./Employee");

class Manager extends employeeClass {
  constructor(employeeName, employeeId, employeeEmail, officeNumber) {
    super(employeeName, employeeId, employeeEmail);
    this.officeNumber = officeNumber;
  }
  officeNumber() {
    return this.officeNumber;
  }
  getRole() {
    return "Manager";
  }
}

module.exports = Manager;
