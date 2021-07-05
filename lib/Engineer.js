const employeeClass = require("./Employee");

class Engineer extends employeeClass {
  constructor(employeeName, employeeId, employeeEmail, github) {
    super(employeeName, employeeId, employeeEmail);
    this.github = github;
  }
  getGithub() {
    return this.github;
  }
  getRole() {
    return "Engineer";
  }
}

module.exports = Engineer;
