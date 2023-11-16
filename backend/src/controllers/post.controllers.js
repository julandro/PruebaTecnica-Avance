const pool = require('../../database/config');

const postData = async (req, res) => {
  try {
    const tabla = req.params.tabla;
    let query;
    let tableBody;
    if (tabla == 'empresa') {
      const { identificacion, razonsocial } = req.body;

      query = `INSERT INTO empresa(identificacion, razonsocial) VALUES ('${identificacion}', '${razonsocial}') RETURNING *`;
    }
    if (tabla == 'tipodocumento') {
      const { descripcion } = req.body;
      query = `INSERT INTO tipodocumento(descripcion) VALUES ('${descripcion}') RETURNING *`;
    }
    if (tabla == 'estado') {
      const { descripcion, exitoso } = req.body;
      query = `INSERT INTO tipodocumento(descripcion, exitoso) VALUES ('${descripcion}', '${exitoso}') RETURNING *`;
    }
    if (tabla == 'tipodocumento') {
      const { idnumeracion, idestado, numero, fecha, base, impuestos } =
        req.body;

      query = `INSERT INTO documento(idnumeracion, idestado, numero, fecha, base, impuestos) VALUES ('${idnumeracion}', '${idestado}', '${numero}', '${fecha}', '${base}', '${impuestos}') RETURNING *`;
    }
    if (tabla == 'numeracion') {
      const {
        idtipodocumento,
        idempresa,
        prefijo,
        consecutivoinicial,
        consecutivofinal,
        vigenciainicial,
        vigenciafinal,
      } = req.body;
      query = `INSERT INTO numeracion(idtipodocumento, idempresa, prefijo, consecutivoinicial, consecutivofinal, vigenciainicial, vigenciafinal) VALUES ('${idtipodocumento}', '${idempresa}', '${prefijo}', '${consecutivoinicial}', '${consecutivofinal}', '${vigenciainicial}', '${vigenciafinal}') RETURNING *`;
    }

    const response = await pool.query(query);

    res.send({
      message: 'Datos creados exitosamente',
      empresaCreada: response.rows[0],
    });
  } catch (error) {
    res.send(error.message);
  }
};

const postEmpresa = async (req, res) => {
  try {
    const { identificacion, razonsocial } = req.body;
    const response = await pool.query(
      `INSERT INTO empresa(identificacion, razonsocial) VALUES ('${identificacion}', '${razonsocial}') RETURNING *`
    );
    res.send({
      message: 'Empresa creada exitosamente',
      empresaCreada: response.rows[0],
    });
  } catch (error) {
    res.send(error.message);
  }
};

const postTipoDocumento = async (req, res) => {
  try {
    const { descripcion } = req.body;
    const response = await pool.query(
      `INSERT INTO tipodocumento(descripcion) VALUES ('${descripcion}') RETURNING *`
    );
    res.send({
      message: 'Tipo documento creado exitosamente',
      empresaCreada: response.rows[0],
    });
  } catch (error) {
    res.send(error.message);
  }
};

const postEstado = async (req, res) => {
  try {
    const { descripcion, exitoso } = req.body;
    const response = await pool.query(
      `INSERT INTO estado(descripcion, exitoso) VALUES ('${descripcion}', '${exitoso}') RETURNING *`
    );
    res.send({
      message: 'Estado creado exitosamente',
      empresaCreada: response.rows[0],
    });
  } catch (error) {
    res.send(error.message);
  }
};

const postNumeracion = async (req, res) => {
  try {
    const {
      idtipodocumento,
      idempresa,
      prefijo,
      consecutivoinicial,
      consecutivofinal,
      vigenciainicial,
      vigenciafinal,
    } = req.body;
    const response = await pool.query(
      `INSERT INTO numeracion(idtipodocumento, idempresa, prefijo, consecutivoinicial, consecutivofinal, vigenciainicial, vigenciafinal) VALUES ('${idtipodocumento}', '${idempresa}', '${prefijo}', '${consecutivoinicial}', '${consecutivofinal}', '${vigenciainicial}', '${vigenciafinal}') RETURNING *`
    );
    res.send({
      message: 'Estado creado exitosamente',
      empresaCreada: response.rows[0],
    });
  } catch (error) {
    res.send({ error: error.message });
  }
};

const postDocumento = async (req, res) => {
  try {
    const { idnumeracion, idestado, numero, fecha, base, impuestos } = req.body;
    const response = await pool.query(
      `INSERT INTO documento(idnumeracion, idestado, numero, fecha, base, impuestos) VALUES ('${idnumeracion}', '${idestado}', '${numero}', '${fecha}', '${base}', '${impuestos}') RETURNING *`
    );
    res.send({
      message: 'Estado creado exitosamente',
      empresaCreada: response.rows[0],
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
  postData,
};
