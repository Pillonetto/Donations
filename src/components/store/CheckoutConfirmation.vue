<script setup lang="ts">
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from '@/components/ui/alert-dialog'

defineProps<{
  totalPts: number
}>()

const emit = defineEmits<{
  (e: 'result', result: boolean): void
}>()
</script>

<template>
  <AlertDialog>
    <AlertDialogContent class="rounded-lg w-[80vw]">
      <AlertDialogHeader>
        <AlertDialogTitle class="text-lg font-bold">Confirmação</AlertDialogTitle>
        <AlertDialogDescription>
          Deseja resgatar os itens selecionados por {{ totalPts }} pontos?
        </AlertDialogDescription>
      </AlertDialogHeader>
      <AlertDialogFooter>
        <AlertDialogCancel @click="emit('result', false)">Cancelar</AlertDialogCancel>
        <AlertDialogAction @click="emit('result', true)">Continuar</AlertDialogAction>
      </AlertDialogFooter>
    </AlertDialogContent>
  </AlertDialog>
</template>
