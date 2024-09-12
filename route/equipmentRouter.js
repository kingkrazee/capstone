import express from 'express'
import { getAllEquipment, getEquipment,insertEquipment, deleteEquipment, updateEquipment } from '../controller/equipmentController.js'
import { checkUser } from '../middleware/authenticate.js'

const router = express.Router()

router.
    route('/')
        .get(getAllEquipment)
        .post(insertEquipment)

router.
    route('/:id')
        .get(checkUser, getEquipment)
        .delete(deleteEquipment)
        .patch(updateEquipment)
    
export default router