<script setup>
    var scrollTrigger = 50;
    if (window.innerWidth > 500) {
        window.onscroll = function() {
            if (window.scrollY > scrollTrigger || window.pageYOffset > scrollTrigger) {
                document.querySelector('.header-bot').classList.add('alt');
            } else {
                document.querySelector('.header-bot').classList.remove('alt');
            }
        }
    } else {
        window.onscroll = function() {
            if (window.scrollY > scrollTrigger || window.pageYOffset > scrollTrigger) {
                document.querySelector('.header-bot').classList.add('mobile-alt');
            } else {
                document.querySelector('.header-bot').classList.remove('mobile-alt');
            }
        }
    }
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
                        <button>
                            <Icon name="bi:list" color="black" size="30"/>
                        </button>
                    </div>
                </div>
                <div class="header-bot__right">
                    <div class="header-bot__search">
                        <div class="header-bot__search__input">
                            <input type="text">
                        </div>
                        <div class="header-bot__search__btn">
                            <button>
                                <Icon name="bi:search" color="#5A5A5A" />
                            </button>
                        </div>
                    </div>

                    <div class="header-bot__options">
                        <ul class="header__options">
                            <li class="item">
                                <NuxtLink to="/">
                                    <Icon name="bi:star" color="black" />
                                </NuxtLink>
                            </li>
                            <li class="item">
                                <NuxtLink to="/">
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