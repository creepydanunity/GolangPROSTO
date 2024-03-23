<script setup>
import CardWrapper from './components/CardWrapper.vue'
import Navbar from './components/Navbar.vue';
import { ref, onMounted } from 'vue';
import { PageRequest, PageReply } from './api/proto/card_pb';
import ComponentsGetterClient from './api/proto/card_grpc_web_pb'

const page = ref({});

const client = new ComponentsGetterClient("http://localhost:8080", null, null);

const request = new PageRequest();
//...
client.getPage(getRequest, {}, (err, response) => {
  if (response) {
    page.value = response.toObject();
    console.log(page.value);
  }
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
