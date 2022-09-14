//Need to bring in Engineer class
const Engineer = require('../lib/engineer');
//setting up example engineer info
const engineer = new Engineer('Josh', '123456', 'josh@gmail.com', 'josh123');

test('Check if we can get constructor input for the engineer object', () => {
    expect(engineer.name).toBe('Josh');
    expect(engineer.id).toBe('123456');
    expect(engineer.email).toBe('josh@gmail.com');
    expect(engineer.github).toBe('josh123');
});

//Running Test for each method from the engineer Class Constructor
test('Check to see if we can retrieve the name from getName Method', () => {
    expect(engineer.getName()).toBe('Josh');
})
test('Check to see if we can retrieve the ID from getId Method', () => {
    expect(engineer.getID()).toBe('123456');
})
test('Check to see if we can retrieve the email from getEmail Method', () => {
    expect(engineer.getEmail()).toBe('josh@gmail.com');
})
test('Check to see if we can retrieve the github Username from getGitHub Method', () => {
    expect(engineer.getGithub()).toBe('josh123');
})
test('Check to see if we can retrieve the role from getRole Method', () => {
    expect(engineer.getRole()).toBe('Engineer');
})