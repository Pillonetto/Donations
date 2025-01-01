<script setup lang="ts">
import { RouterView } from 'vue-router'
import { provideSafeArea } from './stores/SafeAreaStore'
import Toaster from './components/ui/toast/Toaster.vue'

const safeArea = provideSafeArea()
safeArea.init()
</script>

<template>
  <Toaster />
  <RouterView />
</template>
