<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="200" alt="Nest Logo" /></a>
</p>

[circleci-image]: https://img.shields.io/circleci/build/github/nestjs/nest/master?token=abc123def456
[circleci-url]: https://circleci.com/gh/nestjs/nest

## Installation

```bash
$ yarn install
```

# Configuration
- Create a `.env` file
```
JWT_SECRET="jwt_secret"
DATABASE_URL="file:./sqlite.db"
```

# Run the migration
```
npx prisma migrate dev --name init
```

## Running the app

```bash
# development
$ yarn run start

# watch mode
$ yarn run start:dev

# production mode
$ yarn run start:prod
```

## Requests
### Create User
Endpoint: /user

Method: POST

Request Body:
```json
{
    "email": "foo@bar.com",
    "password": "foobar1234",
}
```

Response Body (Status 201):
```json
{
    "id": 1,
    "email": "foo@bar.com",
}
```

## Authenticate user
Endpoint: /login

Method: POST

Request Body:
```json
{
    "email": "foo@bar.com",,
    "password": "foobar1234"
}
```

Response Body (Status 200):
```json
{
    "access_token": "generated JWT token"
}
```

