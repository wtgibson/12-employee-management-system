# 12 MySQL: Employee Management System

## Summary 

The purpose of the assignment was to create a command line application that can be used to as a solution for managing a company's employees using node, inquirer, and MySQL.


```
User Story

As a business owner
I want to be able to view and manage the departments, roles, and employees in my company
So that I can organize and plan my business

Acceptance Criteria

- Functional application

- GitHub repository with a unique name and a README describing the project

- The command-line application should allow users to:

    * Add departments, roles, employees

    * View departments, roles, employees

    * Update employee roles
```

## Application Demo

![Site](images/employee-tracker.gif)

## Technologies Used

- JavaScript - provides dynamic interactivity on HTML documents
- jQuery - easy to use API library simplifying Javascript actions
- Node.js - asynchronous event-driven JavaScript runtime
- MySQL - open-source relational database management system
- Git - version control system to track changes to source code
- GitHub - hosts repository that can be deployed to GitHub Pages

## Installation & Use

To install the necessary node modules and run the application enter the following code in the terminal command line:

```
1. npm install mysql inquirer console.table
```
```
2. node index.js
```

## Code Snippet

Below is a block of code in the JS file that enables the user to add an employee to the connected MySQL database and see the updated results. 

```js
function addEmployees() {
    inquirer.prompt([{
        type:"input",
        name: "first",
        message: "Employee First Name:"
    }, {
        type:"input",
        name: "last",
        message: "Employee Last Name:"
    }, {
        type:"input",
        name: "role_id",
        message: "Employee Role ID:"
    }, {
        type:"input",
        name: "manager_id",
        message: "Employee Manager ID:"
    }]).then(function (data) {
        connection.query(
            `INSERT INTO employees (first_name, last_name, role_id, manager_id)
             VALUES ("${data.first}", "${data.last}", "${data.role_id}", "${data.manager_id}")`,
            function (err) {
              if (err) throw err;
              console.log("New employee added successfully")
              viewEmployees(); 
        });
    });
};
```

[GitHub Project Repo](https://github.com/wtgibson/12-employee-management-system)

## Author Links

![Site](images/william-gibson-jr-photo.jpg)

Will Gibson

[LinkedIn](https://www.linkedin.com/in/wtgibson/)

[GitHub](https://github.com/wtgibson)