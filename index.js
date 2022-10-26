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
        validate: (nameInput) => {
          if (isNaN(nameInput)) {
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
// ARM

// Engineer

// Intern

// Manager
// {
//   type: "list",
//   name: "role",
//   message: "Please choose your manager's role",
//   choices: ["Engineer", "Intern", "Assitant to the Regional Manager"],
// },

// {
//   type: "input",
//   name: "github",
//   message: "Please enter the manager's github username.",
//   when: (input) => input.role === "Engineer",
//   validate: (nameInput) => {
//     if (nameInput) {
//       return true;
//     } else {
//       console.log("Please enter the manager's github username!");
//     }
//   },
// },
// {
//   type: "input",
//   name: "school",
//   message: "Please enter the intern's school",
//   when: (input) => input.role === "Intern",
//   validate: (nameInput) => {
//     if (nameInput) {
//       return true;
//     } else {
//       console.log("Please enter the intern's school!");
//     }
//   },
// },
