<script setup lang="ts">
import { RouterView } from 'vue-router'
import { provideSafeArea } from './stores/SafeAreaStore'

const safeArea = provideSafeArea()
safeArea.init()
</script>

<template>
  <RouterView />
</template>
