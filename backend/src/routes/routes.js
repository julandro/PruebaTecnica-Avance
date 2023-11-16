const { Router } = require('express');

const { deleteData } = require('../controllers/delete.controllers');
const { getData } = require('../controllers/get.controllers');
const {
  postEmpresa,
  postTipoDocumento,
  postEstado,
  postNumeracion,
  postDocumento,
} = require('../controllers/post.controllers');
const {
  putTipoDocumento,
  putEmpresa,
  putEstado,
  putNumeracion,
  putDocumento,
} = require('../controllers/put.controllers');

const router = Router();

router.get('/:tabla', getData);
router.delete('/:tabla/:id', deleteData);

router.post('/empresa', postEmpresa);
router.post('/tipodocumento', postTipoDocumento);
router.post('/estado', postEstado);
router.post('/numeracion', postNumeracion);
router.post('/documento', postDocumento);

router.put('/empresa/:id', putEmpresa);
router.put('/tipodocumento/:id', putTipoDocumento);
router.put('/estado/:id', putEstado);
router.put('/numeracion/:id', putNumeracion);
router.put('/documento/:id', putDocumento);

module.exports = router;
