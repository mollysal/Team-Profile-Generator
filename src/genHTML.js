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
                <div class="card mb-4 shadow border-info">
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
                <div class="card mb-4 shadow border-info">
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
        results.push(engineerHTML);
    }
//Generate Intern & add intern Card
    const createIntern = intern => {
        console.log(intern);
        let internHTML = `
        <!-- Intern Card -->
            <div class="col-md-4">
                <div class="card mb-4 shadow border-info">
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
        results.push(internHTML);
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
module.exports = team => {
    return `
    <!doctype html>
<html lang="en">

<head>
    <!-- Required meta tags -->
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">

    <!-- Bootstrap CSS -->
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.3.1/dist/css/bootstrap.min.css"
        integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">

    <title>Team Profile Generator</title>
</head>

<body>
    <!-- Jumbotron -->
    <div class="jumbotron jumbotron-fluid bg-info">
        <div class="container">
            <h1 class="display-4 font-weight-bolder text-light">Team Profiles</h1>
        </div>
    </div>
    <!-- Cards -->
    <main class="container">
        <div class="row">
            <!-- ALL TEAM MEMBERS GET A CARD HERE -->
            ${createTeam(team)}
        </div>
    </main>

    <!-- Optional JavaScript -->
    <!-- jQuery first, then Popper.js, then Bootstrap JS -->
    <script src="https://code.jquery.com/jquery-3.3.1.slim.min.js"
        integrity="sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo"
        crossorigin="anonymous"></script>
    <script src="https://cdn.jsdelivr.net/npm/popper.js@1.14.7/dist/umd/popper.min.js"
        integrity="sha384-UO2eT0CpHqdSJQ6hJty5KVphtPhzWj9WO1clHTMGa3JDZwrnQq4sF86dIHNDz0W1"
        crossorigin="anonymous"></script>
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@4.3.1/dist/js/bootstrap.min.js"
        integrity="sha384-JjSmVgyd0p3pXB1rRibZUAYoIIy6OrQ6VrjIEaFf/nJGzIxFDsf4x0xIM+B07jRM"
        crossorigin="anonymous"></script>
</body>

</html>
    `;
}