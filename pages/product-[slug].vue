<script setup>
    const cats = ref({
        title: 'С этим товаром также заказывают',
        list: [
            {
                title: 'Малыш Мандалорец Грогу Плюш',
                link: '/ass',
                cat: 'Мягкая игрушка',
                catLink: '/sds',
                old: '19 763',
                new: '13 500',
                discount: '69',
                imgs: [
                    {
                        link: 'https://ih1.redbubble.net/image.3856719538.4264/st,small,507x507-pad,600x600,f8f8f8.u2.jpg'
                    },
                    {
                        link: 'https://ih1.redbubble.net/image.2968247867.2350/st,small,507x507-pad,600x600,f8f8f8.jpg'
                    },
                ]
            },
            {
                title: 'Малыш Мандалорец Грогу Плюш',
                link: '/ass',
                cat: 'Мягкая игрушка',
                catLink: '/sds',
                old: '19 763',
                new: '13 500',
                discount: '69',
                imgs: [
                    {
                        link: 'https://ih1.redbubble.net/image.3856719538.4264/st,small,507x507-pad,600x600,f8f8f8.u2.jpg'
                    },
                    {
                        link: 'https://ih1.redbubble.net/image.2968247867.2350/st,small,507x507-pad,600x600,f8f8f8.jpg'
                    },
                ]
            },
            {
                title: 'Малыш Мандалорец Грогу Плюш',
                link: '/ass',
                cat: 'Мягкая игрушка',
                catLink: '/sds',
                old: '19 763',
                new: '13 500',
                discount: '69',
                imgs: [
                    {
                        link: 'https://ih1.redbubble.net/image.3856719538.4264/st,small,507x507-pad,600x600,f8f8f8.u2.jpg'
                    },
                    {
                        link: 'https://ih1.redbubble.net/image.2968247867.2350/st,small,507x507-pad,600x600,f8f8f8.jpg'
                    },
                ]
            },
            {
                title: 'Малыш Мандалорец Грогу Плюш',
                link: '/ass',
                cat: 'Мягкая игрушка',
                catLink: '/sds',
                old: '19 763',
                new: '13 500',
                discount: '69',
                imgs: [
                    {
                        link: 'https://ih1.redbubble.net/image.3856719538.4264/st,small,507x507-pad,600x600,f8f8f8.u2.jpg'
                    },
                    {
                        link: 'https://ih1.redbubble.net/image.2968247867.2350/st,small,507x507-pad,600x600,f8f8f8.jpg'
                    },
                ]
            },
        ]
    })
</script>

<template>
    <div class="product">
        <Bread />
        <Overview />
        <Cat :cat="cats"/>
    </div>
</template>

<style>

</style>