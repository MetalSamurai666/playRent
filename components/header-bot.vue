<script setup>
    var scrollTrigger = 50;
    if (window.innerWidth > 500) {
        window.onscroll = function() {
            if (window.scrollY > scrollTrigger || window.pageYOffset > scrollTrigger) {
                document.querySelector('.header-bot').classList.add('alt');
                document.querySelector('.menu').classList.add('alt');
            } else {
                document.querySelector('.header-bot').classList.remove('alt');
                document.querySelector('.menu').classList.remove('alt');
            }
        }
    } else {
        window.onscroll = function() {
            if (window.scrollY > scrollTrigger || window.pageYOffset > scrollTrigger) {
                document.querySelector('.header-bot').classList.add('mobile-alt');
                document.querySelector('.menu').classList.add('alt');
            } else {
                document.querySelector('.header-bot').classList.remove('mobile-alt');
                document.querySelector('.menu').classList.remove('alt');
            }
        }
    }

    const searchVal = ref('')
    const searchActive = ref(false)

    function searchFoc() {
        searchActive.value = true
    }
    function searchFocNot() {
        searchActive.value = false
    }
    
    const menuState = useState('menuState', () => {false})
    const headState = useState('headState', () => {false})

    function doMenu() {
        console.log('yes');
        if (document.querySelector('.header-bot').classList.contains('alt')) {
            headState.value = !headState.value
        }
        menuState.value = !menuState.value
    }

    watch(
        () => menuState.value,
        () => {
            
        }
    )
</script>

<template>
    <div class="header-bot">
        <div class="container">
            <div class="header-bot__box">
                <div class="header-bot__left">
                    <div class="header-bot__logo">
                        <div class="header__logo">
                            <NuxtLink to="/">
                                <img src="/logo.svg">
                            </NuxtLink>
                        </div>
                    </div>

                    <div class="header-bot__menu">
                        <button @click="doMenu">
                            <Icon name="bi:list" color="black" size="30"/>
                        </button>
                    </div>
                </div>
                <div class="header-bot__right">
                    <div class="header-bot__search">
                        <div class="header-bot__search__input">
                            <input type="text" v-model="searchVal" @focus="searchFoc" @focusout="searchFocNot">
                        </div>
                        <div :class="searchActive ? 'header-bot__search__btn active' : 'header-bot__search__btn'">
                            <button>
                                <Icon name="bi:search" color="#5A5A5A" />
                            </button>
                        </div>
                        <div class="header-bot__search__results" v-if="searchVal.length > 0 && searchActive">
                            <ul class="list">
                                <li class="item">
                                    <NuxtLink class="item__box" to="/">
                                        <div class="item__img">
                                            <img src="/prdcts/prdct.png">
                                        </div>

                                        <div class="item__text">
                                            <div to="/" class="item__title">Title Fight</div>

                                            <div class="item__cat">Мягкие игрушки</div>
                                        </div>

                                        <div class="item__price">16.669 сум/день</div>
                                    </NuxtLink>
                                </li>
                            </ul>
                        </div>
                    </div>

                    <div class="header-bot__options">
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
        </div>
    </div>
</template>


<style lang="scss">
@import '@/assets/styles/components/header-bot.scss';
</style> 