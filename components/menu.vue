<script setup>
    const menuState = useState('menuState', () => {false})
    const headState = useState('headState')

    if (menuState) {
        console.log('menu show');
        if (headState) {
            console.log('menu show top');
        }
    } else {
        console.log('menu');
    }

    
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

    function closeMenu() {
        menuState.value = false
    }
</script>

<template>
    <div :class="menuState ? (headState ? 'menu show top' : 'menu show') : 'menu'">
        <div class="container">
            <div class="menu__box">
                <div class="menu__title">Каталог</div>

                <ul class="menu__list">
                    <li class="item" v-for="item, idx of menu" :key="idx">
                        <div class="item__box">
                            <NuxtLink to="/cat-const" class="item__img" @click="closeMenu">
                                <img src="/menu/cat.png">
                            </NuxtLink>

                            <ul class="item__list">
                                <li class="item__subTitle">
                                    <NuxtLink to="/cat-const" class="subItem__box"  @click="closeMenu">
                                        {{ item?.title }}
                                    </NuxtLink>
                                </li>

                                <li class="subitem" v-for="subItem, idx of item?.list" :key="idx">
                                    <NuxtLink to="/cat-const" class="subItem__box"  @click="closeMenu">
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
</template>

<style lang="scss">
@import '@/assets/styles/components/menu.scss';
</style>