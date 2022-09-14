const Intern = require('../lib/intern');
//setting up example intern info
const intern = new Intern('Josh', '123456', 'josh@gmail.com', 'PSU');

test('Check if we can get constructor input for the intern object', () => {
    expect(intern.name).toBe('Josh');
    expect(intern.id).toBe('123456');
    expect(intern.email).toBe('josh@gmail.com');
    expect(intern.github).toBe('PSU');
});

//Running Test for each method from the intern Class Constructor
test('Check to see if we can retrieve the name from getName Method', () => {
    expect(intern.getName()).toBe('Josh');
})
test('Check to see if we can retrieve the ID from getId Method', () => {
    expect(intern.getID()).toBe('123456');
})
test('Check to see if we can retrieve the email from getEmail Method', () => {
    expect(intern.getEmail()).toBe('josh@gamil.com');
})
test('Check to see if we can retrieve the github Username from getGitHub Method', () => {
    expect(intern.getSchool()).toBe('PSU');
})
test('Check to see if we can retrieve the role from getRole Method', () => {
    expect(intern.getRole()).toBe('Intern');
})