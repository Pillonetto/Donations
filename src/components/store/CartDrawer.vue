<script setup lang="ts">
import { Drawer, DrawerContent, DrawerFooter } from '@/components/ui/drawer'
import Button from '../ui/button/Button.vue'
import { computed, ref } from 'vue'
import { useCart } from '@/stores/CartStore'
import CartItem from './CartItem.vue'
import CheckoutConfirmation from './CheckoutConfirmation.vue'
import { useToast } from '../ui/toast'

const emit = defineEmits<{
  (e: 'close'): void
}>()

const { toast } = useToast()
const { cart, checkoutCart } = useCart()
const showConfirmation = ref(false)

const totalPts = computed(() => {
  return cart.value.reduce((acc, item) => acc + item.price * item.quantity, 0)
})

function checkout() {
  showConfirmation.value = true
}

function onConfirmationResult(result: boolean) {
  showConfirmation.value = false
  if (result) {
    const success = checkoutCart()
    if (success) {
      toast({
        title: 'Sucesso!',
        description: 'Verifique seu e-mail para utilizar os itens resgatados.',
      })
    } else {
      toast({
        title: 'Erro',
        description: 'Pontos Insuficientes! Revise os itens desejados.',
        variant: 'destructive',
      })
    }
    emit('close')
  }
}
</script>

<template>
  <Drawer shouldScaleBackground @close="emit('close')">
    <DrawerContent>
      <div class="flex flex-col gap-4 divide-y divide-neutral-400/25" v-if="cart.length">
        <CartItem v-for="cartItem in cart" :cartItemInfo="cartItem" :key="cartItem.name" />
      </div>
      <p v-else class="text-neutral-600 text-2xl font-medium text-center p-8">
        Você ainda não adicionou nenhum item ao carrinho.
      </p>
      <DrawerFooter>
        <div class="flex justify-between w-full mb-2">
          <p class="text-neutral-400">Total</p>
          <p class="font-bold text-lg">{{ totalPts }} Pts</p>
        </div>
        <Button size="lg" class="text-lg font-medium" v-if="cart.length" @click="checkout"
          >Finalizar</Button
        >
      </DrawerFooter>
    </DrawerContent>
    <CheckoutConfirmation
      v-if="showConfirmation"
      @result="onConfirmationResult"
      :totalPts="totalPts"
      v-model:open="showConfirmation"
    />
  </Drawer>
</template>
