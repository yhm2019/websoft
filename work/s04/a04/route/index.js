/**
 * General routes.
 */
"use strict";

const express = require("express");
const router  = express.Router();

// Add a route for the path /
router.get("/", (req, res) => {
    res.send("Hello World");
});

// Add a route for the path /about
router.get("/about", (req, res) => {
    res.send("About something");
});


router.get("/lotto", (req, res) => {
    let lotto = [];
    
    for(let i = 0;i < 7;i ++) {
        lotto[i] = Math.floor(Math.random() * 35 + 1);
}
    res.send("Welcome to lotto. The numbers are : " + lotto);
})

router.get("/lotto-json",(req, res) => {
    res.send("Json response!");
})

module.exports = router;
