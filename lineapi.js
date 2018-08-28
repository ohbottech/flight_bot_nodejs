const line = require('@line/bot-sdk');
const express = require('express');

// create LINE SDK config from env variables
/*
const config = {
  channelAccessToken: process.env.CHANNEL_ACCESS_TOKEN,
  channelSecret: process.env.CHANNEL_SECRET,
};
*/
const config = require('./lineConfig.js').lineAccoessTokenConfig

// create LINE SDK client
const client = new line.Client(config);

module.exports = {}
module.exports.replyText = function (event, replay_text, callback) {
    client.replyMessage(event.replyToken, replay_text)
        .then(() => {
            console.log('reply message success',replay_text)
            callback(true)
        })
        .catch((err) => {
            // error handling
            console.log('reply message failed', err)
            callback(false)
        });
}

module.exports.pushText = function (user_key, push_text,callback) {
    client.pushMessage(user_key, push_text)
        .then(() => {
            console.log('sent message success', push_text)
            callback(true)
        })
        .catch((err) => {
            // error handling
            console.log('sent message failed', err)
            callback(false)
        });
}

