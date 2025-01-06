<template>
  <component :is="icon" />
</template>
<script setup lang="ts">
import type { Component } from 'vue'
import LogoGremio from '../LogoGremio.vue'
import LogoInter from '../LogoInter.vue'
import LogoRenner from '../LogoRenner.vue'
import LogoZaffari from '../LogoZaffari.vue'
import { ItemProvider } from './ItemInfo'

const props = defineProps<{ provider: ItemProvider }>()

const icon: Component = {
  [ItemProvider.GREMIO]: LogoGremio,
  [ItemProvider.INTER]: LogoInter,
  [ItemProvider.RENNER]: LogoRenner,
  [ItemProvider.ZAFFARI]: LogoZaffari,
}[props.provider]
</script>
