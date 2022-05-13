const inquirer = require('inquirer');
const db = require('./db/connection');

const questions = () => {
    inquirer.prompt([
        {
            type: 'list',
            name: 'allQuestions',
            message: 'What would you like to do?',
            choices: ['View all departments', 'View all roles', 'View all employees', 'Add a department', 'Add a role', 'Add an employee',
        'Update an employee role']
        }
    ])
    .then(function (ans) {
        switch(ans.allQuestions) {
            case 'View all departments':
                getDepartments();
                break;
            case 'View all roles':
                getRoles();
                break;
            case 'View all employees':
                getEmployees();
                break;
            case 'Add a department':
                addDepartment();
                break;
            case 'Add a role':
                addRole();
                break;
            case 'Add an employee':
                addEmployee();
                break;
            case 'Update an employee role':
                updateEmployee();
                break;
        }
    })
};

function getDepartments() {
    const sql = `SELECT * FROM department;`

        db.query(sql, (err, results) => {
            if (err) {
                return err;
        }
        console.table(results)
    });
}

function getRoles() {
    const sql = `SELECT * FROM role;`

        db.query(sql, (err, results) => {
            if (err) {
                return err;
        }
        console.table(results)
    });
}

function getEmployees() {
    const sql = `SELECT * FROM employee;`

        db.query(sql, (err, results) => {
            if (err) {
                return err;
        }
        console.table(results)
    });
}

function addDepartment() {
    inquirer.prompt([
        {
        type: 'input',
        name: 'addDepartment',
        message: 'What is the department name?',
        }
    ])
    .then(function (ans) {
        const sql = `INSERT INTO department(name) VALUES (?);`;
        db.query(sql, ans.addDepartment, (err, res) => {
            if (err) {
                return err;
        } else {
            getDepartments();
        }
        });
    });
}

function addRole() {
    inquirer.prompt([
        {
            type: 'input',
            name: 'addTitle',
            message: 'What is the users job title?',
        },
        {
            type: 'input',
            name: 'addSalary',
            message: 'What is the users salary?',
        },
        {
            type: 'input',
            name: 'addDepartmentId',
            message: 'What is the department id?'
        }
    ])
    .then(function (ans) {
        const sql = `INSERT INTO role (title, salary, department_id) VALUES (?,?,?);`;
        db.query(sql, [ans.addTitle, ans.addSalary, ans.addDepartmentId], (err, res) => {
            if (err) {
                return err;
        } else {
            getRoles();
        }
        });
    });
}

function addEmployee() {
    inquirer.prompt([
        {
            type: 'input',
            name: 'addFirstName',
            message: 'What is the users first name?',
        },
        {
            type: 'input',
            name: 'addLastName',
            message: 'What is the users last name?',
        },
        {
            type: 'input',
            name: 'addUsersRole',
            message: 'What is the users role id?'
        },
        {
            type: 'input',
            name: 'addUsersManager',
            message: 'What is the users manager?'
        }
    ])
    .then(function (ans) {
        const sql = `INSERT INTO employee (first_name, last_name, role_id, manager_id)
        VALUES (?,?,?,?)`;
        db.query(sql, [ans.addFirstName, ans.addLastName, ans.addUsersRole, ans.addUsersManager], (err, res) => {
            if (err) {
                return err;
        } else {
            getEmployees();
        }
        });
    });
}   

function updateEmployee() {
    db.query(`SELECT * FROM employee`, (err, res) => {
        if (err) 
        {console.log("An error occurred")};
        
        const pickEmployee = res.map((employee) => ({name: employee.first_name + " " + employee.last_name, value: employee.id}))

    // db.query(`SELECT * FROM role`, (err,res) =>{
    //     if (err) 
    //     {console.log("An error occurred")};

    // const pickRole = res.map((roles) => ({name: roles.title, value: roles.id}))

    inquirer.prompt([
        {
            type: 'list', 
            name: 'updateEmployee',
            message: 'What employee would you like to update?',
            choices: pickEmployee
        },
        { 
            type: 'input',
            name: 'updateRole',
            message: 'What role would you like to update?'
        },
        { 
            type: 'input',
            name: 'updateOldRole',
            message: 'What was the old role?'
        }

    ])
    .then(function (ans) {
        const sql = `UPDATE employee SET role_id = ? WHERE id = ?;`;
        db.query(sql, [ans.updateRole, ans.updateOldRole], (err, res) => {
            if (err) {
                return err;
        } else {
            getEmployees();
        }
        });
    });
    });
}

questions();