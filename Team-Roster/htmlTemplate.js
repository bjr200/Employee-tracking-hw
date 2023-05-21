const Manager = require('./Manager');
const Engineer = require('./Engineer');
const Intern = require('./Intern');

function generateHTML(employees) {
    const generateManager = (manager) => {
      return `
      <div class="card">
        <div class="card-header">
          <h2>${manager.getName()}</h2>
          <h3>${manager.getRole()}</h3>
        </div>
        <div class="card-body">
          <p>ID: ${manager.getId()}</p>
          <p>Email: <a href="mailto:${manager.getEmail()}">${manager.getEmail()}</a></p>
          <p>Office Number: ${manager.getOfficeNumber()}</p>
        </div>
      </div>`;
    };
  
    const generateEngineer = (engineer) => {
      return `
      <div class="card">
        <div class="card-header">
          <h2>${engineer.getName()}</h2>
          <h3>${engineer.getRole()}</h3>
        </div>
        <div class="card-body">
          <p>ID: ${engineer.getId()}</p>
          <p>Email: <a href="mailto:${engineer.getEmail()}">${engineer.getEmail()}</a></p>
          <p>GitHub: <a href="https://github.com/${engineer.getGithub()}" target="_blank">${engineer.getGithub()}</a></p>
        </div>
      </div>`;
    };
  
    const generateIntern = (intern) => {
      return `
      <div class="card">
        <div class="card-header">
          <h2>${intern.getName()}</h2>
          <h3>${intern.getRole()}</h3>
        </div>
        <div class="card-body">
          <p>ID: ${intern.getId()}</p>
          <p>Email: <a href="mailto:${intern.getEmail()}">${intern.getEmail()}</a></p>
          <p>School: ${intern.getSchool()}</p>
        </div>
      </div>`;
    };
  
    const employeeCards = employees.map((employee) => {
      if (employee instanceof Manager) {
        return generateManager(employee);
      } else if (employee instanceof Engineer) {
        return generateEngineer(employee);
      } else if (employee instanceof Intern) {
        return generateIntern(employee);
      }
    }).join('');
  
    const html = `
    <!DOCTYPE html>
    <html lang="en">
  
    <head>
      <meta charset="UTF-8">
      <meta http-equiv="X-UA-Compatible" content="IE=edge">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Team Roster</title>
    </head>
  
    <body>
      <h1>My Team</h1>
      ${employeeCards}
    </body>
  
    </html>`;
  
    return html;
  }
  
  module.exports = generateHTML;
  