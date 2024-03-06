<script setup>
    // const cart = ref([
    //     {
    //         title: 'Хэппи Нурбек',
    //         link: '/product-1',
    //         cat: 'Мягкая игрушка',
    //         catLink: '/sds',
    //         old: '19 763',
    //         new: '13 500',
    //         discount: '69',
    //         art: '890.321.44',
    //         alt: true,
    //         small: false, 
    //         imgs: [
    //             {
    //                 link: 'https://ih1.redbubble.net/image.3856719538.4264/st,small,507x507-pad,600x600,f8f8f8.u2.jpg'
    //             },
    //             {
    //                 link: 'https://ih1.redbubble.net/image.2968247867.2350/st,small,507x507-pad,600x600,f8f8f8.jpg'
    //             },
    //         ]
    //     },
    //     {
    //         title: 'Хэппи Нурбек',
    //         link: '/product-1',
    //         cat: 'Мягкая игрушка',
    //         catLink: '/sds',
    //         old: '19 763',
    //         new: '13 500',
    //         discount: '69',
    //         art: '890.321.44',
    //         alt: true,
    //         small: false,
    //         imgs: [
    //             {
    //                 link: 'https://ih1.redbubble.net/image.2968247867.2350/st,small,507x507-pad,600x600,f8f8f8.jpg'
    //             },
    //             {
    //                 link: 'https://ih1.redbubble.net/image.3856719538.4264/st,small,507x507-pad,600x600,f8f8f8.u2.jpg'
    //             },
    //         ]
    //     },
    //     {
    //         title: 'Хэппи Нурбек',
    //         link: '/product-1',
    //         cat: 'Мягкая игрушка',
    //         catLink: '/sds',
    //         old: '19 763',
    //         new: '13 500',
    //         discount: '69',
    //         art: '890.321.44',
    //         alt: true,
    //         small: false, 
    //         imgs: [
    //             {
    //                 link: 'https://ih1.redbubble.net/image.3856719538.4264/st,small,507x507-pad,600x600,f8f8f8.u2.jpg'
    //             },
    //             {
    //                 link: 'https://ih1.redbubble.net/image.2968247867.2350/st,small,507x507-pad,600x600,f8f8f8.jpg'
    //             },
    //         ]
    //     },
    //     {
    //         title: 'Хэппи Нурбек',
    //         link: '/product-1',
    //         cat: 'Мягкая игрушка',
    //         catLink: '/sds',
    //         old: '19 763',
    //         new: '13 500',
    //         discount: '69',
    //         art: '890.321.44',
    //         alt: true,
    //         small: false,
    //         imgs: [
    //             {
    //                 link: 'https://ih1.redbubble.net/image.2968247867.2350/st,small,507x507-pad,600x600,f8f8f8.jpg'
    //             },
    //             {
    //                 link: 'https://ih1.redbubble.net/image.3856719538.4264/st,small,507x507-pad,600x600,f8f8f8.u2.jpg'
    //             },
    //         ]
    //     },
    // ])

    const subcart = ref([
        {
            title: 'Хэппи Нурбек',
            link: '/product-1',
            cat: 'Мягкая игрушка',
            catLink: '/sds',
            old: '19 763',
            new: '13 500',
            discount: '69',
            art: '890.321.44',
            alt: true,
            small: true, 
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
            title: 'Хэппи Нурбек',
            link: '/product-1',
            cat: 'Мягкая игрушка',
            catLink: '/sds',
            old: '19 763',
            new: '13 500',
            discount: '69',
            art: '890.321.44',
            alt: true,
            small: true,
            imgs: [
                {
                    link: 'https://ih1.redbubble.net/image.2968247867.2350/st,small,507x507-pad,600x600,f8f8f8.jpg'
                },
                {
                    link: 'https://ih1.redbubble.net/image.3856719538.4264/st,small,507x507-pad,600x600,f8f8f8.u2.jpg'
                },
            ]
        },
        {
            title: 'Хэппи Нурбек',
            link: '/product-1',
            cat: 'Мягкая игрушка',
            catLink: '/sds',
            old: '19 763',
            new: '13 500',
            discount: '69',
            art: '890.321.44',
            alt: true,
            small: true, 
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
            title: 'Хэппи Нурбек',
            link: '/product-1',
            cat: 'Мягкая игрушка',
            catLink: '/sds',
            old: '19 763',
            new: '13 500',
            discount: '69',
            art: '890.321.44',
            alt: true,
            small: true,
            imgs: [
                {
                    link: 'https://ih1.redbubble.net/image.2968247867.2350/st,small,507x507-pad,600x600,f8f8f8.jpg'
                },
                {
                    link: 'https://ih1.redbubble.net/image.3856719538.4264/st,small,507x507-pad,600x600,f8f8f8.u2.jpg'
                },
            ]
        },
    ])
</script>

<template>
    <div class="cart">
        <CartView 
            :cart="cart"
            :subcart="subcart"
        />
    </div>
</template>

<style lang="scss">
</style>