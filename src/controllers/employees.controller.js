import {conn} from '../dbConnectiion.js'

export const getEmployees = async(req,res)=>{

    const [result] = await conn.query('SELECT * FROM tbl_Empleados')
    res.status(200).json({
        message: 'OK',
        success: true,
        result
    })
}

export const createEmployes = async (req,res)=>{
    const {name, lastName,Gender,Phone,Email,Status} = req.body

   const [result] = await conn.query('INSERT INTO tbl_Empleados(Nombres,Apellidos,Fecha,Genero,Telefono,Correo,Estado) VALUES(?,?,curdate(),?,?,?,?)',
   [name,lastName,Gender,Phone,Email,Status])
   res.status(200).json({
    message: 'OK',
    success: true,
    id: result.insertId
   })
}

export const getEmployeeById = async(req,res)=>{
    const {id} = req.params
    const [result] =  await conn.query('SELECT * FROM tbl_Empleados WHERE Id = ?',[id])

    res.status(200).json({
        message: 'ok',
        success: true,
        result
    })
}