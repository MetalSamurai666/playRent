<script setup>

    const searchState = useState('searchState')

    function doSearch() {
        searchState.value = !searchState.value
    }


    
</script>

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
                    <button class="item__link" @click="doSearch">
                        <Icon name="bi:search" />
                    </button>
                </li>
                <li class="item">
                    <NuxtLink to="/cart" class="item__link">
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

<style lang="scss">
@import '@/assets/styles/components/nav.scss';
</style>