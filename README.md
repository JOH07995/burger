# burger

A [Burger Logger](https://burgersbytom.herokuapp.com/) application that allows a user to: 

* Add Burgers

* Devour Burgers (Move from Menu to Devoured)

* Remake a Burger (Move from Devoured to Menu)

* Trash a Burger (Remove a Burger entirely)

This application is a demonstration of the MVC or Model-View-Controller design pattern in addition to ORM or Object-Relational-Mapping that improves readability of the code.

Design cues were taken from the Television show Bob's Burgers!


## Installation

To install and use locally, 
1. ```git clone``` this repository to a local directory
2. Run the ```schema.sql``` (found in db folder) script in MySQL Workbench
3. Optionally, run the ```seed.sql``` (found in db folder) script to populate the database with data
4. Install the dependencies via the terminal by running:
```bash
npm i
```
5. Then run the application with:

```bash
node server.js
```
6. Open the browser and visit [http://localhost:3000/](http://localhost:3000/)

## Usage 

You can use the program on Heroku [here](https://burgersbytom.herokuapp.com/).

# Screenshot
![App Screenshot](.update.)

## Technologies

This application was built with:

* CSS
* [Bootstrap](https://getbootstrap.com/docs/4.4/getting*started/introduction/)
* JavaScript
* [jQuery](https://api.jquery.com/)
* [Express](https://expressjs.com/)
* [Handlebars](https://handlebarsjs.com/guide/)
* [MySQL](https://dev.mysql.com/doc/)
* [Node](https://nodejs.org/en/)

The dependencies required:

```
  "dependencies": {
    "express": "^4.17.1",
    "express-handlebars": "^4.0.4",
    "mysql": "^2.18.1"
  }
  ```

Documentation on dependencies:

- [express-handlebars](https://www.npmjs.com/package/express-handlebars)
- [mysql](https://www.npmjs.com/package/mysql)
