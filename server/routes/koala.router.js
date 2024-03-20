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
        //console.log('dogs');
        res.send(response.rows);
    }).catch((error) => {
        console.log(error);
    });


    
});
// POST
koalaRouter.post('/', (req,res) => {
    console.log(req.body);
    let koala = req.body

    let queryText =`
        INSERT INTO "koalas" ("name","favorite_color", "age", "ready_to_transfer", "notes")
        VALUES ($1,$2,$3,$4,$5);
    `;
    pool.query(queryText, [koala.name, koala.favoriteColor, koala.age, koala.transfer, koala.notes])
    .then(() => {
        res.sendStatus(200);
    }).catch((error)=> {
        console.log(error);
        res.sendStatus(500);
    });
});


// PUT


// DELETE

module.exports = koalaRouter;