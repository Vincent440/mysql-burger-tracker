# MySQL Burger Tracker

[mysql-burger-tracker](https://mysql-burger-tracker.herokuapp.com/) -  _*View the deployed application here*_


A very simple burger logging application. 


A user can: 
* View all burgers previously created upon viewing the page
* Create a new burger that will be available to be eaten
* Select an available burger to `"Eat"`
   * Doing so marks the burger as eaten and removes any buttons from the UI. 

---

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development.
See deployment for notes on how to deploy the project on a live system.

### Prerequisites
This project requires:
* **REQUIREMENTS** 
* A command-line interface and knowlege of basic commands.
* [Node.js](https://nodejs.org/en/download/) - `Node.js` 12.x.x - to execute JavaScript outside of the browser in a server environment.
* [NPM](https://www.npmjs.com/) - `NPM` - __comes installed with `Node.js`__ - installing/updating the required dependencies
* [MySQL](https://dev.mysql.com/downloads/mysql/) - `MySQL` 8.x.x - Database for persistant data storage.
* [MySQL workbench](https://www.mysql.com/products/workbench/) OR [MySQL Shell](https://dev.mysql.com/downloads/shell/) 
    * OR Any other suitable method to execute the SQL schema and seeds to create the SQL Database and populate it with example seed data.
* [git](https://git-scm.com/) - `git`- version control system for cloning project repository locally

Check to make sure you have the required applications installed.
```
mysql --version
```
Displays the version of MySQL installed. *8.0.15 - Used for development*

```
node --version
```
Displays the version of Node.js installed. *12.14.1 - Used for development*
```
npm --version
```
Displays the version of NPM installed __Bundled with Node.js__

```
git --version
```
Displays the version of git installed. 



### Installing

A step by step series of examples that tell you how to get a development env running

First clone or download the repository locally onto your computer:

```bash
git clone https://github.com/Vincent440/mysql-burger-tracker.git
```

Then once the files are cloned/downloaded onto your computer:
* Be sure to change into the correct directory

```bash
cd ./mysql-burger-tracker
```

Install the required NPM packages
```bash
npm install
```

Create a `.env` file. This will store your local environment variables for running the application locally, preventing them to be pushed up to Github.
```bash
touch .env
```

inside of the `.env` file
    * Add the following block of code and replace the text inside <> with your environment variables :
```
#DATABASE HOST TO CONNECT TO
HOST=<localhost>
#USER FOR CONNECTING TO DATABASE
USER=<root>
#PORT FOR APPLICATION TO RUN LOCALLY
PORT=<3000>
#PORT FOR CONNECTING TO DATABASE
DB_PORT=<3306>
#PASSWORD TO DATABASE
DB_PASSWORD=<Your Database Password here>
#NAME OF DATABASE
DB_NAME=<burgers_db>
```

Once thats all completed. 
1. Create database - Execute `config/schema.sql` 
    * Drops existing DB then creates DB and creates the burgers table. 
1. Seed database - Execute `config/seeds.sql`
    * Create/Inserts 4 rows of example data into the burgers table.
1. Run application with nodemon
    * Restarts the `server.js` script whenever a `js`, `mjs`, or `json` file is saved
        * ```npm run dev```
        * ```nodemon server.js```
1. Check to make sure application is running and you can add new burgers and mark burgers as eaten.
---
__*Then you are all set! Edit and play with the application as much as you would like.*__

---

### Coding style tests

This project follows the standard linting rules
Lints project files
```
npx standard --fix
```
or the same command in a script located in the `package.json`
```
npm run lint
```

## Deployment

To deploy this application I linked my Github account Heroku and set up Heroku to deploy the master branch of the Github repository.

## Built With
 
* [Node.js](https://nodejs.org/en/download/) - JavaScript on the server using the V8 engine. 
    * [Express.js](https://expressjs.com/) - The express framework for Node.js 
    * [Handlebars.js](https://www.npmjs.com/package/express-handlebars) - Express view engine.
* [MySQL Database](https://dev.mysql.com/downloads/mysql/) - Database to query and route data 
    * [mysql NPM](https://www.npmjs.com/package/mysql) - npm package for database Queries using a custom ORM

--- 

## Author

* **Vincent Shury** - <small>Full stack web developer</small>
    * [Github Profile](https://github.com/Vincent440) - View more of my work on Github
    * [LinkedIn](https://www.linkedin.com/in/vincent-shury/) - Connect with me on LinkedIn
    * [vinceshury@gmail.com](mailto:vinceshury@gmail.com) - Feel free to email me anytime
    * [1 (216) 954-0020](tel:+1-216-954-0020) - Call or text (Monday - Friday) - (9:00 am - 5:00 pm EST)
