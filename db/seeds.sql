-- Specifies the "burgers_db" database for use --
USE burgers_db;


-- INSERT seed values into burgers table
INSERT INTO
    burgers
    (burger_name
    , devoured)
VALUES
    ("Good Burger", FALSE),
    ("Krusty Burger", FALSE),
    ("Krabby Patty", FALSE),
    ("Hamburger", TRUE);