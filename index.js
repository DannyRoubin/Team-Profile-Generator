// Importing packages and classes
const inquirer = require("inquirer");
const fs = require("fs");

const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
// creates a blank team array to be able to store the teammates into
var team = [];

//calls the createManager function to begin the program
createManager();

function createManager() {
  // runs inquirer a first time to get their confirmation to begin the program
  inquirer
    .prompt([
      {
        type: "confirm",
        name: "newTeamConfirm",
        message: "Would you like to create a new team?",
      },
    ])
    // upon confirmation, rerun inquirer to run the rest of the questions for the manager
    .then((confirm) => {
      if (confirm.newTeamConfirm == true) {
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
          // then gather the pieces below and create a new manager using the manager class
          .then(({ employeeName, employeeId, employeeEmail, officeNumber }) => {
            const manager = new Manager(
              employeeName,
              employeeId,
              employeeEmail,
              officeNumber
            );
            // afterwards push it into the blank team array
            team.push(manager);
            createBaseHTML();
            menu();
          });
      } else {
        process.exit();
      }
    });
}

// menu function serves to determine if the program will be adding another employee or ending itself
// with the information gathered up to this point
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
        createCardsHTML(team);
      }
    });
}

function newEmployee() {
  inquirer
    // has the user pick which of the two employee types they want to add to their team
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
        console.log("You chose an engineer");
        // if they chose to add an engineer then the createEngineer func is run
        createEngineer();
      } else if (employeeRole == "Intern") {
        console.log("You chose an Intern");
        // if they chose to add an engineer then the createIntern func is run
        createIntern();
      }
    });
}

// this func is just like manager version of this, except it just records github instead of officeNum
function createEngineer() {
  inquirer
    .prompt([
      {
        type: "input",
        name: "employeeName",
        message: "Enter the name of the engineer",
      },
      {
        type: "input",
        name: "employeeId",
        message: "Enter the ID of the engineer",
      },
      {
        type: "input",
        name: "employeeEmail",
        message: "Enter the email of the engineer",
      },
      {
        type: "input",
        name: "github",
        message: "Enter the github for the engineer",
      },
    ])
    .then(({ employeeName, employeeId, employeeEmail, github }) => {
      const engineer = new Engineer(
        employeeName,
        employeeId,
        employeeEmail,
        github
      );
      team.push(engineer);
      menu();
    });
}
// this func is just like manager version of this, except it just records school instead of officeNum
function createIntern() {
  inquirer
    .prompt([
      {
        type: "input",
        name: "employeeName",
        message: "Enter the name of the intern",
      },
      {
        type: "input",
        name: "employeeId",
        message: "Enter the ID of the intern",
      },
      {
        type: "input",
        name: "employeeEmail",
        message: "Enter the email of the intern",
      },
      {
        type: "input",
        name: "school",
        message: "Enter the school for the intern",
      },
    ])
    .then(({ employeeName, employeeId, employeeEmail, school }) => {
      const intern = new Intern(
        employeeName,
        employeeId,
        employeeEmail,
        school
      );
      team.push(intern);
      menu();
    });
}

// This func creates the start of the HTML file
function createBaseHTML() {
  const headerPortion = `<!DOCTYPE html>
  <html lang="en">
    <head>
      <meta charset="UTF-8" />
      <meta http-equiv="X-UA-Compatible" content="ie=edge" />
      <link
        rel="stylesheet"
        href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css"
      />
      <title>Team Profile Generator</title>
    </head>
    <body>
    <!-- Header -->
    <div
      style="background-color: lightsalmon; color: white"
      class="jumbotron jumbotron-fluid"
    >
      <h1 style="text-align: center">My Team</h1>
    </div>
    <!-- Body -->
    <div style="margin-left: 2rem; margin-right: 2rem" class="row">`;

  fs.writeFile("teamProfile.html", headerPortion, (err) =>
    err
      ? console.log(err)
      : console.log("Successfully loaded the first portion")
  );
}

// This func creates the individual cards for each of the employees
function createCardsHTML(team) {
  var loopCount = 0;
  teamMemberCount = team.length;
  team.forEach((teammate) => {
    let htmlCards = "";
    const employeeName = teammate.getName();
    const employeeId = teammate.getId();
    const employeeEmail = teammate.getEmail();
    const employeeRole = teammate.getRole();

    if (employeeRole == "Manager") {
      const officeNum = teammate.officeNumber();
      htmlCards = `<div
      class="card"
      style="width: 18rem; margin-left: 1rem; margin-right: 1rem"
    >
      <div class="card-body">
        <h5 class="card-title">${employeeName}</h5>
        <p class="card-text">${employeeRole}</p>
      </div>
      <ul class="list-group list-group-flush">
        <li class="list-group-item">ID: ${employeeId}</li>
        <li class="list-group-item">Email: <a href = 'mailto:${employeeEmail}'> ${employeeEmail}</a></li>
        <li class="list-group-item">Office Number: ${officeNum}</li>
      </ul>
    </div>`;
    } else if (employeeRole == "Engineer") {
      const githubHandle = teammate.getGithub();
      htmlCards = `<div
      class="card"
      style="width: 18rem; margin-left: 1rem; margin-right: 1rem"
    >
      <div class="card-body">
        <h5 class="card-title">${employeeName}</h5>
        <p class="card-text">${employeeRole}</p>
      </div>
      <ul class="list-group list-group-flush">
        <li class="list-group-item">ID: ${employeeId}</li>
        <li class="list-group-item">Email: <a href = 'mailto:${employeeEmail}'> ${employeeEmail}</a></li>
        <li class="list-group-item">Github: <a href="https://github.com/${githubHandle}"> ${githubHandle}</a></li>
      </ul>
    </div>`;
    } else if (employeeRole == "Intern") {
      const internSchool = teammate.getSchool();
      htmlCards = `<div
      class="card"
      style="width: 18rem; margin-left: 1rem; margin-right: 1rem"
    >
      <div class="card-body">
        <h5 class="card-title">${employeeName}</h5>
        <p class="card-text">${employeeRole}</p>
      </div>
      <ul class="list-group list-group-flush">
        <li class="list-group-item">ID: ${employeeId}</li>
        <li class="list-group-item">Email: <a href = 'mailto:${employeeEmail}'> ${employeeEmail}</a></li>
        <li class="list-group-item">School: ${internSchool}</li>
      </ul>
    </div>`;
    }

    fs.appendFile("teamProfile.html", htmlCards, function (err) {
      if (err) {
        console.log(err);
      }
      loopCount++;
      if (loopCount == teamMemberCount) {
        finalHTML();
      }
    });
    if (loopCount == teamMemberCount) {
      finalHTML();
    }
  });
}

// func which renders the end of the html page
function finalHTML() {
  const finalPortion = `</div>
  </body>
</html>`;

  fs.appendFile("teamProfile.html", finalPortion, (err) =>
    err ? console.log(err) : console.log("Page is now complete")
  );
}
