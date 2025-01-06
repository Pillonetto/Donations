<template>
  <PageLayout>
    <header class="flex justify-between items-center px-8 py-4 sticky top-0 bg-white z-10">
      <IconSearch />
      <div class="flex items-center gap-4">
        <Popover>
          <PopoverTrigger as-child>
            <div class="flex items-center px-2 py-1 gap-2 rounded-2xl bg-highlight text-white">
              <p class="font-semibold">{{ currentPoints }} Pts</p>
              <IconInfo />
            </div>
          </PopoverTrigger>
          <PopoverContent class="w-80">
            <div class="flex flex-col gap-2 items-center">
              <h1 class="font-semibold">(Dev) Atualizar Saldo</h1>
              <input
                type="number"
                placeholder="Novo Saldo (Pts)"
                class="w-full rounded-lg px-4 py-1 text-black"
                min="0"
                v-model="currentPoints"
              />
            </div>
          </PopoverContent>
        </Popover>
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
          <StoreItem v-for="item in availableItems" :key="item.name" :item="item" />
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
import { ItemProvider, type ItemInfo } from '@/components/store/ItemInfo'
import StoreItem from '@/components/store/StoreItem.vue'
import { provideCart } from '@/stores/CartStore'
import { provideGoals } from '@/stores/GoalsStore'
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover'
import { computed } from 'vue'

provideGoals()
const { currentPoints } = provideCart()

const MOCK_ITEMS: ItemInfo[] = [
  {
    name: 'Vale Compras - Renner R$10',
    price: 400,
    provider: ItemProvider.RENNER,
  },
  {
    name: 'Vale Compras - Zaffari R$10',
    price: 400,
    provider: ItemProvider.ZAFFARI,
  },
  {
    name: 'Vale Compras - Renner R$50',
    price: 2000,
    provider: ItemProvider.RENNER,
  },
  {
    name: 'Vale Compras - Zaffari R$20',
    price: 800,
    provider: ItemProvider.ZAFFARI,
  },
  {
    name: 'Vale Compras - GremioMania R$10',
    price: 200,
    provider: ItemProvider.GREMIO,
  },
  {
    name: 'Vale Compras - Internacional R$50',
    price: 1000,
    provider: ItemProvider.INTER,
  },
  {
    name: 'Vale Compras - Zaffari R$50',
    price: 2000,
    provider: ItemProvider.ZAFFARI,
  },

  {
    name: 'Vale Compras - GremioMania R$50',
    price: 1000,
    provider: ItemProvider.GREMIO,
  },

  {
    name: 'Vale Compras - Internacional R$50',
    price: 1000,
    provider: ItemProvider.INTER,
  },
]

const availableItems = computed(() => {
  return MOCK_ITEMS.filter((item) => item.price <= currentPoints.value)
})
</script>
