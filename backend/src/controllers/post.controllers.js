const pool = require('../../database/config');
const documentoSchema = require('../../schemas/documento');
const empresaSchema = require('../../schemas/empresa');
const estadoSchema = require('../../schemas/estado');
const numeracionSchema = require('../../schemas/numeracion');
const tipodocumentoSchema = require('../../schemas/tipoDocumento');

const postEmpresa = async (req, res) => {
  const { identificacion, razonsocial } = req.body;
  try {
    // Validamos al body
    const validation = empresaSchema.validate(req.body);
    if (validation.error) {
      return res.send({ error: validation.error.details[0].message });
    }
    // Si no manda error de validacion que postee
    const response = await pool.query(
      `INSERT INTO empresa(identificacion, razonsocial) VALUES ('${identificacion}', '${razonsocial}') RETURNING *`
    );
    res.send({
      message: 'Empresa creada exitosamente',
      datos: response.rows[0],
    });
  } catch (error) {
    res.send(error.message);
  }
};

const postTipoDocumento = async (req, res) => {
  const { descripcion } = req.body;
  try {
    // Validamos al body
    const validation = tipodocumentoSchema.validate(req.body);
    if (validation.error) {
      return res.send({ error: validation.error.details[0].message });
    }
    // Si no manda error de validacion que postee
    const response = await pool.query(
      `INSERT INTO tipodocumento(descripcion) VALUES ('${descripcion}') RETURNING *`
    );
    res.send({
      message: 'Tipo documento creado exitosamente',
      datos: response.rows[0],
    });
  } catch (error) {
    res.send(error.message);
  }
};

const postEstado = async (req, res) => {
  const { descripcion, exitoso } = req.body;
  try {
    // Validamos al body
    const validation = estadoSchema.validate(req.body);
    if (validation.error) {
      return res.send({ error: validation.error.details[0].message });
    }
    // Si no manda error de validacion que postee
    const response = await pool.query(
      `INSERT INTO estado(descripcion, exitoso) VALUES ('${descripcion}', '${exitoso}') RETURNING *`
    );
    res.send({
      message: 'Estado creado exitosamente',
      datos: response.rows[0],
    });
  } catch (error) {
    res.send(error.message);
  }
};

const postNumeracion = async (req, res) => {
  const {
    idtipodocumento,
    idempresa,
    prefijo,
    consecutivoinicial,
    consecutivofinal,
    vigenciainicial,
    vigenciafinal,
  } = req.body;
  try {
    // Validamos al body
    const validation = numeracionSchema.validate(req.body);
    if (validation.error) {
      return res.send({ error: validation.error.details[0].message });
    }

    // Si no manda error de validacion que postee
    const response = await pool.query(
      `INSERT INTO numeracion(idtipodocumento, idempresa, prefijo, consecutivoinicial, consecutivofinal, vigenciainicial, vigenciafinal) VALUES ('${idtipodocumento}', '${idempresa}', '${prefijo}', '${consecutivoinicial}', '${consecutivofinal}', '${vigenciainicial}', '${vigenciafinal}') RETURNING *`
    );
    res.send({
      message: 'Numeracion creada exitosamente',
      datos: response.rows[0],
    });
  } catch (error) {
    res.send({ error: error.message });
  }
};

const postDocumento = async (req, res) => {
  const { idnumeracion, idestado, numero, fecha, base, impuestos } = req.body;
  try {
    // Validamos al body
    const validation = documentoSchema.validate(req.body);
    if (validation.error) {
      return res.send({ error: validation.error.details[0].message });
    }
    // Si no manda error de validacion que postee
    const response = await pool.query(
      `INSERT INTO documento(idnumeracion, idestado, numero, fecha, base, impuestos) VALUES ('${idnumeracion}', '${idestado}', '${numero}', '${fecha}', '${base}', '${impuestos}') RETURNING *`
    );
    res.send({
      message: 'Documento creado exitosamente',
      datos: response.rows[0],
    });
  } catch (error) {
    res.send({ error: error.message });
  }
};

module.exports = {
  postEmpresa,
  postTipoDocumento,
  postEstado,
  postNumeracion,
  postDocumento,
};
