const inquirer = require('inquirer');
const Manager = require('./Manager');
const Engineer = require('./Engineer');
const Intern = require('./Intern');
const generateHTML = require('./htmlTemplate');

const employees = [];

function promptManager() {
  console.log('Please enter the team manager\'s information:');
  inquirer.prompt([
    {
      type: 'input',
      name: 'name',
      message: 'Name:',
    },
    {
      type: 'input',
      name: 'id',
      message: 'Employee ID:',
    },
    {
      type: 'input',
      name: 'email',
      message: 'Email address:',
    },
    {
      type: 'input',
      name: 'officeNumber',
      message: 'Office number:',
    },
  ]).then((answers) => {
    const manager = new Manager(answers.name, answers.id, answers.email, answers.officeNumber);
    employees.push(manager);
    promptEmployee();
  });
}

function promptEmployee() {
  console.log('\nPlease choose the next employee\'s role:');
  inquirer.prompt({
    type: 'list',
    name: 'role',
    message: 'Select employee role:',
    choices: ['Engineer', 'Intern', 'Finish building my team'],
  }).then((answer) => {
    if (answer.role === 'Engineer') {
      promptEngineer();
    } else if (answer.role === 'Intern') {
      promptIntern();
    } else {
      finishBuildingTeam();
    }
  });
}

function promptEngineer() {
  console.log('\nPlease enter the engineer\'s information:');
  inquirer.prompt([
    {
      type: 'input',
      name: 'name',
      message: 'Name:',
    },
    {
      type: 'input',
      name: 'id',
      message: 'Employee ID:',
    },
    {
      type: 'input',
      name: 'email',
      message: 'Email address:',
    },
    {
      type: 'input',
      name: 'github',
      message: 'GitHub username:',
    },
  ]).then((answers) => {
    const engineer = new Engineer(answers.name, answers.id, answers.email, answers.github);
    employees.push(engineer);
    promptEmployee();
  });
}

function promptIntern() {
  console.log('\nPlease enter the intern\'s information:');
  inquirer.prompt([
    {
      type: 'input',
      name: 'name',
      message: 'Name:',
    },
    {
      type: 'input',
      name: 'id',
      message: 'Employee ID:',
    },
    {
      type: 'input',
      name: 'email',
      message: 'Email address:',
    },
    {
      type: 'input',
      name: 'school',
      message: 'School:',
    },
  ]).then((answers) => {
    const intern = new Intern(answers.name, answers.id, answers.email, answers.school);
    employees.push(intern);
    promptEmployee();
  });
}

const fs = require('fs');

function finishBuildingTeam() {
  const html = generateHTML(employees);
  console.log('\nTeam roster successfully generated!');
  console.log('Please check the team.html file for the result.');

  fs.writeFile('team.html', html, (err) => {
    if (err) {
      console.error('Error saving team.html:', err);
    } else {
      console.log('team.html file saved successfully!');
    }
  });
}

promptManager();
