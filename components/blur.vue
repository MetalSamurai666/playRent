<script setup>
    const filterState = useState('filterState')
    const checkState = useState('checkState')
</script>

<template>
    <div :class="filterState ? 'blur show' : 'blur'"></div>
    <div :class="checkState ? 'blur show' : 'blur'"></div>
</template>

<style lang="scss">
.blur{
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    background: rgba(255, 255, 255, 0.10);
    backdrop-filter: blur(10px);
    z-index: 30;
    opacity: 0;
    z-index: -1;
    transition: .1s z-index, .5s linear opacity;
    filter: saturate(0.5);
    &.show{
        z-index: 30;
        opacity: 1;
    }
}
</style>