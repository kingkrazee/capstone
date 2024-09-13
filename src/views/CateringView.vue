<template>
    <div class="catering">
        <h1>Catering</h1>
    </div>
    <div class="controls">
        <input v-model="searchQuery" type="text" placeholder="Search by name..." class="search-input" />
        <select v-model="sortKey" class="sort-select">
            <option value="equipName">Sort by Name</option>
            <option value="amount">Sort by Amount</option>
        </select>
        <select v-model="sortOrder" class="sort-select">
            <option value="asc">Asc</option>
            <option value="desc">Desc</option>
        </select>
    </div>
    <div class="cards-container">
      <CardComp v-for="equipment in filteredEquipment" :key="equipment.equipmentID" class="card">
        <template #cardHeader>
          <img :src="equipment.equipURL" :alt="equipment.equipName" class="card-image">
        </template>
        <template #cardBody>
          <div class="details">
            <h4 class="equipment-name">{{ equipment.equipName }}</h4>
            <p>Amount: R{{ equipment.amount }}</p>
          </div>
          <div class="button-container">
            <button @click="$router.push(`/Checkout`)" class="purchase-btn">Hire</button>
            <button @click="$router.push(`/equipment/${equipment.equipmentID}`)" class="view-more-btn">View More</button>
          </div>
        </template>
      </CardComp>
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
              sortKey: 'equipName',
              sortOrder: 'asc',
          };
      },
      computed: {
          filteredEquipment() {
              const categories = ['Crockery', 'Cutlery', 'Serving Dishes', 'Kitchenware', 'Glasses'];
              return this.AllEquipment()
                  ?.filter(equipment => categories.includes(equipment.category) &&
                      equipment.equipName.toLowerCase().includes(this.searchQuery.toLowerCase()));
          },
          sortedFilteredEquipment() {
              return this.filteredEquipment.sort((a, b) => {
                  let modifier = this.sortOrder === 'asc' ? 1 : -1;
                  if (this.sortKey === 'equipName') {
                      return a.equipName.localeCompare(b.equipName) * modifier;
                  } else if (this.sortKey === 'amount') {
                      return (a.amount - b.amount) * modifier;
                  }
                  return 0;
              });
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
  
  .catering{
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
  .controls {
    display: flex;
    justify-content: flex-end;
    gap: 20px;
    margin-bottom: 20px;
    margin-right: 8rem;
}

.search-input, .sort-select {
    padding: 10px;
    border: 1px solid #ddd;
    border-radius: 4px;
    font-size: 1rem;
    background-color: #ddd
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
  .content button{
    pointer-events: auto;
  }
  @media (max-width: 780px) {
  .controls {
    align-items: center;
    margin-right: 1.5rem;
  }
  
  .search-input, .sort-select {
    width: 100px;
    margin-bottom: 10px;
  }
}
  </style>
  