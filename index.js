const inquirer = require('inquirer')
const fs = require('fs')

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
    .then((answers) => {
        console.log('User input:', answers);
        const logo = 'logo';
        const filename = `${logo}.svg`;
        const width = 300;
        const height = 200;
        const text = answers.threechar;
        const textcolor = answers.textcolor;
        const shape = answers.shape;
        const shapecolor = answers.shapecolor

        const svgMarkup = `<svg width="${width}" height="${height}"></svg>`;how 

        fs.writeFile(filename, svgMarkup, (err) => {
            err ? console.log(err) : console.log('SVG fiel created sucessfully!')

        })
    })

    // Error catch
    .catch((error) => {
        console.error('Error occurred:', error);
    });