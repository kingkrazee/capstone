<template>
    <section class="equipment">
      <div class="container-fluid">
        <div v-if="equipment()">
          <div class="equipment-card">
            <div class="equipment-detail">
              <div class="equipment-image">
                <img :src="$store.state.equipment.equipURL" :alt="$store.state.equipment.equipName" class="equipment-img">
              </div>
              <div class="equipment-text">
                <h1 class="equipment-name">{{$store.state.equipment.equipmentName}}</h1>
                <h4 class="equipment-cate">Category: {{$store.state.equipment.category}}</h4>
                <p class="card-text">Description: {{$store.state.equipment.description}}</p>
                <div class="pp">
                  <div class="price">
                    <p class="card-text">Price: R{{$store.state.equipment.amount}}</p>
                  </div>
                  <div class="purchase">
                    <button @click="purchaseAlert(equipment.equipName)" class="btn">Purchase</button>
                  </div>
                </div>
              </div>
            </div>
        </div>
    </div>
</div>
</section>
<button @click="$router.go(-1)" class="continue-shopping"><i class="bi bi-arrow-bar-left"></i>Continue Shopping</button>
  </template>
  <script >
  export default{
    methods: {
        getEquipment(){
            this.$store.dispatch('getEquipment',this.$route.params.id);
        },
        equipment() {
            return this.$store.state.equipment;
        },
        purchaseAlert(equipName) {
            alert(`You have purchased ${equipName}`);
        },
    },
    mounted() {
        this.getEquipment();
    },
  }
  </script>
  <style scoped>
  .equipment{
    margin-top: 4rem;
    color: black;
    padding: 1rem;
    margin-left: 28rem;
  }
  .equipment-card{
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    padding: 2rem;
  }
  .equipment-detail {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
  }
  .equipment-name {
    margin-top: 1rem;
  }
  .equipment-desc{
    text-align: left;
    margin-top:3rem;
    margin-bottom:2rem;
  }
  .equipment-text {
    flex-basis: 70%;
    padding-left: 1rem;
  }
  .equipment-cate {
    margin-top: 0.5rem;
  }
  .pp {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .price {
    flex-basis: 50%;
  }
  .equipment-img {
  width: 30rem;
  height: auto;
  border: 1px solid #ddd; /* Add a 1px solid gray border */
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.8); /* Add a subtle shadow */
  border-radius: 0.5rem; /* Add a slight rounded corner */
    }
  .desc-sec{
    width: 80rem;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    border-radius: 0.5rem;
    margin: 0 auto;
    display: flex;
    justify-content: center;
  }
  .desc-sec h3, .desc-sec .equipment-desc {
    text-align: left;
    margin-left: 0;
  }
  .purchase {
    flex-basis: 50%;
  }
  
  .purchase button.btn {
    border: none;
    border-radius: 0.5rem;
    padding: 0.5rem 1rem;
    font-size: 1.2rem;
    cursor: pointer;
    transition: background-color 0.3s ease;
    position: relative; /* Add this */
  }
  .purchase button.btn::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 0;
    height: 100%;
    border: 2px solid #000000;
    transition: width 0.3s ease;
    border-radius: 0.5rem;
  }
  .purchase button.btn:hover::before {
    width: 100%;
  }
  .continue-shopping {
    position: relative;
    background-color: #000000;
    border: none;
    border-radius: 0.5rem;
    padding: 0.5rem 1rem;
    font-size: 1.2rem;
    cursor: pointer;
    transition: background-color 0.3s ease;
    color: white;
    height: 50px;
    width: 250px;
    margin-bottom: 2rem;
    margin-left: 1rem;
  }
  .continue-shopping:hover {
    background-color: #393939;
  }
  .continue-shopping::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 0;
    height: 100%;
    border: 2px solid #c6c6c6;
    transition: width 0.3s ease;
    border-radius: 0.5rem;
  }
  .continue-shopping:hover::before {
    width: 100%;
  }
  .card-text {
    margin-top: 0.5rem;
  }
  @media screen and (max-width: 300px) {
    .equipment{
      margin-top: 3.5rem;
  }
  .equipment-card {
      grid-template-columns: repeat(1, 1fr);
      padding: 1rem;
    }
    .equipment-detail {
      width: 100%;
      padding: 0.5rem;
    }
    .equipment-name {
      font-size: 1.2rem;
    }
    .equipment-desc {
      font-size: 1rem;
      margin-top: 1rem;
      margin-bottom: 1rem;
    }
    .equipment-cate {
      font-size: 1rem;
      margin-top: 1rem;
      margin-bottom: 1rem;
    }
    .pp {
      grid-template-columns: repeat(1, 1fr);
    }
    .price {
      text-align: left;
    }
    .equipment-img {
      width: 100%;
      height: auto;
      margin: 0 auto;
    }
    .btn {
      width: 100%;
      margin-top: 1rem;
    }
  }
  </style>