<template>
  <PageLayout>
    <header class="flex justify-between items-center w-full py-4 px-4">
      <RouterLink to="/settings">
        <IconChevronRight class="rotate-180" />
      </RouterLink>
      <h1 class="text-2xl font-bold">Histórico de Recompensas</h1>
      <div></div>
    </header>
    <div class="flex flex-col items-center pr-4 gap-8">
      <CartItem
        v-for="item in history"
        :key="item.name"
        :cartItemInfo="item"
        :timestamp="item.timestamp"
      />
    </div>
  </PageLayout>
</template>
<script setup lang="ts">
import IconChevronRight from '@/components/icons/IconChevronRight.vue'
import PageLayout from '@/components/PageLayout.vue'
import CartItem from '@/components/store/CartItem.vue'
import { useHistory } from '@/stores/HistoryStore'

const { history } = useHistory()
</script>
