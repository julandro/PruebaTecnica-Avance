const Joi = require('@hapi/joi');

const empresaSchema = Joi.object({
    identificacion: Joi.string().max(16).required(),
    razonsocial: Joi.string().max(256).required(),
});

module.exports = empresaSchema;
