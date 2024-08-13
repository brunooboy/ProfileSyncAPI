const express = require('express');
const app = express();
const config = require('./src/manage.json')
require('dotenv').config();

const fs = require('fs');
const path = require('path');
const bodyParser = require('body-parser');
const cors = require('cors');

const morgan = require('morgan')
const http = require('http');
const base = require('./src/modules/crypto/base')
const server = http.createServer(app);
const port = process.env.PORTA
const indexRouter = require('./src/routes/index');

async function callback() {
    // erros - midlleware
    let { erros } = require('./src/middleware/errors.js')
    await erros(app)
}

// Middleware para desativar o cache nas respostas
app.use(function (req, res, next) {
    res.setHeader('Cache-Control', 'no-cache, no-store, must-revalidate');
    res.setHeader('Pragma', 'no-cache');
    res.setHeader('Expires', '0');
    res.setHeader('X-Powered-By', 'brunooboy <3');
    next();
});
// Middleware para remover cabeçalhos condicionais da solicitação
app.use(function (req, res, next) {
    delete req.headers['if-modified-since'];
    delete req.headers['if-none-match'];
    next();
});
app.use(morgan('dev'));

const corsOptions = {
    origin: config.app.url, // Substitua pelo seu domínio permitido
    methods: ['GET', 'POST'],
    optionsSuccessStatus: 200
};

app.use(cors(corsOptions))
app.use(bodyParser.json());
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.static(path.join(__dirname, 'public')));

app.get('/favicon.ico', (req, res) => res.sendFile(path.join(__dirname, 'public', 'favicon.ico')));

app.use('/', indexRouter);

server.listen(port, () => {
    console.log(`Servidor rodando na porta ${port}`)
});

callback()

// ANTI CRASH
process.on('uncaughtException', function (error) {
    console.log(error.stack);
});
