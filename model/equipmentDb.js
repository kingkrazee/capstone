import {pool} from '../config/config.js'

const getAllEquipmentDb = async ()=>{
    let [data] = await pool.query('SELECT * FROM equipment')
    return data
}
const getEquipmentDb = async (id)=>{
    let [data] = await pool.query('SELECT * FROM equipment WHERE equipmentID = ?',[id])
    return data
}
const insertEquipmentDb = async (equipName,quantity,amount,category,equipURL)=>{
    await pool.query(`
        INSERT INTO equipment
        (equipName,quantity,amount,category,equipURL)
         VALUES (?,?,?,?,?)`,
    [equipName,quantity,amount,category,equipURL])
}
const deleteEquipmentDb = async(equipmentID)=>{
    await pool.query('DELETE FROM equipment WHERE equipmentID = ?', [equipmentID])
}
const updateEquipmentDb = async(equipName,quantity,amount,category,equipURL,equipmentID)=>{
    await pool.query(`UPDATE equipment SET equipName = ?,quantity = ?,amount = ?,category = ?,equipURL = ? WHERE equipmentID = ?`, [equipName,quantity,amount,category,equipURL,equipmentID])
}
export {getAllEquipmentDb, getEquipmentDb,insertEquipmentDb,deleteEquipmentDb,updateEquipmentDb}