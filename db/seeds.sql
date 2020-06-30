-- Specifies the "burgers_db" database for use --
USE burgers_db;


-- INSERT seed values into burgers table
INSERT INTO
    burgers
    (burger_name
    , devoured)
VALUES
    ("Software Engineer", 2),
    ("Accountant", 3),
    ("Legal Team Lead", 4),
    ("Lawyer", 4);