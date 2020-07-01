-- Create the burgers_db.
-- Switch to or use the burgers_db.
-- Create a burgers table with these fields:


-- id: an auto incrementing int that serves as the primary key.
-- burger_name: a string.
-- devoured: a boolean.


-- Drops the burgers db if it exists currently --
DROP DATABASE IF EXISTS burgers_db;

-- Creates the "burgers_db" database --
CREATE DATABASE burgers_db;

-- Specifies the "burgers_db" database for use --
USE burgers_db;


-- Create the table burgers.
CREATE TABLE burgers(
    id INT AUTO_INCREMENT PRIMARY KEY,
    burger_name VARCHAR(255) UNIQUE NOT NULL,
    devoured BOOLEAN DEFAULT FALSE
);
