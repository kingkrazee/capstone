import { getAllEquipmentDb, getEquipmentDb } from "../model/equipmentDb.js";

const getAllEquipment = async(req,res)=>{
    res.json(await getAllEquipmentDb())
}
const getEquipment = async(req,res)=>{
    res.json(await getEquipmentDb(req.params.id))
}
export {getAllEquipment, getEquipment}