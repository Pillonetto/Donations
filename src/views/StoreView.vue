<template>
  <PageLayout>
    <header class="flex justify-between items-center px-8 py-4 sticky top-0 bg-white z-10">
      <IconSearch />
      <div class="flex items-center gap-4">
        <div class="flex items-center px-2 py-1 gap-2 rounded-2xl bg-highlight text-white">
          <p class="font-semibold">500 Pts</p>
          <IconInfo />
        </div>
        <CartShortcut />
      </div>
    </header>
    <div class="flex flex-col gap-8 overflow-y-scroll overflow-x-hidden py-6">
      <div class="flex flex-col gap-4">
        <h1 class="font-bold text-4xl px-8">Suas metas</h1>
        <GoalsCarousel />
      </div>
      <div class="flex flex-col gap-4">
        <div class="flex justify-between items-center px-8">
          <h2 class="text-2xl font-bold">Disponíveis para resgate</h2>
          <a class="text-highlight font-semibold">Ver mais</a>
        </div>
        <div class="overflow-x-scroll w-full flex gap-4 no-scrollbar px-4">
          <StoreItem v-for="item in MOCK_ITEMS" :key="item.name" :item="item" />
        </div>
      </div>
      <div class="flex flex-col gap-4">
        <div class="flex justify-between items-center px-8">
          <h2 class="text-2xl font-bold">Outras recompensas</h2>
          <a class="text-highlight font-semibold">Ver mais</a>
        </div>
        <div class="overflow-x-scroll w-full flex gap-4 no-scrollbar px-4">
          <StoreItem v-for="item in MOCK_ITEMS" :key="item.name" :item="item" />
        </div>
      </div>
    </div>
  </PageLayout>
</template>
<script setup lang="ts">
import IconInfo from '@/components/icons/IconInfo.vue'
import IconSearch from '@/components/icons/IconSearch.vue'
import PageLayout from '@/components/PageLayout.vue'
import CartShortcut from '@/components/store/CartShortcut.vue'
import GoalsCarousel from '@/components/store/GoalsCarousel.vue'
import { type ItemInfo } from '@/components/store/ItemInfo'
import StoreItem from '@/components/store/StoreItem.vue'
import { provideCart } from '@/stores/CartStore'
import { provideGoals } from '@/stores/GoalsStore'

runProvider()

const MOCK_ITEMS: ItemInfo[] = [
  {
    name: 'Vale Compras - Renner R$10',
    price: 400,
  },
  {
    name: 'Vale Compras - Renner R$50',
    price: 2000,
  },
  {
    name: 'Vale Compras - Zaffari R$10',
    price: 400,
  },
  {
    name: 'Vale Compras - Zaffari R$10',
    price: 400,
  },
  {
    name: 'Vale Compras - Zaffari R$10',
    price: 400,
  },
]

function runProvider() {
  const goalsStore = provideGoals()
  goalsStore.loadGoals()
  provideCart()
}
</script>
