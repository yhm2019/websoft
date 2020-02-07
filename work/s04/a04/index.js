"use strict";

// Enable server to run on port selected by the user selected
// environment variable DBWEBB_PORT
const port = process.env.DBWEBB_PORT || 1337;
const path    = require("path");
// Set upp Express server
const express = require("express");
const app = express();

app.use(express.static(path.join(__dirname, "report")));
app.use((req, res, next) => {
    console.info(`Got request on ${req.path} (${req.method}).`);
    next();
});

// Add a route for the path /
app.get("/report/", (req, res) => {
    res.send("Hello World");
});

// Add a route for the path /about
app.get("/about", (req, res) => {
    res.send("About something");
});



app.get("/lotto", (req, res) => {
   let lotto = [];
    
    for(let i = 0;i < 7;i ++) {
        lotto[i] = Math.floor(Math.random() * 35 + 1);
}
    res.send(lotto);
    
});
// Start up server and begin listen to requests
app.listen(port, () => {
    console.info(`Server is listening on port ${port}.`);

    // Show which routes are supported
    console.info("Available routes are:");
    app._router.stack.forEach((r) => {
        if (r.route && r.route.path) {
            console.info(r.route.path);
        }
    });
});