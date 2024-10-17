// TODO: Include packages needed for this application
import fs from 'fs';
import inquirer from "inquirer";
import path from "path";
import generateMarkdown from "./generateMarkdown.js";
//  import { writeFile } from "fs";
// import { type } from "os";
//  import path from "path";

// TODO: Create an array of questions for user input
const questions = [
    {
        type: "input",
        name: "title",
        message: "Please Name Your project",
    },

    {
        type: 'input',
        name: 'description',
        message: "please describe what your app does in this project",
    },

    {
        type: "checkbox",
        name: "license",
        message: "please select a licence applicable to this",
        choices: ["MIT", " Apaache2.0", "Boost1.0", "Mpl2.0", "none"]
    },

    {
        type: "input",
        name: "require",
        message: "list any project dependecies here",
    },
    {
        type: "input",
        name: "usage",
        message:
            "state the language or technologies assocciated with this project",
    },

    {
        type: "input",
        name: " creator",
        message: "write your github name",
    },

    {
        type: "input",
        name: "name",
        message: "whats your full name"
    },
    {
        type: "input",
        name: "email",
        message: "provide a valid email address",

    },
    {
        type: "input",
        name: "contact",
        message: "whats your phone number",
    }]


// TODO: Create a function to write README file

function writeReadme(filename, data) {
    return fs.writeFileSync(path.join(process.cwd(),filename), data);
}


// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions).then((responses) => {
        console.log("creating professional README.md file...");
        writeReadme('output.md', generateMarkdown({ ...responses }));

    });
}

init();
