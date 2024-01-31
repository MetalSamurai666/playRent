<script setup>
    defineProps({
        card: Object
    })
</script>

<template>
    <div class="catCard">
        <NuxtLink :to="card?.link" class="catCard__box">
            <div class="catCard__img">
                <img src="/cats/constr.png">
            </div>

            <div class="catCard__title">{{ card?.title }}</div>
        </NuxtLink>
    </div>
</template>


<style lang="scss">
@import '@/assets/styles/components/cards/cat-card.scss';
</style>