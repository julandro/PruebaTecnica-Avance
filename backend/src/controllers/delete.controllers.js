const pool = require('../../database/config');

const deleteData = async (req, res) => {
  try {
    const tabla = req.params.tabla;
    const id = parseInt(req.params.id);
    const idTabla = `id${tabla}`;
    let tablaVerifyRelation;

    // Hago un condicional ya que no todas las tablas estan relacionadas (documentos no lo está), dependiendo del condicional, tablaVerify cogerá el string del nombre de la tabla que tiene relacion para luego mas abajo pasarselo en el verifyRelationsQuery y ver si tienen relaciones con otra tabla y si lo tienen no se podra borrar
    if (tabla == 'empresa') {
      tablaVerifyRelation = 'numeracion';
    }
    if (tabla == 'tipodocumento') {
      tablaVerifyRelation = 'numeracion';
    }
    if (tabla == 'numeracion') {
      tablaVerifyRelation = 'documento';
    }
    if (tabla == 'estado') {
      tablaVerifyRelation = 'documento';
    }
    if (tabla == 'documento') {
      // Borramos los datos de documento
      const query = `DELETE FROM "${tabla}" WHERE ${idTabla} = $1 RETURNING *`;
      const response = await pool.query(query, [id]);

      // Si no existe el borrado es pq el id no existe
      if (!response.rowCount > 0) return res.send({ error: 'No existe el id' });

      res.send({
        message: 'Datos borrados exitosamente',
        datoEliminado: response.rows[0],
      });
    }

    // Verificamos si existen relaciones en otra tabla
    const verifyRelationsQuery = `SELECT COUNT(*) FROM ${tablaVerifyRelation} WHERE ${idTabla} = $1`;
    const responseVerify = await pool.query(verifyRelationsQuery, [id]);

    if (responseVerify.rows[0].count !== '0') {
      return res.send({
        error: 'No se puede eliminar por restricciones de llave externa',
      });
    }

    // Si no existe se borran los datos
    const query = `DELETE FROM "${tabla}" WHERE ${idTabla} = $1 RETURNING *`;
    const response = await pool.query(query, [id]);

    // Si no existe el borrado es pq el id no existe
    if (!response.rowCount > 0) return res.send({ error: 'No existe el id' });

    res.send({
      message: 'Datos borrados exitosamente',
      datoEliminado: response.rows[0],
    });
  } catch (error) {
    res.send({ error: error.stack });
  }
};

module.exports = { deleteData };
