INSERT INTO department (name) 
VALUES
    ('HR'),
    ('I.T.'),
    ('Sales'),
    ('Service'),
    ('Billing'),
    ('Finance');

INSERT INTO role (title, salary, department_id)
VALUES
    ('Recrutor', 60000, 1),
    ('Sales Representative', 40000, 3),
    ('Service Representative', 50000, 4),
    ('Front line', 45000, 2),
    ('HR Director', 100000, 1),
    ('Billing Administrator', 55000, 5),
    ('Sales Executive', 200000, 3),
    ('Finance Analyst', 100000, 6),
    ('I.T. Manager', 150000, 2);

INSERT INTO
    employee(first_name, last_name, role_id, manager_id)
VALUES
    ("Haley", "Telega", 1, null),
    ("Jordan", "Campbell", 2, null),
    ("Alsion", "Brown", 1, 1),
    ("Holly", "Summers", 2, 1);