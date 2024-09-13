import { getAllEquipmentDb, getEquipmentDb, insertEquipmentDb, deleteEquipmentDb, updateEquipmentDb } from "../model/equipmentDb.js";

const getAllEquipment = async(req,res)=>{
    let data = await getAllEquipmentDb()
    let id = req.body.id
    // console.log(id)
    res.json({data:data, user_id:id})
}
const getEquipment = async(req,res)=>{
    res.json(await getEquipmentDb(req.params.id))
}
const insertEquipment = async(req,res)=>{
    let {equipName,quantity,amount,category,equipURL} =req.body
    await insertEquipmentDb(equipName,quantity,amount,category,equipURL)
    res.status(200).send('Equipmant added successfully')
}
const deleteEquipment = async(req,res)=>{
    await deleteEquipmentDb(req.params.id)
    res.status(200).send('Equipment deleted successfully')
}
const updateEquipment = async(req,res)=>{
    let {equipName,quantity,amount,category,equipURL} =req.body
    let [equipment] = await getEquipmentDb(+req.params.id)
    equipName ? equipName: { equipName } = equipment
    quantity ? quantity: { quantity } = equipment
    amount ? amount: { amount } = equipment
    category ? category: { category } = equipment
    equipURL ? equipURL: { equipURL } = equipment
    await updateEquipmentDb(equipName,quantity,amount,category,equipURL,+req.params.id)
    res.status(200).send('Equipment updated successfully')
}
export {getAllEquipment, getEquipment,insertEquipment, deleteEquipment, updateEquipment}