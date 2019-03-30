'use strict';

const Koa = require('koa');
const app = new Koa();

app.use(async ctx => {
    ctx.body = 'Hello World';
});

// you are required to exports `app.callback()`
module.exports = app.callback();
