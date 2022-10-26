// Node modules
const fs = require("fs");
const inquirer = require("inquirer");

// Team
const Employee = require("./lib/Employee");
const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const ARM = require("./lib/AssistantToTheRegionalManager");

// Generate HTML
const generateHTML = require("./src/generateHTML");

// Team array
const teamArray = [];

// User Prompts

// Manager
const addManager = () => {
  console.log(`
      Adding manager to the team
      `);

  return inquirer
    .prompt([
      {
        type: "input",
        name: "name",
        message: "What is the manager's name?",
        validate: (nameInput) => {
          if (nameInput) {
            return true;
          } else {
            console.log("Please enter the manager's name!");
            return false;
          }
        },
      },

      {
        type: "input",
        name: "id",
        message: "What is the manager's ID?",
        validate: (idInput) => {
          if (isNaN(idInput)) {
            console.log("Please enter the manager's ID!");
            return false;
          } else {
            return true;
          }
        },
      },

      {
        type: "input",
        name: "email",
        message: "What is the manager's email?",
        validate: (email) => {
          valid = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email);
          if (valid) {
            return true;
          } else {
            console.log("Please enter an email!");
            return false;
          }
        },
      },

      {
        type: "input",
        name: "officeNumber",
        message: "What is the manager's office number?",
        validate: (officeNumberInput) => {
          if (officeNumberInput) {
            return true;
          } else {
            console.log("Please enter an manager's name!");
            return false;
          }
        },
      },

      {
        type: "confirm",
        name: "confirmAddMembers",
        message: "Would you like to add more team members?",
        default: false,
      },
    ])

    .then((managerData) => {
      const { name, id, email, officeNumber } = managerInput;
      const manager = new Manager(name, id, email, officeNumber);

      teamArray.push(manager);
      console.log(manager);
    });
};

// Employee
const addEmployee = () => {
  console.log(`
      Adding employees to the team
      `);

  return inquirer
    .prompt([
      {
        type: "list",
        name: "role",
        message: "What is the employee's role?",
        choices: ["Engineer", "Intern", "Assistant to the Regional Manager"],
      },
      {
        type: "input",
        name: "name",
        message: "What is the employee's name?",
        validate: (nameInput) => {
          if (nameInput) {
            return true;
          } else {
            console.log("Please enter the employee's name!");
            return false;
          }
        },
      },
      {
        type: "input",
        name: "id",
        message: "What is the employee's ID?",
        validate: (nameInput) => {
          if (isNaN(nameInput)) {
            console.log("Please enter the employee's ID!");
            return false;
          } else {
            return true;
          }
        },
      },
      {
        type: "input",
        name: "email",
        message: "What is the employee's email?",
        validate: (email) => {
          valid = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email);
          if (valid) {
            return true;
          } else {
            console.log("Please enter an email!");
            return false;
          }
        },
      },
      {
        type: "input",
        name: "github",
        message: "What is the employee's github username?",
        when: (input) => input.role === "Engineer",
        validate: (nameInput) => {
          if (nameInput) {
            return true;
          } else {
            console.log("Please enter the employee's github username!");
          }
        },
      },
      {
        type: "input",
        name: "school",
        message: "Please enter the intern's school",
        when: (input) => input.role === "Intern",
        validate: (nameInput) => {
          if (nameInput) {
            return true;
          } else {
            console.log("Please enter the intern's school!");
          }
        },
      },

      {
        type: "confirm",
        name: "idiot",
        message: "Would an idiot do that?",
        choices: ["Yes", "No"],
        when: (input) => input.role === "Assistant to the Regional Manager",
        validate: (idiotInput) => {
          if (idiotInput) {
            return true;
          } else {
            console.log("Dwight, you ignorant ****!");
          }
        },
      },

      {
        type: "list",
        name: "bbbg",
        message: "Please choose one.",
        choices: ["Bears", "Beats", "Battlestar Galactica"],
        when: (input) => input.role === "Assistant to the Regional Manager",
        validate: (bbbgInput) => {
          if (bbbgInput) {
            return true;
          } else {
            console.log("Identity theft is not a joke, Jim!");
          }
        },
      },

      {
        type: "confirm",
        name: "confirmAddEmployee",
        message: "Would you like to add more team members?",
        default: false,
      },
    ])
    .then((employeeData) => {
      let { name, id, email, role, github, school, confirmAddEmployee } =
        employeeData;
      let employee;

      if (role === "Engineer") {
        employee = new Engineer(name, id, email, github);

        console.log(employee);
      } else if (role === "Intern") {
        employee = new Intern(name, id, email, school);

        console.log(employee);
      } else if (role === "Assistant To The Regional Manager") {
        employee = new Intern(name, id, email, idiot, bbg);

        console.log(employee);
      }
      teamArray.push(employee);

      if (confirmAddEmployee) {
        return addEmployee(teamArray);
      } else {
        return teamArray;
      }
    });
};

// Generate HTML page
("functionhere");
