use personnel_db;
/* departments */
INSERT INTO department (dep_name)
VALUES ("Engineering"),
       ("Finance"),
       ("Legal"),
       ("Sales");

       /* role */
INSERT INTO role (dep_id, title, salary)
VALUES (4, "sales", 100000),
(1, "Finance", 120000),
(3, "Engineering", 135000);

       /* Employee */
INSERT INTO employee (first_name, last_name, role_id)
VALUES ("Nick", "Tozzi", 1),
       ("Rick", "Tozzi", 2),
       ("Bill", "Tozzi", 3),
       ("John", "Tozzi", 2),
       ("Bob", "Tozzi", 1),
       ("Joe", "Tozzi", 3);

UPDATE employee SET manager_id = 2 
where id = 1 or id =4 or id =3 or id =6;

