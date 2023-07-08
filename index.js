const inquirer = require("inquirer");
const db = require("./db");

function presentQuestions() {
  inquirer
    .prompt([
      {
        type: "list",
        name: "option",
        message: "What would you like to do?",
        choices: [
          {
            name: "View All Employees",
            value: "view_all_employees",
          },
          {
            name: "View All Roles",
            value: "view_all_roles",
          },
          {
            name: "View All Departments",
            value: "view_all_departments",
          },
          {
            name: "Add New Employee",
            value: "add_new_employee",
          },
          {
            name: "Add New Role",
            value: "add_new_role",
          },
          {
            name: "Add New Department",
            value: "add_new_department",
          },
        ],
      },
    ])
    .then((res) => {
      switch (res.option) {
        case "view_all_employees":
          viewAllEmployees();
          break;
        case "view_all_roles":
          viewAllRoles();
          break;
        case "view_all_departments":
          viewAllDepartments();
          break;
        case "add_new_employee":
          addNewEmployee();
          break;
        case "add_new_role":
          addNewRole();
          break;
        case "add_new_department":
          addNewDepartment();
          break;
      }
    });
}
presentQuestions();

function viewAllEmployees() {
  db.viewAllEmployees()
    .then(([table]) => {
      let employees = table;
      console.table(employees);
    })
    .then(() => presentQuestions());
}

function viewAllRoles() {
  db.viewAllRoles()
    .then(([table]) => {
      console.table(table);
    })
    .then(() => presentQuestions());
}

function viewAllDepartments() {
  db.viewAllDepartments()
    .then(([table]) => {
      console.table(table);
    })
    .then(() => presentQuestions());
}

function addNewEmployee() {
  inquirer
    .prompt([
      {
        name: "first_name",
        message: "What is his/her first name?",
      },
      {
        name: "last_name",
        message: "What is his/her last name?",
      },
      {
        name: "department_id",
        message: "What is his/her department?",
      },
      {
        name: "role_id",
        message: "What is his/her role?",
      },
    ])
    .then((res) => {
      console.log(res);
      db.addNewEmployee(res)
        .then(() => {
          console.table("User was added");
        })
        .then(() => presentQuestions());
    });
}

function addNewRole() {
  inquirer
    .prompt([
      {
        name: "title",
        message: "What is the title?",
      },
      {
        name: "salary",
        message: "What is the salary?",
      },
      {
        type: "list", //How can I add the list of depts here?
        name: "department_id",
        message: "In which department would you like to add this role?",
        // choices:
      },
    ])
    .then((res) => {
      console.log(res);
      db.addNewRole(res)
        .then(() => {
          console.table("Role was added");
        })
        .then(() => presentQuestions());
    });
}

function addNewDepartment() {
  inquirer
    .prompt([
      {
        name: "name",
        message: "What will be the name of the new Department?",
      },
    ])
    .then((res) => {
      console.log(res);
      db.addNewDepartment(res)
        .then(() => {
          console.table("New department was added");
        })
        .then(() => presentQuestions());
    });
}
