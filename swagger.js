const swaggerAutogen = require('swagger-autogen')();

const doc = {
  info: {
    title: 'Cube Buster API',
    description: 'API for Cube Buster Database on MongoDB for CSE 341'
  },
  host: 'https://cube-buster-cse341-fall-2026.onrender.com/',
  schemes: ["https"]
};

const outputFile = './swagger-output.json';
const routes = ["./routes/index.js"]

/* NOTE: If you are using the express Router, you must pass in the 'routes' only the 
root file where the route starts, such as index.js, app.js, routes.js, etc ... */

swaggerAutogen(outputFile, routes, doc);