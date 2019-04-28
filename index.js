'use strict';

const line = require('@line/bot-sdk');
const express = require('express');

const constants = require("./app/constants")
// create LINE SDK config from env variables
const config = {
    channelAccessToken: constants.channelAccess,
    channelSecret: constants.channelSecret,
};

// create LINE SDK client
const client = new line.Client(config);
const baseURL = process.env.BASE_URL

// create Express app
// about Express itself: https://expressjs.com/
const app = express();
const eventHandler = require('./app/eventHandler')

// register a webhook handler with middleware
// about the middleware, please refer to doc
app.post('/callback', line.middleware(config), (req, res) => {
    Promise
        .all(req.body.events.map(handleEvent))
        .then((result) => res.json(result))
        .catch((err) => {
            console.error(err);
            res.status(500).end();
        });
});

// event handler
function handleEvent(event) {
    return eventHandler(client, event, baseURL)
}
// listen on port
const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`listening on ${port}`);
});