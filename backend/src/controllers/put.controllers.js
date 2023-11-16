const pool = require('../../database/config');

const putEmpresa = async (req, res) => {
  try {
    const id = req.params.id;
    const { identificacion, razonsocial } = req.body;
    const response = await pool.query(
      'UPDATE empresa SET identificacion = $1, razonsocial = $2 WHERE idempresa = $3 RETURNING *',
      [identificacion, razonsocial, id]
    );

    // Si no devuelve ningun dato significa que no encontró nada
    if (!response.rows[0]) return res.send({ error: 'No existe el id' });

    res.send({
      message: 'Datos actualizados exitosamente',
      datos: response.rows[0],
    });
  } catch (error) {
    res.send(error.message);
  }
};

const putTipoDocumento = async (req, res) => {
  try {
    const id = req.params.id;
    const { descripcion } = req.body;
    const response = await pool.query(
      'UPDATE tipodocumento SET descripcion = $1 WHERE idtipodocumento = $2 RETURNING *',
      [descripcion, id]
    );

    // Si no devuelve ningun dato significa que no encontró nada
    if (!response.rows[0]) return res.send({ error: 'No existe el id' });

    res.send({
      message: 'Datos actualizados exitosamente',
      datos: response.rows[0],
    });
  } catch (error) {
    res.send(error.message);
  }
};

const putEstado = async (req, res) => {
  try {
    const id = req.params.id;
    const { descripcion, exitoso } = req.body;
    const response = await pool.query(
      'UPDATE estado SET descripcion = $1, exitoso = $2 WHERE idestado = $3 RETURNING *',
      [descripcion, exitoso, id]
    );

    // Si no devuelve ningun dato significa que no encontró nada
    if (!response.rows[0]) return res.send({ error: 'No existe el id' });

    res.send({
      message: 'Datos actualizados exitosamente',
      datos: response.rows[0],
    });
  } catch (error) {
    res.send(error.message);
  }
};

const putNumeracion = async (req, res) => {
  try {
    const id = req.params.id;
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
      'UPDATE numeracion SET prefijo = $1, consecutivoinicial = $2, consecutivofinal = $3, vigenciainicial = $4, vigenciafinal = $5 WHERE idnumeracion = $6 RETURNING *',
      [
        prefijo,
        consecutivoinicial,
        consecutivofinal,
        vigenciainicial,
        vigenciafinal,
        id,
      ]
    );

    // Si no devuelve ningun dato significa que no encontró nada
    if (!response.rows[0]) return res.send({ error: 'No existe el id' });

    res.send({
      message: 'Datos actualizados exitosamente',
      datos: response.rows[0],
    });
  } catch (error) {
    res.send({ error: error.message });
  }
};

const putDocumento = async (req, res) => {
  try {
    const id = req.params.id;
    const { idnumeracion, idestado, numero, fecha, base, impuestos } = req.body;
    const response = await pool.query(
      'UPDATE documento SET numero = $1, fecha = $2, base = $3, impuestos = $4 WHERE iddocumento = $5 RETURNING *',
      [numero, fecha, base, impuestos, id]
    );

    // Si no devuelve ningun dato significa que no encontró nada
    if (!response.rows[0]) return res.send({ error: 'No existe el id' });

    res.send({
      message: 'Datos actualizados exitosamente',
      datos: response.rows[0],
    });
  } catch (error) {
    res.send({ error: error.message });
  }
};

module.exports = {
  putEmpresa,
  putTipoDocumento,
  putEstado,
  putNumeracion,
  putDocumento,
};
