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
          "update an employee role",
        ],
      },
    ])
    .then(({ home }) => {
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
  //TODO create an inquirer prompt to take in params first/last name roleID and managerID
  //TODO create a promise that takes these answers and stores it in our db
  inquirer
    .prompt([
      {
        type: "input",
        message: "add a first name: ",
        name: "first_name",
      },
      {
        type: "input",
        message: "add a last name: ",
        name: "last_name",
      },
      {
        type: "input",
        message: "add a role: ",
        name: "role_id",
      },
      {
        type: "input",
        message: "add a manager: ",
        name: "manager_id",
      },
    ])
    .then((answers) => {
      db.query(
        "INSERT INTO employee SET ? (first_name, last_name, role_id, manager_id)",
        {
          first_name: answers.first_name,
          last_name: answers.last_name,
          //TODO add the data for db here as second param to db.query
        },
        function (err, res) {
          if (err) throw err;
          printTable(res);
          homeMenu();
        }
      );
    });
}

function addRole() {
  //TODO create an inquirer prompt to take in params first/last name roleID and managerID
  //TODO create a promise that takes these answers and stores it in our db
  db.query("select * from employee", function (err, res) {
    if (err) throw err;
    printTable(res);
    homeMenu();
  });
}

function addDept() {
  //TODO create an inquirer prompt to take in params first/last name roleID and managerID
  //TODO create a promise that takes these answers and stores it in our db
  db.query("select * from employee", function (err, res) {
    if (err) throw err;
    printTable(res);
    homeMenu();
  });
}

function updateRole() {
  //TODO create an prompt to select employee from DB
  //TODO create a promise that takes these answers updates employee
  db.query(
    `UPDATE employee SET role = 2 where id = 1 and ;`,
    function (err, res) {
      if (err) throw err;
      printTable(res);
      homeMenu();
    }
  );
}
