<template>
    <div class="checkout-container">
      <table class="checkout-table">
        <thead>
          <tr>
            <th>Image</th>
            <th>Product Name</th>
            <th>Category</th>
            <th>Amount</th>
            <th>Price</th>
            <th>Total Price</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="equipment in $store.state.allEquipment" :key="equipment.equipmentID">
            <td>
              <img :src="equipment.equipURL" alt="item Image" class="img-fluid" width="auto" height="auto" />
            </td>
            <td>{{ equipment.equipName }}</td>
            <td>{{ equipment.category }}</td>
            <td>R{{ equipment.amount }}</td>
            <td></td>
            <td></td>
            <td>
              <button @click="removeItem(index)" class="btn btn-danger">Remove</button>
            </td>
          </tr>
        </tbody>
      </table>
  
      <div class="total-section">
        <p>Total Amount: </p> 
        <button @click="checkout" class="btn btn-success">Checkout</button>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    // computed: {
    //   totalPrice() {
    //     return this.products.reduce((acc, item) => {
    //       return acc + item.price * item.amount;
    //     }, 0);
    //   }
    // },
    data() {
      return {
        newEquip: {
          equipName: '',
          quantity: '',
          amount: '',
          category: '',
          equipURL: '',
        },
      }
    },
    computed:{
        allEquipment(){
            console.log('booked equipment:',this.$store.state.bookedEquipment)
            return this.$store.state.bookedEquipment
        },
        usersID(){
            return this.$store.state.usersID || this.$cookies.get('usersID')
        }
    },
    methods: {
      removeItem(index) {
        this.products.splice(index, 1);
      },
      checkout() {
        alert("Proceeding to checkout!");
      }
    }
  };
  </script>
  
  <style scoped>
  .checkout-container {
    margin: 2rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 6rem;
  }
  
  .checkout-table {
    width: 100%;
    max-width: 900px;
    border-collapse: collapse;
    margin-bottom: 1.5rem;
  }
  
  .checkout-table th,
  .checkout-table td {
    padding: 1rem;
    border: 1px solid #ddd;
    text-align: center;
  }
  
  .product-img {
    max-width: 100px;
    height: auto;
  }
  
  .total-section {
    margin-top: 1rem;
  }
  
  .btn {
    padding: 0.5rem 1rem;
    cursor: pointer;
  }
  
  .btn-danger {
    background-color: #ff4d4f;
    color: white;
    border: none;
  }
  
  .btn-success {
    background-color: #000000;
    color: white;
    border: none;
  }
  .img-fluid {
    max-width: 100px;
    height: auto;
  }
  </style>
  