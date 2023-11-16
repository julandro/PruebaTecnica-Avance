const Joi = require("@hapi/joi");

const numeracionSchema = Joi.object({
    idtipodocumento: Joi.number().integer().required(),
    idempresa: Joi.number().integer().required(),
    prefijo: Joi.string().max(8).required(),
    consecutivoinicial: Joi.number().integer().required(),
    consecutivofinal: Joi.number().integer().required(),
    vigenciainicial: Joi.date().required(),
    vigenciafinal: Joi.date().required(),
});

module.exports = numeracionSchema;
