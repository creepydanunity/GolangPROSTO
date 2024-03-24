<script setup lang="ts">
import CardWrapper from './components/CardWrapper.vue'
import Navbar from './components/Navbar.vue';
import { ref, onMounted } from 'vue';
import { PageReply, PageRequest } from './proto/card';
//import { PageRequest } from './proto/card'

const page = ref({});

//request.setMessage('1');

// pageService.GetPage(request, {}, function(err, response) {
//   page.value = response.comps;
//   console.log(page.value);
// });


</script>

<template>
  
  <div>
    <Navbar/>
    <CardWrapper/>
  </div>
</template>

<style scoped>

</style>