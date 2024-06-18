<template>
  <div class="container">
    <form @submit.prevent="onSubmit">
      <div class="row mb-3 mt-3">
        <div class="col-sm-12 text-center">
          <h3>Edit Form</h3>
        </div>
      </div>
      <div class="row mb-3">
  <div class="col-sm-12 text-center">
    <img src="https://images.ctfassets.net/h6goo9gw1hh6/2sNZtFAWOdP1lmQ33VwRN3/24e953b920a9cd0ff2e1d587742a2472/1-intro-photo-final.jpg?w=1200&h=992&fl=progressive&q=70&fm=jpg" 
         alt="not available" class="rounded-circle img-thumbnail" style="width: 200px; height: 200px;">
  </div>
</div>

      <div class="row mb-3">
        <div class="col-sm-12">
          <label for="name">Name</label>
          <input v-model="name" type="text" id="name" class="form-control" />
          <span class="text-danger">{{ errors.name }}</span>
        </div>
      </div>
      <div class="row mb-3">
        <div class="col-sm-12">
          <label for="email">Email</label>
          <input v-model="email" type="email" id="email" class="form-control"  />
          <span class="text-danger">{{ errors.email }}</span>
        </div>
      </div>
      <div class="row mb-3">
        <div class="col-sm-12">
          <label for="address">Address</label>
          <input v-model="address" type="text" id="address" class="form-control" />
          <span class="text-danger">{{ errors.address }}</span>
        </div>
      </div>
      <div class="row mb-3">
        <div class="col-sm-12">
          <label for="mobile">Mobile</label>
          <input v-model="mobile" type="text" id="mobile" class="form-control" />
          <span class="text-danger">{{ errors.mobile }}</span>
        </div>
      </div>
      <!-- <div class="row">
        <div class="col-sm-12 text-center">
          <button type="submit" class="btn btn-primary">Update</button>
        </div>
      </div> -->
    </form>
    <EditFormModal :user_data="{ email, name, address, mobile }" />
  </div>
</template>

<script setup lang="ts">
import { useRoute, useRouter } from 'vue-router';
import { ref, onMounted } from 'vue';
import { useItems } from '~/composables/userDataState';
import { useFormHandler } from '~/utils/useFormHandler';
import EditFormModal from './EditFormModal.vue';

const route = useRoute();
const userId = ref(Number(route.params.id));

const { getItemById, updateItem } = useItems();
const { name, email, address, mobile, errors, onSubmit } = useFormHandler();

onMounted(() => {
  const fetchedItem = getItemById(userId.value);
  if (fetchedItem) {
    name.value = fetchedItem.name;
    email.value = fetchedItem.email;
    address.value = fetchedItem.address;
    mobile.value = fetchedItem.mobile;
  } else {
    console.error('Item not found');
  }
});
</script>
