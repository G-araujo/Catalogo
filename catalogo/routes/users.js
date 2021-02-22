var express = require('express');
var router = express.Router();
var db = require("../db/livros");



/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.use(function (req,res, next){
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Rquested-With, Content-Type, Accept");
  next();
})

router.get('/livros', async (req, res )  => {
  await db.criaLivro(req.body);
});

router.get('/select', async (req, res) =>{
  const results = await db.selectLivros(req.body);
  res.status(201).json({ resultados: results });
})

router.get('/delete', async (req, res) =>{
  const results = await db.deletaLivro(req.body);
  res.status(201).json({ resultados: results });
})
module.exports = router;
