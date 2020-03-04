/*  JS
var express = require('express');
*/

/*  TS
import express from "express";
*/

import express from "express";

const app = express();

// define a route handler for the default home page
app.get( "/", ( req:any, res:any ) => {
    // render the index template
  res.send('Hello World2!');
} );

// start the express server
app.listen( 3000, () => {
    // tslint:disable-next-line:no-console
    console.log( 'server started at http://localhost:3000' );
} );
