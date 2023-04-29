const express = require('express');
const app = express();
const router = required('./router/router')
const cors = require('cors');

app.use(express.urlencoded({extend:false}));
app.use(express.json());
app.use(cors());
app.use(router);

app.listen(8080, function (request, response) {
    console.log("Servidor rodando na porta 8080");

});

