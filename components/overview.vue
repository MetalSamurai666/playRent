<script setup>
    import { Splide, SplideSlide} from '@splidejs/vue-splide';

    const slides = ref([
        {
            img: '/prdcts/prdct_big.png',
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
            link: '/prdcts/prdct_big.png',
            linkText: 'Перейти в каталог'
        },
        {
            img: '/prdcts/prdct_big.png',
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
            link: '/prdcts/prdct_big.png',
            linkText: 'Перейти в каталог'
        },
        {
            img: '/prdcts/prdct_big.png',
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
            link: '/prdcts/prdct_big.png',
            linkText: 'Перейти в каталог'
        },
        {
            img: '/prdcts/prdct_big.png',
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
            link: '/prdcts/prdct_big.png',
            linkText: 'Перейти в каталог'
        },
        {
            img: '/prdcts/prdct_big.png',
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
            link: '/prdcts/prdct_big.png',
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
        fixedWidth: '100%',
        breakpoints: {
            // 1366: {
            //     height: 400
            // },
            // 500: {
            //     height: 300
            // },
        }
    }

    const thumbsOptions = {
        perPage     : 4,
        perMove     : 1,
        type        : 'loop',
        rewind      : false,
        gap         : '20px',
        fixedHeight : '100%',
        focus       : 'left',
        arrows: false,
        pagination: false,
        isNavigation: true,
        breakpoints: {
            768: {
                gap: 10,
            }
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
    <div class="overview">
        <div class="container">
            <div class="overview__box">
                <div class="overview__left">
                    <div class="overview__slider">
                        <div class="overview__main">
                            <Splide
                                aria-labelledby="thumbnail-example-heading"
                                :options="mainOptions"
                                ref="main"
                                class="slideLeft splide"
                            >
                                <SplideSlide class="slide splide__slide" v-for="slide in slides" :key="slide.alt">
                                    <div class="splide__box">
                                        <img :src="slide?.img">
                                    </div>
                                </SplideSlide>
                            </Splide>
                        </div>

                        <div class="overview__thumb">
                            <Splide
                                :options="thumbsOptions"
                                ref="thumbs"
                                class="slideRight splide"
                            >
                                <SplideSlide class="slide splide__slide" v-for="slide in slides" :key="slide.alt">
                                    <div class="splide__box">
                                        <img :src="slide?.img">
                                    </div>
                                </SplideSlide>
                            </Splide>
                        </div>
                    </div>
                </div>


                <div class="overview__right">
                    <div class="overview__title">Зелёный Нурбек</div>

                    <div class="overview__art">Арт. 890.321.44 </div>

                    <div class="overview__info">
                        Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. 
                    </div>

                    <div class="overview__price">
                        <div class="overview__price__daily">13 500 <span>сум/день</span></div>

                        <div class="overview__price__quant">
                            <button class="overview__price__min">
                                <Icon name="bi:dash-square" color="#7D7D7D" size="18"/>
                            </button>
                            <div class="overview__price__cur">0</div>
                            <button class="overview__price__min">
                                <Icon name="bi:plus-square" color="#7D7D7D" size="18"/>
                            </button>
                        </div>
                    </div>

                    <div class="overview__btns">
                        <button class="overview__btns__cart">
                            <span>Добаить в корзину</span> 
                            <Icon name="bi:plus" size="20" color="#fff" />
                        </button>

                        <div class="overview__btns__more">
                            <div class="item">
                                <button>
                                    <Icon name="bi:star" color="#5A5A5A" />
                                </button>
                            </div>

                            <div class="item">
                                <button>
                                    <Icon name="bi:bar-chart" color="#5A5A5A" />
                                </button>
                            </div>
                        </div>
                    </div>

                    <div class="overview__text">
                        Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.
                    </div>

                    <div class="overview__collapse">
                        <el-collapse v-model="activeNames" @change="handleChange" >
                            <el-collapse-item name="1" class="item">
                                <template #title>
                                    <span class="item__title">Цвет</span>
                                </template>
                                <div>
                                Consistent with real life: in line with the process and logic of real
                                life, and comply with languages and habits that the users are used to;
                                </div>
                                <div>
                                Consistent within interface: all elements should be consistent, such
                                as: design style, icons and texts, position of elements, etc.
                                </div>
                            </el-collapse-item>
                            <el-collapse-item name="2" class="item">
                                <template #title>
                                    <span class="item__title">Подробнее о товаре</span>
                                </template>
                                <div>
                                Operation feedback: enable the users to clearly perceive their
                                operations by style updates and interactive effects;
                                </div>
                                <div>
                                Visual feedback: reflect current state by updating or rearranging
                                elements of the page.
                                </div>
                            </el-collapse-item>
                        </el-collapse>
                    </div>
                    
                </div>
            </div>
        </div>
    </div>
</template>


<style lang="scss">
@import '@/assets/styles/components/overview.scss';
</style>