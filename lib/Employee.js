const inquirer = require("inquirer");
const engineer = require('./Engineer')
const intern = require('./Intern')

class Employee {
  constructor(name, id, email) {
      
    this.name = name;
    this.id = id;
    this.email = email;
    this.engineer;
    this.intern;
  }

  initializeGame() {
     
    inquirer
      .prompt(
        [{
          type: "text",
          name: "name",
          message: "Enter your name (Required)",
          validate: name => {
            if (name) {
              return true;
            } else {
              console.log('Please enter your name!');
              return false;
            }
          }
        },
        {
          type: "text",
          name: "id",
          message: "Enter your employeed id (Required)",
          validate: id => {
            if (id) {
              return true;
            } else {
              console.log('Please enter your employee id!');
              return false;
            }
          }
        },
        {
          type: "text",
          name: "email",
          message: "Enter your email (Required)",
          validate: email => {
            if (email) {
              return true;
            } else {
              console.log('Please enter your email!');
              return false;
            }
          }
        },
        {
            type: "text",
            name: "officeNumber",
            message: "Enter your office number (Required)",
            validate: number => {
              if (number) {
                return true;
              } else {
                console.log('Please enter your office number!');
                return false;
              }
            }
          }
    ])      
      .then((data ) => {
          console.log('Data ',data)
        //   this.player = new Player(name);
        //   this.startNewBattle();
        this.selectTeam()
      });
  }

  selectTeam(){
    inquirer
    .prompt({
      type: 'list',
      message: 'What would you like to do?',
      name: 'action',
      choices: ['Engineer', 'Intern', 'Finished']
    }).then((action)=>{
        switch(action){
            case 'Engineer' : {
            //     this.engineer = new Engineer('Engineer');
            //    this.engineer.getRole();
                break;
            }
            case 'Intern' : {
                console.log('Intern')
                break;
            }
            default :
                console.log('Finished') 
             
            
        }
    })
  }
  getName() {}
  getId() {}
  getEmail() {}
  getRole() {
    console.log(`Role is Employee`);
  }
}

module.exports = Employee;
