const express = require("express");
const router = express.Router();
const categoria = require("../controller/categoria");
const financa = require("../controller/financa");

//Categoria

router.post("/criar/categoria", categoria.create);
router.get("/listar/categoria/:page", categoria.findAll);
router.put("/atualizar/categoria/:Id", categoria.update);

//Financas

router.post("/criar/financa", financa.create);
router.get("/listar/financa/:page", financa.findAll);
router.get("/pesquisar/categoria_id/:id", financa.findById);
router.get("/listar/financa/:dataInicial/:datainicial/datafinal/:datafinal/:page", financa.findAllDate);
router.put("/atualizar/financa/:Id", financa.update);
router.delete("/deletar/financa/:Id", financa.delete);

module.exports = router;