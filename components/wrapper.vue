<script setup>
    import { Splide, SplideSlide} from '@splidejs/vue-splide';

    const slides = ref([
        {
            img: 'https://c4.wallpaperflare.com/wallpaper/987/808/1024/bring-me-the-horizon-album-covers-deathcore-1415x1452-nature-seasons-hd-art-wallpaper-preview.jpg',
            title: 'Игрушки на любой вкус!',
            list: [
                {
                    title: 'Конструкторы, мягкие игрушки'
                },
                {
                    title: 'Настольные игры, наборы'
                },
                {
                    title: 'Радиоуправляемые модели'
                },
                {
                    title: 'Интерактивные игрушки'
                },
                {
                    title: 'Игрушки для праздника'
                },
            ],
            link: 'https://c4.wallpaperflare.com/wallpaper/987/808/1024/bring-me-the-horizon-album-covers-deathcore-1415x1452-nature-seasons-hd-art-wallpaper-preview.jpg',
            linkText: 'Перейти в каталог'
        },
        {
            img: 'https://c4.wallpaperflare.com/wallpaper/450/840/999/bring-me-the-horizon-that-s-the-spirit-wallpaper-preview.jpg',
            title: 'Игрушки на любой вкус!',
            list: [
                {
                    title: 'Настольные игры, наборы'
                },
                {
                    title: 'Конструкторы, мягкие игрушки'
                },
                {
                    title: 'Радиоуправляемые модели'
                },
                {
                    title: 'Игрушки для праздника'
                },
                {
                    title: 'Интерактивные игрушки'
                },
            ],
            link: 'https://c4.wallpaperflare.com/wallpaper/450/840/999/bring-me-the-horizon-that-s-the-spirit-wallpaper-preview.jpg',
            linkText: 'Перейти в каталог'
        },
        {
            img: 'https://c4.wallpaperflare.com/wallpaper/214/333/302/bring-me-the-horizon-logo-thatand039-s-the-spirit-wallpaper-preview.jpg',
            title: 'Игрушки на любой вкус!',
            list: [
                {
                    title: 'Конструкторы, мягкие игрушки'
                },
                {
                    title: 'Настольные игры, наборы'
                },
                {
                    title: 'Радиоуправляемые модели'
                },
                {
                    title: 'Интерактивные игрушки'
                },
                {
                    title: 'Игрушки для праздника'
                },
            ],
            link: 'https://c4.wallpaperflare.com/wallpaper/214/333/302/bring-me-the-horizon-logo-thatand039-s-the-spirit-wallpaper-preview.jpg',
            linkText: 'Перейти в каталог'
        },
    ])

    const main   = ref()
    const thumbs = ref()

    const mainOptions = {
        type      : 'fade',
        perPage   : 1,
        perMove   : 1,
        gap       : '1rem',
        pagination: false,
        arrows    : false,
        
        height    : 480,
        breakpoints: {
            1366: {
                height: 400
            },
            500: {
                height: 300
            },
        }
    }

    const thumbsOptions = {
        perPage     : 1,
        perMove     : 1,
        type        : 'loop',
        rewind      : true,
        gap         : '10px',
        fixedHeight : 70,
        cover       : true,
        fixedHeight : 480,
        focus       : 'center',
        arrows: false,
        breakpoints: {
            1366: {
                fixedHeight: 400
            },
            500: {
                fixedHeight: 250
            },
        }
    }

    onMounted(() => {
        const thumbsSplide = thumbs.value?.splide

        if ( thumbsSplide ) {
            main.value?.sync( thumbsSplide )
        }
    })
</script>

<template>
    <div class="wrapper">
        <div class="container">
            <div class="wrapper__box">
                <div class="wrapper__left">
                    <Splide
                        aria-labelledby="thumbnail-example-heading"
                        :options="mainOptions"
                        ref="main"
                        class="slideLeft splide"
                    >
                        <SplideSlide class="slide splide__slide" v-for="slide in slides" :key="slide.alt">
                            <div class="slide__box">
                                <div class="slide__title">{{ slide?.title }}</div>

                                <ul class="slide__list">
                                    <li class="item" v-for="item, idx of slide?.list" :key="idx">
                                        <div class="item__title">{{ item?.title }}</div>
                                    </li>
                                </ul>

                                <div class="slide__link">
                                    <NuxtLink :to="slide?.link">
                                        {{ slide?.linkText }}
                                    </NuxtLink>
                                </div>
                            </div>
                        </SplideSlide>
                    </Splide>
                </div>

                <div class="wrapper__right">
                    <Splide
                        aria-label="The carousel with thumbnails. Selecting a thumbnail will change the main carousel"
                        :options="thumbsOptions"
                        ref="thumbs"
                        class="slideRight splide"
                    >
                        <SplideSlide class="slide splide__slide" v-for="slide in slides" :key="slide.alt">
                            <div class="slide__img">
                                <img :src="slide?.img">
                            </div>
                        </SplideSlide>
                    </Splide>
                </div>
            </div>
        </div>
    </div>
</template>

<style lang="scss">
@import '@/assets/styles/components/wrapper.scss';
</style>