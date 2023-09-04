const inquirer = require('inquirer')

// Initialize program with prompts when user runs CLI.
// Takes user prompts, and creates answers from which the SVG file will be created. (promise)
inquirer
    .prompt([
        {
            type: 'input',
            name: 'threechar',
            message: 'Please enter up to 3 unix characters.',
            validate: function (input) {
                return (input && input.length <= 3) ? true : 'Please enter up to three characters.';
            }
        },
        {
            type: 'input',
            message: 'What color would you like for the text\'s color?',
            name: 'textcolor',
            validate: function (input) {
                return input && input.trim() !== '' ? true : 'Please enter a valid color.';
            }
        },
        {
            type: 'list',
            message: 'What shape would you like to border the text?',
            name: 'shape',
            choices: ['circle', 'triangle', 'square']
        },
        {
            type: 'input',
            message: 'What color would you like the shape that borders the text to be?',
            name: 'shapecolor',
            validate: function (input) {
                return input && input.trim() !== '' ? true : 'Please enter a valid color.';
            }
        }
    ])
// Takes the answers, console logs them to confirm accuracy for the user, and creates an SVG file using the answers.

// Error catch
    .catch((error) => {
        console.error('Error occurred:', error);
    });