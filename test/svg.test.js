const { validateInput } = require('../index');

// Test to check if user input is valid and will work with the program before continuing.
test('Valid input with three characters', () => {
    const input = 'abc';
    expect(validateInput(input)).toBe(true);
});

test('Invalid input with more than three characters', () => {
    const input = 'abcdef';
    expect(validateInput(input)).toBe(false);
});