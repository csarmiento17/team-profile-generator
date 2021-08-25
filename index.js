const inquirer = require("inquirer");
const fs = require("fs");
const path = require("path");

const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");

const directory = path.join(__dirname, "/dist/", "myTeam.html");

const generateTemplate = require("./src/generateHTML");

let myTeam = [];

const createManager = () => {
  console.log("===Manager's Information===");
  inquirer
    .prompt([
      {
        type: "text",
        name: "name",
        message: "Enter your name (Required)",
        validate: (name) => {
          if (name) {
            return true;
          } else {
            console.log("Please enter your name!");
            return false;
          }
        },
      },
      {
        type: "text",
        name: "id",
        message: "Enter your employeed id (Required)",
        validate: (id) => {
          if (id) {
            return true;
          } else {
            console.log("Please enter your employee id!");
            return false;
          }
        },
      },
      {
        type: "text",
        name: "email",
        message: "Enter your email (Required)",
        validate: (email) => {
          if (email) {
            return true;
          } else {
            console.log("Please enter your email!");
            return false;
          }
        },
      },
      {
        type: "text",
        name: "officeNumber",
        message: "Enter your office number (Required)",
        validate: (officeNumber) => {
          if (officeNumber) {
            return true;
          } else {
            console.log("Please enter your office number!");
            return false;
          }
        },
      },
    ])
    .then(({ name, id, email, officeNumber }) => {
      const manager = new Manager(name, id, email, officeNumber);
      myTeam.push(manager);
      selectTeam();
    });
};

createManager();

createEngineer = () => {
  console.log("===Adding Engineer===");
  inquirer
    .prompt([
      {
        type: "text",
        name: "engrName",
        message: "Enter engineer's name (Required)",
        validate: (engrName) => {
          if (engrName) {
            return true;
          } else {
            console.log("Please enter engineer's name!");
            return false;
          }
        },
      },
      {
        type: "text",
        name: "engrId",
        message: "Enter engineer's ID (Required)",
        validate: (engrName) => {
          if (engrName) {
            return true;
          } else {
            console.log("Please enter engineer's ID!");
            return false;
          }
        },
      },
      {
        type: "text",
        name: "engrEmail",
        message: "Enter engineer's email (Required)",
        validate: (engrEmail) => {
          if (engrEmail) {
            return true;
          } else {
            console.log("Please enter engineer's email!");
            return false;
          }
        },
      },
      {
        type: "text",
        name: "engrGithub",
        message: "Enter engineer's github username (Required)",
        validate: (engrGithub) => {
          if (engrGithub) {
            return true;
          } else {
            console.log("Please enter engineer's github username!");
            return false;
          }
        },
      },
    ])
    .then(({ engrName, engrId, engrEmail, engrGithub }) => {
      const engr = new Engineer(engrName, engrId, engrEmail, engrGithub);
      myTeam.push(engr);
      selectTeam();
    });
};

createIntern = () => {
  console.log("===Adding Intern===");
  inquirer
    .prompt([
      {
        type: "text",
        name: "intName",
        message: "Enter intern's name (Required)",
        validate: (intName) => {
          if (intName) {
            return true;
          } else {
            console.log("Please enter intern's name!");
            return false;
          }
        },
      },
      {
        type: "text",
        name: "intId",
        message: "Enter intern's ID (Required)",
        validate: (intName) => {
          if (intName) {
            return true;
          } else {
            console.log("Please enter intern's ID!");
            return false;
          }
        },
      },
      {
        type: "text",
        name: "intEmail",
        message: "Enter intern's email (Required)",
        validate: (intEmail) => {
          if (intEmail) {
            return true;
          } else {
            console.log("Please intern's email!");
            return false;
          }
        },
      },
      {
        type: "text",
        name: "intSchool",
        message: "Enter school (Required)",
        validate: (intSchool) => {
          if (intSchool) {
            return true;
          } else {
            console.log("Please enter the school!");
            return false;
          }
        },
      },
    ])
    .then(({ intName, intId, intEmail, intSchool }) => {
      const intern = new Intern(intName, intId, intEmail, intSchool);
      myTeam.push(intern);
      selectTeam();
    });
};

selectTeam = () => {
  inquirer
    .prompt({
      type: "list",
      message: "What would you like to do?",
      name: "position",
      choices: ["Engineer", "Intern", "Finished"],
    })
    .then((data) => {
      switch (data.position) {
        case "Engineer": {
          createEngineer();
          break;
        }
        case "Intern": {
          createIntern();
          break;
        }
        default:
          generateHTML();
      }
    });
};

let generateHTML = () => {
  fs.writeFileSync(directory, generateTemplate(myTeam), "utf-8");
};
