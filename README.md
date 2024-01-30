# Flights and Search Micro Service

## Project Setup

- clone the project
- run `npm install`
- create a `.env` file in root directory and add environment variable given in `.env.example`
- inside the `src/config` folder create a new file `config.json` and add the following code.

```json
{
  "development": {
    "username": "root",
    "password": "your-db-password",
    "database": "your-db-name",
    "host": "127.0.0.1",
    "dialect": "mysql"
  }
}
```

- once this file setup is done go to `src` folder in the terminal and execute the command `npx sequelize db:create`
