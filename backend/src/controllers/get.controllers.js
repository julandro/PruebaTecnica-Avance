const pool = require('../../database/config');

const getData = async (req, res) => {
  try {
    const tabla = req.params.tabla;
    const response = await pool.query(`SELECT * FROM ${tabla}`);
    res.send(response.rows);
  } catch (error) {
    res.send({ error: error.message });
  }
};

module.exports = { getData };
