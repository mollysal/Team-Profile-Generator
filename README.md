# Team Profile Generator

## Description
The goal of this application is to allow managers to show their team member information on a web page. Managers are prompted with questions which are then generated on cards in an HTML page. 


The follow User Story was given for this assignment:

```md
AS A manager
I WANT to generate a webpage that displays my team's basic info
SO THAT I have quick access to their emails and GitHub profiles
```

## Contents
  - [Description](#description)
  - [Contents](#contents)
  - [Installation](#installation)
  - [Usage](#usage)
  - [Resources/Credit](#resourcescredit)
  - [Features](#features)
  - [Tests](#tests)
  - [Video](#video)

## Installation
Within the intergrated terminal run the json install. 
```md
npm i
```
## Usage
Once everything is installed, users can start the application by typing the following in the intergrated terminal:
```md
node index.js
```
When it starts it should look like this image:
![Starting Image](./images/Starting%20Index.png)

When the user is done answering questions, a new index.html is created in the dist folder. The html page should look somthing like this:
![browser HTML](./images/Team%20Profiles%20HTML.png)

## Resources/Credit
* https://jestjs.io/docs/asynchronous 
* UofM Instructors & TAs
* various YouTube videos

## Features
* Jest 
* Node.js
* inquirer
* bootstrap

## Tests
```md
npm run test
```
To change/modify the tests, go to any of the "*.test.js" files & change the appropriate information. 

All tests were passed:
![passed tests](./images/Passed%20Tests.png)

## Video
![Gif Example](./images/Team-Profile-Generator.gif)