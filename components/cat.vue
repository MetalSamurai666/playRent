<script setup>
    defineProps({
        cat: Object
    })
</script>

<template>
    <div class="cat">
        <div class="container">
            <div class="cat__box">
                <div class="cat__head" v-if="cat?.title">
                    <div class="cat__title">
                        {{ cat?.title }}

                        <div class="cat__label" v-if="cat?.label">
                            {{ cat?.label }}
                        </div>
                    </div>

                    

                    <div class="cat__link">
                        <NuxtLink :to="cat?.link">Все категории <span><Icon name="bi:arrow-right" color="#5A5A5A" size="15"/></span> </NuxtLink>
                    </div>
                </div>

                <div class="cat__body">
                    <ul class="cat__list" v-if="cat?.type === 'cat'">
                        <li class="item" v-for="item, idx of cat?.list" :key="idx">
                            <CardsCatCard  
                                :card="item"
                            />
                        </li>
                    </ul>
                    
                    <ul class="cat__list prdcts" v-else>
                        <li class="item" v-for="item, idx of cat?.list" :key="idx">
                            <CardsProductCard 
                                :card="item"
                            />
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
</template>

<style lang="scss">
@import '@/assets/styles/components/cat.scss';
</style>