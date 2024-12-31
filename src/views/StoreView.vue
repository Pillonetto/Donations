<template>
  <PageLayout>
    <header class="flex justify-between items-center px-8 py-4 sticky top-0 bg-white">
      <IconSearch />
      <div class="flex items-center gap-4">
        <div class="flex items-center px-2 py-1 gap-2 rounded-2xl bg-highlight text-white">
          <p class="font-semibold">500 Pts</p>
          <IconInfo />
        </div>
        <IconCart />
      </div>
    </header>
    <div class="flex flex-col gap-8 overflow-y-scroll py-6">
      <div class="flex flex-col gap-4">
        <h1 class="font-bold text-4xl px-8">Suas metas</h1>
        <img
          class="w-screen h-100"
          src="https://media.istockphoto.com/id/1345135633/pt/foto/porto-alegre-city.jpg?s=612x612&w=0&k=20&c=kGkDRHj3oXRysbGLe2CwBFCfND0xEzG_cTowKTYLm3c="
        />
      </div>
      <div class="flex flex-col gap-4">
        <div class="flex justify-between items-center px-8">
          <h2 class="text-2xl font-bold">Disponíveis para resgate</h2>
          <a class="text-highlight font-semibold">Ver mais</a>
        </div>
        <div class="overflow-x-scroll w-full flex gap-4 no-scrollbar">
          <StoreItem
            v-for="item in MOCK_ITEMS"
            :key="item.name"
            :name="item.name"
            :price="item.price"
            :image="item.image"
          />
        </div>
      </div>
      <div class="flex flex-col gap-4">
        <div class="flex justify-between items-center px-8">
          <h2 class="text-2xl font-bold">Outras recompensas</h2>
          <a class="text-highlight font-semibold">Ver mais</a>
        </div>
        <div class="overflow-x-scroll w-full flex gap-4 no-scrollbar">
          <StoreItem
            v-for="item in MOCK_ITEMS"
            :key="item.name"
            :name="item.name"
            :price="item.price"
            :image="item.image"
          />
        </div>
      </div>
    </div>
  </PageLayout>
</template>
<script setup lang="ts">
import IconCart from '@/components/icons/IconCart.vue'
import IconInfo from '@/components/icons/IconInfo.vue'
import IconSearch from '@/components/icons/IconSearch.vue'
import PageLayout from '@/components/PageLayout.vue'
import { type StoreThumbInfo } from '@/components/store/StoreThumbInfo.ts'
import StoreItem from '@/components/store/StoreItem.vue'

const MOCK_ITEMS: StoreThumbInfo[] = [
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
</script>
