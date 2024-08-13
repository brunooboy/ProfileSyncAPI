module.exports.erros = async (app) => {

// Tratamento de erros HTTP

// 400 Bad Request
app.use(function (req, res, next) {
    res.status(400).send({
        erro: "Solicitação inválida.",
        status: "400"
    });
});

// 401 Unauthorized
app.use(function (req, res, next) {
    res.status(401).send({
        erro: "Sem permissão para executar esta função.",
        status: "401"
    });
});

// 403 Forbidden
app.use(function (req, res, next) {
    res.status(403).send({
        erro: "Acesso proibido.",
        status: "403"
    });
});

// 404 Not Found
app.use(function (req, res, next) {
    res.status(404).send({
        erro: "Informação não encontrada.",
        status: "404"
    });
});

// 405 Method Not Allowed
app.use(function (req, res, next) {
    res.status(405).send({
        erro: "Método HTTP não autorizado.",
        status: "405"
    });
});

// 500 Internal Server Error
app.use(function (err, req, res, next) {
    console.error(err.stack);
    res.status(500).send({
        erro: "Erro do servidor interno.",
        status: "500"
    });
});

// 502 Bad Gateway
app.use(function (req, res, next) {
    res.status(502).send({
        erro: "Gateway inválido.",
        status: "502"
    });
});

}