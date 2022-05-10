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
    .then(function () {
        const sql = `INSERT INTO department(name) VALUES (?)`;
        db.query(sql, (err, results) => {
            if (err) {
                return err;
        }
        console.table(results)
        });
    });
}

questions();