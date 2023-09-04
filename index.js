const inquirer = require('inquirer')

//initialize program with prompts when user runs CLI
inquirer
    .prompt([
        {
            type: 'input',
            name: 'threechar',
            message: 'Please enter up to 3 unix characters.',
            validate: function (input) {
                return input.length <= 3 ? true : 'Please enter up to three characters.';
            }
        },
        {
            type: 'input',
            message: 'What color would you like for the text\'s color?',
            name: 'textcolor',
            validate: function (input) {
                return input.trim() !== '' ? true : 'Please enter a valid color.';
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
                return input.trim() !== '' ? true : 'Please enter a valid color.';
            }
        }
    ])
    .then((answers) => {
        console.log('User input:', answers);
        const filename = `${data.name.toLowerCase().split(' ').join('')}.json`;

        fs.writeFile(filename, JSON.stringify(data, null, '/t'), (err) =>
            err ? console.log(err) : console.log('Success!')
            )
    })
    .catch((error) => {
        console.error('Error occurred:', error);
    });