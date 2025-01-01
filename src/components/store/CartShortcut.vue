<template>
  <div @click="isDrawerOpen = true">
    <IconCart />
    <CartDrawer v-if="isDrawerOpen" @close="isDrawerOpen = false" v-model:open="isDrawerOpen" />
  </div>
</template>
<script setup lang="ts">
import { ref } from 'vue'
import IconCart from '../icons/IconCart.vue'
import CartDrawer from './CartDrawer.vue'

const isDrawerOpen = ref(false)
</script>
