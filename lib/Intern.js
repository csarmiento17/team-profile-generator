const Employee = require("./Employee");

class Intern extends Employee{
    constructor(school){
        this.school = school   
    }
    getSchool(){
        return
    }

    getRole(){
         return console.log(`Role is Intern`)
    }
}

module.exports = Intern