const { Router } = require('express');

const { deleteData } = require('../controllers/delete.controllers');
const { getData } = require('../controllers/get.controllers');
const {
  postEmpresa,
  postTipoDocumento,
  postEstado,
  postNumeracion,
  postDocumento,
  postData,
} = require('../controllers/post.controllers');

const router = Router();

router.get('/:tabla', getData);
router.delete('/:tabla/:id', deleteData);
router.post('/:tabla', postData);

/*
router.post('/empresa', postEmpresa);
router.post('/tipodocumento', postTipoDocumento);
router.post('/estado', postEstado);
router.post('/numeracion', postNumeracion);
router.post('/documento', postDocumento);
*/

module.exports = router;
