<template>
    <div class="marketplace-wrapper">
      <Card
        v-for="item in items"
        :key="item.id"
        :item="item"
        @add-to-cart="handleAddToCart"
      />
    </div>
  </template>
  
  <script setup>
  import { ref } from 'vue';
  import Card from './Card.vue';
  
  const items = ref([
    {
      id: 1,
      name: 'Поддон',
      price: 149.99,
      image: 'https://partnerpack.by/resource/images/2022/05/poddoni-2.jpg',
    },
    {
      id: 2,
      name: 'Поддон',
      price: 349.99,
      image: 'https://partnerpack.by/resource/images/2022/05/poddoni-2.jpg',
    },
    {
      id: 3,
      name: 'Поддон',
      price: 149.99,
      image: 'https://partnerpack.by/resource/images/2022/05/poddoni-2.jpg',
    },
    {
      id: 4,
      name: 'Поддон',
      price: 349.99,
      image: 'https://partnerpack.by/resource/images/2022/05/poddoni-2.jpg',
    },
    {
      id: 5,
      name: 'Поддон',
      price: 149.99,
      image: 'https://partnerpack.by/resource/images/2022/05/poddoni-2.jpg',
    },
    {
      id: 6,
      name: 'Поддон',
      price: 349.99,
      image: 'https://partnerpack.by/resource/images/2022/05/poddoni-2.jpg',
    },
    {
      id: 7,
      name: 'Поддон',
      price: 149.99,
      image: 'https://partnerpack.by/resource/images/2022/05/poddoni-2.jpg',
    },
    {
      id: 8,
      name: 'Поддон',
      price: 349.99,
      image: 'https://partnerpack.by/resource/images/2022/05/poddoni-2.jpg',
    },{
      id: 9,
      name: 'Поддон',
      price: 149.99,
      image: 'https://partnerpack.by/resource/images/2022/05/poddoni-2.jpg',
    },
    {
      id: 10,
      name: 'Поддон',
      price: 349.99,
      image: 'https://partnerpack.by/resource/images/2022/05/poddoni-2.jpg',
    },
  ]);
  
  function handleAddToCart(item) {
    console.log('Added to cart:', item);
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
  