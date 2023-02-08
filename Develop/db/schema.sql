DROP DATABASE IF EXISTS personnel_db;
create DATABASE personnel_db;
use personnel_db;
CREATE TABLE department(
id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
dep_name VARCHAR(30) NOT NULL
);

CREATE TABLE role(
id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
dep_id INT,
title VARCHAR(30),
salary DECIMAL, 
Foreign Key (dep_id) REFERENCES department(id)
ON DELETE SET NULL
);

CREATE TABLE employee(
id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
first_name VARCHAR(30),
last_name VARCHAR(30),
role_id INT,
manager_id INT, 
Foreign Key (role_id) REFERENCES role(id)
);