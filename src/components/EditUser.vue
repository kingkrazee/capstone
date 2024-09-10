<template>
    <div>
        <button type="button" class="btn" data-bs-toggle="modal" :data-bs-target="'#adminEditUsers'+user.usersID">Edit</button>
        <div class="modal fade" :id="'adminEditUsers'+user.usersID" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="editProductLabel" aria-hidden="true">
            <div class="modal-dialog">
                <div class="modal-content">
                    <div class="modal-header">
                        <h1 class="modal-title fs-5" id="editProductLabel">Edit User</h1>
                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div class="modal-body">
                        <form>
                            <div class="container">
                                <input class="form-control m-2" type="text" placeholder="Enter ID" v-model="updateUser.usersID" required>
                                <input class="form-control m-2" type="text" placeholder="Enter Name" v-model="updateUser.firstName" required>
                                <input class="form-control m-2" type="text" placeholder="Enter Surname" v-model="updateUser.lastName" required>
                                <input class="form-control m-2" type="number" placeholder="Enter Age" v-model="updateUser.usersAge" required>
                                <input class="form-control m-2" type="text" placeholder="Enter Gender" v-model="updateUser.gender" required>
                                <input class="form-control m-2" type="text" placeholder="Enter Profile" v-model="updateUser.usersProfile" required>
                                <input class="form-control m-2" type="text" placeholder="Enter Password" v-model="updateUser.usersPass" required>
                                <input class="form-control m-2" type="text" placeholder="Enter Role" v-model="updateUser.usersRole" required>
                                <input class="form-control m-2" type="text" placeholder="Enter Email" v-model="updateUser.emailAdd" required>
                            </div>
                            <div class="modal-footer">
                                <button type="reset" class="btn btn-outline-success" data-bs-dismiss="modal">Clear</button>
                                <button type="button" class="btn btn-outline-success" data-bs-dismiss="modal">Close</button>
                                <button type="submit" class="btn btn-outline-success" @click="updateUsersFx()">Save Changes</button>
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
    props:['user'],
    data(){
        return{
            updateUser: {
                usersID: this.user.usersID,
                firstName: this.user.firstName,
                lastName: this.user.lastName,
                usersAge: this.user.usersAge,
                gender: this.user.gender,
                usersProfile: this.user.usersProfile,
                usersPass: this.user.usersPass,
                usersRole: this.user.usersRole,
                emailAdd: this.user.emailAdd,
            }
        }
    },
    methods:{
        updateUsersFx() {
            this.$store.dispatch('updateUser', this.updateUser);
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
    background-color: #565656;
    color: white;
    border: none;
}
</style>
