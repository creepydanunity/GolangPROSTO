<template>
    <div class="marketplace-wrapper">
      <slot ></slot>
    </div>
  </template>
  
  <script setup lang="ts">
  import { ref } from 'vue';
  import Card from './Card.vue';
  
  function handleAddToCart() {
    console.log('Added to cart:', 'eh');
    // ...
  }
  </script>
  
  <style scoped>
  .marketplace-wrapper {
    display: flex;
    flex-wrap: wrap;
    gap: 2rem;
    justify-content: center;
  }
  </style>
  