/**
 * A sample Express server with static resources.
 */
"use strict";
//Enable server to run on port selected by the user selected
//environment variable DBWBB_PORT
const port    = process.env.DBWEBB_PORT || 1337;

const path    = require("path");
//set up Express server
const express = require("express");
const app     = express();
//mount the entire router into the server, with all its routes.
const routeIndex = require("./route/index.js");
const middleware = require("./middleware/index.js");

app.use(middleware.logIncomingToConsole);
app.use(express.static(path.join(__dirname, "report")));
app.use("/", routeIndex);
app.listen(port, logStartUpDetailsToConsole);



/**
 * Log app details to console when starting up.
 *
 * @return {void}
 */
function logStartUpDetailsToConsole() {
    let routes = [];

    // Find what routes are supported
    app._router.stack.forEach((middleware) => {
        if (middleware.route) {
            // Routes registered directly on the app
            routes.push(middleware.route);
        } else if (middleware.name === "router") {
            // Routes added as router middleware
            middleware.handle.stack.forEach((handler) => {
                let route;

                route = handler.route;
                route && routes.push(route);
            });
        }
    });

    console.info(`Server is listening on port ${port}.`);
    console.info("Available routes are:");
    console.info(routes);
}
