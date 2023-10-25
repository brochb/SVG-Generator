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
            message: 'Would you like a circle, triangle(polygon), or square?',
            name: 'shape',
            choices: ['circle', 'polygon', 'square']
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
        const threechar = answers.threechar;
        const upperThreechar = threechar.toUpperCase();
        const textcolor = answers.textcolor;
        const shape = answers.shape;
        const shapecolor = answers.shapecolor;

        let svgMarkup = `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">
  <rect width="100%" height="100%" fill="white" />`;

        if (shape === 'circle') {
            svgMarkup += `<circle cx="150" cy="100" r="80" fill="${shapecolor}" />`;
        } else if (shape === 'polygon') {
            svgMarkup += `<polygon points="150,20 260,180 50,180" fill="${shapecolor}" />`;
        } else if (shape === 'square') {
            svgMarkup += `<rect x="60" y="60" width="180" height="180" fill="${shapecolor}" />`;
        }

        svgMarkup += `<text x="150" y="125" font-size="60" text-anchor="middle" fill="${textcolor}">${upperThreechar}</text>
</svg>`;

        fs.writeFile(filename, svgMarkup, (err) => {
            if (err) {
                console.error(err);
            } else {
                console.log('SVG file created successfully!');
            }
        })
    })

    // Error catch
    .catch((error) => {
        console.error('Error occurred:', error);
    });

    // module.exports = //function name