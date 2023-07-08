const db = require("./connection");

class DB {
  constructor(db) {
    this.db = db;
  }

  viewAllEmployees() {
    return this.db.promise().query("SELECT * FROM employee");
  }

  viewAllRoles() {
    return this.db.promise().query("SELECT * FROM role");
  }

  viewAllDepartments() {
    return this.db.promise().query("SELECT * FROM department");
  }

  addNewEmployee(res) {
    return this.db.promise().query("INSERT INTO employee SET ?", res);
  }

  addNewRole(res) {
    return this.db.promise().query("INSERT INTO role SET ?", res);
  }

  addNewDepartment(res) {
    return this.db.promise().query("INSERT INTO department SET ?", res);
  }
}

module.exports = new DB(db);
