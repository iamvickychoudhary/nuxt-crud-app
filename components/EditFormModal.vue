<template>
    <div>
        <div class="d-flex justify-content-center mb-3">
           <BButton v-b-modal.modal-center variant="success">Edit Info</BButton>
        </div>

        <BModal id="modal-center" centered title="BootstrapVue">
            <form @submit.prevent="">
                    <div class="row mb-3 mt-3">
                    <div class="col-sm-12 text-center">
                        <h3>Edit Form</h3>
                    </div>
                    </div>
                    <div class="row mb-3">
                    <div class="col-sm-12">
                        <label for="name">Name</label>
                        <input v-model="user_data.name" type="text" id="name" class="form-control" />
                    </div>
                    </div>
                    <div class="row mb-3">
                    <div class="col-sm-12">
                        <label for="email">Email</label>
                        <input v-model="user_data.email" type="email" id="email" class="form-control" />
                    </div>
                    </div>
                    <div class="row mb-3">
                    <div class="col-sm-12">
                        <label for="address">Address</label>
                        <input v-model="user_data.address" type="text" id="address" class="form-control" />
                    </div>
                    </div>
                    <div class="row mb-3">
                    <div class="col-sm-12">
                        <label for="mobile">Mobile</label>
                        <input v-model="user_data.mobile" type="text" id="mobile" class="form-control" />
                    </div>
                    </div>
                    <div class="row">
                    <div class="col-sm-12 text-center">
                        <button type="submit" class="btn btn-primary">Update</button>
                    </div>
                    </div>
            </form>
        </BModal>
     </div>
  
  </template>
  
  <script setup lang="ts">
  import { ref } from 'vue';
  
  
  const isOpen = ref(false);
  
  const props = defineProps({
    user_data: {
      type: Object,
      required: true,
    },
  });
  </script>
  