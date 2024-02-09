<script setup>
    defineProps({
        card: Object
    })
</script>

<template>
    <div class="cart-card">
        <div class="cart-card__box">
            <div class="cart-card__left">
                <div class="cart-card__img">
                    <img :src="card?.imgs[0].link">
                </div>
            </div>

            <div class="cart-card__right">
                <div class="cart-card__head">
                    <div class="cart-card__title">{{ card?.title }}</div>
                    <div class="cart-card__count" v-if="card.small == false">
                        <button class="cart-card__down">
                            <Icon name="bi:dash-square" color="#7D7D7D" size="18"/>
                        </button>
                        <div class="cart-card__cur">
                            0
                        </div>
                        <button class="cart-card__up">
                            <Icon name="bi:plus-square" color="#7D7D7D" size="18"/>
                        </button>
                    </div>

                    <div class="cart-card__add" v-if="card.small">
                        <button>
                            <Icon name="bi:cart-plus" color="fff" size="24"/>
                        </button>
                    </div>
                </div>

                <div class="cart-card__art">Арт. {{ card?.art }}</div>

                <div class="cart-card__cat">{{ card?.cat }}</div>

                <div class="cart-card__bot">
                    <div class="cart-card__price">{{ card?.new }}</div>

                    <button class="cart-card__delete">Удалить</button>
                </div>
            </div>
        </div>
    </div>
</template>


<style lang="scss">
@import '@/assets/styles/components/cards/cart-card.scss';
</style>