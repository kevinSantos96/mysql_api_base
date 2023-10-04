import {conn} from '../dbConnectiion.js'

export const connection_mysql= async (req,res)=> {
    const [result] = await conn.query('SELECT * FROM tbl_Empleados')
    res.json({
        message: 'OK',
        status:200,
        result
    })
}