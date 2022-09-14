// Node Modules
const inquirer = require('inquirer');
const fs = require('fs');
//Lib Team Members
const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');

let teamArray = [];

function init() {
    inquirer.prompt([
        {},
        {},
        {},
        {}
    ]).then(answers => {
        const manager = new Manager(answers.name, email, phone)
        switch(answers.role){
            case "Engineer":
                addEngineer()
                break;
            case "no":
                generateHTML()
                break;
        }
    })
}

function addEngineer() {
    inquirer.prompt([
        {},
        {},
        {},
        {}
    ]).then(answers => {
        const engineer = new Engineer(answers.name, email, phone)
        switch(answers.role){

        }
    })
}