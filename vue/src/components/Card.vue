<template>
    <div class="item-card">
        <img :src="item.image" alt="?" class="item-image" />
        <h3 class="item-name">{{ item.name }}</h3>
        <p class="item-price">{{ item.price }}р.</p>
        <button @click="addToCart">В корзину</button>
    </div>
</template>

<script setup>
import { defineProps, defineEmits } from 'vue';

const props = defineProps({
    item: {
        type: Object,
        required: true,
    },
});

const emit = defineEmits(['add-to-cart']);

const addToCart = () => {
    emit('add-to-cart', props.item);
};
</script>

<style scoped>
.item-card {
    border: 1px solid #ddd;
    padding: 20px;
    margin: 10px;
    border-radius: 8px;
    text-align: center;
}

.item-image {
    max-width: 10rem;
    height: auto;
    margin-bottom: 10px;
}

.item-name {
    margin: 10px 0;
}

.item-price {
    margin: 10px 0;
    font-weight: bold;
}
</style>