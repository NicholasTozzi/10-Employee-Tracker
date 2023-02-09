//packages
const inquirer = require("inquirer");
const mysql = require("mysql2");
const { printTable } = require("console-table-printer");
const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "password",
  database: "personnel_db",
});
db.connect(() => {
  homeMenu();
});

//inquirer prompt
function homeMenu() {
  //TODO: render database on home screen
  inquirer
    .prompt([
      {
        type: "list",
        name: "home",
        message: "What would you like to do?",
        choices: [
          "view all departments",
          "view all roles",
          "view all employees",
          "add a department",
          "add a role",
          "add an employee",
          "update an employee role", // how to write function in seed file
        ],
      },
    ])
    .then(({ home }) => {
      console.log(home);
      //TODO create switch case, that matches choices with the functions below
      switch (home) {
        case "view all departments":
          viewDept();
          return;

        case "view all roles":
          viewRole();
          return;

        case "view all employees":
          viewEmployee();
          return;

        case "add a department":
          addDept();
          return;

        case "add an employees":
          addEmployee();
          return;

        case "add a role":
          addRole();
          return;

        case "update an employee role":
          updateRole();
          return;
      }
    });
}

function viewDept() {
  //TODO query response
  db.query("select * from department", function (err, res) {
    if (err) throw err;
    printTable(res);
    homeMenu();
  });
}

function viewRole() {
  db.query("select * from role", function (err, res) {
    if (err) throw err;
    printTable(res);
    homeMenu();
  });
}

function viewEmployee() {
  db.query("select * from employee", function (err, res) {
    if (err) throw err;
    printTable(res);
    homeMenu();
  });
}

function addEmployee() {
  inquirer
    .prompt([
      {
        type: "input",
        message: "add a first name",
        name: "first_name",
      },
      {
        type: "input",
        message: "add a last name",
        name: "last_name",
      },
      {
        type: "input",
        message: "add a role",
        name: "role",
      },
      {
        type: "input",
        message: "add a manager",
        name: "manager",
      },
    ])
    .then((answers) => {
      db.query(
        "INSERT INTO per personnel_db (first_name, last_name, role, manager)",
        function (err, res) {
          if (err) throw err;
          printTable(res);
          homeMenu();
        }
      );
    });
}

function addRole() {
  db.query("select * from employee", function (err, res) {
    if (err) throw err;
    printTable(res);
    homeMenu();
  });
}

function addDept() {
  db.query("select * from employee", function (err, res) {
    if (err) throw err;
    printTable(res);
    homeMenu();
  });
}

function updateRole() {
  db.query(
    `UPDATE employee SET role = 2 where id = 1 and ;`,
    function (err, res) {
      if (err) throw err;
      printTable(res);
      homeMenu();
    }
  );
}

// WHEN I start the application
// THEN I am presented with the following options: view all departments, view all roles, view all employees, add a department, add a role, add an employee, and update an employee role
// WHEN I choose to view all departments

// THEN I am presented with a formatted table showing department names and department ids
// WHEN I choose to view all roles

// THEN I am presented with the job title, role id, the department that role belongs to, and the salary for that role
// WHEN I choose to view all employees

// THEN I am presented with a formatted table showing employee data, including employee ids, first names, last names, job titles, departments, salaries, and managers that the employees report to
// WHEN I choose to add a department

// THEN I am prompted to enter the name of the department and that department is added to the database
// WHEN I choose to add a role

// THEN I am prompted to enter the name, salary, and department for the role and that role is added to the database
// WHEN I choose to add an employee

// THEN I am prompted to enter the employee’s first name, last name, role, and manager, and that employee is added to the database
// WHEN I choose to update an employee role

// THEN I am prompted to select an employee to update and their new role and this information is updated in the database
