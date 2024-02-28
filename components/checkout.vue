<script setup>
    const state = useState('checkState', () => { return true })

    const confirm = ref(true)
</script>

<template>
    <div :class="state ? 'checkout show' : 'checkout'">
        <div class="checkout__box">
            <div class="checkout__close">
                <button @click="state = false">
                    <Icon name="bi:x-lg" color="#5A5A5A"/>
                </button>
            </div>

            <div class="checkout__first" v-if="confirm">
                <div class="checkout__title">Оформление заказа</div>

                <div class="checkout__group">
                    <div class="checkout__subtitle">Контактная информация</div>

                    <div class="checkout__input">
                        <input type="text" placeholder="Телефон*">
                    </div>
                    <div class="checkout__input">
                        <input type="text" placeholder="Email*">
                    </div>
                    <div class="checkout__input">
                        <input type="text" placeholder="Имя">
                    </div>
                </div>
                <div class="checkout__group">
                    <div class="checkout__subtitle">Контактная информация</div>

                    <div class="checkout__input">
                        <input type="text" placeholder="Город*">
                    </div>
                    <div class="checkout__input">
                        <input type="text" placeholder="Улица*">
                    </div>
                </div>

                <div class="checkout__row">
                    <div class="item">
                        <div class="item__top">Дом</div>
                        <div class="item__bot">
                            <input type="text">
                        </div>
                    </div>
                    <div class="item">
                        <div class="item__top">Подъезд</div>
                        <div class="item__bot">
                            <input type="text">
                        </div>
                    </div>
                    <div class="item">
                        <div class="item__top">Этаж</div>
                        <div class="item__bot">
                            <input type="text">
                        </div>
                    </div>
                    <div class="item">
                        <div class="item__top">Квартира</div>
                        <div class="item__bot">
                            <input type="text">
                        </div>
                    </div>
                </div>

                <div class="checkout__comment">
                    <div class="checkout__input">
                        <input type="text" placeholder="Комментарий к заказу">
                    </div>
                </div>

                <div class="checkout__info">
                    <div class="checkout__info__left">Курьерские услуги:</div>
                    <div class="checkout__info__rightt">15 000 сум</div>
                </div>
                <div class="checkout__info">
                    <div class="checkout__info__left">Сумма заказа:</div>
                    <div class="checkout__info__rightt">268 324 сум</div>
                </div>
                <div class="checkout__info big">
                    <div class="checkout__info__left">Итого:</div>
                    <div class="checkout__info__rightt">268 324 сум</div>
                </div>

                <el-checkbox class="checkout__offer" v-model="discount" label="Я подтверждаю, что ознакомилися и согласен с условиями Доставки и Оплаты" size="large" />

                <div class="checkout__apply">
                    <button @click="confirm = false">Заказ</button>
                </div>
            </div>

            <div class="checkout__second" v-else>
                <div class="checkout__title green">Заказ успешно оформлен</div>

                <div class="checkout__info">С вами свяжется менеджер для подтверждения информации</div>

                <button class="checkout__cont">
                    Продолжить покупки
                </button>

                <div class="checkout__img">
                    <img src="/check/hum.png">
                </div>
            </div>
        </div>
    </div>
</template>

<style lang="scss">
@import '@/assets/styles/components/checkout.scss';
</style>