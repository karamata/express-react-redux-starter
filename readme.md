# Starter for Express, React, Redux, SCSS applications

## Features

- Webpack development and production environment configuration
- Webpack SCSS configuration
- React Hot loader
- React Router configuration
- React, Redux configuration
- Testing environment configured with Mocha and Chai
- Linting with Airbnb eslint configuratin

## Getting Started

Clone Repo

````
git clone https://github.com/DimitriMikadze/express-react-redux-starter.git
````

npm install dependencies

````
cd express-react-redux-starter & npm install
````

### Start development server with hot reloading

````
npm run dev
````

### Testing

Run test once

````
npm run test
````

Test watch

````
npm run test:watch
````

### Linting

For linting we are using Eslint with Airbnb configuration

````
npm run lint
````

### production

Build for production

````
npm run build
````

Start production server

Note: We are using pm2 for production server, you should install it on server via 'npm install pm2 -g'.
if you don't want to use pm2, just change pm2 with node in package.json file in scripts section.

````
npm run start
````
