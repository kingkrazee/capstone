import { getUsersDb, getUserDb, insertUsersDb, deleteUserDb, updateUsersDb, insertBookingDb } from '../model/usersDb.js'
import { hash } from 'bcrypt'

const getUsers = async(req,res) =>{
    res.json(await getUsersDb())
}
const getUser = async(req,res) =>{
    res.json(await getUserDb(req.params.id))
}
const insertUsers = async(req,res) =>{
    let {cookie} = req.headers
    console.log(cookie);
    let {firstName,lastName,usersAge,gender,emailAdd,usersPass,usersProfile} =req.body
    hash(usersPass, 10, async (err,hashedP)=>{
        if(err) throw err
        console.log(hashedP);
        await insertUsersDb(firstName,lastName,usersAge,gender,emailAdd,hashedP,usersProfile)
        res.status(200).send('User added successfully')
    })
}
const deleteUser = async(req,res) =>{
   await deleteUserDb(req.params.id)
   res.status(200).send('User deleted successfully')
}
const updateUser = async(req,res) =>{
    let {firstName,lastName,usersAge,gender,usersRole,emailAdd,usersPass,usersProfile} = req.body
    let [user] = await getUserDb(+req.params.id)
    firstName ? firstName: { firstName } = user
    lastName ? lastName: { lastName } = user
    usersAge ? usersAge: { usersAge } = user
    gender ? gender: { gender } = user
    usersRole ? usersRole: { usersRole } = user
    emailAdd ? emailAdd: { emailAdd } = user
    usersPass ? usersPass: { usersRole } = user
    usersProfile ? usersProfile: { usersProfile } = user

    await updateUsersDb(firstName,lastName,usersAge,gender,usersRole,emailAdd,usersPass,usersProfile, +req.params.id)
    res.status(200).send('User updated successfully')
}
const loginUser = async(req,res)=>{
    res.status(200).send({message:"You have logged in successfully",token:req.body.token})
}
const logoutUser = async (req, res) => {
    try {
      req.token = null;
      res.json({ message: 'You logged out successfully' });
    } catch (error) {
      console.error('Error logging out:', error);
      res.status(500).json({ message: 'Error logging out' });
    }
}

const insertBooking = async (req,res) =>{
    const { usersID } = req.params;
    const {equipmentID} = req.params;

    try {
        if (!usersID || !equipmentID) {
            throw new Error('Invalid booking data');
        }

        const booking = await insertBookingDb(usersID,equipmentID);
        if (!booking) {
            throw new Error('Failed to create booking');
        }

        return res.json({message: 'Booking created successfully', booking})
    }   catch (error){
        console.error('Error creating booking', error);
        const errorMessage = error.message || 'Error creating booking';
        return res.status(500).json({message: errorMessage})
    }
}
export { getUsers, getUser, insertUsers, deleteUser, updateUser, loginUser, logoutUser, insertBooking }