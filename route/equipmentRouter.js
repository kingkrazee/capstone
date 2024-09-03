import express from 'express'
import { getAllEquipment, getEquipment,insertEquipment, deleteEquipment, updateEquipment } from '../controller/equipmentController.js'

const router = express.Router()

router.
    route('/')
        .get(getAllEquipment)
        .post(insertEquipment)

router.
    route('/:id')
        .get(getEquipment)
        .delete(deleteEquipment)
        .patch(updateEquipment)
    
export default router