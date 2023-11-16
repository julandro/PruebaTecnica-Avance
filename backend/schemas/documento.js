const Joi = require('@hapi/joi');

const documentoSchema = Joi.object({
  idnumeracion: Joi.number().integer().required(),
  idestado: Joi.number().integer().required(),
  numero: Joi.number().integer().required(),
  fecha: Joi.date().required(),
  base: Joi.number().required(),
  impuestos: Joi.number().required(),
});

module.exports = documentoSchema;
