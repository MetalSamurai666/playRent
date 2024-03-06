<script setup>
    import { Splide, SplideSlide} from '@splidejs/vue-splide';
    import { useCartsStore } from '~/stores/cart';

    const props = defineProps({
        card: Object
    })

    const store = useCartsStore()

    const count = ref(0)

    function doCount(i) {
        console.log(i)
        count.value += i
        props.card.count = count.value
    }

    function addCart() {
        store.addCart({
            _id: props.card._id,
            count: props.card.count
        })
    }

    function changeCount(val) {
        store.changeCount( props.card?._id, val )
    }

    function deleteCart() {
        store.deleteObjectById(props.card._id)
    }
</script>

<template>
    <div :class="card?.alt ? 'productCard alt' : 'productCard'">
        <div class="productCard__box">
            <div class="productCard__top">
                <div class="productCard__img" >
                    <div class="productCard__slide" v-if="card.alt == false">
                        <Splide
                        :options="{ 
                            rewind: true,
                            width: '100%',
                            gap: 0,
                            arrows: false,
                            breakpoints: {
                                1366: {
                                    width: 175
                                },
                                500: {
                                    width: 120
                                },
                            }
                        }">
                        <!-- <SplideSlide v-for="item, idx of card?.imgs" :key="idx">
                            <img :src="item?.link">
                        </SplideSlide> -->
                            <SplideSlide>
                                <NuxtLink :to="card?.link">
                                    <img src="/prdcts/prdct.png">
                                </NuxtLink>
                            </SplideSlide>
                            <SplideSlide>
                                <NuxtLink :to="card?.link">
                                    <img src="/prdcts/prdct.png">
                                </NuxtLink>
                            </SplideSlide>
                        </Splide>
                    </div>
                    
                    <NuxtLink :to="card?.link" class="productCard__logo" v-if="card?.alt">
                        <!-- <img :src="card?.imgs[0]?.link"> -->
                        <img src="/prdcts/prdct.png">
                    </NuxtLink>
                </div>

                <div class="productCard__label" v-if="card?.alt == false">
                    <div class="productCard__discount" v-if="card?.discount">
                        {{ card?.discount+`%` }}
                    </div>

                    <div class="productCard__discount" v-else>
                        <Icon name="solar:fire-linear" color="#fff" />
                    </div>
                </div>
            </div>

            <div class="productCard__bot">
                <div class="productCard__head">
                    <NuxtLink :to="card?.link" class="productCard__title">
                        {{ card?.title }}
                    </NuxtLink> 

                    <div class="productCard__count" v-if="card?.alt && card?.small == false">
                        <button class="productCard__down" @click="card.count > 1 ? changeCount(-1) : false">
                            <Icon name="bi:dash-square" color="#7D7D7D" size="18"/>
                        </button>
                        <div class="productCard__cur">
                            {{ card?.count }}
                        </div>
                        <button class="productCard__up" @click="changeCount(1)">
                            <Icon name="bi:plus-square" color="#7D7D7D" size="18"/>
                        </button>
                    </div>

                    <button class="productCard__cart" v-if="card?.small">
                        <Icon name="bi:cart-plus" color="fff" size="24"/>
                    </button>
                </div>

                <div class="productCard__art"  v-if="card?.alt">
                    Арт. {{ card?.art }}
                </div>

                <NuxtLink :to="card?.catLink" class="productCard__cat">
                    {{ card?.cat }}
                </NuxtLink>

                <div class="productCard__old">
                    {{ card?.old }} сум/день
                </div>

                <div class="productCard__more">
                    <div class="productCard__new">
                        {{ card?.new }} <span>сум/день</span>
                    </div>

                    <div class="productCard__del" v-if="card?.alt == true && card?.small == false">
                        <button @click="deleteCart">Удалить</button>
                    </div>
                </div>

                <div class="productCard__extra" v-if="card.alt == false">
                    <div class="productCard__quant">
                        <button class="productCard__quant__down" @click="count > 0 ? doCount(-1) : false">
                            <Icon name="bi:dash-square" color="#7D7D7D" size="18"/>
                        </button>
                        <div class="productCard__quant__cur">
                            {{ count }}
                        </div>
                        <button class="productCard__quant__up" @click="doCount(1)">
                            <Icon name="bi:plus-square" color="#7D7D7D" size="18"/>
                        </button>
                    </div>

                    <button :class="count > 0 ? 'productCard__cart' : 'productCard__cart alt'" @click="addCart(card._id)">
                        <Icon name="bi:cart-plus" color="fff" size="24"/>
                    </button>
                </div>
            </div>
        </div>
    </div>
</template>

<style lang="scss">
@import '@/assets/styles/components/cards/product-card.scss';
</style>