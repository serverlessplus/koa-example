'use strict';

const app = require('./app');
const serverlessplus = require('serverlessplus');

const proxy = serverlessplus.createProxy(app);

exports.main_handler = (event, context) => {
    return proxy.serveRequest(event, context);
}
