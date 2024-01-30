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

## DB Design

```
Airplane Table
  - id
  - model_number
  - capacity
  - created_at
  - updated_at
```

```
Flight Table
  - id
  - source_airport_id
  - destination_airport_id
  - airplane_id
  - arrival
  - departure
  - flight_number
  - airport_id
```

```
Airport Table
  - id
  - name
  - city_id
  - address
```

```
City Table
  - id
  - name
```

```
- A flight belongs to an airplane but an airplane can have many flights
- A city can have many airports but an airport belongs to a city
- One airport can have many flights but a flight can have only one airport
```
