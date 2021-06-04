const express = require('express');
const cookieParser = require('cookie-parser');
const cors = require('cors');
require('dotenv-safe').config();

/**
 * Routes import
 */
const mainRoutes = require('./src/Routes/Main.routes');

/**
 * App declaration;
 */

const app = express();


/*
    Database conection;
*/

// require('./src/database/config');

app.use(cors());

app.use(cookieParser());

app.use(express.json());

/**
 * Routes use on aplication;
 */

app.use(mainRoutes);

/**
 * HTTP server creation;
 */

const port = process.env.PORT;

app.listen(port, () =>{
    console.log(`API run at port ${port}`);
});