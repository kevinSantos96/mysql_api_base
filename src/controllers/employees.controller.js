import {conn} from '../dbConnectiion.js'

export const getEmployees = (req,res)=>res.send('Obteniendo empleados')

export const createEmployes = async (req,res)=>{
    const {name, lastName,Gender,Phone,Email,Status} = req.body

   const [result] = await conn.query('INSERT INTO tbl_Empleados(Nombres,Apellidos,Fecha,Genero,Telefono,Correo,Estado) VALUES(?,?,curdate(),?,?,?,?)',
   [name,lastName,Gender,Phone,Email,Status])
   res.json({
    message: 'OK',
    status: 200,
    id: result.insertId
   })
}