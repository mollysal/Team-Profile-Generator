//Brining in the Employee class to extend
const Employee = require("./Employee");

class Intern extends Employee {
    constructor(name, id, email, school) {
        //Goes to Employee & gathers info
        super(name, id, email);

        //Expanding Employee class to get Office Number for Intern Roles
        this.school = school;
    } 
    getSchool() {
        return this.school;
    }
    getRole() {
        return "Intern";
    }
}
//Exporting Intern Class
module.exports = Intern;