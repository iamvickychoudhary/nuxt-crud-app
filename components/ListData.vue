<template>
  <div class="container">
    <h2 class="text-center mt-4 mb-4">List of Items</h2>
    <div v-if="items.length === 0" class="alert alert-info">No items to display.</div>
    <div v-else>
      <table class="table table-striped">
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Address</th>
            <th>Mobile</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="item in items" :key="item.id">
            <td>{{ item.name }}</td>
            <td>{{ item.email }}</td>
            <td>{{ item.address }}</td>
            <td>{{ item.mobile }}</td>
            <td>
              <button @click="editItem(item)" class="btn btn-primary btn-sm mx-2">Edit</button>
              <button @click="deleteItem(item.id)" class="btn btn-danger btn-sm">Delete</button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useRouter } from 'vue-router';
import { useItems } from '~/composables/userDataState';

const { items, deleteItem } = useItems();
const router = useRouter();

const editItem = (item: any) => {
  router.push(`/user/${item.id}`);
};
</script>
