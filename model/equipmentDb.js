import {pool} from '../config/config.js'

const getAllEquipmentDb = async ()=>{
    let [data] = await pool.query('SELECT * FROM equipment')
    return data
}
const getEquipmentDb = async (id)=>{
    let [data] = await pool.query('SELECT * FROM equipment WHERE equipmentID = ?',[id])
    return data
}

export {getAllEquipmentDb, getEquipmentDb}