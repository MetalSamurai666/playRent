<template>
    <div class="nav">
        <div class="nav__box">
            <ul class="nav__list">
                <li class="item">
                    <NuxtLink to="/" class="item__link">
                        <Icon name="bi:house" />
                    </NuxtLink>
                </li>
                <li class="item">
                    <button class="item__link">
                        <Icon name="bi:search" />
                    </button>
                </li>
                <li class="item">
                    <NuxtLink to="/w" class="item__link">
                        <Icon name="bi:cart" />
                    </NuxtLink>
                </li>
                <li class="item">
                    <NuxtLink to="/s" class="item__link">
                        <Icon name="bi:star" />
                    </NuxtLink>
                </li>
                <li class="item">
                    <NuxtLink to="/a" class="item__link">
                        <Icon name="bi:person" />
                    </NuxtLink>
                </li>
            </ul>
        </div>
    </div>
</template>

<script setup>
</script>

<style lang="scss">
@import '@/assets/styles/components/nav.scss';
</style>