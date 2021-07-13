const employeeClass = require("./Employee");

class Manager extends employeeClass {
  constructor(employeeName, employeeId, employeeEmail, officeNumber) {
    super(employeeName, employeeId, employeeEmail);
    this.officeNum = officeNumber;
  }
  officeNumber() {
    return this.officeNum;
  }
  getRole() {
    return "Manager";
  }
}

module.exports = Manager;
