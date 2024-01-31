<script setup>
    const filterState = useState('filterState')

    const sort = ref('По популярности')
    const price = ref([0, 325000])

    watch(
        () => filterState.value,
        () => {
            if (filterState.value) {
                document.body.classList.add('noscroll')
            } else {
                document.body.classList.remove('noscroll')
            }
        }
    )
</script>

<template>
    <div :class="filterState ? 'filter show' : 'filter'">
        <div class="filter__box">
            <div class="filter__close">
                <button @click="filterState = false">
                    <Icon name="bi:x-lg" color="#5A5A5A"/>
                </button>
            </div>

            <div class="filter__list">
                <el-collapse >
                    <el-collapse-item name="1">
                        <template #title>
                            Сортировать
                            <span style="margin-left: auto;">{{ sort }}</span>
                        </template>
                        <el-radio-group v-model="sort">
                            <el-radio :label="'По популярности'">По популярности</el-radio>
                            <el-radio :label="'Цена: от низкой до высокой'">Цена: от низкой до высокой</el-radio>
                            <el-radio :label="'Цена: от высокой до низкой'">Цена: от высокой до низкой</el-radio>
                            <el-radio :label="'По алфавиту: от А до Я'">По алфавиту: от А до Я</el-radio>
                        </el-radio-group>
                    </el-collapse-item>

                    <el-collapse-item title="Feedback" name="2">
                        <template #title>
                            Цена
                            <span style="margin-left: auto;">{{ price[0] }} - {{ price[1] }}</span>
                        </template>
                        <div class="slider-demo-block" style="padding: 0px 15px;">
                            <el-slider v-model="price" range max="325000"/>
                        </div>
                    </el-collapse-item>
                </el-collapse>

                <el-checkbox v-model="discount" label="Только со скидкой" size="large" />

                <el-checkbox v-model="stock" label="В наличии" size="large" />
            </div>
        </div>
    </div>
</template>

<style lang="scss">
@import '@/assets/styles/components/filter.scss';
</style>