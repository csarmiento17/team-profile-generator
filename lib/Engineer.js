const Employee = require("./Employee");

class Engineer extends Employee{
    constructor(github, emp){
        super(github)
        this.github = github   // GitHub username
        this.employee = emp
    }
    getGithub() {
        
    }

    getRole() {
        console.log(`Role is Engineer`)
    }
}

module.exports = Engineer