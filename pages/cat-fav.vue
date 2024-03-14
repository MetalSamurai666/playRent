<script setup>
    const favCookie = useCookie('favCookie') || []

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
                _id: 4,
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

    const ids = favCookie.value.filter(item => !discounts.value.list.includes(item));

    const xuy = ref([])
    const cats = discounts.value.list.map(item => {
        ids.forEach(item2 => {
            if (item._id == item2) {
                console.log(item._id, item2)
                xuy.value.push(item)
            }
        })
    })
    console.log(cats)

</script>

<template>
    <div class="cat">
        <Bread />
        <Heading />
        {{ favCookie }}
        <Cat :cat="{
            title: 'Скидки',
            label: '%',
            link: '',
            list: xuy}
        "/>
    </div>
</template>

<style lang="scss">
</style>f