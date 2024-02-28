<script setup>
    defineProps({
        cart: Array,
        subcart: Array
    })

    const checkState = useState('checkState')

    // const cart = useState('cart', () => [])
</script>

<template>
    <div class="cart-view">
        <div class="container">
            <div class="cart-view__box">
                <!-- ======================================================= -->
                <!-- Left Section -->
                <!-- ======================================================= -->
                <div class="cart-view__left">
                    <div class="cart-view__head">
                        <div class="cart-view__title">Корзина</div>
                        <NuxtLink to="/" class="cart-view__more">Добавить товар по артикулу</NuxtLink>
                    </div>

                    <div class="cart-view__body">
                        <div class="cart-view__empty" v-if="cart.length === 0">
                            <div class="cart-view__empty__title">
                                Добавьте товары в корзину, чтобы оформить заказ
                            </div>

                            <div class="cart-view__empty__img">
                                <img src="/cart/empty.png">
                            </div>
                        </div>

                        <ul class="cart-view__list" v-else>
                            <li class="item" 
                                v-for="item of cart" 
                                :key="item?._id"
                            >
                                <CardsProductCard 
                                    :card="item"
                                />
                            </li>
                        </ul>

                        <div class="cart-view__promo">
                            <div class="cart-view__promo__title">ПРОМОКОД</div>

                            <div class="cart-view__promo__input">
                                <input type="text">
                            </div>
                            
                            <button class="cart-view__promo__apply">Применить</button>
                        </div>

                        <div class="cart-view__overall">Общая сумма: 101 999 сум</div>

                        <div class="cart-view__final">
                            <button class="cart-view__final__clear">Очистить корзину</button>

                            <button class="cart-view__final__buy" @click="checkState = true">Оформить заказ</button>
                        </div>
                    </div>
                </div>
                <!-- ======================================================= -->
                <!-- Right Section -->
                <!-- ======================================================= -->
                <div class="cart-view__right">
                    <div class="cart-view__subtitle">Товары на основе ваших предпочтений</div>

                    <ul class="cart-view__sublist">
                        <li class="item" v-for="item of subcart" :key="item?._id">
                            <CardsProductCard 
                                :card="item"
                                class="small"
                            />
                        </li>
                    </ul>

                    <NuxtLink to="/" class="cart-view__all">
                        <Icon name="bi:arrow-left" size="15"/>
                        <span>Все результаты</span>
                    </NuxtLink>
                </div>
            </div>
        </div>
    </div>
</template>

<style lang="scss">
@import '@/assets/styles/components/cart-view.scss';
</style>