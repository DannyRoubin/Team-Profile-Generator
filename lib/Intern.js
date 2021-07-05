const employeeClass = require("./Employee");

class Intern extends employeeClass {
  constructor(employeeName, employeeId, employeeEmail, school) {
    super(employeeName, employeeId, employeeEmail);
    this.school = school;
  }
  getSchool() {
    return this.school;
  }
  getRole() {
    return "Intern";
  }
}

module.exports = Intern;
