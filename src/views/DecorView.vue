<template>
  <div class="theme">
    <h1>Decor</h1>
  </div>

  <div class="controls">
    <input v-model="searchQuery" type="text" placeholder="Search by name..." class="search-input" />
  </div>
  <div class="thecarousel">
    <div id="carouselExampleCaptions" class="carousel slide" data-bs-ride="carousel" data-bs-interval="2000">
      <div class="carousel-indicators">
        <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
        <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
        <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
      </div>
      <div class="carousel-inner">
        <div v-for="(equipment, index) in filteredEquipment" :key="equipment.equipmentID" :class="['carousel-item', { active: index === 0 }]">
          <img :src="equipment.equipURL" class="d-block w-100" :alt="equipment.equipName">
          <div class="carousel-caption d-none d-md-block">
            <h5>{{ equipment.equipName }}</h5>
            <p>Amount: R{{ equipment.amount }}</p>
            <button class="purchase-btn">Hire</button>
            <button @click="$router.push(`/equipment/${equipment.equipmentID}`)" class="view-more-btn">View More</button>
          </div>
        </div>
      </div>
      <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Previous</span>
      </button>
      <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
        <span class="carousel-control-next-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Next</span>
      </button>
    </div>
  </div>
</template>

<script>
import CardComp from '@/components/CardComp.vue';

export default {
    components: {
        CardComp
    },
    data() {
        return {
            searchQuery: '',
        };
    },
    computed: {
        filteredEquipment() {
            const categories = ['Extras'];
            return this.AllEquipment()
                .filter(equipment => categories.includes(equipment.category) &&
                    equipment.equipName.toLowerCase().includes(this.searchQuery.toLowerCase()));
        }
    },
    methods: {
        getAllEquipment() {
            this.$store.dispatch('getAllEquipment');
        },
        AllEquipment() {
            return this.$store.state.allEquipment;
        }
    },
    mounted() {
        this.getAllEquipment();
    }
}
</script>

<style scoped>
.cards-container {
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  justify-content: center;
  padding: 20px;
}

.theme {
  display: flex;
  justify-content: center;
  font-family: "Baskervville SC", serif;
  margin-top: 6rem;
  color: black;
}
.card-image {
  width: 100%;
  height: 300px;
  object-fit: cover;
  border-radius: 4px; 
}
.details{
  background-color: rgba(0, 0, 0, 0.485);
  border-radius: 1rem;
  padding: 1rem;
  font-family: "Baskervville SC", serif;
}
.carousel-inner img {
  width: 100%;
  height: 500px;
  object-fit: cover;
}
.thecarousel{
  margin-bottom: 2rem;
  border: black solid 2px;
  width: 1200px;
  margin-left: 10rem;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
}
.controls {
    display: flex;
    justify-content: flex-end;
    gap: 20px;
    margin-bottom: 20px;
    margin-right: 8rem;
}

.search-input {
    padding: 10px;
    border: 1px solid #ddd;
    border-radius: 4px;
    font-size: 1rem;
}
.button-container{
  display: flex;
  justify-content: space-between;
  gap: 10px;
}
.purchase-btn,
.view-more-btn {
  background-color: #000000c8;
  color: white;
  border: none;
  border-radius: 4px;
  padding: 10px;
  cursor: pointer;
  width: 100%;
  margin-top: 8px;
}
@media (max-width: 780px) {
  .thecarousel {
    width: 100%;
    margin-left: 0; 
  }

  .carousel-inner img {
    height: 300px;
    object-fit: cover;
  }

  .purchase-btn, .view-more-btn {
    font-size: 0.8rem;
    padding: 8px; 
  }
  .controls {
    justify-content: center;
    margin-right: 0;
  }
  .search-input {
    width: 200px;
    padding: 10px;
  }
}
</style>
