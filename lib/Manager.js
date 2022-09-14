const Employee = require("./Employee");

class Manager extends Employee {
    constructor(name, id, email, officeNumber) {
        //Goes to Employee & gathers info
        super(name, id, email);

        //Expanding Employee class to get Office Number for Manager Roles
        this.officeNumber = officeNumber;
    } 
    getOfficeNumber() {
        return this.officeNumber;
    }
    getRole() {
        return "Manager";
    }
}

module.exports = Manager;