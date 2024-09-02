import express from 'express'
import { getAllEquipment, getEquipment } from '../controller/equipmentController.js'

const router = express.Router()

router.
    route('/')
        .get(getAllEquipment)

router.
    route('/:id')
        .get(getEquipment)
    
export default router