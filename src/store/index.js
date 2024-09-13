import { createStore } from 'vuex'
import axios from 'axios';
import { toast } from 'vue3-toastify';
import 'vue3-toastify/dist/index.css';
import { useCookies } from 'vue3-cookies';

const {cookies} = useCookies()
const apiURL = 'http://localhost:5004/';
// const apiURL = 'https://capstone-1-u51y.onrender.com/';
axios.defaults.withCredentials= true
axios.defaults.headers =cookies.get('token')

export default createStore({
  state: {
    allEquipment: [],
    users: [],
    equipment: null,
    user: null,
    usersID: null,
    bookings:[],
    token: null,
    bookedEquipment: null,
  },
  getters: {
  },
  mutations: {
    setAllEquipment(state,payload){
      state.allEquipment = payload;
    },
    setEquipment(state,payload){
      state.equipment = payload;
    },
    setUsers(state, payload) {
      state.users = payload;
    },
    setUser(state, payload) {
      state.user = payload;
    },
    setUsersID(state, payload){
      state.usersID = payload;
    },
    setToken(state,payload){
      state.token = payload;
    }
  },
  actions: {
    async getAllEquipment({ commit }) {
      try {
        let response;
    
        // Check if the cookie exists and is valid
        if (cookies.get('token')) { // Replace 'yourCookieName' with the actual cookie name
          // Fetch data for authenticated users
          response = await axios.get(`${apiURL}equipment`);
        } else if(!cookies.get('token')){
          // Fetch general data if no valid cookie is found
          response = await axios.get(`${apiURL}equipment/general`);
        }
    
        const data = response.data;
        console.log(data);
    
        // Commit the data to the Vuex store
        commit('setAllEquipment', data.data);
        commit('setUsersID', data.user_id);
    
      } catch (error) {
        console.log('Error fetching equipment:', error.message);
      }
    },
    
    async getEquipment({ commit }, id) {
      try {
        const { data } = await axios.get(`${apiURL}equipment/${id}`);
        console.log(data);
        commit('setEquipment', data[0]);
      } catch (error) {
        console.error('Error fetching equipment:', error);
      }
    },
    async insertEquipment({ commit }, equipment) {
      try {
        const response = await axios.post(`${apiURL}equipment`, equipment);
        const data = response.data;
        console.log('Equipment added:', data.message);
        if (data.message) {
          toast('Item Added Successfully', {
            theme: 'dark',
            type: 'default',
            position: 'top-center',
            dangerouslyHTMLString: true,
          });
        }
      } catch (error) {
        console.error('Error adding equipment:', error);
      }
    },
    async updateEquipment({ commit }, equipment) {
      try {
        const { data } = await axios.patch(`${apiURL}equipment/${equipment.equipmentID}`, equipment);
        console.log('Equipment updated:', data);
        if (data.message) {
          toast('Item Updated Successfully', {
            theme: 'dark',
            type: 'default',
            position: 'top-center',
            dangerouslyHTMLString: true,
          });
        }
      } catch (error) {
        console.error('Error updating equipment:', error);
      }
    },
    async deleteEquipment({ commit }, id) {
      try {
        const { data } = await axios.delete(`${apiURL}equipment/${id}`);
        console.log('Euipment deleted:', data);
        if (data.message) {
          toast('Item Deleted Successfully', {
            theme: 'dark',
            type: 'default',
            position: 'top-center',
            dangerouslyHTMLString: true,
          });
        }
      } catch (error) {
        console.error('Error deleting equipment:', error);
      }
    },
    async getUsers({ commit }) {
      try {
        const { data } = await axios.get(`${apiURL}users`)
        console.log(data);
        commit('setUsers', data)
      } catch (error) {
        console.log(error)
      }
    },
    async updateUser({ commit }, user) {
      try {
        const { data } = await axios.patch(`${apiURL}users/${user.usersID}`, user)
        if (data.message) {
          toast("User Updated Successfully", {
            theme: "dark",
            type: "default",
            position: "top-center",
            dangerouslyHTMLString: true
          })
        }
      } catch (error) {
        console.log(error)
      }
    },
    async insertUsers({ commit }, user) {
      try {
        const response = await axios.post(`${apiURL}users`, user);
        const data = response.data;
        console.log('User added:', data.message);
        if (data.message) {
          toast('Item Added Successfully', {
            theme: 'dark',
            type: 'default',
            position: 'top-center',
            dangerouslyHTMLString: true,
          });
        }
      } catch (error) {
        console.error('Error adding user:', error);
      }
    },
    async deleteUser({ commit }, id) {
      try {
        const { data } = await axios.delete(`${apiURL}users/${id}`);
        console.log('User deleted:', data);
        if (data.message) {
          toast('Item Deleted Successfully', {
            theme: 'dark',
            type: 'default',
            position: 'top-center',
            dangerouslyHTMLString: true,
          });
        }
      } catch (error) {
        console.error('Error deleting User:', error);
      }
    },
    async loginUser({ commit }, info) {
      try {
        const { data } = await axios.post(`${apiURL}users/login`, info);
        console.log(data);
        commit('setToken', data.token);
        $cookies.set('token', data.token);
        if (data.message) {
          toast("Logged In Successfully", {
            "theme": "dark",
            "type": "default",
            "position": "top-center",
            "dangerouslyHTMLString": true
          });
        }
      } catch (error) {
        console.error('Error logging in:', error);
        toast("Error logging in. Please try again.", {
          "theme": "auto",
          "type": "error",
          "position": "top-center",
          "dangerouslyHTMLString": true
        });
      }
    },
    async getUser({ commit },id) {
      try {
        const { data } = await axios.get(`${apiURL}users/${id}`)
        console.log(data);
        commit('setUser', data)
      } catch (error) {
        console.log(error)
      }
    },
    //bookings
    async insertBookingDb({ commit, state}, payload){
      console.log(state.usersID)
      const {equipmentID,bookingDate} = payload;
      console.log(payload)
      console.log(`insertBookingDb bookingDate:`, bookingDate);
      try{
        const usersID = state.usersID || cookies.get('usersID');
        console.log('Inserting booking with:',{ equipmentID, usersID, bookingDate});
        const response = await axios.post(`${apiURL}users/${usersID}/booking`,{
          equipmentID: equipmentID,
          bookingDate: bookingDate,
        });
        if (response.data.message) {
          toast("Order saved successfully!", {
            "theme": "auto",
            "type": "default",
            "position": "top-center",
            "dangerouslyHTMLString": true
          });
          // location.reload();
        }
      } catch (error) {
        console.error(error);
        toast("Login to hire.", {
          "theme": "auto",
          "type": "error",
          "position": "top-center",
          "dangerouslyHTMLString": true
        });
      }
    }
  },
  modules: {
  }
})
