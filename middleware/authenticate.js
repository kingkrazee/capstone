import {compare} from 'bcrypt';
import { getUserEmailDb } from '../model/usersDb.js';
import jwt from 'jsonwebtoken'
import {config} from 'dotenv'
config()

const checkUser = async(req,res,next)=>{
    const {emailAdd,usersPass} = req.body;
    let hashedPassword = (await getUserEmailDb(emailAdd)).usersPass
    // console.log(hashedPassword);

    if(!hashedPassword){
        return res.status(404).json({message: "User email or password is incorrect"})
    }
    let result = await compare(usersPass,hashedPassword)
        if(result==true){
            let token = jwt.sign({emailAdd:emailAdd},process.env.SECRET_KEY,{expiresIn:'1h'})
            req.body.token = token
            console.log(token);
            next()
        }else{
            res.status(400).send('Password incorrect')
        }
}
const verifyToken = (req,res,next)=>{
    let {cookie} = req.headers
    //checks if token exists first
    let token = cookie && cookie.split('=')[1]
    //console.log(token);
    jwt.verify(token,process.env.SECRET_KEY,(err,decoded)=>{
        if(err){
            res.json({message:'Token has expired'})
            return;
        }
        req.body.emailAdd = decoded.emailAdd
        console.log(decoded);
    })
    next()
}
export {checkUser, verifyToken}