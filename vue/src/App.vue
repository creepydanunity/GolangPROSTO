<script setup>
import CardWrapper from './components/CardWrapper.vue'
import Navbar from './components/Navbar.vue';
import { ref, onMounted } from 'vue';
import { ComponentsGetterClient } from './api/proto/card_grpc_web_pb';
import { PageReply, PageRequest } from './api/proto/card_pb';

const page = ref({});

const pageService = new ComponentsGetterClient('http://localhost:8080');

const request = new PageRequest();
request.setMessage('1');

pageService.GetPage(request, {}, function(err, response) {
  page.value = response.comps;
  console.log(page.value);
});


</script>

<template>
  
  <div>
    <Navbar/>
    <CardWrapper/>
  </div>
</template>

<style scoped>

</style>
