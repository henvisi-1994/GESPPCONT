const conexion = require('./conexionDB')

const getPersonas =async(req, res) => {
   const response = await conexion.query("select * from persona");
   res.status(200).json(response.rows);
}

module.exports= {
    getPersonas
}