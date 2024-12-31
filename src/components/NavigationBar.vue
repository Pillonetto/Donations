<template>
  <div class="flex justify-between px-8 align-center h-[90px]">
    <RouterLink to="/map" class="flex items-center">
      <div class="flex flex-col gap-2 items-center justify-center">
        <IconMap :class="route.path === '/map' ? 'text-highlight' : 'text-neutral-500'" />
        <p>Mapa</p>
      </div>
    </RouterLink>
    <RouterLink to="/store" class="flex items-center">
      <div class="flex flex-col gap-2 items-center justify-center">
        <IconStore :class="route.path === '/store' ? 'text-highlight' : 'text-neutral-500'" />
        <p>Recompensas</p>
      </div>
    </RouterLink>
    <RouterLink to="/settings" class="flex items-center">
      <div class="flex flex-col gap-2 items-center justify-center">
        <IconSettings :class="route.path === '/settings' ? 'text-highlight' : 'text-neutral-500'" />
        <p>Ajustes</p>
      </div>
    </RouterLink>
  </div>
</template>
<script setup lang="ts">
import IconMap from './icons/IconMap.vue'
import IconSettings from './icons/IconSettings.vue'
import IconStore from './icons/IconStore.vue'
import { useRoute } from 'vue-router'

const route = useRoute()
</script>
