<script setup>
    const list = ref([
        {
            title: 'Сортировать'
        },
        {
            title: 'Цена'
        },
        {
            title: 'Скидки'
        },
        {
            title: 'В наличии'
        },
    ])


    const filterState = useState('filterState')
</script>

<template>
    <div class="heading">
        <div class="container">
            <div class="heading__box">
                <div class="heading__top">
                    <div class="heading__title">Мягкие игрушки</div>
                </div>
                
                <div class="heading__bot">
                    <div class="heading__left">
                        <ul class="heading__list">
                            <li class="item" v-for="item, idx of list" :key="idx">
                                <button class="item__box" @click="filterState = true">
                                    {{ item?.title }}
                                </button>
                            </li>
                        </ul>
                    </div>

                    <div class="heading__right">
                        <button class="heading__reset">Сбросить фильтры</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<style lang="scss">
@import '@/assets/styles/components/heading.scss';
</style>