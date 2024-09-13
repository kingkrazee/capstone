import express from 'express'
import { getAllEquipment, getEquipment,insertEquipment, deleteEquipment, updateEquipment } from '../controller/equipmentController.js'
import {  verifyToken } from '../middleware/authenticate.js'

const router = express.Router()

router.
    route('/')
        .get(verifyToken,getAllEquipment)
        .post(insertEquipment)

router.get('/general',getAllEquipment)

router.
    route('/:id')
        .get( getEquipment)
        .delete(deleteEquipment)
        .patch(updateEquipment)
    
export default router