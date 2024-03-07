<script setup>

const cats = useState('cats', () => [
    {
        url: '/',
        title: 'Каталог'
    },
    {
        url: '/a',
        title: 'Доставка'
    },
    {
        url: '/s',
        title: 'Условия'
    },
    {
        url: '/d',
        title: 'Контакты'
    },
])

</script>

<template>
    <header class="header">
        <div class="container">
            <div class="header__box">
                <div class="header__left">
                    <div class="header__logo">
                        <NuxtLink to="/">
                            <img src="/logo.svg">
                        </NuxtLink>
                    </div>
                </div>
                
                <div class="header__mid">
                    <ul class="header__nav">
                        <li class="item" v-for="item, idx of cats" :key="idx">
                            <NuxtLink :to="item?.url">{{ item?.title }}</NuxtLink>
                        </li>
                    </ul>
                </div>

                <div class="header__right">
                    <div class="header__lang">
                        <button>
                            <img src="/flags/ru.png">
                        </button>
                    </div>

                    <ul class="header__options">
                        <li class="item">
                            <NuxtLink to="/cat-fav">
                                <Icon name="bi:star" color="black" />
                            </NuxtLink>
                        </li>
                        <li class="item">
                            <NuxtLink to="/cart">
                                <Icon name="bi:cart" color="black" />
                            </NuxtLink>
                        </li>
                        <li class="item">
                            <NuxtLink to="/">
                                <Icon name="bi:person" color="black" />
                            </NuxtLink>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </header>
</template>

<style lang="scss">
@import '@/assets/styles/components/header.scss';
</style>