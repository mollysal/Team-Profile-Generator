const Manager = require('../lib/manager');
//setting up example manager info
const manager = new Manager('Josh', '123456', 'josh@gmail.com', '678');

test('Check if we can get constructor input for the manager object', () => {
    expect(manager.name).toBe('Josh');
    expect(manager.id).toBe('123456');
    expect(manager.email).toBe('josh@gmail.com');
    expect(manager.github).toBe('678');
});

//Running Test for each method from the manager Class Constructor
test('Check to see if we can retrieve the name from getName Method', () => {
    expect(manager.getName()).toBe('Josh');
})
test('Check to see if we can retrieve the ID from getId Method', () => {
    expect(manager.getID()).toBe('123456');
})
test('Check to see if we can retrieve the email from getEmail Method', () => {
    expect(manager.getEmail()).toBe('josh@gamil.com');
})
test('Check to see if we can retrieve the github Username from getGitHub Method', () => {
    expect(manager.getOfficeNumber()).toBe('678');
})
test('Check to see if we can retrieve the role from getRole Method', () => {
    expect(manager.getRole()).toBe('Manager');
})