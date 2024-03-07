import { defineStore } from 'pinia'
const favCookie = useCookie('favCookie') || []

export const useFavStore = defineStore('fav', () => {
    const fav = ref([])

    const addFav = async (id) => {
        console.log(id)

        if (fav.value.includes(id)) {
            fav.value = fav.value.filter(item => item != id)
            favCookie.value = fav.value
            console.log(favCookie.value)
        } else {
            fav.value = [ ...fav.value, id ]
            favCookie.value = fav.value
            console.log(favCookie.value)
        }
    }

    return {
        fav,
        addFav
    }
})