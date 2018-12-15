DROP DATABASE IF EXISTS security_database;
CREATE DATABASE security_database;

USE security_database;
CREATE TABLE users
(
  username VARCHAR(50) NOT NULL,
  passwd VARCHAR(50) NOT NULL,
  role ENUM('user','admin')
);

INSERT INTO users VALUES("testuser", "test", "user");
INSERT INTO users VALUES("testadmin", "test", "admin");