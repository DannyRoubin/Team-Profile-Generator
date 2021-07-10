const inquirer = require("inquirer");
const fs = require("fs");

const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
var team = [];

createManager();

function createManager() {
  inquirer
    .prompt([
      {
        type: "confirm",
        name: "newTeamConfirm",
        message: "Would you like to create a new team?",
      },
    ])
    .then((confirm) => {
      if (confirm) {
        inquirer
          .prompt([
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
          ])
          .then(({ employeeName, employeeId, employeeEmail, officeNumber }) => {
            const manager = new Manager(
              employeeName,
              employeeId,
              employeeEmail,
              officeNumber
            );
            team.push(manager);
            menu();
          });
      } else {
        process.exit();
      }
    });
}

function menu() {
  inquirer
    .prompt([
      {
        type: "confirm",
        name: "newEmployeeConfirm",
        message: "Would you like to add another employee",
      },
    ])
    .then((answer) => {
      if (answer.newEmployeeConfirm == true) {
        newEmployee();
      } else {
        console.log("The page is being created");
        //create the html
      }
    });
}

function newEmployee() {
  inquirer
    .prompt([
      {
        type: "list",
        name: "employeeRole",
        message: "Select if you want to add an engineer or an intern",
        choices: ["Engineer", "Intern"],
      },
    ])
    .then(({ employeeRole }) => {
      if (employeeRole == "Engineer") {
        // createEngineer();
        console.log("You chose an engineer");
      } else if (role == "Intern") {
        // createIntern();
        console.log("You chose an Intern");
      }
    });
}
