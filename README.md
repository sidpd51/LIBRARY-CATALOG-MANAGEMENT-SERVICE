<h1 align="center">Welcome to library-catalog-management-service 👋</h1>
<p>
  <img alt="Version" src="https://img.shields.io/badge/version-1.0.0-blue.svg?cacheSeconds=2592000" />
  <a href="#" target="_blank">
    <img alt="License: ISC" src="https://img.shields.io/badge/License-ISC-yellow.svg" />
  </a>
</p>

## Project Description

The Catalog Management Service is a backend microservice for the Library Management System, built with Node.js, Sequelize, and MySQL. It handles CRUD operations and offers advanced filtering by author, title, genre, edition, and publication date, enabling users to efficiently manage and explore the library's book catalog.

## Technologies Used
- Node.js: Ensures fast, scalable, and efficient handling of multiple user requests in real time.
- Sequelize: Simplifies database operations through an ORM, making it easy to interact with MySQL.
- MySQL: A robust relational database system ideal for managing complex data relationships.

## Key Features
1. CRUD Operations: Create, read, update, and delete book records efficiently.
2. Advanced Filtering: Search books by multiple criteria like author and genre.
3. Microservice Architecture: Enables independent deployment and scaling, facilitating seamless integration with other services.
4. Scalability: Easily adaptable for future enhancements, like adding new entities (e.g., journals or magazines).

## Setup Instructions:
1. Create a `.env` file in the root folder to manage environment variables (add PORT eg.`PORT=3000` on it).
2. Create a `config.json` file inside the `src/config` and put this code 
```
{
  "development": {
    "username": <USERNAME>,
    "password": <PASSWORD>,
    "database": <DB_NAME>,
    "host": "127.0.0.1",
    "dialect": "mysql"
  }
}
```

3. Run `npm install` in the root folder to install all project dependencies.
4. Run `npx sequelize db:create` in `/src`, this will create database
5. Then run `npx sequelize db:migrate` in `/src`, this will generate tables in the database
6. Verify from mysql and run `npm run start`

## Show your support

Give a ⭐️ if this project helped you!
