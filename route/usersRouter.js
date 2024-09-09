import express from 'express'
import { getUsers, getUser, insertUsers, deleteUser, updateUser, loginUser } from '../controller/usersController.js'
import { checkUser, verifyToken } from '../middleware/authenticate.js'
import { insertBookingDb, getAllBookingDb, getAllBookingsDb, getBookingDb, updateBookingDb, deleteAllBookingDb, deleteBookingDb, deleteUserBookingsDb } from '../model/usersDb.js'

const router = express.Router()
router.
    route('/')
        .get(getUsers)
        .post(insertUsers)

router.post('/login',checkUser, loginUser)

// router.
//     route('/booking')
//         .post(insertBooking)
router.post('/:id/booking', async (req, res) => {
    try {
      const usersID = req.params.id;
      const { equipmentID, bookingDate } = req.body;
      if (!equipmentID || !bookingDate) {
        res.status(400).json({ message: 'Missing required fields' });
      } else {
        const booking = await insertBookingDb(usersID, equipmentID, bookingDate);
        if (!booking) {
          res.status(500).json({ message: 'Failed to create booking' });
        } else {
          res.json({ message: 'booking created successfully', booking });
        }
      }
    } catch (error) {
      console.error('Error creating booking:', error);
      res.status(500).json({ message: 'Error creating booking', error });
    }
  });

  router.route('/:usersID/bookings')
  .get( async (req, res) => {
      try {
          const usersID = req.params.usersID;
          const bookings = await getAllBookingDb(usersID);
          if (!bookings) {
              res.status(404).json({ message: `No orders found for user with ID ${usersID}` });
          } else {
              res.json(bookings);
          }
      } catch (error) {
          console.error('Error getting bookings:', error);
          res.status(500).json({ message: 'Error getting bookings', error });
      }
  });
  router.route('/bookings')
  .get( async (req, res) => {
      try {
          const bookings = await getAllBookingsDb();
          if (!bookings) {
              res.status(404).json({ message: `No orders found` });
          } else {
              res.json(bookings);
          }
      } catch (error) {
          console.error('Error getting bookings:', error);
          res.status(500).json({ message: 'Error getting bookings', error });
      }
  });
  router.route('/:usersID/booking/:bookingID')
  .get( async (req, res) => {
    try {
      const usersID = req.params.usersID;
      const bookingID = req.params.bookingID;
      const booking = await getBookingDb(usersID, bookingID);
      if (!booking) {
        res.status(404).json({ message: `booking with ID ${bookingID} not found` });
      } else {
        res.json(booking);
      }
    } catch (error) {
      console.error('Error getting booking:', error);
      res.status(500).json({ message: 'Error getting booking', error });
    }
  });
  router.route('/:usersID/booking/:bookingID')
  .patch(async (req, res) => {
    try {
      const usersID = req.params.usersID;
      const bookingID = req.params.bookingID;
      const updatedBookingData = req.body;
      const updatedBooking = await updateBookingDb(usersID, bookingID, updatedBookingData);
      if (!updatedBooking) {
        res.status(404).json({ message: `booking with ID ${bookingID} not found` });
      } else {
        res.json({ message: `booking with ID ${bookingID} updated successfully` });
      }
    } catch (error) {
      console.error('Error updating booking:', error);
      res.status(500).json({ message: 'Error updating booking', error });
    }
  });
  router.route('/bookings')
  .delete(async (req, res) => {
    try {
      const deletedBooking = await deleteAllBookingDb();
      if (!deletedBooking) {
        res.status(404).json({ message: 'No bookings found to delete' });
      } else {
        res.json({ message: 'bookings deleted successfully' });
      }
    } catch (error) {
      console.error('Error deleting bookings:', error);
      res.status(500).json({ message: 'Error deleting bookings', error });
    }
  });
  router.route('/:usersID/booking/:bookingID')
  .delete(async (req, res) => {
    try {
      const usersID = req.params.usersID;
      const bookingID = req.params.bookingID;
      console.log(`Attempting to delete booking with ID ${bookingID} for user with ID ${usersID}`);
      const deletedBooking = await deleteBookingDb(usersID, bookingID);
      console.log(`Deleted booking: ${deletedBooking}`);
      if (!deletedBooking) {
        console.log(`booking with ID ${bookingID} not found for user with ID ${usersID}`);
        res.status(404).json({ message: `booking with ID ${bookingID} not found for user with ID ${usersID}` });
      } else {
        res.json({ message: `booking with ID ${bookingID} deleted successfully for user with ID ${usersID}` });
      }
    } catch (error) {
      console.error('Error deleting booking:', error);
      res.status(500).json({ message: 'Error deleting booking', error });
    }
  });
  router.route('/:usersID/booking')
  .delete(async (req, res) => {
    try {
      const usersID = req.params.usersID;
      const deletedBookings = await deleteUserBookingsDb(usersID);
      if (!deletedBookings) {
        res.status(404).json({ message: `No bookings found for user with ID ${usersID}` });
      } else {
        res.json({ message: `bookings deleted successfully for user with ID ${usersID}` });
      }
    } catch (error) {
      console.error('Error deleting bookings:', error);
      res.status(500).json({ message: 'Error deleting bookings', error });
    }
  });


router.
    route('/:id')
        .get(getUser)
        .delete(deleteUser)
        .patch(updateUser)


export default router