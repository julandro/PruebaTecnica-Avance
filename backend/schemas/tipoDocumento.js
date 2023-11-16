const Joi = require("@hapi/joi");

const tipodocumentoSchema = Joi.object({
    descripcion: Joi.string().max(256).required(),
});

module.exports = tipodocumentoSchema;
