<script setup>
    const list = ref([
        {
            title: 'Меню',
            list: [
                {
                    link: '',
                    title: 'Главная '
                },
                {
                    link: '',
                    title: 'Каталог'
                },
                {
                    link: '',
                    title: 'Товары в наличии'
                },
                {
                    link: '',
                    title: 'Скидки'
                },
                {
                    link: '',
                    title: 'Популярное'
                },
                {
                    link: '',
                    title: 'Вдохновение'
                },
                {
                    link: '',
                    title: 'Доставка'
                },
                {
                    link: '',
                    title: 'Услуги'
                },
                {
                    link: '',
                    title: 'Условия'
                },
                {
                    link: '',
                    title: 'Контакты'
                },
                {
                    link: '',
                    title: 'Вставить'
                },
                {
                    link: '',
                    title: 'Cписок покупок'
                },
                {
                    link: '',
                    title: 'Корзина'
                },
                {
                    link: '',
                    title: 'Личный кабинет'
                },
                {
                    link: '',
                    title: 'Избранное'
                },
            ]
        },
        {
            title: 'Каталог',
            list: [
                {
                    link: '',
                    title: 'Главная '
                },
                {
                    link: '',
                    title: 'Каталог'
                },
                {
                    link: '',
                    title: 'Товары в наличии'
                },
                {
                    link: '',
                    title: 'Скидки'
                },
                {
                    link: '',
                    title: 'Популярное'
                },
                {
                    link: '',
                    title: 'Вдохновение'
                },
                {
                    link: '',
                    title: 'Доставка'
                },
                {
                    link: '',
                    title: 'Услуги'
                },
                {
                    link: '',
                    title: 'Условия'
                },
                {
                    link: '',
                    title: 'Контакты'
                },
                {
                    link: '',
                    title: 'Вставить'
                },
                {
                    link: '',
                    title: 'Cписок покупок'
                },
                {
                    link: '',
                    title: 'Корзина'
                },
                {
                    link: '',
                    title: 'Личный кабинет'
                },
                {
                    link: '',
                    title: 'Избранное'
                },
            ]
        },
    ])
</script>

<template>
    <footer class="footer">
        <div class="container">
            <div class="footer__box">
                <div class="footer__top">
                    <div class="footer__logo">
                        <NuxtLink to="/">
                            <img src="/logo.svg">
                        </NuxtLink>
                    </div>
                </div>

                <div class="footer__bot">
                    <ul class="footer__list">
                        <li class="item">
                            <div class="item__title">Информация</div>

                            <div class="item__text">Все права защищены © 2024 интернет-магазин Playrent.uz Ташкент.</div>

                            <ul class="item__socials">
                                <li class="subItem">
                                    <a href="#">
                                        <Icon name="bi:youtube" size="15" color="#fff" />
                                    </a>
                                </li>
                                <li class="subItem">
                                    <a href="#">
                                        <Icon name="bi:instagram" size="15" color="#fff" />
                                    </a>
                                </li>
                                <li class="subItem">
                                    <a href="#">
                                        <Icon name="bi:twitter" size="15" color="#fff" />
                                    </a>
                                </li>
                                <li class="subItem">
                                    <a href="#">
                                        <Icon name="bi:facebook" size="15" color="#fff" />
                                    </a>
                                </li>
                            </ul>

                            <NuxtLink to="/" class="item__link">Политика конфиденциальности</NuxtLink>
                        </li>

                        <li class="item" v-for="item, idx of list" :key="idx">
                            <div class="item__title">{{ item?.title }}</div>

                            <ul class="item__list">
                                <li class="subItem" v-for="subItem, idx of item?.list" :key="idx">
                                    <NuxtLink :to="`/${subItem?.link}`">{{ subItem?.title }}</NuxtLink>
                                </li>
                            </ul>
                        </li>

                        <div class="item">
                            <div class="item__title">Контакты</div>

                            <a class="item__hyper" href="#">г.Ташкент <br> Ул. Диёр, Д. 13, Кв. 44</a>
                            <a class="item__hyper" href="#">+ 998 99 111 22 33</a>
                            <a class="item__hyper" href="#">+ 998 99 111 22 33</a>
                            <a class="item__hyper" href="#">playrent@gmail.com</a>
                        </div>
                    </ul>
                </div>
            </div>
        </div>
    </footer>
</template>


<style lang="scss">
@import '@/assets/styles/components/footer.scss';
</style>