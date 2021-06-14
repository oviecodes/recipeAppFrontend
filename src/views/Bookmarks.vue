

<template>
    <div>
        <Nav />
        <section>
            <div v-if="bookmarks.length > 0">
                <h1 class="mt-32 mb-4 font-montserrat font-bold text-4xl">Bookmarks</h1>
                <div class="sm:grid sm:grid-cols-3 gap-5 w-4/5 sm:w-3/5 my-5 mx-auto">
                    <div  class="mb-5 cursor-pointer" v-for="(item, i) in bookmarks" :key="i">
                        <router-link :to='`/bookmark/${item.label}`'>
                            <img :src='`${item.image}`' class="w-full" alt="">
                        </router-link>
                        
                        
                        <div class="p-5 shadow-lg">
                            <div class="flex space-x-4">
                                <button @click="removeItemFromBookmarks(item)" class="click:text-yellow-400 rounded-full mb-5 h-10 bg-white w-10 flex justify-center items-center shadow-lg">
                                    <font-awesome-icon class="text-xl hover:text-yellow-400" :icon="['fas', 'trash']" /> 
                                </button>
                                <div class="rounded-full mb-5 h-10 bg-white w-10 flex justify-center items-center shadow-lg">
                                    <font-awesome-icon class="text-xl" :icon="['fas', 'share']" /> 
                                </div>
                            </div>
                            <router-link :to='`/bookmark/${item.label}`'>
                                <h1 class="text-2xl font-bold font-montserrat mb-5">
                                    {{ item.label }}
                                </h1>
                            </router-link>
                            <div class="text-md font-raleway tracking-wide">
                                <p>
                                    {{ item.servings }} Servings | {{ item.ingredientLines.length }} Ingredients
                                </p>
                                <p v-if="item.totalTime > 0">
                                    <font-awesome-icon class="text-lg" :icon="['fas', 'clock']" /> {{ item.totalTime }} Minutes
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
    // import { mapGetters } from 'vuex';
    import Nav from '@/components/Nav.vue'
    export default {
        components: {
            Nav
        },

        data() {
            return {
                bookmarks: []
            }
        },

        // computed: {
        //     ...mapGetters(['getBookmarks'])
        // },

        methods: {
            async removeItemFromBookmarks(item) {
                const itemIndex = this.bookmarks.findIndex(bookmarkItem => bookmarkItem.label === item.label)
                // console.log(itemIndex)
                this.bookmarks.splice(itemIndex, 1)
                window.localStorage.setItem('bookmarks', JSON.stringify(this.bookmarks))
                await this.axios.delete(`http://localhost:1337/bookmarks/${item.id}`, {
                    headers: {
                        Authorization: `Bearer ${window.localStorage.getItem('jwt')}`,
                    },
                })
            }
        },

        created() {
            this.bookmarks = JSON.parse(window.localStorage.getItem('bookmarks'))
        }
    }
</script>

<style scoped>

</style>