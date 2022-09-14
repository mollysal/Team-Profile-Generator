const Employee = require('../lib/Employee');
//setting up example employee info
const employee = new Employee('Josh', '123456', 'josh@gmail.com');

test('Check if we can get constructor input for the employee object', () => {
    expect(employee.name).toBe('Josh');
    expect(employee.id).toBe('123456');
    expect(employee.email).toBe('josh@gmail.com');
});

//Running Test for each method from the Employee Class Constructor
test('Check to see if we can retrieve the name from getName Method', () => {
    expect(employee.getName()).toBe('Josh');
})
test('Check to see if we can retrieve the ID from getId Method', () => {
    expect(employee.getID()).toBe('123456');
})
test('Check to see if we can retrieve the email from getEmail Method', () => {
    expect(employee.getEmail()).toBe('josh@gmail.com');
})
test('Check to see if we can retrieve the role from getRole Method', () => {
    expect(employee.getRole()).toBe('Employee');
})