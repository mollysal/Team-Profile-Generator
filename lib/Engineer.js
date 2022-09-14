const Employee = require("./Employee");

class Engineer extends Employee {
    constructor(name, id, email, github) {
        //Goes to Employee & gathers info
        super(name, id, email);

        //Expanding Employee class to get Office Number for Manager Roles
        this.github = github;
    } 
    getGithub() {
        return this.github;
    }
    getRole() {
        return "Engineer";
    }
}

module.exports = Engineer;