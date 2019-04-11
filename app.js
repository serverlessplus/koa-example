'use strict';

const Koa = require('koa');
const getEventAndContext = require('serverlessplus/middleware').getEventAndContext;
const app = new Koa();

app.use(getEventAndContext);

app.use(async ctx => {
    console.log(ctx.payload.event);
    console.log(ctx.payload.context);
    ctx.body = 'Hello World';
});

module.exports = app;
