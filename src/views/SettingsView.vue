<template>
  <PageLayout>
    <header class="flex justify-center items-center w-full py-4">
      <h1 class="text-2xl font-bold">Ajustes</h1>
    </header>
    <div class="flex flex-col items-center px-4 gap-8 pt-12">
      <div class="flex flex-col gap-2 items-center">
        <div class="relative">
          <IconAvatar />
          <IconEdit class="absolute bottom-0 right-0" />
        </div>
        <h1 class="text-2xl font-bold">Gabriel Pillonetto</h1>
        <p class="text-gray-500">@gpillonetto</p>
      </div>
      <div class="flex flex-col divide-y divide-neutral-400/25 w-full">
        <LinkItem title="Histórico de Recompensas" to="/settings/rewards" />
        <LinkItem title="Notificações" />
        <LinkItem title="Contato" />
        <LinkItem title="Termos de Uso" />
        <LinkItem title="Sair" to="/" />
      </div>
    </div>
  </PageLayout>
</template>
<script setup lang="ts">
import IconAvatar from '@/components/icons/IconAvatar.vue'
import IconEdit from '@/components/icons/IconEdit.vue'
import PageLayout from '@/components/PageLayout.vue'
import LinkItem from '@/components/settings/LinkItem.vue'
</script>
