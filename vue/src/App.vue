<script setup lang="ts">
import CardWrapper from './components/CardWrapper.vue'
import Navbar from './components/Navbar.vue';
import { ref, onMounted } from 'vue';
import { PageReply, PageRequest } from './proto/card';
import * as protobuf from 'protobufjs'

const page = ref({});

const get = async () => {
  const res = await fetch('http://localhost:8000/pages/1')
  const data = await res.json()
  page.value = data
  console.log(page.value)
}

onMounted(() => {
  get()
})


</script>

<template>
  
  <div>
    <Navbar/>
    <CardWrapper/>
  </div>
</template>

<style scoped>

</style>