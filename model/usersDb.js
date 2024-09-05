import { pool } from "../config/config.js"

const getUsersDb = async ()=>{
    let [data] = await pool.query(`SELECT * FROM users`)
    return data
}
const getUserDb = async (id)=>{
    let [data] = await pool.query(`SELECT * FROM users WHERE usersID = ?`, [id])
    return data
}
const getUserEmailDb = async (email)=>{
    let [[data]] = await pool.query(`SELECT * FROM users WHERE emailAdd = ?`,[email])
    return data
}
const insertUsersDb = async(firstName,lastName,usersAge,gender,usersRole,emailAdd,usersPass,usersProfile)=>{
    await pool.query(`
        INSERT INTO users
        (firstName,lastName,usersAge,gender,usersRole,emailAdd,usersPass,usersProfile)
        VALUES (?,?,?,?,?,?,?,?)`,
    [firstName,lastName,usersAge,gender,usersRole,emailAdd,usersPass,usersProfile])
}
const deleteUserDb = async(usersID)=>{
    await pool.query(`DELETE FROM users WHERE usersID = ?`,[usersID])
}
const updateUsersDb = async(usersID)=>{
    await pool.query(`UPDATE users SET firstName = ?,lastName = ?,gender = ?,usersRole = ?, emailAdd = ?, usersPass = ?,usersProfile = ?`,[firstName,lastName,usersAge,gender,usersRole,emailAdd,usersPass,usersProfile, usersID])
}

export { getUsersDb, getUserDb, getUserEmailDb, insertUsersDb, deleteUserDb, updateUsersDb }