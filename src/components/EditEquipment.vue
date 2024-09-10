<template>
    <div>
        <button type="button" class="btn" data-bs-toggle="modal" :data-bs-target="'#adminEditEquipment'+equipment.equipmentID">Edit</button>
        <div class="modal fade" :id="'adminEditEquipment'+equipment.equipmentID" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="editequiLabel" aria-hidden="true">
            <div class="modal-dialog">
                <div class="modal-content">
                    <div class="modal-header">
                        <h1 class="modal-title fs-5" id="editEquipmentLabel">Edit equipment</h1>
                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div class="modal-body">
                        <form>
                            <div class="container">
                                <input class="form-control m-2" type="text" placeholder="Enter equipment ID" v-model="updateEquipment.equipmentID" required readonly>
                                <input class="form-control m-2" type="text" placeholder="Enter equipment name" v-model="updateEquipment.equipName" required>
                                <input class="form-control m-2" type="text" placeholder="Enter equipment image URL" v-model="updateEquipment.equipURL" required>
                                <input class="form-control m-2" type="text" placeholder="Enter equipment category" v-model="updateEquipment.category" required>
                                <input class="form-control m-2" type="number" placeholder="Enter equipment amount" v-model="updateEquipment.amount" required>
                                <input class="form-control m-2" type="number" placeholder="Enter equipment quantity" v-model="updateEquipment.quantity" required>
                            </div>
                            <div class="modal-footer">
                                <button type="reset" class="btn btn-outline-success" data-bs-dismiss="modal">Clear</button>
                                <button type="button" class="btn btn-outline-success" data-bs-dismiss="modal">Close</button>
                                <button type="submit" class="btn btn-outline-success" @click="updateEquipmentFx()">Save Changes</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    props:['equipment'],
    data(){
        return{
            updateEquipment: {
                equipmentID: this.equipment.equipmentID,
                equipName: this.equipment.equipName,
                equipURL: this.equipment.equipURL,
                category: this.equipment.category,
                amount: this.equipment.amount,
                quantity: this.equipment.quantity
            },
        }
    },
    methods:{
        updateEquipmentFx() {
            this.$store.dispatch('updateEquipment', this.updateEquipment);
        },
    }
}
</script>
<style scoped>
    .btn {
    color: white;
    background-color: #000000;
    margin-top: 40px;
    border: none;
}
button.btn:hover {
    background-color: #565656;;
    color: white;
    border: none;
}
</style>