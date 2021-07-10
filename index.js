const inquirer = require("inquirer");
const fs = require("fs");

const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
var team = [];

createManager();

function createManager() {
  inquirer.prompt([
    {
      type: "input",
      name: "employeeName",
      message: "Enter the name of the manager",
    },
    {
      type: "input",
      name: "employeeId",
      message: "Enter the ID of the manager",
    },
    {
      type: "input",
      name: "employeeEmail",
      message: "Enter the email of the manager",
    },
    {
      type: "input",
      name: "officeNumber",
      message: "Enter the office number for the manager",
    },
  ]);
  const manager = new Manager(
    employeeName,
    employeeIdm,
    employeeEmail,
    officeNumber
  );
  team.push(manager);
  menu();
}
