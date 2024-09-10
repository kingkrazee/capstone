<template>
    <section class="inner-admin">
      <!-- Equipment Table -->
       <div class="button-container">
           <button type="button" id="add" class="btn" data-bs-toggle="modal" data-bs-target="#adminAddEquipment">Add New Equipment</button>
       </div>
      <div class="admin-page-table">
        <table>
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Image</th>
              <th>Category</th>
              <th>Amount</th>
              <th>Quantity</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody id="table-products">
            <tr v-for="equipment in $store.state.allEquipment" :key="equipment.equipmentID">
              <td>{{ equipment.equipmentID }}</td>
              <td>{{ equipment.equipName }}</td>
              <td>
                <img :src="equipment.equipURL" alt="item Image" class="img-fluid" width="auto" height="auto" />
              </td>
              <td>{{ equipment.category }}</td>
              <td>R {{ equipment.amount }}</td>
              <td>{{ equipment.quantity }}</td>
              <td>
                <edit-equipment :equipment="equipment" />
                <button @click="deleteEquipment(equipment)" class="btn">Delete</button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
  
      <!-- User Table -->
       <div class="button-container">
           <button type="button" id="add" class="btn" data-bs-toggle="modal" data-bs-target="#adminAddUser">Add New User</button>
       </div>
      <div class="user-page-table">
        <table>
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Gender</th>
              <th>Role</th>
              <th>Profile</th>
              <th>Email</th>
              <th>Password</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody id="table-users">
            <tr v-for="user in $store.state.users" :key="user.usersID">
              <td>{{ user.usersID }}</td>
              <td>{{ user.firstName }} {{ user.lastName }}</td>
              <td>{{ user.gender }}</td>
              <td>{{ user.usersRole }}</td>
              <td>{{ user.usersProfile }}</td>
              <td>{{ user.emailAdd }}</td>
              <td>{{ user.usersPass }}</td>
              <td>
                <edit-user :user="user" />
                <button @click="deleteUser(user)" class="btn">Delete</button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
  
      <!-- Modals for Adding Equipment and User -->
      <div class="modal fade" id="adminAddEquipment" data-bs-backdrop="static" tabindex="-1" aria-labelledby="addEquipmentLabel" aria-hidden="true">
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-header">
              <h1 class="modal-title fs-5" id="addEquipmentLabel">Add a New Item</h1>
              <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div class="modal-body">
              <form>
                <input class="form-control m-2" type="text" placeholder="Enter Equipment name" v-model="newEquip.equipName" required />
                <input class="form-control m-2" type="number" placeholder="Enter Equipment quantity" v-model="newEquip.quantity" required />
                <input class="form-control m-2" type="text" placeholder="Enter Equipment amount" v-model="newEquip.amount" required />
                <input class="form-control m-2" type="text" placeholder="Enter Equipment category" v-model="newEquip.category" required />
                <input class="form-control m-2" type="text" placeholder="Enter Equipment image URL" v-model="newEquip.equipURL" />
                <div class="modal-footer">
                  <button type="close" class="btn" data-bs-dismiss="modal">Close</button>
                  <button type="reset" class="btn" data-bs-dismiss="modal">Clear</button>
                  <button type="submit" class="btn" @click="insertEquipment">Save</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
  
      <!-- Add New User Modal -->
      <div class="modal fade" id="adminAddUser" data-bs-backdrop="static" tabindex="-1" aria-labelledby="addUserLabel" aria-hidden="true">
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-header">
              <h1 class="modal-title fs-5" id="addUserLabel">Add a New User</h1>
              <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div class="modal-body">
              <form>
                <input class="form-control m-2" type="text" placeholder="Enter Name" v-model="newUser.firstName" required />
                <input class="form-control m-2" type="text" placeholder="Enter Surname" v-model="newUser.lastName" required />
                <input class="form-control m-2" type="number" placeholder="Enter Age" v-model="newUser.usersAge" required />
                <input class="form-control m-2" type="text" placeholder="Enter Gender" v-model="newUser.gender" required />
                <input class="form-control m-2" type="text" placeholder="Enter Role" v-model="newUser.usersRole" required />
                <input class="form-control m-2" type="text" placeholder="Enter Profile" v-model="newUser.usersProfile" required />
                <input class="form-control m-2" type="text" placeholder="Enter Email" v-model="newUser.emailAdd" required />
                <input class="form-control m-2" type="text" placeholder="Enter Password" v-model="newUser.usersPass" required />
                <div class="modal-footer">
                  <button type="close" class="btn" data-bs-dismiss="modal">Close</button>
                  <button type="reset" class="btn" data-bs-dismiss="modal">Clear</button>
                  <button type="submit" class="btn" @click="insertUsers">Add</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  </template>
  
  <script>
  import EditEquipment from '@/components/EditEquipment.vue';
  import EditUser from '@/components/EditUser.vue';
  export default {
    data() {
      return {
        newEquip: {
          equipName: '',
          quantity: '',
          amount: '',
          category: '',
          equipURL: '',
        },
        newUser: {
          firstName: '',
          lastName: '',
          usersAge: '',
          gender: '',
          usersRole: '',
          emailAdd: '',
          usersProfile: '',
          usersPass: ''
        }
      };
    },
    components: {
      EditEquipment,
      EditUser,
    },
    methods: {
      getAllEquipment() {
        this.$store.dispatch('getAllEquipment');
      },
      getUsers() {
        this.$store.dispatch('getUsers');
      },
      insertEquipment() {
        this.$store.dispatch('insertEquipment', this.newEquip);
      },
      insertUsers() {
        this.$store.dispatch('insertUsers', this.newUser);
      },
      deleteEquipment(equipment) {
        this.$store.dispatch('deleteEquipment', equipment.equipmentID)
        .then(() =>{
            this.$router.go()
        });
      },
      deleteUser(user) {
        this.$store.dispatch('deleteUser', user.usersID)
        .then(() =>{
            this.$router.go()
        });
      }
    },
    computed: {
      equipment() {
        return this.$store.state.allEquipment;
      },
      users() {
        return this.$store.state.users;
      }
    },
    mounted() {
      this.getAllEquipment();
      this.getUsers();
    }
  };
  </script>
  
  <style scoped>
  .inner-admin {
    margin-top: 3.9rem;
  }
  .admin-page-table,
  .user-page-table {
    width: auto;
    display: grid;
    justify-content: center;
  }
  .button-container{
    display: flex;
    justify-content: center;
  }
  table {
    background: rgba(51, 51, 51, 0.8);
    border-radius: 0.25em;
    border-collapse: collapse;
    margin: 1em;
    width: 80rem;
    border: 1px solid #ccc;
  }
  
  th {
    border-bottom: 1px solid #364043;
    color: #ffffff;
    font-size: 0.85em;
    font-weight: 600;
    padding: 0.5em 1em;
    text-align: left;
  }
  th, td {
  border: 1px solid #ccc;
  padding: 0.75em 1em;
  text-align: left;
}
  td {
    color: #fff;
    font-weight: 400;
    padding: 0.65em 1em;
  }
  
  tbody tr {
    transition: background 0.25s ease;
  }
  
  tbody tr:hover {
    background: #1c1c1c82;
  }
  
  .img-fluid {
    max-width: 100px;
    height: auto;
  }
  #add{
    width: 200px;
  }
  .btn {
    color: white;
    background-color: #000000;
    margin-top: 40px;
    width: 80px;
  }
  
  .modal-body form input {
    border: none;
  }
  </style>
  