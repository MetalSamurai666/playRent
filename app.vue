<script setup>
  const menuState = useState('menuState')
  const searchState = useState('searchState')


  watch(
    () => menuState.value,
    () => {
      if (menuState.value) {
        document.body.classList.add('noscroll')
      } else {
        document.body.classList.remove('noscroll')
      }
    }
  )

  watch(
    () => searchState.value,
    () => {
      if (searchState.value) {
        document.body.classList.add('noscroll')
      } else {
        document.body.classList.remove('noscroll')
      }
    }
  )
</script>

<template>
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>

<style lang="scss">
  @import '@/assets/styles/main.scss';
  .page-enter-active,
  .page-leave-active {
    transition: all 0.3s;
  }
  .page-enter-from,
  .page-leave-to {
    opacity: 0;
    filter: blur(1rem);
  }
</style>