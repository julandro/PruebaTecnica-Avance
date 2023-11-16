const Joi = require('@hapi/joi');

const estadoSchema = Joi.object({
  descripcion: Joi.string().max(256).required(),
  exitoso: Joi.boolean().required(),
});

module.exports = estadoSchema;
