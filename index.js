import express from 'express'
import cors from 'cors'
import {config} from 'dotenv'
import equipmentRouter from './route/equipmentRouter.js'

config()

let PORT = process.env.PORT || 5004
const app = express()
app.use(express.json())
app.use(cors({
    origin: '*',
    credentials:true
}))

app.use(express.static('public'))
app.use('/equipment',equipmentRouter)
app.listen(PORT,()=>{
    console.log('http:localhost:'+PORT)
})