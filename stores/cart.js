import { defineStore } from 'pinia'

export const useCartsStore = defineStore('cart', () => {
    const cart = useCookie('cart') || {}

    async function addCart (item) {
        cart.value = cart.value || {}

        let count = 0
        if (cart.value.hasOwnProperty(item._id)){
            count = cart.value[item._id].count
        }

        cart.value[item?._id] = {
            ...item,
            count: count + item?.count
        
        }
        console.log()
    }

    function changeCount(id, val) {
        console.log(id)
        console.log(cart.value[id])
        cart.value[id].count += val
        // if (cart.value[id].count == 0) {
        //     delete cart.value[id]
        // }
    }

    async function deleteObjectById(id) {
        const newArray = delete cart.value[id]
        
        console.log(newArray)
    }
    

    const getCart = () => {
        cart.value = cart.value || {}
        console.log(cart.value)
    }

    return { 
        getCart,
        addCart,
        cart,
        changeCount,
        deleteObjectById
    }
})