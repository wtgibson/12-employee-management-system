// Node dependencies
const inquirer = require("inquirer");
const mysql = require("mysql");
const consoleTable = require("console.table");

// Database and connection (enter personal password)
var connection = mysql.createConnection({
  host: "localhost",
  port: 3306,
  user: "root",
  password: "password",
  database: "employee_db",
});

connection.connect(function (err) {
  if (err) {
    console.error("error connecting: " + err.stack);
    return;
  }
  console.log("connected as id " + connection.threadId + "\n");
  userPrompt();
});

// Prompt user for what action they would like to take
function userPrompt() {
  return inquirer
    .prompt({
      type: "list",
      message: "What would you like to do?",
      name: "action",
      choices: [
        "View Roles",
        "View Employees",
        "View Departments",
        "Add Roles",
        "Add Employees",
        "Add Departments",
        "Update Employee Role",
      ],
    })
    .then(function (res) {
      switch (res.action) {
        case "View Roles":
          viewRoles();
          break;
        case "View Employees":
          viewEmployees();
          break;
        default:
          console.log("Something went wrong! Please try again");
          userPrompt();
      }
    });
}

function viewRoles() {
  connection.query(
    `SELECT roles.id as role_id, title, salary, department_id, departments.name as department
     FROM roles 
     LEFT JOIN departments on roles.department_id = departments.id`,
    function (err, res) {
      if (err) throw err;
      var rolesTable = consoleTable.getTable(res);
      console.log(rolesTable);
    }
  );
}

function viewEmployees() {
  connection.query(
    `SELECT employees.id as employee_id, first_name, last_name, roles.salary, departments.name as department, manager_id
     FROM employees
     LEFT JOIN roles on employees.role_id = roles.id
     LEFT JOIN departments on roles.department_id = departments.id`,
    function (err, res) {
      if (err) throw err;
      var employeesTable = consoleTable.getTable(res);
      console.log(employeesTable);
    }
  );
}
