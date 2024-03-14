import { defineStore } from 'pinia'

export const useFavStore = defineStore('fav', () => {
    const favCookie = useCookie('favCookie') || []
    const favs = ref([])

    // const fav = ref([])

    const addFav = async (id) => {
        favCookie.value = favCookie.value || []

        console.log(favCookie)
        console.log(id)

        let indx = favCookie.value.findIndex(val => val === id)

        console.log(indx)
        if (indx === -1) {
            
            favCookie.value = [ ...favCookie.value, id ]
        } else {
            favCookie.value.splice(indx, 1)
        }

        console.log(favCookie.value)

    }
    
    function getFavs() {
        favs.value = favCookie.value
    }

    return {
        favCookie,
        favs,
        addFav,
        getFavs
    }
})