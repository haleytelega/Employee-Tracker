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

INSERT INTO employee (first_name, last_name, role_id)
VALUES
    ('Willow', 'Guerra', 1),
    ('Eliana', 'Montgomery', 2),
    ('London', 'Vazquez', 3),
    ('Sterling', 'Hayden', 4),
    ('Finley', 'Norton', 5),
    ('Julius', 'Woods', 6),
    ('Katherine', 'Pearce', 7),
    ('Alison', 'Mooney', 8),
    ('Carter', 'Brown', 9),
    ('Melanie', 'Clarke', 10);

