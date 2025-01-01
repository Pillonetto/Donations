<script setup lang="ts">
import { Drawer, DrawerContent, DrawerFooter } from '@/components/ui/drawer'
import Button from '../ui/button/Button.vue'
import SkeletonImage from '../SkeletonImage.vue'
import DrawerHeader from '../ui/drawer/DrawerHeader.vue'
import IconVerified from '../icons/IconVerified.vue'

const emit = defineEmits<{
  (e: 'close'): void
}>()

function openDetails() {
  window.open('https://arenapoa.com.br/')
}
</script>

<template>
  <Drawer shouldScaleBackground @close="emit('close')">
    <DrawerContent>
      <DrawerHeader class="!px-0">
        <SkeletonImage class="w-full h-full" />
      </DrawerHeader>
      <div class="flex flex-col gap-2 p-4">
        <div class="flex items-center gap-2">
          <h1 class="text-2xl font-bold pb-[2.5px]">Estádio Olímpico</h1>
          <IconVerified class="size-5" />
        </div>
        <div class="flex flex-col gap-2 text-neutral-400">
          <p class="uppercase font-medium">Sobre</p>
          <p>
            Neste momento, os nossos pontos de coleta estão precisando de <br /><br />
            Materiais de Higiene: sabonete, álcool, pasta e escova de dente, lenços umedecidos,
            absorventes femininos e toalhas; <br /><br />
            Para Bebês: papinha, mamadeira, bicos, pomada para assaduras, fraldas, caixas de leite e
            leite em pó;
          </p>
        </div>
      </div>
      <DrawerFooter>
        <Button
          size="lg"
          variant="outline"
          class="text-highlight border-highlight font-semibold"
          @click="openDetails"
          ><p>Mais Detalhes</p></Button
        >
      </DrawerFooter>
    </DrawerContent>
  </Drawer>
</template>
