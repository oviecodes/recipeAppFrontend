<template>
    <div>
        <Nav class="z-20" />
        <section>
            <div class="h-sreen w-full bg-cover" style="background: url(newFood.png)">
                <div class="bg-blue-800 w-full bg-opacity-50">
                    <div class="mx-auto flex h-screen w-full justify-center items-center">
                        <div class="font-montserrat w-full text-white mx-5 z-10">
                            <h1 class="font-pacifico hidden sm:block text-6xl mb-10">Recipee</h1>
                            <!-- <h1 class="text-4xl mb-10 font-raleway">Search for whatsoever recipe you want</h1> -->
                            <form @submit="getRecipes">
                                <input type="text" name="search" v-model="search" placeholder="Search Recipe" class="p-10 focus:outline-none w-4/5 sm:w-3/5 text-black">
                                <button class="p-5 cursor-pointer bg-green-400">
                                    <font-awesome-icon class="text-2xl" :icon="['fas', 'search']" />
                                </button>
                            </form>  
                        </div>
                        
                        <!-- <div v-if="loading" class="rounded-full absolute bottom-20 bg-blue-300 w-10 h-10">

                        </div> -->

                        <loading-progress class="absolute bottom-20" v-if="loading"
                            :progress="50"
                            :indeterminate='true'
                            :counter-clockwise="true"
                            :hide-background="false"
                            size="50"
                            rotate
                            fillDuration="2"
                            rotationDuration="1"
                        />
                    </div>

                    

                </div>
            </div>

            

        </section>

        <SearchResults />

    </div>
</template>

<script>
    import Nav from '@/components/Nav.vue'
    import SearchResults from '@/components/SearchResults.vue'
    import { mapActions } from 'vuex'
    export default {
        components: {
            Nav,
            SearchResults
        },
        
        data() {
            return {
                data : [],
                search: '',
                loading: false
            }
        },

        methods: {
            ...mapActions(['fetchSearchResult']),

            async getRecipes(e) {
                this.loading = true
                e.preventDefault()
                this.fetchSearchResult(this.search).then(result => {
                    result;
                    this.loading = false
                })
                // this.loading = false
            }
        },

        filters: {
            capitalize(word) {
                return word.toUpperCase()
            }
        },

        async mounted() {}
    }
</script>

<style scoped>

</style>