<template>
  <div class="flex flex-col items-center px-4 gap-8 pt-12">
    <div class="flex flex-col gap-2 items-center">
      <div class="relative">
        <IconAvatar />
        <IconEdit class="absolute bottom-0 right-0" />
      </div>

      <div class="relative">
        <h2 class="text-2xl font-bold">Insira seus dados</h2>
      </div>
    </div>

    <!---   Login e senha   --->
    <div class="flex flex-col gap-4 w-full">
      <div class="flex flex-col gap-2">
        <label for="email" class="text-neutral-500">Email</label>
        <input
          type="email"
          id="email"
          placeholder="Insira seu email"
          class="w-full rounded-lg px-4 py-1 text-black"
        />
      </div>
      <div class="flex flex-col gap-2">
        <label for="password" class="text-neutral-500">Senha</label>
        <input
          type="password"
          id="password"
          placeholder="Insira sua senha"
          class="w-full rounded-lg px-4 py-1 text-black"
        />
      </div>
    </div>

    <!---   Botão de login (=> /home, independente do login)   --->
    <button class="w-full rounded-2xl bg-highlight py-3 text-white font-semibold"
            type="submit"
            onclick="window.location.href='/home'">
      Entrar
    </button>

    <!---   footer: cadastre-se e esqueci minha senha   --->
    <footer class="flex flex-col gap-4">
      <p class="text-neutral-500">Ainda não possui uma conta?<a class="text-highlight" href="/register"> Cadastre-se aqui.</a></p>
      <p class="text-neutral-500" style="text-align: center"><a class="text-highlight" href="/recover">Esqueci minha senha.</a></p>
    </footer>
  </div>
</template>

<script setup lang="ts">
import IconAvatar from '@/components/icons/IconAvatar.vue'
import IconEdit from '@/components/icons/IconEdit.vue'
import LinkItem from '@/components/settings/LinkItem.vue'
import { RouterLink } from 'vue-router'

</script>
