// Node Modules
const inquirer = require('inquirer');
const fs = require('fs');
//Lib Team Members
const Employee = require('./lib/Employee')
const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
//HTML Site Creation 
const createSite = require('./src/genHTML');
const { choices } = require('yargs');
const genHTML = require('./src/genHTML');


//teamMembers
let teamArray = [];

//there MUST be a Manager before any other employee's can be added
function init() {
    inquirer.prompt([
        {
            type: 'input',
            name: 'name',
            message: "Please enter manager's name:"
        },
        {
            type: 'input',
            name: 'employeeID',
            message: 'What is your employee ID:'
        },
        {
            type: 'input',
            name: 'email',
            message: 'What is your email address:'
        },
        {
            type: 'input',
            name: 'officeNumber',
            message: 'What is your office number:'
        }
    ]).then(answers => {
        const manager = new Manager(answers.name, answers.employeeID, answers.email, answers.officeNumber)
        teamArray.push(manager);
        //Once the Manager info is entered the team needs to be built with Engineers/Interns
        teamMenu();
    })
};

//Menu in terminal asking if an Engineer or Intern needs to be added OR if the team is complete
function teamMenu() {
    inquirer.prompt([
        {
            type: 'list',
            name: 'menu',
            message: 'Please choose one of the following options:',
            choices: ['Add Engineer', 'Add Intern', 'My Team is Complete!']
        }
    ]).then(answers => {
        switch (answers.menu) {
            case "Add Engineer":
                addEngineer();
                break;
            case "Add Intern":
                addIntern();
                break;
            default:
                createTeam();
        }
    });
};

//Functions to addEnginers & addInterns
function addEngineer() {
    inquirer.prompt([
        {
            type: 'input',
            name: 'name',
            message: "Please enter engineer's name:"
        },
        {
            type: 'input',
            name: 'employeeID',
            message: 'What is their employee ID:'
        },
        {
            type: 'input',
            name: 'email',
            message: 'What is their email address:'
        },
        {
            type: 'input',
            name: 'githubUsername',
            message: 'What is their Github username:'
        }
    ]).then(answers => {
        const engineer = new Engineer(answers.name, answers.employeeID, answers.email, answers.githubUsername)
        teamArray.push(engineer);
        //Once the Engineer info is entered the team needs to be built with Engineers/Interns
        teamMenu();
    });
}

function addIntern() {
    inquirer.prompt([
        {
            type: 'input',
            name: 'name',
            message: "Please enter intern's name:"
        },
        {
            type: 'input',
            name: 'employeeID',
            message: 'What is their employee ID:'
        },
        {
            type: 'input',
            name: 'email',
            message: 'What is their email address:'
        },
        {
            type: 'input',
            name: 'school',
            message: 'What is school are they attending:'
        }
    ]).then(answers => {
        const intern = new Intern(answers.name, answers.employeeID, answers.email, answers.school)
        teamArray.push(intern);
        //Once the Engineer info is entered the team needs to be built with Engineers/Interns
        teamMenu();
    });
}

//Once the team is complete createTeam function needs to be run
function createTeam() {
    fs.writeFile('./dist/index.html', genHTML(teamArray), (err) => {
        if (err)
        console.log(err);
        else {
            console.log("file has been created");
        }
    });
}

init();