<template>
    <div class="hiring">
        <h1>Hiring</h1>
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
      <CardComp v-for="equipment in sortedFilteredEquipment" :key="equipment.equipmentID" class="card">
        <template #cardHeader>
          <img :src="equipment.equipURL" :alt="equipment.equipName" class="card-image">
        </template>
        <template #cardBody>
          <div class="details">
            <h4 class="equipment-name">{{ equipment.equipName }}</h4>
            <p>Amount: R{{ equipment.amount }}</p>
          </div>
          <div class="button-container">
            <button class="purchase-btn" data-bs-toggle="modal" data-bs-target="#hireModal" @click="this.selected= equipment.equipmentID">Hire</button> 
            <!-- @click="hire(equipment.equipmentID)"  -->
            <button @click="$router.push(`/equipment/${equipment.equipmentID}`)" class="view-more-btn">View More</button>
          </div>
        </template>
      </CardComp>
    </div>
    <!-- HIRE MODAL -->
    <div class="modal" id="hireModal" tabindex="-1">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title">Date</h5>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
        <input type="date" v-model="date">
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal"><i class="bi bi-x-circle"></i></button>
        <button type="button" class="btn btn-primary" @click="newHire()">Hire</button>
      </div>
    </div>
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
            sortKey: 'equipName',
            sortOrder: 'asc',
            date: null,
            selected:null,
        };
    },
    computed: {
        filteredEquipment() {
            const categories = ['Furniture', 'Linen', 'Extras'];
            return this.AllEquipment()
                ?.filter(equipment => categories.includes(equipment.category) &&
                    equipment.equipName.toLowerCase().includes(this.searchQuery.toLowerCase()));
        },
        sortedFilteredEquipment() {
            return this.filteredEquipment?.sort((a, b) => {
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
        },
        book(equipmentID) {
        const existingEquipment = this.$store.state.bookedEquipment.find(equipment => equipment.equipmentID === equipmentId);
        if (existingEquipment) {
            this.$store.commit('updateBookedEquipmentQuantity', { equipmentID: equipmentID, quantity: existingEquipment.quantity + 1 });
        } else {
            this.$store.dispatch('getEquipment', equipmentID).then(equipment => {
                  console.log('Adding product to booked equipment:', equipment);
                  this.$store.commit('setBookedEquipment', equipment);
            });
        }
        if (this.$cookies.get('token')) {
            this.$router.push({ name: 'checkout', params: { equipmentID: equipmentID } });
        } else {
            this.$router.push({ name: 'login' });
        }
        },
        newHire(){
            console.log(this.$store.state.userID)
            this.$store.dispatch('insertBookingDb', {equipmentID:this.selected,bookingDate:this.date})
        }
          },
    mounted() {
        this.getAllEquipment();
    }
}
</script>

<style scoped>
.hiring {
    display: flex;
    justify-content: center;
    font-family: "Baskervville SC", serif;
    margin-top: 6rem;
    color: black;
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
.sort-select option{
    background-color: black;
    color: white;
}
.cards-container {
    display: flex;
    flex-wrap: wrap;
    gap: 20px;
    justify-content: center;
    padding: 20px;
}

.card-image {
    width: 100%;
    height: 300px;
    object-fit: cover;
    border-radius: 4px; 
}

.details {
    background-color: rgba(0, 0, 0, 0.485);
    border-radius: 1rem;
    padding: 1rem;
    font-family: "Baskervville SC", serif;
}

.button-container {
    display: flex;
    justify-content: space-between;
    gap: 10px;
}

.purchase-btn, .view-more-btn {
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
.modal-dialog {
  max-width: 300px; 
  margin: 40px auto; 
}
.modal-content {
  padding: 20px;
  background-color: #424242;
  color: white;
  font-family: "Baskervville SC", serif;
  border: rgb(255, 255, 255) solid 1px;
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
