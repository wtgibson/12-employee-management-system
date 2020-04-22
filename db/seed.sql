USE employee_db;

INSERT INTO departments 
    (name)
VALUES 
    ("Sales"),
    ("Finance"),
    ("Engineering");

INSERT INTO roles 
    (title, salary, department_id)
VALUES 
    ("Sales Lead", 80000, 1),
    ("Sales Representative", 60000, 1),
    ("Finance Controller", 90000, 2),
    ("Financial Analyst", 70000, 2),
    ("Engineer", 100000, 3),
    ("Junior Engineer", 80000, 3);

INSERT INTO employees 
    (first_name, last_name, role_id, manager_id)
VALUES 
    ("Jacob","Williams", 1, NULL),
    ("Tom","Jones", 2, 1),
    ("Michael","Carlson", 3, NULL),
    ("Kylie","Molnar", 4, 3),
    ("Sarah","Jenkins", 5, NULL),
    ("Charlotte","Johnson", 6, 5);
