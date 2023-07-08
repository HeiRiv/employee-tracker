USE company_db;

INSERT INTO department
    (name)
VALUES
    ('Marketing'),
    ('Sales'),
    ('Customer service'),
    ('Production'),
    ('Management');

INSERT INTO role   
    (title, salary, department_id)
VALUES
    ('Salesperson', 70000, 2),
    ('Salesperson', 7000, 2),
    ('Data Entry Specialist', 15000, 3),
    ('Data Entry Specialist', 15000, 3),
    ('Marketer', 20000, 1),
    ('Marketer', 20000, 1),
    ('Production worker',5000, 4),
    ('Production worker',5000, 4),
    ('Manager', 40000, 5),
    ('Manager', 40000, 5);



INSERT INTO employee 
    (first_name, last_name, role_id)

VALUES
    ('Camila','Gomez', 1),
    ('James','Smith',2),
    ('Alejandro','Cubillos',3),
    ('Jorge','Perdigon',4),
    ('Laura','Vasquez',5),
    ('Dora','Rodriguez',6),
    ('Alain','Lopez',7),
    ('Camilo','Suarez',8),
    ('Nelson','Salcedo',9),
    ('Kevin','Beltran',10);
    