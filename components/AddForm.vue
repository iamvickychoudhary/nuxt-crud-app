<template>
    <div class="container">
      <form @submit.prevent="onSubmit">
        <div class="row mb-3 mt-3">
          <div class="col-sm-12 text-center">
            <h3 for="name">Add Form</h3>
          </div>
        </div>
        <div class="row mb-3">
          <div class="col-sm-12">
            <label for="name">Name</label>
            <input v-model="name" type="text" id="name" class="form-control" placeholder="please enter name"/>
            <span class="text-danger">{{ errors.name }}</span>
          </div>
        </div>
        <div class="row mb-3">
          <div class="col-sm-12">
            <label for="email">Email</label>
            <input v-model="email" type="email" id="email" class="form-control" placeholder="please enter email"/>
            <span class="text-danger">{{ errors.email }}</span>
          </div>
        </div>
        <div class="row mb-3">
          <div class="col-sm-12">
            <label for="address">Address</label>
            <input v-model="address" type="text" id="address" class="form-control" placeholder="please enter address"/>
            <span class="text-danger">{{ errors.address }}</span>
          </div>
        </div>
        <div class="row mb-3">
          <div class="col-sm-12">
            <label for="mobile">Mobile</label>
            <input v-model="mobile" type="text" id="mobile" class="form-control" placeholder=" please enter mobile" />
            <span class="text-danger">{{ errors.mobile }}</span>
          </div>
        </div>
        <div class="row">
          <div class="col-sm-12 text-center">
            <button type="submit" class="btn btn-primary">Submit</button>
          </div>
        </div>
      </form>
    </div>
  </template>
  
  <script setup lang="ts">
  import { useFormHandler } from '~/utils/useFormHandler';
 
  
  const { name, email, address, mobile, errors, onSubmit } = useFormHandler();
  
  </script>
  
  
  