<script setup>
    const searchState = useState('searchState', () => false)


    const menu = ref([
        {
            title: 'Мягкие игрушки',
            list: [
                {
                    title: 'Куклы'
                },
                {
                    title: 'Тематические'
                },
                {
                    title: 'Куклы'
                },
                {
                    title: 'Тематические'
                },
                {
                    title: 'Куклы'
                },
            ]
        },
        {
            title: 'Конструкторы',
            list: [
                {
                    title: 'Куклы'
                },
                {
                    title: 'Тематические'
                },
                {
                    title: 'Куклы'
                },
                {
                    title: 'Тематические'
                },
                {
                    title: 'Куклы'
                },
            ]
        },
        {
            title: 'Мягкие игрушки',
            list: [
                {
                    title: 'Куклы'
                },
                {
                    title: 'Тематические'
                },
                {
                    title: 'Куклы'
                },
                {
                    title: 'Тематические'
                },
                {
                    title: 'Куклы'
                },
            ]
        },
        {
            title: 'Мягкие игрушки',
            list: [
                {
                    title: 'Куклы'
                },
                {
                    title: 'Тематические'
                },
                {
                    title: 'Куклы'
                },
                {
                    title: 'Тематические'
                },
                {
                    title: 'Куклы'
                },
            ]
        },
        {
            title: 'Мягкие игрушки',
            list: [
                {
                    title: 'Куклы'
                },
                {
                    title: 'Тематические'
                },
                {
                    title: 'Куклы'
                },
                {
                    title: 'Тематические'
                },
                {
                    title: 'Куклы'
                },
            ]
        },
        {
            title: 'Мягкие игрушки',
            list: [
                {
                    title: 'Куклы'
                },
                {
                    title: 'Тематические'
                },
                {
                    title: 'Куклы'
                },
                {
                    title: 'Тематические'
                },
                {
                    title: 'Куклы'
                },
            ]
        },
        {
            title: 'Мягкие игрушки',
            list: [
                {
                    title: 'Куклы'
                },
                {
                    title: 'Тематические'
                },
                {
                    title: 'Куклы'
                },
                {
                    title: 'Тематические'
                },
                {
                    title: 'Куклы'
                },
            ]
        },
        {
            title: 'Мягкие игрушки',
            list: [
                {
                    title: 'Куклы'
                },
                {
                    title: 'Тематические'
                },
                {
                    title: 'Куклы'
                },
                {
                    title: 'Тематические'
                },
                {
                    title: 'Куклы'
                },
            ]
        },
    ])

    const activeWin = ref()

    function openWin(idx) {
        console.log(idx)
        console.log(menu.value[idx])
        activeWin.value = idx
    }

    function closeSearch() {
        searchState.value = !searchState.value
    }

</script>

<template>
    <div :class="searchState ? 'search show' : 'search'">
        <div class="container">
            <div class="search__box">
                <div class="search__head">
                    <div class="search__input">
                        <input type="text" placeholder="Поиск...">
                        <button>
                            <Icon name="bi:search" color="#fff" size="20"/>
                        </button>
                    </div>
                </div>

                <div class="search__body">
                    <ul class="search__list">
                        <li class="item" v-for="item, idx of menu" :key="idx"> 
                            <button class="item__box" @click="openWin(idx)">
                                {{ item?.title }}
                            </button> 

                            <div :class="activeWin == idx ? 'item__win show' : 'item__win'">
                                <button class="item__close" @click="activeWin = -1">
                                    <Icon name="bi:arrow-left"  size="20"/>
                                </button>

                                <ul class="item__list">
                                    <li class="subItem" v-for="subItem, idx of item?.list" :key="idx">
                                        <NuxtLink to="/" class="subItem__box">
                                            {{ subItem?.title }}
                                        </NuxtLink>
                                    </li>
                                </ul>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
</template>

<style lang="scss">
@import '@/assets/styles/components/search.scss';
</style>