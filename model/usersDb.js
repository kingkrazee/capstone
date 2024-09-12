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
const insertUsersDb = async(firstName,lastName,usersAge,gender,emailAdd,usersPass,usersProfile)=>{
    await pool.query(`
        INSERT INTO users
        (firstName,lastName,usersAge,gender,emailAdd,usersPass,usersProfile)
        VALUES (?,?,?,?,?,?,?)`,
    [firstName,lastName,usersAge,gender,emailAdd,usersPass,usersProfile])
}
const deleteUserDb = async(usersID)=>{
    await pool.query(`DELETE FROM users WHERE usersID = ?`,[usersID])
}
const updateUsersDb = async(usersID)=>{
    await pool.query(`UPDATE users SET firstName = ?,lastName = ?,gender = ?,usersRole = ?, emailAdd = ?, usersPass = ?,usersProfile = ?`,[firstName,lastName,usersAge,gender,usersRole,emailAdd,usersPass,usersProfile, usersID])
}
//add a booking
const insertBookingDb = async(usersID, equipmentID, bookingDate)=>{
    try {
        if (!bookingDate){
            throw new Error("Booking date is required");
        }
        const query = `INSERT INTO booking (usersID, equipmentID, bookingDate) VALUES (?,?,?)`;
        const formattedDate = bookingDate.split('T')[0];//yyyy-mm-dd
        const result = await pool.query(query, [usersID,equipmentID, formattedDate]);
        return { message: 'booking inserted successfully', bookingID: result.insertedID};
    }catch (error) {
        console.error('error inserting booking:',error);
        throw error;
    }
}
//get 1 users all booking info
const getAllBookingDb = async (usersID)=>{
    try{
        const query = `SELECT * FROM booking WHERE usersID = ?`;
        const [data] = await pool.query(query,[usersID]);
        return data;
    }catch (error){
        console.error('error getting bookings:',error);
        throw error
    }
}
//get all users booking info
const getAllBookingsDb = async ()=>{
    try{
        const query = `SELECT * FROM booking`;
        const [data] = await pool.query(query);
        return data;
    }catch (error){
        console.error('error getting bookings:',error);
        throw error
    }
}
// get what 1 user booking by using bookingID
const getBookingDb = async (usersID, bookingID) => {
    try {
      const query = `SELECT * FROM booking WHERE usersID = ? AND bookingID = ?`;
      const [data] = await pool.query(query, [usersID, bookingID]);
      console.log('Query results:', data);
      if (data.length === 0) {
        console.log(`booking with ID ${bookingID} not found`);
        return null;
      }
      return data[0];
    } catch (error) {
      console.error('Error getting booking:', error);
      throw error;
    }
  };
  //patch booking
  const updateBookingDb = async (usersID, bookingID, updatedBookingData) => {
    try {
      const existingBooking = await getBookingDb(usersID, bookingID);
      if (!existingBooking) {
        throw new Error(`booking with ID ${bookingID} not found`);
      }
      const fieldsToUpdate = Object.keys(updatedBookingData);
      const valuesToUpdate = Object.values(updatedBookingData);
      const query = `UPDATE booking SET ${fieldsToUpdate.map((field, index) => `${field} = ?`).join(', ')} WHERE usersID = ? AND bookingID = ?`;
      await pool.query(query, [...valuesToUpdate, usersID, bookingID]);
      return await getBookingDb(usersID, bookingID);
    } catch (error) {
      console.error('Error updating booking:', error);
      throw error;
    }
  };
  //delete everything
  const deleteAllBookingDb = async () => {
    try {
      const query = `DELETE FROM booking`;
      const [result] = await pool.query(query);
      return result.affectedRows;
    } catch (error) {
      console.error('Error deleting all booking:', error);
      throw error;
    }
  };
  //delete a booking made by a user
  const deleteBookingDb = async (usersID, bookingID) => {
    try {
      const query = `DELETE FROM booking WHERE usersID = ? AND bookingID = ?`;
      const [result] = await pool.query(query, [usersID, bookingID]);
      return result.affectedRows > 0;
    } catch (error) {
      console.error('Error deleting booking:', error);
      throw error;
    }
  };
  //delete all bookings by 1 user
  const deleteUserBookingsDb = async (usersID) => {
    try {
      const query = `DELETE FROM booking WHERE usersID = ?`;
      const [result] = await pool.query(query, [usersID]);
      return result.affectedRows > 0;
    } catch (error) {
      console.error('Error deleting booking:', error);
      throw error;
    }
  };
export { getUsersDb, getUserDb, getUserEmailDb, insertUsersDb, deleteUserDb, updateUsersDb, insertBookingDb, getAllBookingDb, getAllBookingsDb, getBookingDb, updateBookingDb, deleteAllBookingDb, deleteBookingDb, deleteUserBookingsDb }