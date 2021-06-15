<template>
    <div>
        <section>
            <div v-if="getSearchResults.length > 1">
                <h1 class="my-10 font-montserrat font-bold text-4xl">RESULTS</h1>
                <div class="sm:grid sm:grid-cols-3 gap-5 w-4/5 sm:w-3/5 my-5 mx-auto">
                    <div  class="mb-5 cursor-pointer" v-for="(item, i) in getSearchResults" :key="i">
                        <router-link :to='`/recipe/${item.recipe.label}`'>
                            <img :src='`${item.recipe.image}`' class="w-full" alt="">
                        </router-link>
                        
                        
                        <div class="p-5 shadow-lg">
                            <div class="flex space-x-4">
                                <button @click="addItemToBookmark(item.recipe)" class="click:text-yellow-400 rounded-full mb-5 h-10 bg-white w-10 flex justify-center items-center shadow-lg">
                                    <font-awesome-icon class="text-xl hover:text-yellow-400" :icon="['fas', 'bookmark']" /> 
                                </button>
                                <div class="rounded-full mb-5 h-10 bg-white w-10 flex justify-center items-center shadow-lg">
                                    <font-awesome-icon class="text-xl" :icon="['fas', 'share']" /> 
                                </div>
                            </div>
                            <router-link :to='`/recipe/${item.recipe.label}`'>
                                <h1 class="text-2xl font-bold font-montserrat mb-5">
                                    {{ item.recipe.label }}
                                </h1>
                            </router-link>
                            <div class="text-md font-raleway tracking-wide">
                                <p>
                                    {{ item.recipe.yield }} Servings | {{ item.recipe.ingredientLines.length }} Ingredients
                                </p>
                                <p v-if="item.recipe.totalTime > 0">
                                    <font-awesome-icon class="text-lg" :icon="['fas', 'clock']" /> {{ item.recipe.totalTime }} Minutes
                                </p> 
                            </div>
                        </div>
                        
                    </div>
                </div>
            </div>
        </section>
    </div>
</template>

<script>
    import { mapGetters } from 'vuex'
    export default {
        name: 'searchResult',
        data() {
            return {
                bookmarks: JSON.parse(window.localStorage.getItem('bookmarks'))
            }
        }, 
        methods: {
            // ...mapActions(['addBookmark']),

            async addItemToBookmark(item) {
                
                if(window.localStorage.getItem('userData')) {
                    const { label, ingredientLines, totaltime, image, source, yeild: servings, url } = item
                    let bookmarkItem
                    if(this.bookmarks.findIndex(recipe => recipe.label === item.label) === -1){
                        bookmarkItem = {
                            label,
                            ingredientLines,
                            totaltime,
                            image,
                            url,
                            source,
                            servings,
                            users_permissions_user: JSON.parse(window.localStorage.getItem('userData')).id
                        }
                        this.bookmarks.push(bookmarkItem)

                        //set to localstorage

                        window.localStorage.setItem('bookmarks', JSON.stringify(this.bookmarks))
                        await this.axios.post(`https://strapi-recipee-app.herokuapp.com/bookmarks`, {
                            ...bookmarkItem,
                        }, 
                        {
                            headers: {
                                Authorization: `Bearer ${window.localStorage.getItem('jwt')}`,
                            },
                        })

                        const res = await this.axios.get(`https://strapi-recipee-app.herokuapp.com/users/${bookmarkItem.users_permissions_user}`, {
                            headers: {
                                Authorization: `Bearer ${window.localStorage.getItem('jwt')}`,
                            }
                        })

                        const user  = res.data

                        window.localStorage.setItem('userData', JSON.stringify(user))
                        window.localStorage.setItem('bookmarks', JSON.stringify(user.bookmarks))
                    }
                } 
            }
        },
        computed: {
            ...mapGetters(['getSearchResults', 'getBookmarks'])
        }
    }
</script>

<style scoped>

</style>