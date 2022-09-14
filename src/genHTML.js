//Crate a team function
const createTeam = (team) => {
    console.log(team);
    //in order to push - need an empty array
    const results = [];
//Generate the Manager & add Manager Card
    const createManager = manager => {
        console.log(manager);
        let managerHTML = `
        <!-- Manager Card -->
            <div class="col-md-4">
                <div class="card mb-4">
                    <div class="card-header">Manager</div>
                    <div class="card-body">
                        <h5 class="card-title">${manager.name}</h5>
                    </div>
                    <ul class="list-group list-group-flush">
                        <li class="list-group-item">ID: ${manager.id}</li>
                        <li class="list-group-item">Email: <span id="email"><a href="mailto: ${manager.email}">${manager.email}</a></span></li>
                        <li class="list-group-item">Office #: ${manager.officeNumber}</li>
                    </ul>
                </div>
            </div>
        `;
        //Push Manager info from terminal into the card
        results.push(managerHTML);
    }
//Generate the Engineer & add Engineer Card
    const createEngineer = engineer => {
        console.log(engineer);
        let engineerHTML = `
        <!-- Engineering Card -->
            <div class="col-md-4">
                <div class="card mb-4">
                    <div class="card-header">Engineer</div>
                    <div class="card-body">
                        <h5 class="card-title">${engineer.name}</h5>
                    </div>
                    <ul class="list-group list-group-flush">
                        <li class="list-group-item">ID: ${engineer.id}</li>
                        <li class="list-group-item">Email: <span id="email"><a href="mailto: ${engineer.email}">${engineer.email}</a></span></li>
                        <li class="list-group-item">GitHub: <a target="_blank" href="https://github.com/${engineer.github}">${engineer.github}</a></li>
                    </ul>
                </div>
            </div>
        `;
        //Push Engineer info from terminal into the card
        results.push(engineer);
    }
//Generate Intern & add intern Card
    const createIntern = intern => {
        console.log(intern);
        let internHTML = `
        <!-- Intern Card -->
            <div class="col-md-4">
                <div class="card mb-4">
                    <div class="card-header">Engineer</div>
                    <div class="card-body">
                        <h5 class="card-title">${intern.name}</h5>
                    </div>
                    <ul class="list-group list-group-flush">
                        <li class="list-group-item">ID: ${intern.id}</li>
                        <li class="list-group-item">Email: <span id="email"><a href="mailto: ${intern.email}">${intern.email}</a></span></li>
                        <li class="list-group-item">School: ${intern.school}</li>
                    </ul>
                </div>
            </div>
        `;
        //Push Intern info from terminal into the card
        results.push(intern);
    }

//Need to loop through every member of the team until they all have a card
//Once the loop is complete then the html cards need to be merged together
    for(let i=0; i<team.length; i++) {
        if (team[i].getRole() === "Manager") {
            createManager(team[i]);
        }
        if (team[i].getRole() === "Engineer") {
            createEngineer(team[i]);
        }
        if (team[i].getRole() === "Intern") {
            createIntern(team[i]);
        }
    }

    return results.join('');
}
//Put the team into a base HTML (Under Jumbotron <main> area)