<script setup>
    const popular = ref({
        title: 'Популярные категории',
        link: '',
        type: 'cat',
        list: [
            {
                title: 'Конструкторы',
                link: '/cat-const'
            },
            {
                title: 'Конструкторы',
                link: '/cat-dolls'
            },
            {
                title: 'Конструкторы',
                link: '/cat-cards'
            },
            {
                title: 'Конструкторы',
                link: '/'
            },
            {
                title: 'Конструкторы',
                link: '/'
            },
            {
                title: 'Конструкторы',
                link: '/'
            },
            {
                title: 'Конструкторы',
                link: '/'
            },
            {
                title: 'Конструкторы',
                link: '/'
            },
            {
                title: 'Конструкторы',
                link: '/'
            },
            {
                title: 'Конструкторы',
                link: '/'
            },
        ]
    })

    const discounts = ref({
        title: 'Скидки',
        label: '%',
        link: '',
        list: [
            {
                _id: 1,
                title: 'Малыш Мандалорец Грогу Плюш',
                link: '/',
                cat: 'Мягкая игрушка',
                catLink: '/sds',
                old: '19 763',
                new: '13 500',
                discount: '69',
                alt: false,
                fav: false,
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
                _id: 2,
                title: 'Малыш Мандалорец Грогу Плюш',
                link: '/',
                cat: 'Мягкая игрушка',
                catLink: '/sds',
                old: '19 763',
                new: '13 500',
                discount: '69',
                alt: false,
                fav: false,
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
                _id: 3,
                title: 'Малыш Мандалорец Грогу Плюш',
                link: '/',
                cat: 'Мягкая игрушка',
                catLink: '/sds',
                old: '19 763',
                new: '13 500',
                discount: '69',
                alt: false,
                fav: false,
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
                link: '/',
                cat: 'Мягкая игрушка',
                catLink: '/sds',
                old: '19 763',
                new: '13 500',
                discount: '69',
                alt: false,
                fav: false,
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

    const popular_prdcts = ref({
        title: 'Популярное',
        link: '',
        list: [
            {
                title: 'Малыш Мандалорец Грогу Плюш',
                link: '/',
                cat: 'Мягкая игрушка',
                catLink: '/sds',
                old: '19 763',
                new: '13 500',
                discount: '69',
                alt: false,
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
                link: '/',
                cat: 'Мягкая игрушка',
                catLink: '/sds',
                old: '19 763',
                new: '13 500',
                discount: '69',
                alt: false,
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
                link: '/',
                cat: 'Мягкая игрушка',
                catLink: '/sds',
                old: '19 763',
                new: '13 500',
                discount: '69',
                alt: false,
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
                link: '/',
                cat: 'Мягкая игрушка',
                catLink: '/sds',
                old: '19 763',
                new: '13 500',
                // discount: '69',
                alt: false,
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

    const stock = ref({
        title: 'Товары в наличии',
        link: '',
        list: [
            {
                title: 'Малыш Мандалорец Грогу Плюш',
                link: '/',
                cat: 'Мягкая игрушка',
                catLink: '/sds',
                old: '19 763',
                new: '13 500',
                discount: '69',
                alt: false,
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
                link: '/',
                cat: 'Мягкая игрушка',
                catLink: '/sds',
                old: '19 763',
                new: '13 500',
                discount: '69',
                alt: false,
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
                link: '/',
                cat: 'Мягкая игрушка',
                catLink: '/sds',
                old: '19 763',
                new: '13 500',
                discount: '69',
                alt: false,
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
                link: '/',
                cat: 'Мягкая игрушка',
                catLink: '/sds',
                old: '19 763',
                new: '13 500',
                discount: '69',
                alt: false,
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
                link: '/',
                cat: 'Мягкая игрушка',
                catLink: '/sds',
                old: '19 763',
                new: '13 500',
                discount: '69',
                alt: false,
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
                link: '/',
                cat: 'Мягкая игрушка',
                catLink: '/sds',
                old: '19 763',
                new: '13 500',
                discount: '69',
                alt: false,
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
                link: '/',
                cat: 'Мягкая игрушка',
                catLink: '/sds',
                old: '19 763',
                new: '13 500',
                discount: '69',
                alt: false,
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
                link: '/',
                cat: 'Мягкая игрушка',
                catLink: '/sds',
                old: '19 763',
                new: '13 500',
                discount: '69',
                alt: false,
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
    <div class="main">
        <Wrapper />
        <Cat 
            :cat="popular"
        />
        <Cat 
            :cat="discounts"
        />
        <Cat 
            :cat="stock"
        />
        <Cat 
            :cat="popular_prdcts"
        />
    </div>
</template>

<style lang="scss">
</style>