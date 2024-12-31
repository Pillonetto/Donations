<script setup lang="ts">
import { Carousel, CarouselContent, CarouselItem, type CarouselApi } from '@/components/ui/carousel'
import { useGoals } from '@/stores/GoalsStore'
import SkeletonImage from '../SkeletonImage.vue'
import CarouselCircles from './CarouselCircles.vue'
import { ref, watch } from 'vue'
import { watchOnce } from '@vueuse/core'

const { goals } = useGoals()

const api = ref<CarouselApi>()
const current = ref(0)

function setApi(val: CarouselApi) {
  api.value = val
}

function reloadCurrent() {
  if (!api.value) {
    return
  }

  current.value = api.value.selectedScrollSnap() + 1

  api.value.on('select', () => {
    current.value = (api.value?.selectedScrollSnap() ?? 0) + 1
  })
}

watchOnce(api, reloadCurrent)
watch(() => goals.value.length, reloadCurrent)
</script>

<template>
  <div class="w-full h-[270px] items-center flex">
    <Carousel class="relative w-full" v-if="goals.length" @init-api="setApi">
      <CarouselCircles
        :count="goals.length"
        :selected="current"
        class="absolute bottom-2 w-full z-[2]"
      />
      <CarouselContent>
        <CarouselItem v-for="goal in goals" :key="goal.name" class="relative">
          <img v-if="goal.image" :src="goal.image" class="h-full w-full" />
          <SkeletonImage v-else class="h-full w-full" />
          <p class="font-bold text-2xl absolute bottom-10 left-6">{{ goal.name }}</p>
        </CarouselItem>
      </CarouselContent>
    </Carousel>
    <div v-else>
      <p class="text-neutral-600 text-lg font-medium px-10 text-center">
        Você ainda não possui metas. Escolha uma das recompensas abaixo.
      </p>
    </div>
  </div>
</template>
