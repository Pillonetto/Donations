<template>
  <PageLayout noNav>
    <div class="flex flex-col items-center justify-center h-full px-6 relative">
      <!---   Login e senha   --->
      <div class="flex flex-col gap-28 w-full">
        <div class="flex flex-col gap-4 w-full">
          <div class="w-full">
            <h2 class="text-3xl font-bold">Bem-Vindo (a)!</h2>
          </div>
          <div class="flex flex-col gap-2">
            <input
              type="email"
              id="email"
              placeholder="Insira seu email"
              class="w-full rounded-lg px-4 py-3 border-neutral-500/25 border-[1px] text-black"
            />
          </div>
          <div class="flex flex-col gap-2">
            <input
              type="password"
              id="password"
              placeholder="Insira sua senha"
              class="w-full rounded-lg px-4 py-3 text-black border-neutral-500/25 border-[1px]"
            />
          </div>
          <a class="text-highlight" href="/map">Esqueci minha senha.</a>
        </div>

        <div class="w-full flex items-center flex-col gap-4">
          <RouterLink
            class="w-full rounded-2xl text-lg bg-highlight py-3 text-white font-semibold items-center flex justify-center"
            type="submit"
            to="/map"
          >
            <p>Entrar</p>
          </RouterLink>
          <div class="flex flex-col gap-4">
            <p class="text-neutral-500">
              Ainda não possui uma conta?<a class="text-highlight" href="/map">
                Cadastre-se aqui.</a
              >
            </p>
            <p class="text-neutral-500" style="text-align: center"></p>
          </div>
        </div>
      </div>
      <!---   Botão de login (=> /home, independente do login)   --->

      <!---   footer: cadastre-se e esqueci minha senha   --->
      <footer class="flex flex-col text-neutral-400 gap-4 absolute bottom-10">
        <p>Ou faça login com</p>
        <div class="flex gap-2 items-center">
          <IconGoogle />
          <IconApple />
        </div>
      </footer>
    </div>
  </PageLayout>
</template>

<script setup lang="ts">
import IconApple from '@/components/icons/IconApple.vue'
import IconAvatar from '@/components/icons/IconAvatar.vue'
import IconEdit from '@/components/icons/IconEdit.vue'
import IconGoogle from '@/components/icons/IconGoogle.vue'
import PageLayout from '@/components/PageLayout.vue'
import LinkItem from '@/components/settings/LinkItem.vue'
import { RouterLink } from 'vue-router'
</script>
