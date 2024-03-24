<script setup lang="ts">
import CardWrapper from './components/CardWrapper.vue'
import Navbar from './components/Navbar.vue';
import Card from './components/Card.vue';
import { ref, onMounted } from 'vue';
import { PageReply, PageRequest } from './proto/card';
import * as protobuf from 'protobufjs'
import { h } from 'vue'


const page = ref<PageReply | null>(null);

const get = async () => {
  const res = await fetch('http://localhost:8000/pages/1');
  const data = await res.arrayBuffer();
  const uint_data = new Uint8Array(data)
  const deserialized_data = PageReply.decode(uint_data)

  page.value = deserialized_data

  console.log(deserialized_data);
}

onMounted(() => {
  get();
});

const component_dict = {
  "NavBar": Navbar,
  "Card": Card,
  "CardWrapper": CardWrapper,
}

</script>

<template>
  <div>
    <li v-for="({value}, index) in page">@{{ value[index] }}</li>
  </div>
</template>

<style scoped>

</style>