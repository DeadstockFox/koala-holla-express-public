const express = require('express');      //E
const koalaRouter = express.Router();    //ER
const pg = require('pg');                //P        NPM INSTALL PG

//-----------------------------------\\

//Connection to database
const pool = new pg.Pool({

    database: 'koalas', //postico name

    host: 'localhost', //own computer

    port: 5432 //port postgress uses
});

// GET
koalaRouter.get('/', (req,res) =>{       //R    
    console.log('GET request');
    let queryText = `SELECT * FROM "koalas";`;
    pool.query(queryText).then((response) => { //pool.query has a .then & .catch within the .get function
        res.send(response.rows);
    }).catch((error) => {
        console.log(error);
    });


    
});
// POST


// PUT


// DELETE

module.exports = koalaRouter;