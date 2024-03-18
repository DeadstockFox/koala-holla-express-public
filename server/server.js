//---------------Setting Variables--------------\\

const express = require('express');                   //E
const app = express();                                //E
const koalaRouter = require('./routes/koala.router'); // R
const PORT = process.env.PORT || 5001;               // P
//Separate ports for localhost and database!


//---------------Middleware---------------\\

app.use(express.json());                         // E
app.use(express.static('server/public'));            //E

//---------------Router-------------\\

// ROUTES
app.use('/koalas', koalaRouter);                      // R  // = ('/koalas/') in router

//----------------Start Server----------------\\

// Start listening for requests on a specific port
app.listen(PORT, () => {                             // P
  console.log('listening on port', PORT);
});
