import express from 'express'
import { getUsers, getUser, insertUsers, deleteUser, updateUser, loginUser } from '../controller/usersController.js'
import { checkUser, verifyToken } from '../middleware/authenticate.js'

const router = express.Router()
router.
    route('/')
        .get(getUsers)
        .post(insertUsers)

router.post('/login',checkUser, verifyToken, loginUser)

router.
    route('/:id')
        .get(getUser)
        .delete(deleteUser)
        .patch(updateUser)


export default router