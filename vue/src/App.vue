<script setup>
import { ref, onMounted } from 'vue';
import Navbar from './components/Navbar.vue';
import CardWrapper from './components/CardWrapper.vue';
import Card from './components/Card.vue';
import { PageReply, PageRequest } from './proto/card';
import * as protobuf from 'protobufjs'

const page = ref(null);

const componentsMap = {
  'NavBar': Navbar,
  'Wrapper': CardWrapper,
  'ItemCard': Card,
};

const get = async () => {
  const res = await fetch('http://localhost:8000/pages/1');
  const data = await res.arrayBuffer();
  const uint_data = new Uint8Array(data);
  const deserialized_data = PageReply.decode(uint_data);

  page.value = deserialized_data;
};

onMounted(() => {
  get();
});

const propsToObject = (props) => {
  return props.reduce((obj, prop) => {
    obj[prop.propName] = prop.propValue;
    return obj;
  }, {});
};
</script>

<template>
  <div>
    <component
      v-if="page"
      v-for="component in page.components"
      :key="component.id"
      :is="componentsMap[component.type]"
      v-bind="propsToObject(component.props)"
    >
      <template v-if="component.children && component.children.length">
        <component
          v-for="child in component.children"
          :key="child.id"
          :is="componentsMap[child.type]"
          v-bind="propsToObject(child.props)"
        />
      </template>
    </component>
  </div>
</template>
